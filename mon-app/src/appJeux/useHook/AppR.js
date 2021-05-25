import React, {useState,useCallback} from "react";
import {Hello} from "./Hello";
import{Square} from "./Square";

const AppR=()=>{
	const [count,setCount]=useState(0);

    const favoriteNums=[7,21,37];

    const increment=useCallback(n=>{
    	setCount(c=>c+n);
    	//return 5;
    },[setCount]);
	return (
      <div>
            <Hello increment={increment}/>
            <div>count: {count}</div>

            {favoriteNums.map(n=>{
            	return(
                  <Square increment={increment} n={n} key={n}/>
            	)
            })}
      </div>
   )
}
export default AppR;




/*

const srcee=getTab({tab:[1,2,3,4,5]});

const affich=()=>{
  melange(srcee)
   console.log("test")

  setTabi(srcee)
    //send("BRASSER");
 
  // alert("afficher")
}

  
   const handleCli= useCallback(event => {
   const ttt=srcee;
      console.log(ttt)
      alert(event.target.id)
    
     
      setTabi(echange(ttt,4,event.target.id))
      
  }, [tabi,setTabi]);

*/