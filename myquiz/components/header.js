import { useRouter } from 'next/router';




const Header = () => {

  const router = useRouter();

  return (

    <div className='ml-auto bg-white text-black font-bold text-sm py-1.5 px-3.5 drop-shadow-md'>
      <ul className="flex p-3">
        <li className='mx-5 cursor-pointer text-grey hover:text-red'
            onClick={() => router.push('/')}>MaturDev</li>
							<li className='mx-5  cursor-pointer text-grey hover:text-red'>Our tests</li>
        <li className="mx-5  cursor-pointer text-grey hover:text-red">About Us</li>
        <li className="mx-5 cursor-pointer text-grey hover:text-red"
            onClick={() => router.push('/courses')}>Courses</li>
					    <p className='mx-5  cursor-pointer text-grey hover:text-red'>LogIn</p>

				</ul>
     </div>

  )
}

export default Header;