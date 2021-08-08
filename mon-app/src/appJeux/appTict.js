import React, { useState, useEffect } from 'react';
import { useMachine } from "@xstate/react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { jeuMachine } from "./jeuMachine/jeuMachine";

import './AppTict.css';

function Carre(props) {
   return (
      <div className="carree" id={props.id} onClick={props.onClick}><h1 id={props.id} className="item">{props.valeur}</h1></div>

   );
}//

function CarreComponent(props) {
   return (
      <div className="columnnn">
         <Carre valeur={props.valeur} carre={props.carre} id={props.id} onClick={props.onClick} />
      </div>
   );

}

function TabBoardV(props) {
  

   let n = props.n;
   let ligne = [];
   let id = 0;
   for (var i = 0; i < n; i++) {
      let colonne = [];
      for (var j = 0; j < n; j++) {
         let val = props.valeur[id];
         if (val === 0) {
            val = null;
         }
         colonne.push(<CarreComponent valeur={val} key={id} id={id} onClick={props.onClick} />)
         id = id + 1;
      }//

      ligne.push(<div key={i} className="rowww">{colonne}</div>)

   }//
   return ligne;
}
function AppTic(){
   const [state, send] = useMachine(jeuMachine);

  const Cart = (i)=>{

  	return(
  		<CarreComponent onClick = {(e) => {send("CLICK",{id: i})}} valeur={state.context.valuee[i]}/>
  		)
  }
 
return(
  <div className="row11">
    <div className="colum2">

        <div className="rowww">
        {Cart(0)}
        {Cart(1)}
        {Cart(2)}
        </div>

        <div className="rowww">
        {Cart(3)}
        {Cart(4)}
        {Cart(5)}
        </div>

        <div className="rowww">
        {Cart(6)}
        {Cart(7)}
        {Cart(8)}
        </div>
 
        </div>
        <div className="colum2">
          <h4>Score X: {state.context.count} O:{state.context.countt}</h4>
          <h4>{state.context.message}</h4>
         
      
        <Button variant="secondary" onClick={() => send("GAME")}>Redemarer</Button>

        </div>
        </div>

        
     )
}

export default AppTic;

/*

return(
			<div className="wrap">
			<div className="row">
              <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
               <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
                <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                 <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                
              </div>
              <div className="row">
              <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
               <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                 <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                
              </div>

              <div className="row">
              <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
               <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
                <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                 <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
                
              </div>
               <div className="row">
              <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
               <TuileComponent valeur={this.state.valeur} carre={this.state.color}/>
                <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
                 <TuileComponent valeur={this.state.valeur} carre={this.state.color} />
                
              </div>
              </div>
			);
            */