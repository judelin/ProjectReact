import React from 'react';
import '../styles/styles.css';

function Carre(props){

    
	return(
      <div className="column">
      <button className="carre" onClick={()=>props.onClick()}>{props.part}</button> 
      </div>
	)
}
export default Carre;