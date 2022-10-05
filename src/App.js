import React from "react";
import { Navbar } from "./Components";
import { Register } from "./Pages";

const App = () => {
	return (
		<div className='font-sans flex flex-col gap-3'>
			<Navbar />
			<Register />
		</div>
	);
};

export default App;
