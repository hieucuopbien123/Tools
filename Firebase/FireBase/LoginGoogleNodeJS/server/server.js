const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();
const port = 5000;

app.use(cors()); // Dùng cors cản policy từ phía server

app.use(middleware.decodeToken);

app.get('/api/todos', (req, res) => {
	return res.json({
		todos: [
			{
				title: 'Task1',
			},
			{
				title: 'Task2',
			},
			{
				title: 'Task3',
			},
		],
	});
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});

// Login with Firebase NodeJS: 
// Tạo app authentication trong Project firebase -> cài firebase và axios vào project -> tạo file config cho nó ở front end -> vào firebase authentication và chọn các phương thức đăng nhập -> thao tác với firebase login -> lấy quyền admin từ firebase service account và dùng nó xác thực phía server trước khi chạy từng request nào

