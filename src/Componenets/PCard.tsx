import Card from "./Card";
import type { IDataType } from "./Type/IType";

export interface CardProps {
    pcard: IDataType[]
}

const PCard = ({ pcard }: CardProps) => {
    console.log(PCard);
    
    return (
       <div className="flex justify-between gap-10 ">

         <div className="grid grid-cols-1 px-7 flex-4  md:px-0 mx-auto md:mx-0 md:grid-cols-3 gap-4  mt-5 ">
            {
                pcard.map(card=><Card card={card} key={card.id}></Card>)
            }
           
        </div>
         <div className="w-[200px] h-[40px] bg-amber-400 flex-1">
nljbkhvjcgxfgchvjbknlm;
            </div>
       </div>
       
    )
}

export default PCard;