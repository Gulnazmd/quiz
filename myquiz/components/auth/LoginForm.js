import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const router = Router;

	const [showPass, setShowPass] = useState(false);
	const togglePassText = () => {
		setShowPass(showPass ? false : true);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);

		const result = await signIn('credentials', {
			redirect: false,
			email,
			password
		});

		if (result.error) {
			toast.error(result.error);
		} else {
			router.push('/');
			toast.success('Login successful!');
		}
	};

	return (
		<div className='flex items-center justify-center bg-gray-200 dark:bg-gray-900 rounded-md px-7 py-7 shadow-gray-500'>
			<form onSubmit={handleSubmit}>
				<div className='w-full'>
					<label
						htmlFor='email_field'
						className='font-semibold block my-3 text-md'
					>
						Email
					</label>
					<input
						type='text'
						className='w-full px-4 py-2 rounded-lg focus:outline-none'
						id='email_field'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='admin@lareservation.com'
					/>
				</div>
				<div className='w-full'>
					<label
						htmlFor='password_field'
						className='relative font-semibold block my-3 text-md'
					>
						Password
						<input
							type={showPass ? 'text' : 'password'}
							className='w-full mt-3 px-4 py-2 rounded-lg focus:outline-none'
							id='password_field'
							placeholder='admin@123'
							name={password}
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<span
							className='h-5 w-5 pr-1 mr-1 text-gray-400 absolute top-[75%] transform -translate-y-1/2 right-3 cursor-pointer'
							onClick={() => togglePassText()}
						>
							{showPass ?  <EyeIcon /> : <EyeOffIcon /> }
						</span>
					</label>
				</div>
				<div className='mt-7 flex justify-center w-full'>
					<button
						className='flex items-center justify-center bg-red-600 text-white rounded-lg w-full py-1.5 font-bold shadow-md hover:bg-red-800'
						type='submit'
						disabled={!email && !password}
					>
						{email && password && loading ? (
							<div className='animate-spin rounded-full h-6 w-6 border-b-4 border-gray-200'></div>
						) : (
							'Login'
						)}
					</button>
				</div>
				<div className='mt-7 text-sm font-bold flex justify-between w-full'>
					<Link href='/password/forgot-password'>
						<a className='text-red-500 hover:text-red-700'>Forgot Password?</a>
					</Link>
					<Link href='/register'>
						<a className='text-gray-500 hover:text-gray-600'>Register</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
