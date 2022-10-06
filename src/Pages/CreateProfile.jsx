import React from "react";

import { BsFillPersonFill } from "react-icons/bs";

const CreateProfile = () => {
	return (
		<section className='w-3/4 mx-auto'>
			<div className='flex flex-col justify-center w-3/4 px-6 py-3 mx-10 mt-32 bg-white border-2 rounded-md shadow border-dark-light'>
				<div className='py-2'></div>
				<div className='py-2 my-4'>
					<h2 className='text-xl font-semibold capitalize text-primary-dark '>
						create profile
					</h2>
					<form action=''>
						<div className='my-3 gap-1.5'>
							<h4 className='text-lg font-medium capitalize text-primary-dark'>
								Full Name
							</h4>
							<input
								type='text'
								placeholder='John Doe'
								className='w-full px-3 py-1 transition duration-300 ease-in-out bg-opacity-50 border rounded-lg text-primary-dark text-opacity-95 placeholder:text-dark-gray focus:outline-none focus:border-primary-teal focus:bg-opacity-0 border-dark-light bg-secondary-gray'
							/>
						</div>
						<div className='flex items-center gap-3 my-3'>
							{/* <input
							type='file'
							accept='images/*'
							name='avatar'
							id='avatar'
							className='w-24 h-24 transition duration-300 ease-in border-none rounded-full cursor-pointer focus:outline-none focus:border-primary-teal'
						/> */}
							<div className='flex items-center justify-center w-20 h-20 transition duration-300 ease-in rounded-full cursor-pointer bg-primary-gray focus:outline-none focus:border-primary-teal'>
								<i>
									<BsFillPersonFill className='w-16 h-16 text-opacity-60 text-primary-dark ' />
								</i>
							</div>
							<button className='px-3 py-1.5 font-semibold tracking-wide text-center transition duration-300 ease-in-out border  rounded-xl text-primary-dark hover:text-primary-white border-primary-teal hover:bg-primary-teal hover:border-primary-white'>
								Upload a new photo
							</button>
						</div>
						<div className='my-3 gap-1.5'>
							<h4 className='text-lg font-medium capitalize text-primary-dark'>
								Where are you based?
							</h4>
							<input
								type='text'
								placeholder='John Doe'
								className='w-full px-3 py-1 transition duration-300 ease-in-out bg-opacity-50 border rounded-lg text-primary-dark text-opacity-90 placeholder:text-dark-gray focus:outline-none focus:border-primary-teal focus:bg-opacity-0 border-dark-light bg-secondary-gray'
							/>
						</div>
						<div className='my-3 gap-1.5'>
							<h4 className='text-lg font-medium capitalize text-primary-dark'>
								Bio
							</h4>
							<textarea
								placeholder='bio information'
								className='w-full px-3 py-1.5 placeholder:capitalize transition duration-300 ease-in-out bg-opacity-50 border rounded-lg text-primary-dark text-opacity-90 placeholder:text-dark-gray focus:outline-none focus:border-primary-teal focus:bg-opacity-0 border-dark-light bg-secondary-gray'
							></textarea>
						</div>

						<button className=' px-4  py-1.5 text-lg font-normal tracking-wide text-center transition duration-300 ease-in-out border rounded-xl text-primary-teal hover:text-primary-white border-primary-teal hover:bg-primary-teal hover:border-primary-white'>
							Continue
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CreateProfile;
