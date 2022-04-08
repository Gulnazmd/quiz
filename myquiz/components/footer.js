import Logo from '../public/logo.svg';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='h-50 bg-lightgrey'>
      <div className='p-10'>
        <Image width={100}
              height={50}
              src={Logo}
            alt="альтернативный текст" />
            <p>Copyright © 2022 MaturDev Inc.</p>
      </div>
    </div>
  )
}

export default Footer;