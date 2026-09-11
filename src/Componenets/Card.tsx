import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IDataType } from './Type/IType';
import { toast } from 'react-toastify';

export interface CardProps {
  card: IDataType;
  select:IDataType[]
  setSelect:Dispatch<SetStateAction<IDataType[]>>
  selectcard:IDataType
}
const Card = ({ card , select,setSelect,selectcard}: CardProps) => {
 const [isSelected,setisSelected]=useState(false)
const HandleButton = () => {
  setisSelected(!isSelected);
  setSelect([...select,card])
  if (!isSelected) {
    toast.success('Added to Stock !', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  } else {
    toast.info('Remove To Stock!', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});;
  }
};


  return (
    
    <div className='flex justify-between gap-10'>
   <div className=" rounded-2xl shadow-lg  p-6 bg-white border border-gray-300">
     
      <div className="flex items-center justify-between mb-4">
        <img src={card.icon} alt={card.alt} className="w-12 h-12" />
        <span className=  {`font-bold ${card.hipe==="Popular"?"text-sky-400":card.hipe=="Standard"?"text-green-400":card.hipe==="Fast"?"text-orange-400":card.hipe==="Top SQL"?"text-blue-500":"text-red-500"} text-xs px-3 py-1 rounded`}>
          {card.hipe}
        </span>
      </div>

  
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>

      
      <p className="text-gray-600 mb-4">{card.description}</p>

    
      <div className="flex flex-wrap justify-between gap-5 mb-4 px-4">
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
          {card.category}
        </span>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
          {card.level}
        </span>
           <div className="flex items-center mb-4">
        <span className="text-yellow-500">⭐</span>
        <span className="ml-1 text-sm font-semibold">4.9</span>
      </div>
      </div>

   
   

  
      <button onClick={HandleButton} className={`w-full ${isSelected?"bg-pink-200 text-pink-700": "bg-gray-900 text-white" } py-2 rounded`} disabled={isSelected?true:false}>
       {isSelected?"✔ Added To Stock":" Added To Stock"}
      </button>
    </div>
    

 </div>
   
   
   
  );
};

export default Card;
