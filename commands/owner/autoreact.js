/**
 * Auto-React Command - Configure automatic reactions
 */

const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'autoreact',
  aliases: ['ar'],
  category: 'owner',
  description: 'Configure automatic reactions to messages',
  usage: '.autoreact <on/off>',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const action = args[0]?.toLowerCase();

      if (!action) {
        // Reload config to get current status
        delete require.cache[require.resolve('../../config')];
        const config = require('../../config');
        const status = config.autoReact ? '✅ ON' : '❌ OFF';
        return extra.reply(`📋 *Auto-React Status:* ${status}\n\nUsage:\n.autoreact on\n.autoreact off`);
      }

      if (!['on', 'off'].includes(action)) {
        return extra.reply('❌ Invalid option. Use: on | off');
      }

      // ✅ Update config.js file directly
      const configPath = path.join(__dirname, '../../config.js');
      let configContent = fs.readFileSync(configPath, 'utf8');

      const enable = (action === 'on');
      const updatedContent = configContent.replace(
        /autoReact:\s*(true|false)/,
        `autoReact: ${enable}`
      );

      fs.writeFileSync(configPath, updatedContent);

      // Clear cache so changes take effect immediately
      delete require.cache[require.resolve('../../config')];

      return extra.reply(`✅ Auto-react ${action === 'on' ? 'enabled' : 'disabled'}.`);
    } catch (err) {
      console.error('[autoreact cmd] error:', err);
      extra.reply('❌ Error configuring auto-react.');
    }
  }
};
