/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['584263940741'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SUP BOT',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGFGKmxEdMYB4V0RUZDbmoYQCiztFodAT/vsG9nTPPOzO9r4VVUSePJknzw+Q5aTCK9yC8Q9QUHJDDHdH1hYYjIFWBwGmoA98xBAYA33mJk4m3jkoRNyVbzQeTrepuIsKa0gM0bbTw21WT9erYfgCHn1Q1JeEeH8AhKUbN0epN9LjTHYstKFq7NLIj9HGnEv7w1WI1JLb2nVyfwGPDhERSrLQKK44xRQlK9zuEKGfox9ubKP3WqXHu7OzHF8uhG8wltfWoC5Gy6kbpvl+5fFZnDibz9EvcJCoVXzpCdzSEidx5ZL70rIkyyuimKa5OTtEx1RPsQrf6FckzLC/8HHGCGs/r/tkGV/l3kBy7LKEYkYXZ+Kc5739Gc4mrWXeVzS8t7PKMo6fI57KElflJ6mlZ6zTmWntJ+bILuSdNDevgTmITiqU7LKJeO534jv6Pivx/9G91NHmULrSstXTkMxOEzNp24j45wmdirS+ro12Fm2mgRJzn6OPrsqmufLNq3LSt9t6kMVQ3O6k3sk1Cil0oL+mryxxpuXM+kUfsZr+ieXAgRF/myx04cCrySCOrM2kELjopujYyud6DKO0dzlqAjvxFU1OZJq6yjBGHmRDt5Dm8L4ciQOBbyA7XufGca/IRhi+PDuKcbvwwXj46AOKQ1IxihjJs+edPOoD5N9s7FHMnvKC03B7zq7Rpthzq2F7ybUwrbbY4auDfNE4iypxwzdNewnJ8QX0QUFzD1cV9uekYjltN7iqUIgrMP7rex9kuGFvxnXl+GEfBIRW7JjVRZIj/93V90fkeXmdMbvNPL07YArG3K9rzBjJwqrTsc4Q9a7khvUrYhUYByip8EeHmGIfjBmt8Udq9dzvhLfs6e6wHB5AH6RPQ4gPxkCQ4UjkFchJcDjmv1Zf7h0qKoovGWagD5LnXyMJDkVFkQRBHimQH/Nfu/vHB78OzscMkaTqcmOayasuW/X2AjnLdVVbVVeq2mn23s/7YLwJHyWt2ZusrdX5ujfX6b235hmisbfaSkLeyMrMQVKxvu1zbvNPIGAM6NFUIlEXjG8cF3qYDPbuYipBR4N31Jb70uDmbZ56g81sLmnMmr0ObLoayFO3VAw8KTWuWJW5RgyqQS/Iz26T6KV2f+mq+fhGPPx7MU+npbDwbO3cik2k9QwZCgt0b5v9Ts5q7/UUzkrXFbPg2BQlTeFkLqJUyFlt0lRoUT4N1CojC28eLmsGw+3IkOJQfRvZZ2SSn6uKPIepc6r7DAh+Jj9DnX//6dwb726+uEf/N4ifq+Rf4qi5ghfdwpbTE3g8EKHaEUVySmGuR7iHNsFun6S1aEsc2k7A4/G9D4oEsSCnabcgMp/mxAd9QPO6G9hFFuR/WrDq0VIbVe0aT1DF1F8hOJAUVwylBRgPJXkEBWWoyI+/AcBqYpQ6BwAA',
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
