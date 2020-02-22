import React from 'react';

function Footer() {
	return (
		<div
			style={{
				backgroundColor: '#32618a',
				padding: '10px',
				position: 'fixed',
				justifyContent: 'center',
				width: '100%',
				display: 'flex'
			}}
		>
			<span
				style={{
					color: '#b9b9b9',
					textAlign: 'center'
				}}
			>
				©2020 instarabbit. All rights reserved.
			</span>
		</div>
	);
}

export default Footer;
