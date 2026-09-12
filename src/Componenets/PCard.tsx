import { useState } from 'react';
import Card from './Card';
import type { IDataType } from './Type/IType';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import Flogo from '../assets/logo-text.png'
import { LuDot } from 'react-icons/lu';
import { PiDotOutlineFill } from 'react-icons/pi';

export interface CardProps {
  pcard: IDataType[];
}

const PCard = ({ pcard }: CardProps) => {
  const [select, setSelect] = useState<IDataType[]>([]);

  return (
    <div>
    <div className=" grid grid-cols-1 md:flex justify-between gap-10  my-10">
      <div className="grid grid-cols-1 px-7 flex-4  md:px-0 mx-auto md:mx-0 md:grid-cols-3 gap-4  mt-5 ">
        {pcard.map((card) => (
          <Card
            card={card}
            key={card.id}
            select={select}
            setSelect={setSelect}
            isSelected={select.some((item) => item.id === card.id)} 
          />
        ))}
      </div>
      <div className="  w-[390px] mx-auto rounded-2xl  py-5 mb-10 px-20 md:px-0 md:mx-0 md:border-0 md:mt-6 md:w-[220px]">
        <div className="">
          <h2 className="text-2xl font-bold">Your Stack</h2>
          <p className="text-gray-400 ">
            {select.length === 0 ? ' ' : select.length}{' '}
            {select.length === 0
              ? 'No Technology Selected'
              : 'Technology Selected'}
          </p>
          {select.length === 0 ? (
            <div className="text-gray-400 mt-5 text-center border-2 border-dotted border-gray-500 rounded-md py-4 px-1">
             Your Stack Is Empty
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-5">
              {select.map((selectcard) => (
                <div
                  key={selectcard.id}
                  className="flex items-center justify-between border border-gray-400 rounded-md px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={selectcard.icon}
                      className="w-[40px] h-[40px]"
                      alt={selectcard.alt}
                    />
                    <div>
                      <p className="text-lg font-bold">{selectcard.name}</p>
                      <p className="text-gray-400 text-[12px]">
                        {selectcard.category}
                      </p>
                    </div>
                  </div>

                  <RxCross2
                    className=" text-gray-400 cursor-pointer text-2xl"
                    onClick={() => {
                      setSelect(
                        select.filter((card) => card.id !== selectcard.id)
                      );
                      toast.info('Removed From Stock!', {
                        position: 'bottom-right',
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mx-auto mt-10 px-2  pl-4">
          <button
  className="btn px-15 border border-orange-500 text-orange-600"
  onClick={() => {
    setSelect([]);
    toast.info("Removed From Stock!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }}
  disabled=
  {select.length===0?true:false}
>
  Remove All
</button>

          </div>
        </div>
      </div>
    </div>




    <div className=' mt-30 px-5 grid  grid-cols-1 text-center md:grid-cols-2 md:text-left py-7 md:text-left'>  
     <div className='space-y-2'>
<div className='flex justify-center md:justify-start'>
  <img src={Flogo} alt="" />
  </div>
<p  className='text-gray-500 text-[12px] md:text-[15px] '>Curated tools, technologies, and resources for developers building <br />
modern software.</p>
<div className='flex  items-center gap-2 font-semibold text-gray-600 justify-center md:justify-start '>
  <a href="GitHub">GitHub</a>
<PiDotOutlineFill className='block md:hidden'  />
  <a href="Twitter">Twitter</a>
<PiDotOutlineFill className='block md:hidden'  />
  <a href="LinkedIn">LinkedIn</a>
</div>
     </div>


     <div className=' md:flex  justify-between text-md font-semibold hidden md:block'> 
      <ul className='space-y-2 text-gray-500   '>
        <li className='font-bold mb-5 text-black'>PRODUCT</li>
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
      </ul>
      <ul className='space-y-2 text-gray-500 '>
        <li className='font-bold mb-5 text-black'>COMPANY</li>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
      <ul className='space-y-2 text-gray-500  '>
        <li className='font-bold mb-5 text-black'>LEGAL</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
     </div>
    </div>


<div className='mt-20 text-[12px] md:text-normal text-gray-400 py-4 container flex justify-between items-center px-5 md:px-2'>
  <li className='list-none'>© 2026 Dev Stack. All rights reserved.</li>
  <div className='flex justify-between items-center gap-5'>
    <a href="Privacy">Privacy</a>
    <a href="Terms">Terms</a>
  </div>
</div>

    </div>
  );
};

export default PCard;
