import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import BtnLogin from './BtnLogin';
import BtnFree from './BtnFree';
function Header() {
	return (
		<>
			<Navbar style={{ backgroundColor: '#1e4159 ' }} variant="dark">
				<Nav className="mr-auto">
					<Navbar.Brand href="#home">
						<img
							style={{ marginLeft: '40px' }}
							src="https://instarabbit.co/static/media/logo-instablizer-top-white.7029dac8.svg"
							width="200"
							height="90"
							className="d-inline-block align-top "
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Nav>
				<BtnLogin />
				<BtnFree />
			</Navbar>
		</>
	);
}

export default Header;
