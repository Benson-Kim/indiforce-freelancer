import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
const Signup = () => {
	return (
		<div className='flex items-center justify-center w-full mt-32'>
			<div className='w-1/2 border-2 rounded-md border-primary-teal'>
				<h2 className='mt-3 text-xl font-semibold text-center capitalize text-primary-dark '>
					Register
				</h2>
				<form action=' py-3'>
					<div className='my-3 gap-1.5 mx-12'>
						<h4 className='text-lg font-medium capitalize text-primary-dark'>
							Email
						</h4>
						<input
							type='email'
							placeholder='johndoe@gmail.com'
							className='px-3 py-1.5 w-full transition duration-300 ease-in-out bg-opacity-50 border rounded-lg text-primary-dark text-opacity-90 placeholder:text-dark-gray focus:outline-none focus:border-primary-teal focus:bg-opacity-0 border-dark-light bg-secondary-gray'
						/>
					</div>
					<div className='my-3 gap-1.5 mx-12'>
						<h4 className='text-lg font-medium capitalize text-primary-dark'>
							Password
						</h4>
						<input
							type='password'
							placeholder='••••••••••'
							className='px-3 w-full py-1.5 transition duration-300 ease-in-out bg-opacity-50 border rounded-lg text-primary-dark text-opacity-90 placeholder:text-dark-gray focus:outline-none focus:border-primary-teal focus:bg-opacity-0 border-dark-light bg-secondary-gray'
						/>
					</div>
					<div className='mx-12 my-6 text-center'>
						<p className='my-4 leading-7 text-primary-dark text-opacity-80'>
							By clicking Register, you agree to the Indiforce{" "}
							<Link
								to='/'
								className='font-medium capitalize transition-all duration-300 ease-in-out text-primary-teal hover:underline'
							>
								User agreement
							</Link>
							,{" "}
							<Link
								to='/'
								className='font-medium capitalize transition-all duration-300 ease-in-out text-primary-teal hover:underline'
							>
								privacy policy
							</Link>
							, and
							<Link
								to='/'
								className='font-medium capitalize transition-all duration-300 ease-in-out text-primary-teal hover:underline'
							>
								{" "}
								cookie policy
							</Link>
						</p>
					</div>
					<div className='mt-8 mb-2 text-center'>
						<button className='px-8 py-2 text-xl font-normal tracking-wide transition-all duration-500 ease-in-out rounded-md bg-opacity-90 bg-primary-teal hover:tracking-wider hover:bg-opacity-100 text-primary-white'>
							Register
						</button>
					</div>

					<div className='flex items-center mx-12 my-6 '>
						<div className='flex-grow border-t border-dark-light'></div>
						<span className='flex-shrink mx-4 text-primary-dark text-opacity-80'>
							Or
						</span>
						<div className='flex-grow border-t border-dark-light'></div>
					</div>
					<div className='flex items-center justify-center my-6 '>
						<button className='text-lg flex items-center gap-2 font-medium transition-all duration-500 ease-in cursor-pointer border-primary-dark border-opacity-50 border  hover:bg-primary-teal text-primary-teal  hover:text-primary-white py-1.5 px-6 rounded-lg hover:tracking-wide'>
							<i>
								<FcGoogle className='text-xl' />
							</i>
							Continue with Goggle
						</button>
					</div>
					<div className='flex items-center justify-end mx-12'>
						<p className='mb-4 font-light leading-7 text-primary-dark text-opacity-80'>
							Already a member?{" "}
							<Link
								to='/login'
								className='font-medium capitalize transition-all duration-300 ease-in-out text-primary-teal hover:underline'
							>
								Sign in
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
