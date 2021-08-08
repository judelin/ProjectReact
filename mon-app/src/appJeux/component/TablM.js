import React,{useState} from 'react';
import { useMachine } from "@xstate/react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { jeuMachine } from "../jeuMachine/jeuMachine";

import {Carre} from './Carre';
import '../styles/styles.css';



function winnerByline(valeur,line){
	return (valeur[line[0]]==="X"&&valeur[line[0]] === valeur[line[1]]&&valeur[line[2]] === valeur[line[0]]||
		valeur[line[0]] === "O"&&valeur[line[0]] === valeur[line[1]]&&valeur[line[2]] === valeur[line[0]]);
}
function calculWinner(valeur){
	const prob = [
	   [0,1,2],[3,4,5],[6,7,8],[0,3,6],
	   [1,4,7],[2,5,8],[0,4,8],[2,4,6]
	];
  const bol = prob.map(line=>winnerByline(valeur,line));
 const reducer = (accumulator, currentValue) => accumulator + currentValue;


return bol.reduce(reducer) === 1 || bol.reduce(reducer) === 2;
  
}

function TablM(){
   const [state, send] = useMachine(jeuMachine);

  const Cart = (i)=>{

  	return(
  		<Carre onClick = {(e) => {send("CLICK",{id: i})}} part={state.context.valuee[i]}/>
  		)
  }
 
return(
  <div>
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
          <h4>Score X: {state.context.count} O:{state.context.countt}</h4>
          <h4>{state.context.message}</h4>
         
      
        <Button variant="secondary" onClick={() => send("GAME")}>Redemarer</Button>

        </div>
        </div>

        
     )
}

export default TablM;




/*
 function calculGagnant(valeur,line){

 // console.log(line);
  let k={};

    if(valeur[line[0]]==="X"&&valeur[line[1]]==="X"&&valeur[line[2]]===null){
      k={ind:line[2],ver:true};
     }

    else if(valeur[line[2]]==="X"&&valeur[line[1]]==="X"&&valeur[line[0]]===null){
      k={ind:line[0],ver:true};
    }
    else if(valeur[line[0]]==="X"&&valeur[line[2]]==="X"&&valeur[line[1]]===null){
     k={ind:line[1],ver:true};
    }
    else{
      if(valeur[line[0]]==="O"&&valeur[line[1]]==="O"&&valeur[line[2]]===null){
      k={ind:line[2],ver:true};
     }

    else if(valeur[line[2]]==="O"&&valeur[line[1]]==="O"&&valeur[line[0]]===null){
      k={ind:line[0],ver:true};
    }
    else if(valeur[line[0]]==="O"&&valeur[line[2]]==="O"&&valeur[line[1]]===null){
     k={ind:line[1],ver:true};
    }
    else{
         const isNull = (element) => element ===null;
         const taa=tabAlea(valeur);
         console.log(taa+ " tab");
         melange(taa)
      const i=taa[0]; 
      k={ind:i,ver:false};//Math.floor(Math.random() * Math.floor(valeur.length-1));
    }
    }
    return k;

 }


*/