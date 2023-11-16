import React from 'react';
import './App.css';

import Navbar from './components/header';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Doc from './pages/doc';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/doc' element={<Doc />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
