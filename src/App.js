import React from 'react';
//import Components
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import FormAddTodo from '../src/Components/FromAddTodo';
import Main from '../src/Components/Main';
import axios from 'axios';

function App() {
	return (
		<>
			<Header />
			<FormAddTodo />

			<Footer />
		</>
	);
}

export default App;
