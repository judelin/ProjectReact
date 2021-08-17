import React from 'react';

export function Carre(props) {
   return (
      <div className="carree" id={props.id} onClick={props.onClick}><h1 id={props.id} className="item">{props.valeur}</h1></div>

   );
}//

export function CarreComponent(props) {
   return (
      <div className="columnnn">
         <Carre valeur={props.valeur} carre={props.carre} id={props.id} onClick={props.onClick} />
      </div>
   );

}

export function CarreVal(i, valeur, onClick, carre){

   return(
       <CarreComponent valeur={valeur[i]} id= {i} carre={carre} onClick={()=>onClick(i)}/>
   );
}