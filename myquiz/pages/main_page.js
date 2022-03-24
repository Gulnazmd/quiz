import { useState } from 'react';
import { useRouter } from 'next/router';


function QuizPage () {

  const [ post, setPost ] = useState();
  const router = useRouter();

	return (
    <div>
			<main className='bg-midnight min-h-screen flex max-w-[1500px] mx-auto'>
				<div className='flex-grow border-l border-r border-border max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
					<div className='flex items-center px-5 py-2 border-b border-gray-700 text-white font-semibold text-2xl gap-x-4 sticky top-0 z-50 bg-black'>
           English quiz
					</div>
					<div className='bg-white min-w-min' >
						<p>This English quiz estimates your level in just 15 minutes, including reading skills (English grammar and vocabulary) and listening skills.</p>

						<ul>
							<li>No fees. No sign ups. Start now </li>
							<li>Quiz results aligned to CEFR levels</li>
							<li>Share your score on social media</li>
						</ul>
					</div>

					<button type="button"
						class="inline-block m-6 px-6 py-2.5 bg-lightgreen text-grey font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-darkgreen hover:shadow-lg focus:bg-darkgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkgreen active:shadow-lg transition duration-150 ease-in-out" onClick={() => router.push('/quiz')}>Start quiz</button>
						</div>
			</main>
		</div>
	);
}

export default QuizPage;

