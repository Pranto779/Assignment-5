import Card from "./Card";
import type { IDataType } from "./Type/IType";

export interface CardProps {
    pcard: IDataType[]
}

const PCard = ({ pcard }: CardProps) => {
    console.log(PCard);
    
    return (
        <div className="grid grid-cols-1 px-7 md:px-0 mx-auto md:mx-0 md:grid-cols-3 gap-4 w-[1050px] mt-5 ">

            {
                pcard.map(card=><Card card={card} key={card.id}></Card>)
            }
        </div>
    )
}

export default PCard;