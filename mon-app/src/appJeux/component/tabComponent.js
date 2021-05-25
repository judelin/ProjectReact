import React from 'react';
import '../styles/echec.css';
import {Echec,Trash} from "../image/echec";
import Imagg from '../image/imageEchec/roiw.png'

//♕♕♜♜♜
 //♟ ♛
 //   &#9823;&#65039;
function TabComponent(props){
	
	return(
	   <div id={props.id} style={props.styles} onClick={props.onClick}>
	  <img src={props.imagg} width="40" height="40" id={props.id} alt="0"/>
	   </div>

	)
}

export default TabComponent;