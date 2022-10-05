import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className='navbar bg-base-100'>
				<div className='flex-none'>
					<button className='btn btn-square btn-ghost'>
						<img src='./logo.svg' alt='' />
					</button>
				</div>
				<div className='flex-1'>
					<Link to='/' className='btn btn-ghost normal-case text-xl'>
						Find a job
					</Link>
					<Link to='/' className='btn btn-ghost normal-case text-xl'>
						Hire a talent
					</Link>
				</div>
				<div className='flex justify-between items-center gap-x-6'>
					<button className='border border-primary-teal hover:border-white hover:bg-primary-teal text-primary-white px-4 py-1.5 tracking-wide font-medium rounded-md transition-colors duration-300 ease-in '>
						Login
					</button>
					<button className='bg-primary-teal text-primary-white px-4 py-1.5 tracking-wide font-medium rounded-md border border-white hover:bg-white transition ease-in duration-300 hover:border-primary-teal '>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
