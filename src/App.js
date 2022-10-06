import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { CreateProfile, Home, Login, Profile, Register } from "./Pages";

const App = () => {
	return (
		<div className='flex flex-col gap-3 font-roboto '>
			<Navbar />
			{/* <Register />
			<Home />
			<Profile /> */}
			{/* <Footer /> */}
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<CreateProfile />} />
			</Routes>
		</div>
	);
};

export default App;
