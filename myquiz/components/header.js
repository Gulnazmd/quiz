import { useRouter } from 'next/router';
import Logo from '../public/logo.svg';
import Image from 'next/image';


const Header = () => {

  const router = useRouter();

  return (

    <div className='ml-auto bg-white text-black font-bold text-sm py-1.5 px-3.5 drop-shadow-md'>
      <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&display=swap'></link>

      <ul className="flex p-2 font-serif">
      <Image width={100}
        height={50} src={Logo} alt="альтернативный текст"/>
        <div>
          <p className='mx-5 cursor-pointer text-grey text-xl hover:text-red'
              onClick={() => router.push('/')}>MaturDev </p>
          <span className='font-insparation font-xl text-head'> {'\u003C'}  for Coding  {'\u003E'} </span>
        </div>
							<li onClick={() => router.push('/quiz')} className='mx-5 mt-1 cursor-pointer text-grey hover:text-red'>Our tests</li>
        <li onClick={() => router.push('/blog')} className="mx-5 mt-1 cursor-pointer text-grey hover:text-red">Blog</li>
        <li className="mx-5 mt-1 cursor-pointer text-grey hover:text-red"
            onClick={() => router.push('/courses')}>Courses</li>
        <p onClick={() => router.push('/login')} className='mx-5  mt-1 cursor-pointer text-grey hover:text-red'>LogIn</p>
      </ul>

     </div>

  )
}

export default Header;