import React from 'react';
import '../styles/styles.css';

export function Carre(props){

    
	return(
      <div className="column">
      <button className="carre" onClick={()=>props.onClick()}>{props.part}</button> 
      </div>
	)
}

 function CarreComponent(props){
 
    return(
      <div className="column">
      <button className="carre" onClick={()=>props.onClick()}>{props.valeur}</button> 
      </div>
    );

}

export function CarreVal(i, valeur, onClick){

    return(
        <CarreComponent valeur={valeur[i]} onClick={()=>onClick(i)}/>
    );
}