/**
 * Fyt Command - Admin only, reads Fyt.txt and sends insults to multiple targets in loop
 */

const fs = require('fs');
const path = require('path');

// Store config per group: { targets, interval, targetIndex, messageIndex, intervalId, messages }
const groupConfig = new Map();

// Default messages (if Fyt.txt not found)
const defaultMessages = [
    "tu toh aisa lagta hai jaise dimaag kharidne gaya tha aur salesman ne return kar diya",
    "tere baare mein sochta hu toh lagta hai nature ne tujhpe meherbani ki hai... aadha dimaag dekar",
    "tu itna smart hai ki tere paas Google bhi sharm se puchhta hai",
    "tere jaisa insaan agar mere group mein hai toh mujhe pata hai ki meri zindagi mein kuch kami hai... patience",
    "tu itna talented hai ki tu fail bhi unique style mein hota hai",
    "tere dimaag mein jo chal raha hai, uska roadmap banane ke liye NASA ka budget chahiye",
    "tu itna special hai ki tere liye common sense bhi uncommon hai",
    "agar dimaag ki race hoti toh tu wheelchair mein bhi last aata",
    "tu itna slow hai ki teri speed ko dekh kar snail bhi sorry feel kare",
    "tere andar jo talent hai... wo talent ka opposite hai"
];

// ============================================
// 📄 Read Fyt.txt file
// ============================================
function getMessages() {
    const filePath = path.join(__dirname, '../../Fyt.txt');
    try {
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);
            if (lines.length > 0) return lines;
        }
    } catch (e) {
        console.error('Fyt.txt read error:', e.message);
    }
    return defaultMessages;
}

// ============================================
// 📤 Send message to group
// ============================================
async function sendFytMessage(sock, groupId, target, message) {
    try {
        const finalMsg = `@${target.split('@')[0]} ${message}`;
        await sock.sendMessage(groupId, {
            text: finalMsg,
            mentions: [target]
        });
        console.log(`✅ Fyt sent to ${target} in ${groupId}`);
        return true;
    } catch (error) {
        console.error('Fyt send error:', error.message);
        return false;
    }
}

// ============================================
// 🔄 Start/Update loop for a group
// ============================================
function startLoop(sock, groupId) {
    const config = groupConfig.get(groupId);
    if (!config) return;

    // Clear existing interval
    if (config.intervalId) {
        clearInterval(config.intervalId);
        config.intervalId = null;
    }

    // If no targets or no interval, stop
    if (!config.targets || config.targets.length === 0 || !config.interval || config.interval < 1) {
        console.log(`⏹️ Fyt loop stopped for ${groupId} (no targets/interval)`);
        return;
    }

    const messages = config.messages || getMessages();
    if (messages.length === 0) {
        console.log(`⚠️ No messages for ${groupId}`);
        return;
    }

    // Reset targetIndex if it's out of bounds
    if (config.targetIndex >= config.targets.length) {
        config.targetIndex = 0;
    }

    console.log(`▶️ Fyt loop started for ${groupId}: targets=${config.targets.map(t => t.split('@')[0]).join(', ')}, interval=${config.interval}s`);

    // Send first message immediately
    const target = config.targets[config.targetIndex % config.targets.length];
    const msg = messages[config.messageIndex % messages.length];
    sendFytMessage(sock, groupId, target, msg);
    config.targetIndex = (config.targetIndex + 1) % config.targets.length;
    config.messageIndex = (config.messageIndex + 1) % messages.length;

    // Start interval
    config.intervalId = setInterval(async () => {
        const currentConfig = groupConfig.get(groupId);
        if (!currentConfig || !currentConfig.targets || currentConfig.targets.length === 0) {
            clearInterval(currentConfig?.intervalId);
            return;
        }

        const msgs = currentConfig.messages || getMessages();
        if (msgs.length === 0) return;

        // Get next target
        const nextTarget = currentConfig.targets[currentConfig.targetIndex % currentConfig.targets.length];
        const nextMsg = msgs[currentConfig.messageIndex % msgs.length];

        await sendFytMessage(sock, groupId, nextTarget, nextMsg);

        // Advance indices
        currentConfig.targetIndex = (currentConfig.targetIndex + 1) % currentConfig.targets.length;
        currentConfig.messageIndex = (currentConfig.messageIndex + 1) % msgs.length;
        groupConfig.set(groupId, currentConfig);
    }, config.interval * 1000);
}

