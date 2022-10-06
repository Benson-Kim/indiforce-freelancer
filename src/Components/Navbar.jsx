import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='fixed top-0 left-0 z-10 flex items-center justify-between w-full px-8 py-4 shadow-md bg-primary-dark '>
			<div className=''>
				<Link
					to='/'
					className='flex items-center gap-3 text-2xl font-medium tracking-wider transition-all duration-300 ease-in-out cursor-pointer text-primary-white hover:text-primary-teal'
				>
					<img
						src='./logo.svg'
						alt='Indiforce'
						className='object-contain w-16 h-auto'
					/>
					Indiforce
				</Link>
			</div>
			<div className='flex flex-1 ml-20 gap-x-5'>
				<Link
					to='/'
					className='text-lg font-medium transition-all duration-300 ease-in-out text-primary-white hover:tracking-wide'
				>
					Find a Job
				</Link>
				<Link
					to='/'
					className='text-lg font-medium transition-all duration-300 ease-in-out text-primary-white hover:tracking-wide'
				>
					Hire an expert
				</Link>
			</div>
			<div className='flex items-center justify-between gap-x-6'>
				<Link
					to='/login'
					className='border border-primary-teal  bg-primary-teal bg-opacity-0 hover:tracking-wider hover:bg-opacity-100 text-primary-white px-4 py-1.5 tracking-wide font-medium rounded-md transition-all duration-500 ease-in-out '
				>
					Login
				</Link>

				<Link
					to='/register'
					className='border border-primary-teal  bg-primary-teal bg-opacity-75 hover:tracking-wider hover:bg-opacity-100 text-primary-white px-4 py-1.5 tracking-wide font-medium rounded-md transition-all duration-500 ease-in-out '
				>
					Register
				</Link>
				<Link
					to='/profile'
					className='border border-primary-teal  bg-primary-teal bg-opacity-75 hover:tracking-wider hover:bg-opacity-100 text-primary-white px-4 py-1.5 tracking-wide font-medium rounded-md transition-all duration-500 ease-in-out '
				>
					Create profile
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
