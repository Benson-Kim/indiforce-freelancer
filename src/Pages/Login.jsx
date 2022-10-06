import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='flex items-center justify-center w-full mt-32'>
			<div className='w-1/2 border-2 rounded-md border-primary-teal'>
				<h2 className='mt-3 text-xl font-semibold text-center capitalize text-primary-dark '>
					Login
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

					<div className='mt-8 mb-2 text-center'>
						<button className='px-8 py-2 text-xl font-normal tracking-wide transition-all duration-500 ease-in-out rounded-md bg-opacity-90 bg-primary-teal hover:tracking-wider hover:bg-opacity-100 text-primary-white'>
							Login
						</button>
					</div>

					<div className='flex items-center justify-end mx-12'>
						<p className='mb-4 font-light leading-7 text-primary-dark text-opacity-80'>
							Do not have an account?{" "}
							<Link
								to='/register'
								className='font-medium capitalize transition-all duration-300 ease-in-out text-primary-teal hover:underline'
							>
								Sign up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
