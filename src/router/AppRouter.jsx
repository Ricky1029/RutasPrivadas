import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	EpicoPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { HomeroPage } from '../pages/HomeroPage';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='homero'
						element={
							<PrivateRoute>
								<HomeroPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='epico'
						element={
							<PrivateRoute>
								<EpicoPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};