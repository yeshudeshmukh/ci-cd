const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code to authenticate WhatsApp Web');
});

client.on('ready', async () => {
  console.log('WhatsApp Web is ready!');

  const number = '919309793969@c.us'; // Add your target number with country code
  const apkPath = path.resolve(__dirname, '../android/app/build/outputs/apk/release/app-release.apk');
  const media = MessageMedia.fromFilePath(apkPath);

  await client.sendMessage(number, media);
  console.log('✅ APK sent successfully!');
  process.exit(); // Close the process
});

client.initialize();
