import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Calendar from '../Calendar/Calendar';
import DinnerPicker from '../DinnerPicker/DinnerPicker';
import Header from '../Header/Header';
import styles from './SideBar.module.css';
import Link from 'next/link';

function SideBar() {
	return (
		<div className={styles.sidebar}>
			<ul>
				<li>
					<Header />
				</li>

				<li>
					<SearchBar />
				</li>
				<li>
					<Link href='/recipes'>Recipes</Link>
				</li>
				<li>new addition</li>
				<li>
					<Calendar />
				</li>
				<li>
					<DinnerPicker />
				</li>
				<li>Shopping list</li>
			</ul>
		</div>
	);
}

export default SideBar;
