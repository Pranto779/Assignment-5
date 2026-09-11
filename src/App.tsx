
import { Suspense } from "react";
import { Herosection } from "./Componenets/Herosection"
import { Nav } from "./Componenets/Nav"
import ParentData from "./Componenets/ParentData";
import type { IDataType } from "./Componenets/Type/IType";


const GetPromise=async():Promise<IDataType[]>=>{
  const res=await fetch('/data.json');
  const data=await res.json();

  return data


}

function App() {


  return (
    <>
   <Nav></Nav>
   <Herosection></Herosection>
  <Suspense  fallback={<p className="text-center">Page Loading...</p>}>
     <ParentData data={GetPromise()}></ParentData>
  </Suspense>
    </>
  )
}

export default App
