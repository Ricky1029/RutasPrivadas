import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	const navHomero = e => {
		e.preventDefault();

		navigate('/homero',{
			replace: true,
			state: {
				logged: true,
			},
		});

		onResetForm();
	};

	const navEpico = e => {
		e.preventDefault();

		navigate('/epico',{
			replace: true,
			state: {
				logged: true,
			},
		});

		onResetForm();
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<a href="/homero" onClick={navHomero}>Hola</a>
						<a href="/epico" onClick={navEpico}>Epico</a>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};