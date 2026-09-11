import { use } from 'react';
import type { IDataType } from './Type/IType';
import PCard from './PCard';

export interface ParentDataProps {
  data: Promise<IDataType[]>;
}

const ParentData = ({ data }: ParentDataProps) => {
  console.log(data);
  const info = use(data);
  console.log(info);

  return (
    <div className="container mx-auto ">
      <div className="space-y-2 py-10">
        <h1 className="text-2xl font-bold text-center md:text-left md:text-4xl">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-sm md:text-base text-gray-500 text-center md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div>
        <PCard pcard={info}></PCard>
      </div>
    </div>
  );
};

export default ParentData;
