import React, { useEffect } from 'react';
import axios from 'axios';
export default function ListOfTodo({ token }) {
	useEffect(() => {
		// Vì vào lần đầu tiên thì token được gán từ undefined thành "" thì cx là đổi giá trị sẽ thực hiện fetch ra error nên cần phải check k sẽ bị double sign in
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		const res = await axios.get('http://localhost:5000/api/todos', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		console.log(res.data);
	};

	return (
		<div>
			<h1>List of todo</h1>
		</div>
	);
}