import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
