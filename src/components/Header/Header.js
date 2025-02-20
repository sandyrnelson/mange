import React from 'react';
import styles from './Header.module.css';

function Header() {
	return (
		<ul className={styles.header}>
			<li>
				<span>Logo</span>
			</li>
			<li>
				<span>AvatarHeader</span>
			</li>
		</ul>
	);
}

export default Header;
