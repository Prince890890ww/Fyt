/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212607361454'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGLkJSkRHDCIKIiii0rIxDyUUiFy7qkBxwn/fwJ6emYfd2d634hSRJ09mnvoOyiolyEIdUL6DGqctpKg/0q5GQAHTJo4RBgMQQQqBAtDcsRvyGkiadoGySu1OkoeRXy4WheOeKJzTYzgc6kxcZC/gMQB1c8rT8A+AooGXVcevxNWhqs7hZYd9XuINhg3Ws/iYjSNxaujrZrPi1Bfw6BFhitMy0eszKhCGuYW6DUzx5+hLmrC7J6GR2NpdNa56Fkz3J1/bRCe7oLKJnOvtTNX8hPfu5+g7e9Xmb+t9yDDm3lvtF3G587yR2JabV8Zara5uua2cLFnk4jt9kiYliswIlTSl3ad1Fzc1H0z9aLJnbkLNiFyjQkkPkH0PXzNeFWJ+Qo5uPowL/XPEmVo0qumR23FFpQ0XNyymVOqsppSX/OiyPi79ydXXhVmsj38nvsEfWcn+j+78BrthcjjgKJlsxXIzXxurlTyaL7nXNyn3ipk3jFqyDYuD/Tn6qmQtSbQbR91SI/HqsAgyp7Hb4VVab3fzTr0JsLa5XTUxkl/0IW3wn1geT7fYd0OikXJmeXPiLLd+MFm5s+RyD2ZWULvXVaMHw7u3uVDSJeiwPp4Xwm3npwi7o5gJx769vEF3RtfDZsOtfC+4XF+eE2WoMyOgcI8BwChJCcWQplXZ1wR2AGDUeijEiD7VBd11MvZmAs7Diagj65ptzXrGQSKhu73ec9ez7FjtbOed6fgFDECNqxARgiIjJbTCnY0IgQkiQPnr2wCU6EbffXt24wYgTjGh+7Kp8wpGH6Z+XMIwrJqSel0Zav0BYaCwv8qI0rRMSC9jU0IcntMWaWdICVBimBP0c0CEUQQUihv0c2m1Kup1162ZPpZGHBiA4ulHGvUZ4XiJlQWJE0eiwn8lX649KqzrLyWiYADy518cJ3DSWJ7IE0kasYLCf+3rj5/8ergIUZjmBChAc96Wl5U41c3TDjv6YqHqiaolKvg1z0cu3oVP9fZwGTlBAn1c1pVxX+qqcHJraDPePqBjhunKdGgs+TP78g8gQAFExHJqwnpytc3AiNGIFDdWzrtxrLGCHkq2YyXtur7sj1lu2VuTTCujrV8d+7YWw9IrZG5u3Q6NeV6+nZr5sTL3h1RNXvpuEWrTEP3ezE68t7zm+G2pT7tqG0c5ywV23p2GBRc3Jj1m2vWgDRnWEKxDNeFLN2/PS8zm5/trtrWnW9awo6F4qkmcS2tWc4N795HY58bkP16q9Bmm3qn+M07Rc/FL2Pv3n8698+7zxT4Gv0H8eEn+ZRunx/OKOzI7/7jI30YSnI67rerwrOVfNlm+OMWbltRie+uiKgKPx7cBqHNI4woXQAGwjHCVRmAAcNX0gTXLuPpDM03NzJmbeP3gOSRU/bUEu7RAhMKiBgonjzmeE0by+PE3IMQ6oDkHAAA=',
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
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
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
  