// ============================================
// 📋 COMMAND
// ============================================
module.exports = {
    name: 'fyt',
    aliases: ['fytcmd'],
    category: 'admin',
    description: 'Send insults to multiple targets in loop (admin only)',
    usage: '.fyt @user1 @user2 ... | .fyt time <seconds> | .fyt stop | .fyt',
    groupOnly: true,
    adminOnly: true,
    ownerOnly: false,
    botAdminNeeded: false,

    async execute(sock, msg, args, extra) {
        try {
            const from = extra.from;
            const sender = msg.key.participant || msg.key.remoteJid;
            const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

            // Check if user is admin or owner
            const isSenderAdmin = await extra.isAdmin;
            const isSenderOwner = extra.isOwner;
            if (!isSenderAdmin && !isSenderOwner) {
                return extra.reply('🛡️ Only group admins can use this command.');
            }

            // Initialize config for this group
            if (!groupConfig.has(from)) {
                groupConfig.set(from, {
                    targets: [],           // list of target JIDs
                    interval: 10,          // default 10 seconds
                    targetIndex: 0,        // next target index
                    messageIndex: 0,       // next message index
                    intervalId: null,
                    messages: getMessages()
                });
            }

            const config = groupConfig.get(from);

            // ---------- Stop command ----------
            if (args[0] && args[0].toLowerCase() === 'stop') {
                if (config.intervalId) {
                    clearInterval(config.intervalId);
                    config.intervalId = null;
                }
                config.targets = [];
                config.targetIndex = 0;
                config.messageIndex = 0;
                groupConfig.set(from, config);
                return extra.reply('⏹️ Fyt loop stopped.');
            }

            // ---------- Time set command ----------
            if (args[0] && args[0].toLowerCase() === 'time') {
                const timeArg = parseInt(args[1]);
                if (!timeArg || timeArg < 1) {
                    return extra.reply('❌ Please provide valid seconds: .fyt time <seconds>');
                }
                if (timeArg > 300) {
                    return extra.reply('❌ Max 300 seconds (5 minutes).');
                }
                config.interval = timeArg;
                groupConfig.set(from, config);

                // Restart loop with new interval if targets exist
                if (config.targets && config.targets.length > 0) {
                    startLoop(sock, from);
                }
                return extra.reply(`⏱️ Interval set to ${timeArg} seconds.`);
            }

            // ---------- Set targets (if someone mentioned) ----------
            if (mentioned.length > 0) {
                const botId = sock.user.id;
                const validTargets = [];

                for (const target of mentioned) {
                    // Skip bot itself
                    if (target === botId || target.split(':')[0] === botId.split(':')[0]) {
                        continue; // skip bot
                    }
                    // Skip self
                    if (target === sender) {
                        continue; // skip self
                    }
                    validTargets.push(target);
                }

                if (validTargets.length === 0) {
                    return extra.reply('❌ No valid targets! (self or bot not allowed)');
                }

                config.targets = validTargets;
                config.targetIndex = 0;
                config.messageIndex = 0;
                groupConfig.set(from, config);

                // Start loop
                startLoop(sock, from);

                const targetNames = validTargets.map(t => `@${t.split('@')[0]}`).join(', ');
                const msgCount = config.messages.length || getMessages().length;
                return extra.reply(`🎯 Targets set: ${targetNames}\n⏱️ Interval: ${config.interval}s\n📝 Total messages: ${msgCount}\n✅ Loop started!`);
            }

            // ---------- Show status ----------
            const targetList = config.targets.length > 0 
                ? config.targets.map(t => `@${t.split('@')[0]}`).join(', ') 
                : '❌ No targets';
            const intervalStatus = `⏱️ Interval: ${config.interval}s`;
            const loopStatus = config.intervalId ? '🟢 Running' : '🔴 Stopped';
            const msgCount = config.messages.length || getMessages().length;

            return extra.reply(
                `📌 *Fyt Status*\n\n` +
                `Targets: ${targetList}\n` +
                `${intervalStatus}\n` +
                `Loop: ${loopStatus}\n` +
                `Messages: ${msgCount}\n\n` +
                `Usage:\n` +
                `• .fyt @user1 @user2 ... - Set targets\n` +
                `• .fyt time <seconds> - Set interval\n` +
                `• .fyt stop - Stop loop\n` +
                `• .fyt - Show status`
            );

        } catch (error) {
            console.error('Fyt error:', error);
            await extra.reply(`❌ Error: ${error.message}`);
        }
    }
};
