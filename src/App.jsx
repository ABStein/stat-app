import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);

	const fetchUserData = () => {
		fetch('https://api.thedogapi.com/v1/images/search')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<div className='App'>
			<div className='flex justify-center'>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src='/vite.svg' className='logo h-20 p-4' alt='Vite logo' />
				</a>
				<a
					href='https://reactjs.org'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={reactLogo}
						className='logo react h-20 p-4'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			{users.length > 0 &&
				users.map((user) => (
					<div key={user.id}>
						<img src={user.url} alt='' width={400} height={400} />
					</div>
				))}
		</div>
	);
}

export default App;
