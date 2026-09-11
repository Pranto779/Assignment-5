
import { useState } from "react";
import Card from "./Card";
import type { IDataType } from "./Type/IType";

export interface CardProps {
    pcard: IDataType[]
}

const PCard = ({ pcard }: CardProps) => {
     const [select, setSelect] = useState<IDataType[]>([]);
 
    
    return (
       <div className="flex justify-between gap-10 ">

         <div className="grid grid-cols-1 px-7 flex-4  md:px-0 mx-auto md:mx-0 md:grid-cols-3 gap-4  mt-5 ">
            {
                pcard.map(card=><Card card={card} key={card.id} select={select} setSelect={setSelect}></Card>)
            }
           
        </div>
           <div className=" hidden md:block mt-6 w-[220px]">
              <h2 className="text-2xl font-bold">Your Stack</h2>
              <p className="text-gray-400">{select.length} Technology Selected</p>
        {
            select.map(selectcard=>(
                <div className="flex gap-2 items-center mt-5">
                    <img src={selectcard.icon} className="w-[50px] h-[50px]" alt={selectcard.alt} />
                  <div>
                    <p className="text-xl font-bold">{selectcard.name} </p>
                    <p className="text-gray-400 text-[12px]">{selectcard.category} </p>
                  </div>
                </div>
            ))
        }
    </div>
       </div>
       
    )
}

export default PCard;