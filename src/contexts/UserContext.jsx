'use client';
import React, { useState, createContext, useEffect } from 'react';
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
	getCurrentUser,
} from '../utils/firebaseconfig';

export const UserContext = createContext();

function UserContextWrapper({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			const currentUser = getCurrentUser();

			setUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}

export default UserContextWrapper;
