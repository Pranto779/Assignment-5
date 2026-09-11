import NavLogo from '../assets/logo-text.png';

export const Nav = () => {
  return (
    <div className=' py-6 px-8 md:py-6 md:px-2 sticky'>
      <div className='flex justify-between container mx-auto items-center'>
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
