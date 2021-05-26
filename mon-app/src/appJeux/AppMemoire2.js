import React,{useState,useEffect} from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './styles/memoire.css';
import MemoireComponent from './component/MemoireComponent';
import Chat from './image/imageMem/chat.jpg';
import Chien from './image/imageMem/chien.jpg';
import Jaco from './image/imageMem/jaco.jpg';
import Chien1 from './image/imageMem/chien1.jpg';
import Ecureuil from './image/imageMem/ecureuil.jpg';
import Singe from './image/imageMem/singe.jpg';
import Tigre from './image/imageMem/titre.jpg';
import Lapin from './image/imageMem/lapin.jpg';


const imageA=[Chat,Jaco,Chien,Lapin,Chien1,Singe,Tigre,Ecureuil]

function isResolu(tab){
  var total=0;
  for(var i=0; i<tab.length; i++){
     
     total=total+tab[i];
   }

   return total;
}

function melange(tab){
    var a=0;
    var t;
    for(var i=tab.length-1; i>=0; i--){
      a=Math.floor(Math.random() * Math.floor(tab.length));
      t=tab[a];
      tab[a]=tab[i];
      tab[i]=t;
    
    }
    return tab;
}

const imaFi=melange(imagF());

function imagF(){
  var tab=[];
  var k=0;

  
  return imageA.concat(imageA);
}

function construireVrai(ind){
  var tab=[];
  var k=0;


  for(var i=0; i<ind; i++){
    for(var j=0; j<ind; j++){
       tab[k]=true;
 
            k++;   
      }
      
  }
  return tab;

}

function construireFaux(ind){
  var tab=[];
  var k=0;
  

  for(var i=0; i<ind; i++){
    for(var j=0; j<ind; j++){
       tab[k]=false;
 
            k++;   
      }
      
  }
  return tab;
}

function construireTab(ind){
	var tab=[];
	var tab1=[];
	var k=0;

	for(var i=0; i<ind; i++){
		for(var j=0; j<ind; j++){
			 tab[k]=[i,j];

               k++;
			}
	}
	return tab;

}


function TabMem({imag,etat,onClick}){
    let ligne=[];
    let k=0;

   // console.log("test")

	for(var i=0; i<4; i++){
		let colonne=[];
		for( var j=0; j<4; j++){
						colonne.push( <MemoireComponent etat={etat[k]} imag={imag[k]} key={k} id={k} onClick={onClick}/>);
			k++;
		}

		ligne.push(<div className="row1" key={i}>{colonne}</div>);
	}
//
	return ligne;
		
}//

function ComposantMem(props){
    let ligne=[];
    let k=0;

   // console.log("test")

	for(var i=0; i<4; i++){
		let colonne=[];
		for( var j=0; j<4; j++){
						colonne.push( <MemoireComponent etat={props.etat[k]} imag={props.imag[k]} key={k} id={k} onClick={props.onClick}/>);
			k++;
		}

		ligne.push(<div className="row1" key={i}>{colonne}</div>);
	}
//
	return(
		<div className="wrap">
           {ligne}
		</div>
		)
}//

function retour(taa,fal,tf,affR){
   if(taa.length===2){
      // setTimeout(console.log,2000,fal);
       setTimeout(affR,3000,tf,true,true,2);
         // console.log(fal)
  }
}



function AppMemoire2(){
 
	const [id,setId]=useState(0);
	const [eta,setTa]=useState(true);

	const[v,setV]=useState(true);
    
    const[ti,setTi]=useState(0);
	const t=construireTab(4);
  const tf=construireFaux(4);
  const tv=construireVrai(4);


  // const[boot,setBoot]=useState(boolF);
	const[etat,setEtat]=useState(tv);
	const[taa,setTaa]=useState([]);
	const[affi,setAffi]=useState(true);
  const[fal,setFal]=useState(false);
   
  const[idi,setIdi]=useState(0);

  const[imaF,setImaF]=useState(imaFi)
   const aff=()=>{
   	 // alert("test");
   	 setEtat(tf);
   }
      
    const affD=(boo,v1,v2,id1,id2)=>{
   	 // alert("test");
      boo[id1]=v1;
      boo[id2]=v2;
   	 setEtat(boo);
     }

  const affR=(boo,v1,id1)=>{
     // alert("test");
      boo[id1]=v1;
     setEtat(boo);
     }
  const handleClic=()=>{}
  const handleRestart=()=>{
    setEtat(tf);
    setImaF(melange(imaFi));
    window.location.reload();
  }
      

	const handleClick=(event)=>{

    //setId(event.target.id)
     const tabM=TabMem({imag:imaF,etat:etat,onClick:handleClic});
     const ta=taa.slice();
     const etatt=etat.slice();
       
       if(ta.length===0){
		ta.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
                  //console.log(taa)
                  setIdi(event.target.id);
             }
             else if(ta.length===1&& idi!==event.target.id){
             	ta.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
               //console.log(taa)
               setId(event.target.id);
             } else{}
	 etatt[event.target.id]=true;

   setTaa(ta);
 
   setEtat(etatt);
	}

   useEffect(()=>{
     const etat1=etat.slice(); 
   	   if(eta){
		setTa(false);
		setTimeout(aff, 2000);
		
	} else{}
 
  //console.log(taa.length)
  if(taa.length===2&&isResolu(etat)!==16){
      if(taa[0].ima!==taa[1].ima){
      // setTimeout(etat1[idi]=false,1000);
      //setTimeout(etat1[id]=false,1000);
      
      setTimeout(affD,1000,etat1,false,false,taa[0].id,taa[1].id)
       // setEtat(etat1)
        setTaa([])
      }
      else{
         setTaa([])
      }
    
  }
  
    // console.log(isResolu(etat))
   },[eta,setTa,taa,setTaa]);

  const isR= (isResolu(etat)===16&&id!==0)?<div className="cent"><h4>Felicitations</h4></div>:<div></div>
   //   
	return(
  
    <div>
       <div>{isR}</div>
	    <ComposantMem etat ={etat} imag={imaF} onClick={handleClick}/>
        <Row md= "6" className="justify-content-md-center">
       <Button as={Col} variant="secondary" onClick={handleRestart}>Restart</Button>
       </Row>

	</div>
	     )
	     //
}

export default AppMemoire2
