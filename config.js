/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2250702157339'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SUP BOT',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY16hRjuIkZ0xADSKuKlWy7qxjwUUGApAhYFChP++wT29PQ87M72vlUl1MmTeU7md5AXuEJz1ILRd1AS3ECK+iNtSwRGwKiTBBHAghhSCEZAXJ6Rewy9fRcP05uxv87p6dpW0XxCA+bwPN0mw73Tvsru1HoCdxaUdZjh6A+A3DI8vdBGhbWhyNyNI6m27xhjxevwGUUB3vBkcc7HdeCdnsC9R4SY4Dy1ygM6IwKzOWrXEJPP0T/NQ0ZEM0MMnfMUbQPLHq+lSbK0C231muXn5jicRGRHFufr5+irjl+iTjNkdDxzZbBTou1raBtzOvNvSuEnytKv4L4JtZP8Rr/CaY7iWYxyimn76b5bTrxa6Hi6O6nHTi0dM7xtrGg/NtdpcLM75fmwO3vDbdpNis8RrzohXmCPucguz22nM3+gOhp017ZywJ22nchZwK3bMtP92e/E1+TdK6f/0/fZbO5ymnOMA5cbImW6urolSnRvF80lvxFVcmgClGyQJX2S/obLwmNSOplewYNhjufj05KXHKrrFOWD2C0vjWvbY2z7+gd9SGvyJ5Z4h209dMrjfFmSy5VJyhbtl8uYuVrbcbm9jvFJl3250WVhdjIVszjKE4Z6hUSiy54bJiVnuemgWTJB1OXN4PmF39t6+vSo6ITaWQxGwp0FBKW4ogRSXOR9TBQlFsC42aCIIPpoLxCG1Z6L19v9C+JxMjsqLW8cjHnD2PpqEGSlxqcDMefcwt09ARaUpIhQVaF4iitakHaBqgqmqAKjv7+xIEc3+iZcn04SWJBgUlEvr8usgPG7qu8fYRQVdU43bR6Z/QERMOI/wohSnKdV38c6hyQ64AaZB0grMEpgVqFfFSKCYjCipEa/ptYs4r7x44ExEQNpCVhwfgiC4363iAqv8qKgqJKkjaSv1ZdrDwvL8kuOKGBBDvu/wQZnJfxrXp8hwYAF2eOxoPC8ImmypEiqqkkj6Wsfv/+i3WeJEYU4q8AImIsgu+0XpjVLtpJmTSa6lepmqoOPMt/98qbHIHvlnMNKVVbR2uOOxLMPjV5zqp8Yp8AJly5ncKrXvpJUfvoHEDACk3gpaq7uQPPmW5edgIXNyy2PfYcc6Sl6rvVMpjnE+U7jGY83XqakDTv7Sgcmf+l0K9opNnKIEUTrxQL7WbqqYG725mJBjBocod+T+bolGW4jy1PIBDutEuJdtUqcWiqgKk7LSK6qfSCUTDUeC4bYXW6yf/HMzgrEY2Fj17M7OZytGikUJqbJQUtKqG28vDn5MUnZzw2GHx7rBeyvCUaPhfBTqP8U9I147zv+zv6G8XPF/MuYGqj0klZ2a8bNx8JaHgjmLrw6DSNsr/tnLHYed00YYXGC8grc799YUGaQJgU593vvHELAAlLUvYtneVL8IZOpL2amnm76sjNYUf1jMlx8RhWF5xKMBHUo8rI2UJX7D4ZYfYRPBwAA',
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
