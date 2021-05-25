import React,{useState} from 'react';

import Carre from './Carre';
import '../styles/styles.css';



function winnerByline(valeur,line){
	return (valeur[line[0]]==="X"&&valeur[line[0]]===valeur[line[1]]&&valeur[line[2]]===valeur[line[0]]||
		valeur[line[0]]==="O"&&valeur[line[0]]===valeur[line[1]]&&valeur[line[2]]===valeur[line[0]]);
}
function calculWinner(valeur){
	const prob=[
	   [0,1,2],[3,4,5],[6,7,8],[0,3,6],
	   [1,4,7],[2,5,8],[0,4,8],[2,4,6]
	];
  const bol=prob.map(line=>winnerByline(valeur,line));
 const reducer = (accumulator, currentValue) => accumulator + currentValue;


return bol.reduce(reducer)===1||bol.reduce(reducer)===2;
  
}

function Tabl(){

	const[value,setValue]=useState(Array(9).fill(null));
	const[id,setId]=useState(Array(9).fill(0));
    const[count,setCount]=useState(1);
        const[countt,setCountt]=useState(1);
    const [tab,setTab]=useState(Array(1).fill("O"));
    const [message,setMessage]=useState("");
	//console.log(value)
   
    const handleClick=(i)=>{
        const valeur= value.slice();
        const ide=id.slice();

        const va=tab[0]==="X"?"O":"X";
        
       if(ide[i]===0 &&calculWinner(valeur)===false){
 	    valeur[i]=va;
 	     setTab(va);
 	
 		if(tab[0]==="O" &&calculWinner(valeur)===true){
 				setCountt(countt+1)
 				setMessage("X a gagné  "+countt+" fois");
 		}
 			else if(tab[0]==="X" &&calculWinner(valeur)===true){
 				setCount(count+1)
 				setMessage("O a gagné  "+count+" fois");

 			}
 			else{
 				setMessage("Aucun gagnant");
 			}
 		}
 		else{}
 		
 	

 	    ide[i]=i+1;

 	  
 	 // console.log(tab)
 	    setValue(valeur); 
 	    setId(ide);
 	    console.log(calculWinner(valeur));

   }

 const handleGame=()=>{
        const valeur= value.slice();
          const ide=id.slice();
        
 	    valeur.fill(null)
 	    ide.fill(0)
 	    setValue(valeur);
 	    setTab("O")
 	    setMessage("");
 	        setId(ide);   

   }
  const Cart=(i)=>{

  	return(
  		<Carre onClick={()=>handleClick(i)} part={value[i]}/>
  		)
  }
 
return(
<div className="row1">
    <div>
        <div className="row">
        {Cart(0)}
        {Cart(1)}
        {Cart(2)}
        </div>

        <div className="row">
        {Cart(3)}
        {Cart(4)}
        {Cart(5)}
        </div>

        <div className="row">
        {Cart(6)}
        {Cart(7)}
        {Cart(8)}
        </div>

        </div>

        <div className="col">
          <h4>{message}</h4>
        <button onClick={handleGame}>Reset</button></div>
        </div>
     )
}

export default Tabl;