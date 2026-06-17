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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmItEZ0xCAiIuIdRDfmoYQCSrlWFQhO+O8b2NPd87A72/tWVBF58mTmOT9BmmGKTNSA0U+QE1xBhtoja3IERmBcBgEioAt8yCAYgdCMl7Jno4FZHzP9fEi3zOWS+HjYO/tOqtlyuOIXTC7mh/4reHRBXp5j7P0BkBx6oiumC216qf2X/WFv0dnmHJ06rtrXGNdMyuu5j91i7mqv4NEiQkxwGmp5hBJEYGyiZg0x+Rr9lWI6bDyxi5lTY+uqq+acrsQwF4RqINw2hr2jZV+900gwvkb/MrCueWFxQqifvHmC51l/XB+z2oLbs7VecDt49Wp9cihmmzf6FIcp8g0fpQyz5su6o6k9cOQsfhHXRrbNs2kq4aYjQR7mY18K7HJHedIRO5v4+DXiZX+uKiGC5pLHahlc+EpgrtHLOnxvKw86TZKsuJe6vt23t9+Jr8l7Vq7/R3djrCHVEG97dhWdvqXphaYF7nF7mlre8Bqq01KK6nK17iXa1+h7JpPxNRKT+fYlWYoruXNyOs1CH9T2bsyH88MF2XF0QHEUftKHrCR/TIeP7L4OT8FWhzUqVupyGKyHO30QNEpnseGriOs51bHik8KWzLFbOITUM233knDTjqHAgkyHMxo0gXQwUUmrRTiZhpvXZ0dX1Bg+GPGPLiAoxJQRyHCWPu+6APrVDnkEsae4YBjNyl6eVqVtmrHP7Re5DQPjtB9XliKfLsU8heIgGEJvo72CLshJ5iFKkT/DlGWksRClMEQUjP760QUpqtmbbW0xke+CABPK7LTM4wz6756+P0LPy8qU7ZrUU9sDImDEfV4jxnAa0lbFMoXEi3CF1AgyCkYBjCn66A8R5IMRIyX6mFk181vZZ/yyP1kONdAFydMO7IMREASJkzmBl2RRHI747/TbrYWFef4tRQx0Qfz8jZc4ThKHfVESZXkojvjv7f3jg2CL5yMGcUzBCKgLnZN7oaot1sNmqem6ooWKGirgs6H3XLwpXx+F4UGm40YQcr9n3UhnmRVBcAhv52SKIj8NYr/QHXfPX1//AaRdaJZeuNK4NPT7qYKOaF8OcnWj0Ie6qEqT0zJQkkgfG/S+6tySQZieZ+vxuJ7flOqF5QFHl3rJT/MtC1I73t/v9bEQ1DZEXeCjCnvo92LrZj2w+tvIr92cvyIbbmESOHsnOgWGZ0TughDFsRGXb07HWIgdkqXVarLQL/19s2sQFx/iwIILhtnKvA/1BicLGt3eEvucmPjXpsLPNLVWtZ8BRs/BT2Fr4H9b90a8TRj36P6G8WuV/Ms4jr3DsnJKWfEYK9zgbpm9CzRTkc8sXYrczD2Jkguj2OGGJ/B4/OiCPIYsyEgCRgCmPsmwD7qAZGUbWSMNsj8UUxXLUJVw13YeQ8qUzzHY4wRRBpMcjHj5hR/IsiwJj78BKYZWcToHAAA=',
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
