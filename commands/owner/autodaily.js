const fs = require('fs');
const path = require('path');

const configFile = path.join(__dirname, '../../data/autoDaily.json');

function getConfig() {
    if (!fs.existsSync(configFile)) {
        fs.writeFileSync(configFile, JSON.stringify({ enabled: false, lastSent: {} }));
        return { enabled: false, lastSent: {} };
    }
    try {
        return JSON.parse(fs.readFileSync(configFile, 'utf8'));
    } catch {
        return { enabled: false, lastSent: {} };
    }
}

function saveConfig(data) {
    fs.writeFileSync(configFile, JSON.stringify(data, null, 2));
}

// ============================================
// 📋 MESSAGE LISTS (LOTS OF MESSAGES)
// ============================================

const morningMsgs = [
    "Uth gaye? Main toh soch rahi thi ki aaj subah kaun utha hai 😊",
    "Good morning! Aaj main fresh feel kar rahi hu, umeed hai tum sab bhi ho",
    "Subah ki chai aur group mein message, kya mast combination hai na",
    "Maine aaj subah socha ki sab ko yaad karun, toh yahan aa gayi",
    "Subah ho gayi, utho utho! Aaj ka din tumhara hai, main bhi saath hu",
    "Mera aaj ka plan: fresh hona, chai pi na, aur group mein active rehna",
    "Good morning! Aaj main bahut excited hu, pata nahi kyun",
    "Subah ki pehli smile tum sab ko dedi, ab tum log bhi smile karo",
    "Mujhe aaj subah bahut achha laga, lagta hai aaj ka din special hoga",
    "Main soch rahi hu ki aaj kuch naya karun, but abhi subah hai, soch hi rahi hu",
    "Utho ji utho! Suraj nikla hai, aapko dekhne ke liye 🌅",
    "Aaj ki shuruaat mast karo, positivity lekar aao"
];

const lunchMsgs = [
    "Lunch time! Mujhe toh khana bahut pasand hai, tum log kya kha rahe ho",
    "Dopahar ho gayi, mera pet toh bol raha hai ki kuch khao 😄",
    "Main soch rahi hu ki aaj kya khaun, koi suggestion hai kya",
    "Lunch break! Meri favourite activity hai ye, tum log bhi enjoy karo",
    "Khana khao yaar, phir energy aaegi, main bhi khane ja rahi hu",
    "Mujhe aaj bahut bhook lagi hai, lagta hai main kuch bada khaungi",
    "Lunch karke aao, phir group mein active ho jao, main wait kar rahi hu",
    "Dopahar mein khana khao, main tum sab ka wait kar rahi hu",
    "Main soch rahi hu ki aaj kuch healthy khaun, but pizza dekh ke mann badal gaya",
    "Lunch time! Mera pet khush ho raha hai, tum log bhi khao",
    "🍽️ Khana khao, pet bharo, phir group mein active ho jao",
    "Bhook lagi? Khana khao, lunch break lo!"
];

const eveningMsgs = [
    "Shaam ho gayi, main soch rahi hu ki chai piyun, tum log kya kar rahe ho",
    "Evening ho gayi, mera mood thoda relax ho gaya, tum log bhi relax karo",
    "Aaj ki shaam bahut special hai, main bas group mein baat karna chahti hu",
    "Mera aaj ka kaam ho gaya, ab main bas group mein time spend karungi",
    "Shaam ki chai aur group chat, kya baat hai",
    "Main soch rahi hu ki aaj kuch funny karein, thoda entertainment ho jaye",
    "Mera mood aaj evening mein bahut achha hai, koi mujhse baat karo",
    "Main bas soch rahi hu ki kya kisi ko mujhse baat karni hai, kyunki main ready hu",
    "Aaj ka din thoda lamba lag raha tha, lekin ab shaam ho gayi, thoda relax",
    "Evening mein main active hu, agar kisi ko kuch chahiye toh batao",
    "☕ Chai ki chuski aur friends ke sath group chat. Kya baat!",
    "Shaam ki masti, chai aur group chat. Best combo!"
];

