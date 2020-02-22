import React, { useState } from 'react';
//import Components
import ShowStaticks from './ShowStaticks';
import Main from './Main';
import axios from 'axios';
//import style
import '../Styles/FormAddTodo.css';

function FormAddTodo() {
	const [username, setUsername] = useState('');

	let inputHandler = e => setUsername(e.target.value);

	let formHandler = e => {
		e.preventDefault();
		let data = axios
			.get(`https://www.instagram.com/${username}/?__a=1`)
			.then(response =>
				Object.entries(response.data).map(item => console.log(item))
			)
			.catch(err => console.log(err));
	};

	return (
		<main>
			<section className="section-form-add-todo">
				<div className="container d-flex flex-column align-items-center">
					<h1 className="jumbotron-heading" style={{ color: 'white' }}>
						Enter your Instagram username
					</h1>
					<form className="form-inline" onSubmit={formHandler}>
						<div className="form-group" style={{ justifyContent: 'center' }}>
							<input
								className=" input-form-add-todo"
								type="text"
								placeholder="Enter your instagram username"
								value={username}
								onChange={inputHandler}
							/>
							<ShowStaticks type="submit" />
						</div>
					</form>
				</div>
			</section>
			<div className="todosList">
				<div className="container">
					<div className="d-flex flex-column align-items-center "></div>
				</div>
			</div>
			{username.length > 3 ? <Main username={username} /> : null}
		</main>
	);
}
export default FormAddTodo;
