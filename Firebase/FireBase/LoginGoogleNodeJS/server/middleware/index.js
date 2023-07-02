// Thay vì dùng trong từng router app query url ta tạo riêng thành 1 middleware nếu mọi url đến server đều cần phải xác thực
const admin = require('../config/firebase-config');
class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				req.user = decodeValue;
				console.log("Mail::", req.user.email);
				return next();
			}
			return res.json({ message: 'Un authorize' });
		} catch (e) {
			return res.json({ message: 'Internal Error' });
		}
	}
}

module.exports = new Middleware();