'use client';
import { useContext } from 'react';
import './page.module.css';
import { UserContext } from '../contexts/UserContext';
import Login from '../components/Login';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import { signOutUser } from '@/utils/firebaseconfig';

export default function Home() {
	const { user } = useContext(UserContext);

	return (
		<div>
			{user ? (
				<div>
					Hello {user.displayName}
					<button className='nav-link' onClick={signOutUser}>
						SIGN OUT
					</button>
				</div>
			) : (
				<div>
					Please log in <Login />
					<SignUpForm />
				</div>
			)}
		</div>
	);
}
