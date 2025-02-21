import React from 'react';
import { Avatar } from 'radix-ui';
import styles from './Avatar.module.css';

function RoundedImage({ src, alt, fallBack }) {
	return (
		<Avatar.Root className={styles.avatarRoot}>
			<Avatar.Image className={styles.avatarImage} src={src} alt={alt} />
			<Avatar.Fallback className={styles.fallback} delayMs={600}>
				{fallBack}
			</Avatar.Fallback>
		</Avatar.Root>
	);
}

export default RoundedImage;