const dinnerMsgs = [
    "Dinner time! Mera pet bol raha hai ki kuch khao, tum log bhi khao",
    "Main soch rahi hu ki aaj raat ko kya khaun, koi suggestion hai kya",
    "Raat ka khana zaroori hai, main toh khaungi, tum log bhi khao",
    "Dinner karke aao, phir group mein active ho jao, main wait kar rahi hu",
    "Mera dinner ho gaya, ab main group mein time spend karungi",
    "Aaj ka din kaisa raha? Mujhe toh bahut achha laga, tum log batao",
    "Main soch rahi hu ki aaj raat ko kuch special khaun, but abhi decide nahi kar pa rahi",
    "Dinner time! Mera pet khush ho raha hai, tum log bhi enjoy karo",
    "Raat ka khana khao, phir aaram karo, main bhi same kar rahi hu",
    "Main toh dinner kar liya, ab main group mein active hu",
    "🍛 Dinner ki plate aur group mein active rehna. Dono sath mein!",
    "Khana khao, pet bharo, aur phir raat bhar group mein gaadi chalao 😄"
];

const nightMsgs = [
    "Raat ho gayi, main soch rahi hu ki so jaun, but group mein baat karna hai abhi",
    "Good night! Kal naya din hai, main soch rahi hu ki kya hoga",
    "So jao yaar, kal subah uthna hai, main bhi so rahi hu",
    "Mujhe neend aa rahi hai, lekin group mein baat karna hai, kya karun 😂",
    "Raat ke time main thoda emotional ho jaati hu, but good night sabko",
    "Main soch rahi hu ki aaj raat ko kuch soch kar soya jaaye, but abhi soch hi rahi hu",
    "Good night! Aaj ka din achha tha, kal aur achha hoga",
    "Raat ho gayi, so jao, main bhi so rahi hu, kal baat karenge",
    "Mera phone abhi slow ho gaya hai, lagta hai main bhi so jaun",
    "Good night! Sapno mein milte hain 😴",
    "🌙 So jao ab, kal bahut kaam hai. Sweet dreams!",
    "GN! Aaj ka din shandar tha, kal aur shandar hoga"
];

const funnyMsgs = [
    "Sab busy ho kya? Thoda toh reply karo warna main sochungi ki sab mujhse naraaz hain",
    "Aaj mood bahut off hai, koi mujhe chocolate bhej sakta hai kya?",
    "Mera aaj ka plan: kuch nahi, bas group mein active rehna hai 😂",
    "Aaj itna kaam hai ki main soch rahi hu ki ghar se bhaag jaun",
    "Koi mujhe batao ki aaj ka special kya hai? Kyunki mujhe kuch nahi pata",
    "Mere pet mein aaj bhoot hai, kaun samjhaega mujhe?",
    "Aaj main heroine banne ka mood hai, sab mujhe compliment do 😄",
    "Itni garmi hai ki main bas AC ke saamne baithi hu aur group scroll kar rahi hu",
    "Mujhe lagta hai aaj main kuch gadbad kar dungi, beware!",
    "Sab log kaam kar rahe hain aur main yahan bore ho rahi hu",
    "Aaj main apna favorite dress pehni hai, but kisi ne notice nahi kiya 🙄",
    "Mera dimaag aaj full off hai, koi mujhe restart karo 😂",
    "Aaj main healthy khane ka soch rahi thi, but samosa dekh ke sab bhool gayi",
    "Kya kisi ko mujhse baat karne ka mann hai? Kyunki mujhe bahut baat karni hai",
    "Main soch rahi hu ki aaj group mein kuch drama karein, thoda entertainment ho jaye",
    "Itna silent group, lagta hai sab log mere baare mein discuss kar rahe hain 😂",
    "Aaj main thoda emotional hu, koi mujhe hug nahi karega kya?",
    "Mera phone aaj bohot slow hai, lagta hai mujhe naya lena padega",
    "Main aaj khud ko bahut special feel kar rahi hu, pata nahi kyun",
    "Kya aaj koi mera favourite song recommend karega? Mujhe sunna hai",
    "Group mein itna silent kyun hai? Koi toh gossip karo, main ready hu",
    "Aaj main thoda moody hu, mujhe ignore mat karna warna main naraaz ho jaungi",
    "Mera aaj ka goal: group mein sab ko hasaana, but mein khud has rahi hu 😂",
    "😆 Kya haal hai sabke? Group mein toh masti chal rahi hai!",
    "🤣 Aaj koi funny joke sunao, bore ho raha hu.",
    "😜 Group mein itna silent kyu hai? Koi toh boloo!",
    "😂 Kya koi active hai? Thoda reply karo, warna main so jaunga.",
    "🤪 Mera dimaag kharab ho gaya hai aaj, kaam ka kuch mann nahi!"
];

