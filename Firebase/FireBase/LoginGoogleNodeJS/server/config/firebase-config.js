const admin = require('firebase-admin');

// Chú ý file json dưới lấy từ admin và khi push lên repo phải bỏ nó ra nếu lộ key đó thì ai cũng authen được
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;