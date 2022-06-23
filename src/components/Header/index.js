import { useMemo, useState } from "react";
import New from "./new";

export default function CalculateFactorial() {
    const [data, setData] = useState(0)
    const number = useMemo(() => {
        return verySlowFunction(data)
      }, [data])
   return(
 <>
    <div onClick={() => setData(2)}>{number}</div>  
    <New /> 
 </>
   )
}

function verySlowFunction(input){
    return input;
  }
  
