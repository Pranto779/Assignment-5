import type { IDataType } from './Type/IType';

export interface CardProps {
  card: IDataType;
}
const Card = ({ card }: CardProps) => {
  console.log(card);

  return (
    <div>
   <div className="max-w-sm rounded-lg shadow-lg border p-6 bg-white">
     
      <div className="flex items-center justify-between mb-4">
        <img src={card.icon} alt={card.alt} className="w-12 h-12" />
        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
          {card.hipe}
        </span>
      </div>

  
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{card.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
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

   
   

  
      <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
        Add to Stack
      </button>
    </div>
    
    </div>
  );
};

export default Card;
