import React from "react";

import { Link } from "react-router-dom";

import { BsFillBarChartLineFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiEdit2Fill } from "react-icons/ri";

const Profile = () => {
	return (
		<section className='flex w-full bg-secondary-gray'>
			<div className='flex flex-col items-center w-56 border shadow bg-primary-white rounded-r-md border-primary-gray'>
				<div className='pt-4 pb-6 border-b border-secondary-gray'>
					<img
						src=''
						alt=''
						className='object-contain w-20 h-20 rounded-full'
					/>
					<div className='my-3'>
						<h4 className='font-medium capitalize text-primary-dark '>
							John Doe
						</h4>
						<h6 className='text-sm capitalize text-primary-dark '>
							UI/UX Designer
						</h6>
					</div>
					<div className='flex mb-3'>
						<p className='font-medium capitalize text-primary-dark '>
							Available for work
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<Link
						to='/'
						className='px-3 py-2 font-medium tracking-wide capitalize transition duration-300 ease-in-out border-b cursor-pointer border-dark-gray text-primary-dark hover:text-primary-teal'
					>
						Profile Information
					</Link>
					<Link
						to='/'
						className='px-3 py-2 font-medium tracking-wide capitalize transition duration-300 ease-in-out border-b cursor-pointer border-dark-gray text-primary-dark hover:text-primary-teal'
					>
						job applications
					</Link>
					<Link
						to='/'
						className='px-3 py-2 font-medium tracking-wide capitalize transition duration-300 ease-in-out border-b cursor-pointer border-dark-gray text-primary-dark hover:text-primary-teal'
					>
						account & security
					</Link>
					<Link
						to='/'
						className='px-3 py-2 font-medium tracking-wide capitalize transition duration-300 ease-in-out border-b cursor-pointer border-dark-gray text-primary-dark hover:text-primary-teal'
					>
						Delete account
					</Link>
				</div>
			</div>
			<div className='flex-1 m-4 bg-inherit'>
				<h2 className='text-xl font-semibold capitalize text-primary-dark '>
					profile
				</h2>
				<div className='flex items-center gap-20 px-4 py-2 mt-4 border rounded-md bg-primary-white border-primary-gray'>
					<div className='flex items-center gap-3'>
						<i className=''>
							<BsFillBarChartLineFill className='w-10 h-16 text-3xl fill-primary-teal ' />
						</i>
						<div className='flex flex-col text-primary-dark'>
							<p className='flex items-center gap-1 text-lg font-semibold capitalize'>
								<span className='text-3xl '>35 </span>
								profile views
							</p>
							<Link
								to='/'
								className='text-lg transition-colors duration-300 ease-in hover:text-primary-teal'
							>
								Check who viewed your profile
							</Link>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<i className=''>
							<FiSearch className='w-10 h-16 text-3xl text-primary-teal ' />
						</i>
						<div className='flex flex-col text-primary-dark'>
							<p className='flex items-center gap-1 text-lg font-semibold capitalize'>
								<span className='text-3xl '>12 </span>
								search appearances
							</p>
							<Link
								to='/'
								className='text-lg transition-colors duration-300 ease-in hover:text-primary-teal'
							>
								Check how often you appear in search results
							</Link>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center px-8 py-2 mt-4 border rounded-md bg-primary-white border-primary-gray'>
					<div className='flex items-center justify-between w-full'>
						<h2 className='text-xl font-semibold capitalize text-primary-dark '>
							Bio
						</h2>
						<Link
							to='/'
							className='text-xl transition-colors duration-500 ease-in-out text-primary-dark hover:text-primary-teal'
						>
							<i className=''>
								<RiEdit2Fill className='' />
							</i>
						</Link>
					</div>

					<p className='my-4 leading-7 text-primary-dark text-opacity-80'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus eos totam ut. Nisi natus cupiditate, libero
						quos quo voluptatum. Veniam iure magni debitis sapiente
						necessitatibus rerum error, harum odio ab asperiores
						voluptatem omnis maiores eligendi, nostrum quo, quas et
						amet pariatur vel quaerat ipsa reprehenderit.Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Delectus
						eos totam ut. Nisi natus cupiditate, libero quos quo
						voluptatum. Veniam iure magni debitis sapiente
						necessitatibus rerum error, harum odio ab asperiores
						voluptatem omnis maiores eligendi, nostrum quo, quas et
						amet pariatur vel quaerat ipsa reprehenderit.
					</p>
				</div>
				<div className='flex flex-col items-center px-8 py-2 mt-4 border rounded-md bg-primary-white border-primary-gray'>
					<div className='flex items-center justify-between w-full'>
						<h2 className='text-xl font-semibold capitalize text-primary-dark '>
							Contact information
						</h2>
						<Link
							to='/'
							className='text-xl transition-colors duration-500 ease-in-out text-primary-dark hover:text-primary-teal'
						>
							<i className=''>
								<RiEdit2Fill className='' />
							</i>
						</Link>
					</div>

					<div className='flex items-center w-full gap-x-10'>
						<p className='flex my-4 leading-7 gap-x-3'>
							<span className='font-medium capitalize text-primary-dark'>
								Email
							</span>
							<span className='text-primary-dark text-opacity-80'>
								johndoe@gmail.com
							</span>
						</p>
						<p className='flex my-4 leading-7 gap-x-3'>
							<span className='font-medium capitalize text-primary-dark'>
								Phone number
							</span>
							<span className='text-primary-dark text-opacity-80'>
								+123-45-678-901
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