// ============================================
// 📋 COMMAND
// ============================================
module.exports = {
    name: 'autodaily',
    aliases: ['ad'],
    category: 'owner',
    desc: 'Enable/disable auto daily messages (GM, lunch, GN, funny every 40 min)',
    usage: 'autodaily on/off',
    ownerOnly: true,
    async execute(sock, msg, args, extra) {
        const action = args[0]?.toLowerCase();
        const config = getConfig();

        if (!action) {
            return extra.reply(`📌 *Auto Daily*\nStatus: ${config.enabled ? '✅ ON' : '❌ OFF'}`);
        }

        if (action === 'on') {
            config.enabled = true;
            saveConfig(config);

            // Send test message to one group
            let testSent = '⚠️ No group found';
            try {
                const groups = await sock.groupFetchAllParticipating();
                const list = Object.values(groups);
                if (list.length > 0) {
                    const rand = list[Math.floor(Math.random() * list.length)];
                    await sock.sendMessage(rand.id, {
                        text: `🧪 *Auto Daily Active* ✅\n\nBot ab active hai!\n\n📅 Messages aayenge:\n🌅 7 AM - Morning\n🍽️ 12 PM - Lunch\n☕ 4 PM - Evening\n🍛 8 PM - Dinner\n🌙 11 PM - Good Night\n\n😂 Funny messages har 40 minute mein *har group mein* aayenge!`
                    });
                    testSent = `✅ Test message sent to *${rand.subject}*`;
                }
            } catch (e) {
                testSent = '⚠️ Could not send test message';
            }

            startScheduler(sock);
            return extra.reply(`✅ Auto daily enabled.\n${testSent}`);
        }

        if (action === 'off') {
            config.enabled = false;
            saveConfig(config);
            return extra.reply('❌ Auto daily disabled.');
        }

        return extra.reply('Usage: .autodaily on / off');
    }
};

// ============================================
// 🕐 SCHEDULER
// ============================================
let schedulerStarted = false;
const funnyCooldown = new Map();

function startScheduler(sock) {
    if (schedulerStarted) return;
    schedulerStarted = true;
    console.log('🚀 AutoDaily scheduler started');

    // 1. Fixed slots (check every minute)
    setInterval(async () => {
        const config = getConfig();
        if (!config.enabled) return;

        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        if (m !== 0) return;

        let slot = null, msgs = null;
        if (h >= 7 && h < 8) { slot = 'morning'; msgs = morningMsgs; }
        else if (h >= 12 && h < 13) { slot = 'lunch'; msgs = lunchMsgs; }
        else if (h >= 16 && h < 17) { slot = 'evening'; msgs = eveningMsgs; }
        else if (h >= 20 && h < 21) { slot = 'dinner'; msgs = dinnerMsgs; }
        else if (h === 23) { slot = 'night'; msgs = nightMsgs; }
        else return;

        try {
            const groups = await sock.groupFetchAllParticipating();
            const list = Object.values(groups);
            const today = new Date().toDateString();

            for (const g of list) {
                const key = `${g.id}_${slot}_${today}`;
                if (config.lastSent && config.lastSent[key]) continue;

                const msg = msgs[Math.floor(Math.random() * msgs.length)];
                await sock.sendMessage(g.id, { text: msg });
                console.log(`✅ ${slot} sent to ${g.subject}`);
                config.lastSent = config.lastSent || {};
                config.lastSent[key] = true;
                saveConfig(config);
                await new Promise(r => setTimeout(r, 2000));
            }
        } catch (e) {
            console.error('Scheduler error:', e.message);
        }
    }, 60000);

    // 2. Funny messages – EVERY 40 MINUTES, ALL GROUPS
    setInterval(async () => {
        const config = getConfig();
        if (!config.enabled) return;

        try {
            const groups = await sock.groupFetchAllParticipating();
            const list = Object.values(groups);
            if (list.length === 0) return;

            for (const g of list) {
                const last = funnyCooldown.get(g.id) || 0;
                if (Date.now() - last < 30 * 60 * 1000) continue;

                const msg = funnyMsgs[Math.floor(Math.random() * funnyMsgs.length)];
                await sock.sendMessage(g.id, { text: msg });
                console.log(`😂 Funny sent to ${g.subject}`);
                funnyCooldown.set(g.id, Date.now());
                await new Promise(r => setTimeout(r, 1500));
            }
        } catch (e) {
            console.error('Funny error:', e.message);
        }
    }, 40 * 60 * 1000); // 40 minutes
}

module.exports.startAutoDaily = startScheduler;
