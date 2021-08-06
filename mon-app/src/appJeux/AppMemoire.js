import React,{useState,useEffect} from 'react';
import MemoireComponent from './component/MemoireComponent';

import Couvert from './image/imageMem/couvert.jpg';
import { Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import {AfficheComponent, AfficheComponentCouleur, AfficheComponentLettre} from './component/imageComposant';
import './component/affBra.css';
import {jsonImag, jsonImagee, jsonImagee1, jsonImagee2,jsonImageeL, 
	jsonImageeL1, jsonImageeL2, jsonCol, jsonCol1, jsonCol2 ,melange} from './component/data';



//const jsonImagie = jsonImag.concat(jsonImag);
//const jsonImagee = melange(jsonImagie);

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


	const tf = construireFaux(4);
	const tf1 = construireFaux(5);
		const tf2 = construireFaux(6);
  const tv = construireVrai(4);
  const tv1 = construireVrai(5);
  const tv2 = construireVrai(6);


function TabBoard(props){
	let sqrt = Math.round(Math.sqrt(props.tab.length));
	let tab = props.tab;
	let onClick = props.onClick;
	const etat = props.etat;
  const col = "gray"
	//alert(sqrt)
	let ligne = [];
	let  id = 0;
	//const affiche = AfficheComponent()
	for(var i = 0; i<sqrt; i++){
         let colonne = [];
		for(var j = 0; j<sqrt; j++){
			const affiche = (props.type === "image") ?
      AfficheComponent(id, etat[id], tab[id].imag, onClick):(props.type === "lettre")?
      AfficheComponentLettre(id, etat[id], col, tab[id].imag, onClick): AfficheComponentCouleur(id, etat[id], tab[id].imag, onClick);
			colonne.push(<div className="column" key={id}>{affiche}</div>);
          id = id+1;
		}//

		ligne.push(<div key={i} className="row">{colonne}</div>)

	}//
	return ligne;
}//

function AppMemoire(){
	//const jsonImagee = jsonImage.concat(jsonImage);

  const [etatt, setEtatt] = useState(true);

	const [pair, setPaire] = useState([]);
	const [id1, setId1] = useState(0);
	const [id2, setId2] = useState(0);
	const[etat1, setEtat1] = useState(false);
	const[etat2, setEtat2] = useState(false);
	const[longueur, setLongueur] = useState(4)
//	const [imageType, setImageType] = useState("animaux");
  const [type, setType] = useState("image");


	const [etat, setEtat] = useState(tv);
  const[tabImage, setTabImage] = useState(jsonImagee);
  const [result, setResult] = useState(0);

  const etatM = etat.slice();
  const tabI = tabImage.slice();
	const listPair = pair.slice();

	//console.log(imagi[0].etat)
    //const listPair = pair.slice();
 function retourner(indic1, indic2, paire){

	 etatM[indic1] = false;
   etatM[indic2] = false;
   setPaire([]);
   setEtat(etatM);
}

   function handleRestart(){

   	if(longueur === 4){
     setEtat(tv)
     setTimeout(setEtat, 2000, tf);
       if(type === "image"){
        setTabImage(melange(jsonImagee));
    } else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL));
    } else{
       setTabImage(melange(jsonCol));
     }
   }
   else if(longueur === 5){
   	   if(type === "image"){

       setTabImage(melange(jsonImagee1));
     }
     else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL1));
    } else{
       setTabImage(melange(jsonCol1));
     }
       setEtat(tv1)
       setTimeout(setEtat, 2000, tf1);
   }
   else{
   	 
    if(type === "image"){
       setTabImage(melange(jsonImagee2));
      }
       else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL2));
    } else{
       setTabImage(melange(jsonCol2));
     }
       setEtat(tv2)
       setTimeout(setEtat, 2000, tf2);
   }
   setResult(0);
  }

   function handleImage(){
   	 setTabImage(melange(jsonImagee));
   	// setImageType("animaux");
      setType("image");
   }

    function handleCouleur(){
     setTabImage(melange(jsonCol));
     setType("couleur");
    // setImageType("couleur")
   }

    function handleImageLettre(){
   	 setTabImage(melange(jsonImageeL));
   	// setImageType("lettre");
      setType("lettre");
   }


   function handleClic4x4(){

   	  if(type === "image"){
        setTabImage(melange(jsonImagee));
    } else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL));
    }
    else{
       setTabImage(melange(jsonCol));
     }
      setEtat(tv)
      setTimeout(setEtat, 2000, tf);
      setLongueur(4);
      setResult(0);
  
  }

   function handleClic5x5(){

   	 if(type === "image"){

       setTabImage(melange(jsonImagee1));
     }
     else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL1));
    }
    else{
       setTabImage(melange(jsonCol1));
     }
       setEtat(tv1)
       setTimeout(setEtat, 2000, tf1);
       setLongueur(5);
       setResult(0);
  
  }
    function handleClic6x6(){

    if(type === "image"){
       setTabImage(melange(jsonImagee2));
      }
       else if(type === "lettre") {
    	  setTabImage(melange(jsonImageeL2));
    }
     else{
       setTabImage(melange(jsonCol2));
     }
       setEtat(tv2)
       setTimeout(setEtat, 2000, tf2);
       setLongueur(6);
       setResult(0);
 
  }

	function handleClic(i){
		
        if(pair.length === 0 && etatM[i] === false){
          //setPaire([]);
           	listPair[0] = tabI[i].id;
          	etatM[i] = true;
          	setId1(i);
          	setEtat1(true);

          	console.log("etat1");
        }
        else if(pair.length === 1 && etatM[i] === false){ 
             listPair[1] = tabI[i].id;
             etatM[i] = true;
             setId2(i);
             setEtat2(true);
             console.log("etat2");
             //setPaire(listPair);
         }
         
         else{

         }
            //	console.log(listPair);
           setPaire(listPair);
           	setEtat(etatM)
          
	}

 useEffect(()=>{
    if(etatt){
    	console.log("false")
    	setEtatt(false);
      setTimeout(setEtat, 2000, tf);
    
    }
    
   // console.log(tab[0])
   },[setEtatt]);
 
	 useEffect(()=>{
  
     if(pair.length === 2 && etat1 && etat2){
        	setEtat1(false);
     	  setEtat2(false);
       if(pair[0] === pair[1]){
      	  //alert("egal");
      	 console.log(pair[0]+" "+pair[1]);
      	 setPaire([]);
      	 setResult(result + 1);


      }
      else {
      	if(etat1 && etat2){
      	setTimeout(retourner, 1000, id1, id2, pair);
      	console.log(pair);
        console.log("retourner "+pair.length);
      }
      
      }
  }else{
      
  }
  
   console.log(result);

    
   },[pair, setPaire]);

    const isWin = result === (tabImage.length/2) ? <Row><h1>Félicitation</h1></Row>:<Row> <h1>Tester votre capacité de memoriser</h1></Row>;

	return(
		   <div> 
		      
		         {isWin}
		       <TabBoard etat={etat} type={type} tab={tabImage}onClick={(i) => handleClic(i)}/>
		         <br/>
             <Row md= "2" className="justify-content-md-center">
                <ButtonGroup>
                  <Button  variant="secondary" onClick={handleClic4x4}>4x4</Button>
                  <Button  variant="secondary" onClick={handleClic5x5}>5x5</Button>
                  <Button  variant="secondary" onClick={handleClic6x6}>6x6</Button>
               </ButtonGroup>
             
             </Row>
                 <br/>
             <Row md= "2" className="justify-content-md-center">
                <ButtonGroup>
                  <Button  variant="secondary"  onClick={handleImage} >Animaux</Button>
                  <Button  variant="secondary" onClick={handleImageLettre}>Lettre</Button>
                  <Button  variant="secondary" onClick={handleCouleur}>Couleur</Button>
               </ButtonGroup>
             </Row>
		           <Row md= "6" className="justify-content-md-center">
       <Button as={Col} variant="secondary" onClick={handleRestart}>Restart</Button>
       </Row>
		    </div>
		);//
}
//

export default AppMemoire;

