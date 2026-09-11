import { HiOutlineBars3 } from 'react-icons/hi2';
import NavLogo from '../assets/logo-text.png';

export const Nav = () => {
  return (
    <div className=' py-6 px-8 md:py-6 md:px-2 sticky border border-gray-300'>
        
      <div className='flex justify-between container mx-auto items-center'>
        <HiOutlineBars3 className='text-3xl md:hidden w-10' />
        <img src={NavLogo} alt="" />
        <ul className=' hidden  md:flex justify-between gap-10 items-center font-semibold'>
          <li className='text-pink-600'>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='flex justify-between items-center font-semibold'>
          <button className="btn ">Sign In</button>
          <button className="btn btn-secondary rounded-3xl">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
