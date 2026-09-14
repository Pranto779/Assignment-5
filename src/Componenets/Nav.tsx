import { HiOutlineBars3 } from 'react-icons/hi2';
import NavLogo from '../assets/logo-text.png';

export const Nav = () => {
  return (
    <div className=' py-4 px-8 mb-5 md:mb-0 md:py-3 md:px-2 top-0 z-50 bg-white left-0 right-0 sticky border border-gray-300'>
        
      <div className='flex justify-between container mx-auto items-center'>
        <HiOutlineBars3 className='text-3xl md:hidden w-10 ' />
        <img src={NavLogo} alt="" />
        <ul className=' hidden  md:flex justify-between gap-10 items-center font-semibold'>
          <li className='text-pink-600'>Home</li>
          <li><a href="Technologies">Technologies</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
        <div className='flex justify-between items-center font-semibold gap-5'>
          <button className="btn rounded-3xl">Sign In</button>
          <button className="btn btn-secondary rounded-3xl">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
