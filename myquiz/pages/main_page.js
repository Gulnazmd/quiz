import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/UI/button';


function QuizPage () {

  const [ post, setPost ] = useState();
  const router = useRouter();

	return (
    <div>
			<main className='bg-midnight min-h-screen flex max-w-[1500px] mx-auto'>

				<div className='flex-grow border-l border-r border-border max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
					<div className='flex items-center px-5 py-2 border-b border-gray-700 text-white font-semibold text-2xl gap-x-4 sticky top-0 z-50 bg-black'>
           JavaScript quiz
					</div>
					<div className="grid grid-cols-3 gap-4 items-center">
  <div className="mb-4">
    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="max-w-full h-auto rounded-lg" alt=""/>
  </div>

  <div className="mb-4">
    <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="max-w-full h-auto rounded-full" alt=""/>
  </div>
  <div className="mb-4">
    <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg" className="max-w-full h-auto rounded-full" alt=""/>
  </div>
</div>
					<div className='bg-white min-w-min' >
						<p>This English quiz estimates your level in just 15 minutes, including reading skills (English grammar and vocabulary) and listening skills.</p>

						<ul>
							<li>No fees. No sign ups. Start now </li>
							<li>Quiz results aligned to CEFR levels</li>
							<li>Share your score on social media</li>
						</ul>
					</div>

					<Button clicked={() => router.push('/quiz')}>Start quiz</Button>
						</div>
			</main>
		</div>
	);
}

export default QuizPage;

