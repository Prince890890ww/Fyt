/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['584163433160'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SUP BOT',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVmgZEPqzqqkUaRVsRET/orX0IJGAUw0cCglP+9y3s6el52J3tfQuX1LnnnnNuvgOaEYZfcQtG30Fekhpy3B15m2MwAuMqjnEJ+gBBDsEInJ3FS73V95K8dq91tDX42nCypMkVUzknPT1Itfk4mBXcvj6Dex/kVZiS6DeAm9lToOCpT6dDXLbn4posDcdW5CO1vEOpb16vvIHikuB19gzuHSIkJaGJlR/xBZcwfcWtC0n5NfrYSTfy0r6YvUyKDg2HVR7UOB4ej6x6WxUCunmobW7QuZy/Rt/Rhc3TSvSKdqOYfnBhjf0kmUdpoA1brhrQoQcxG2stTeV3+owkFKMZwpQT3n5Z96XRaJF1Qyt6yBuLZdnG2UenFYOVvfHseeEda2RtFgzut18jzp0XVUa9XsCwuNj7VGxyO3o6oNO12VkVnyg7V51VA3O9uf5K3C0/snL+P7qTaeDWhX/VXU4czxHMWHbrwzZuVfN8mgvzJj9Z0+2yNej6a/THfqJ7L2FDySSbtGNJMHRa0MmtUkSFlS+mwWl7psYqNqJP+pBX5e9YruN0OJYc6HulpZ/ZYZG2YRXrDVwJqevXO12lB01c5VI42RlsXaxnhnbL/XERx/5sftHJdOH4+Xjp+udThd7eXFe2EuP5MdEZtzMERuK9D0qcEMZLyElGu5okD/sAonqDoxLzh7xgu8qS7HX8dkLD3jR7RYO0auipGEtmzj2+2uIALjS6Dgfj6Bn0QV5mEWYMI5swnpXtEjMGE8zA6M+/+oDihr8b17UbiH0Qk5LxLa3yNIPow9WPnzCKsoryTUsjszvgEoyEzzLmnNCEdTpWFJbRkdTYPELOwCiGKcM/J8QlRmDEywr/3FozQ53wO2Ntq4GngT64PAwhCIzAUJNFZSAPBqIijMQ/2Ldrhwrz/BvFHPRB+rilqYKiSII4lAW5u9ZV7z/ZdWAIc0hSBkbAdFav9WprWrOQndBsOjWsxDATA3xO8xGLd9lZug+ov9DxThXkaFBc/ROriwnd8aZW5jmWSL4Yu6p9beTnfwDpRhvSyWJieyFzfOtFeiO3WltM57HunYKJPKzkrBCTsHJrJ/RDXdKawEyssyBNC09Nd3VYeshNjWl6jrbCOpUyRRVts8tQHyBckwj/2gx78j5qDhvpXBxtiuLFvJptOQzkvOrFSzmj2nHbs9lUcOq4mmjxtRwjqupG0Nyq1roKQ2MWbjkreLtThvRtbe32wTF5D+xjYdIfDxV5RKnzqfuMCX7sPYWde//p2zvvLl3Cvf8LxI+H5N82PJzvLnOhfTqkWF/ZjsIsWV0oxzcxjMIegQeeFZur32u0JQb3+199kKeQx1l5ASMAKSozgkAflFnVxXVG4+w3zUwjmRlJ4nSDp5Bx43MFfHLBjMNLDkaiqkmaoAiSfv8btSptPDgHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '_W3LLC0M3 H0 GY4 APK4 J4NU KHUSHBU L4G4 KE 🥹💋_ @user',   // ✅ Sirf ye line change ki hai
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Morroco/Rabat',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/hassanalami',
      instagram: 'https://www.instagram.com/fifa/',
      youtube: 'https://www.youtube.com/@fifa/videos'
    }
};
