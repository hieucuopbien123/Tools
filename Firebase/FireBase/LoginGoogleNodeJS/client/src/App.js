import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth } from "firebase/auth";
import 'firebase/auth';
import { useEffect, useState } from 'react';
import ListOfTodo from './components/ListOfTodo';

function App() {
	// Xài 1 biến state để điều khiển front end và 1 biến localStorage để tối ưu hóa quá trình đăng nhập nhưng như thế phải làm nút đăng xuất nx
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem('auth') === 'true'
	);
	const [token, setToken] = useState('');
	const auth1 = getAuth();

	useEffect(() => {
		// onAuthStateChanged trigger mỗi khi user sign in - sign out
		onAuthStateChanged(auth1, (userCred) => {
			if (userCred) {
				setAuth(true);
        // Dùng localStorage để nó k bị nhảy vc load trang khi đã từng đăng nhập r mà nó sẽ check ở trong phiên đó thì truy cập được luôn
				window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
				});
			}
		});
	}, []);

	const loginWithGoogle = () => {
		// Thực hiện sign in với pop up cửa số mới
		signInWithPopup(auth1, new GoogleAuthProvider())
			.then((userCred) => {
				if (userCred) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
				}
			});
	};

	return (
		<div className="App">
			{auth ? (
				<ListOfTodo token={token} />
			) : (
				<button onClick={loginWithGoogle}>Login with Google</button>
			)}
		</div>
	);
}

export default App;