import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Card from '../components/card';
import Button from '../components/UI/button';


const Courses = () => {

	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
			<div>
			<Header/>

			<div className='container max-w-7xl px-4 md:px-6'>

			</div>
				<div className='flex'>
					<Card>
						<h1 className='text-orange text-2xl'>Perfect inretview</h1>
      			<small>All confused questions</small>
      			<h2 className='font-bold'>$25</h2>
						<Button>Buy</Button>
						<div className="mb-3 px-3 border-b border-gray-300"></div>
						<p>What's included:</p>
						<ul type="disk">
							<li><span className='text-green text-2xl font-bold'>✓</span> Using an inappropriate file name and email address.</li>
							<li>{'\u274C'} Using an inappropriate file name and email address.</li>
						</ul>
					</Card>
					<Card>
						<h1 className='text-orange text-2xl'>Introduce yourself</h1>
      			<small>All confused questions</small>
      			<h2 className='font-bold'>$39</h2>
						<Button>Buy</Button>
						<div className="mb-3 px-3 border-b border-gray-300"></div>
						<p>What's included:</p>
						<ul type="disk">
							<li><span className='text-green text-2xl font-bold'>✓</span> Using an inappropriate file name and email address.</li>
							<li><span className='text-green text-2xl font-bold'>✓</span>Using an inappropriate file name and email address.</li>
						</ul>
					</Card>
				<Card>
						<h1 className='text-orange text-2xl'>VIP</h1>
      			<small>All confused questions</small>
      			<h2 className='font-bold'>$18</h2>
						<Button>Buy</Button>
						<div className="mb-3 px-3 border-b border-gray-300"></div>
						<p>What's included:</p>
						<ul type="disk">
							<li><span className='text-green text-2xl font-bold'>✓</span> Using an inappropriate file name and email address.</li>
							<li><span className='text-green text-2xl font-bold'>✓</span> Using an inappropriate file name and email address.</li>
						</ul>
					</Card>
				</div>
			</div>
	);
};

export default Courses;
