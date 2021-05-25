import React from 'react';

import '../styles/memoire.css';
import Chat from '../image/imageMem/chat.jpg';
import Couvert from '../image/imageMem/couvert.jpg';

function MemoireComponent(props){
	let i=0;
	let eta=props.etat;
	//console.log(i++)
	const affich=eta? <div className="im"> <img src={props.imag} width="160" height="140" id={props.id} alt="."/></div>:
	<div className="im"><img src={Couvert} width="160" height="160" id={props.id} alt="."/></div>
//
	return(
	     <div id={props.id} onClick={props.onClick}>
	      {affich}
	   </div>

	)//	
	
}

export default MemoireComponent;


/*


	if(etat){

	return(
	     <div id={props.id} onClick={props.onClick}>
	  <img src={props.imagg} width="70" etat={etat} height="70" id={props.id} alt="0"/>
	   </div>

	)//
	}
	else{
	return(
            <div id={props.id} className="cart" style={{backgroundColor:props.colo}} onClick={props.onClick}>
	  <img src={Chat} width="90" etat ={etat} height="90" id={props.id} alt="."/>
	   </div>
	)//
	}
}




 const handleClick1=(event)=>{
    	//alert(event.target.id)
 
    const tabM=TabMem({imag:imageA,etat:etat,onClick:handleClic});
      setTi(event.target.id)
     		// setTaa(taaa);
       if(taa.length===0){
		taa.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
             }
             else if(taa.length===1){
             	taa.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
      
             } else{}
  
            // setTaa(taaa);
          if(taa.length<=2){
          	boolF[t[taa[0].id][0]][t[taa[0].id][1]]=true;

            if(taa.length===2){
            	//boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;
            	if(taa[0].ima===taa[1].ima){

            	boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;
            } 
            else{
            	//console.log(taa[0])
            	 	boolF[t[taa[0].id][0]][t[taa[0].id][1]]=false;
            	 	//boolF[t[taa[1].id][0]][t[taa[1].id][1]]=false;
            	 setEtat(boolF);
            	 setTaa([])
            }
            setEtat(boolF);
            	 setTaa([])
            }
            else{
            	//setTaa([])
            }
        }else{

        }
           // setEtat(boolF);
         // console.log(taa)
		
    }
*/