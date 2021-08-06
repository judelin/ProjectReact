import React from 'react';
//import { Image, Container} from 'react-bootstrap';
import Couvert from '../image/imageMem/couvert.jpg';
import './affBra.css';

function ImageDet(props){
		return(
	    <div className="column">
	       <img src={props.src} className="image" id={props.id} lig={props.lig} onClick={props.onClick} alt="jeu"/>

	    </div>
	)//
}

export function ImageComposant(props){
    
    const etat = props.etat;
	const affiche = etat ? <ImageDet src={props.src} id={props.id} lig={props.lig}/>:
	<ImageDet src={Couvert} id={props.id} lig={props.lig} onClick={props.onClick}/> //
	return(
	    <>
	     
          {affiche}
	    </>
	)//
}


function ImageComponent(props){
  return(
  <div  onClick={props.onClick}>
      <img src={props.src} className="image" alt="imge"/>
  </div>
  )//
}

export function AfficheComponent(j, etat, src, onClick){
  let i = j;
  const affiche = etat? <ImageComponent etat ={etat} src={src} onClick ={()=>onClick(i)}/>:
   <ImageComponent etat ={etat} src={Couvert} onClick ={()=>onClick(i)}/>
  return(
    <>
         {affiche}
         </>
    )
}//


function CouleurComponent(props){
  return(
  <div  onClick={props.onClick}>
      <div className="image" style={{backgroundColor:props.col}}></div>
  </div>
  )//
}

export function AfficheComponentCouleur(j, etat, col, onClick){
  let i = j;
  const affiche = etat? <CouleurComponent etat ={etat} col={col} onClick ={()=>onClick(i)}/>:
   <CouleurComponent etat ={etat} col="gray" onClick ={()=>onClick(i)}/>
  return(
    <>
         {affiche}
         </>
    )
}//

function LettreComponent(props){
  return(
  <div  onClick={props.onClick}>
      <div className="image" style={{backgroundColor:props.col}}><h2 className="alignCenter">{props.lettre}</h2></div>
  </div>
  )//
}

export function AfficheComponentLettre(j, etat, col, lettre, onClick){
  let i = j;
  const affiche = etat? <LettreComponent etat ={etat} lettre={lettre} onClick ={()=>onClick(i)}/>:
   <LettreComponent etat ={etat} col={col} onClick ={()=>onClick(i)}/>
  return(
    <>
         {affiche}
         </>
    )
}//

/*
.layout {
  display: flex;
  flex-wrap: wrap;
}
.child {
  min-height: 100px;
  background: orange;
  flex: calc(100% / 3);
  text-align: center;
  line-height: 100px;
  border: 5px solid white;
}

* {
  box-sizing: border-box;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
*/