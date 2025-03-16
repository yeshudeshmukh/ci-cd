const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Missing QR Code Terminal
const path = require('path');

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: './.wwebjs_auth' // Store session to avoid QR code scan every time
  }),
  puppeteer: {
    headless: true, // Run without GUI
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true }); // QR code for the first-time login
  console.log('Scan the QR code to authenticate WhatsApp Web');
});

client.on('ready', async () => {
  console.log('✅ WhatsApp Web is ready!');

  const number = '919309793969@c.us'; // Target WhatsApp number
  const apkPath = path.resolve(__dirname, '../android/app/build/outputs/apk/release/app-release.apk');
  const media = MessageMedia.fromFilePath(apkPath);

  try {
    await client.sendMessage(number, media);
    console.log('✅ APK sent successfully!');
    process.exit(); // Close the process
  } catch (error) {
    console.error('❌ Error sending APK:', error);
  }
});

client.on('auth_failure', (msg) => {
  console.error('❌ Authentication failed:', msg);
});

client.on('disconnected', (reason) => {
  console.log('❌ Client was logged out:', reason);
});

client.initialize();