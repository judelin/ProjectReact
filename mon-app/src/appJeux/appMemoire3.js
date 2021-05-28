import React, {useState, useEffect} from 'react';
import {ImageComposant} from './component/imageComposant';
import Chat from './image/imageMem/chat.jpg';
import Chien from './image/imageMem/chien.jpg';
import Jaco from './image/imageMem/jaco.jpg';
import Chien1 from './image/imageMem/chien1.jpg';
import Ecureuil from './image/imageMem/ecureuil.jpg';
import Singe from './image/imageMem/singe.jpg';
import Tigre from './image/imageMem/titre.jpg';
import Lapin from './image/imageMem/lapin.jpg';
import { Button, Row, Col} from 'react-bootstrap';
import './component/affBra.css';


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

function TabBoard(ind, tab, etat, onClick){
	let sqrt = Math.round(Math.sqrt(ind));
	
	//alert(sqrt)
	let ligne = [];
	let  id = 0;
	for(var i = 0; i<sqrt; i++){
         let colonne = [];
		for(var j = 0; j<sqrt; j++){
			colonne.push(<ImageComposant etat={etat[id]} src={tab[id]} id={id} key={id} lig={i} onClick={onClick}/>)
          id = id+1;
		}//

		ligne.push(<div key={i} className="row">{colonne}</div>)

	}//
	return ligne;
}


 
  const imag = [Chat,Jaco,Chien,Lapin,Chien1,Singe,Tigre,Ecureuil]
	const imageA = melange(imag.concat(imag));

function AppMemoire3(){
	
     const tf = construireFaux(4);
     const tv = construireVrai(4);
  	const t = construireTab(4);


  const[etat,setEtat] = useState(tv);
  const [id, setId] = useState(0);
  const [id1, setId2] = useState(0);
  const [ tabId, setTabId] = useState([]);
  const [result, setResult] = useState([]);
  const [eta, setEta] = useState(true);


  const tabResult = result.slice();
  const tabInd = tabId.slice();
    const etatt=etat.slice();

     const handleRestart=()=>{
    setEtat(tf);
   // setImaF(melange(imaFi));
    window.location.reload();
  }
    
     
	function handleClick(e){

		//console.log(e.target.src);
		 const i = parseInt(e.target.id, 10);
		//alert(i);
		etatt[i] = true;
		setEtat(etatt);
	
		if(tabId.length <= 1){

			tabInd.push(i);
		  //console.log(tabInd);

			setTabId(tabInd)
		//	alert(tabInd[0])
			//tf[tabInd[0]] = true;

		
		}
		else if(tabId.length >= 2){
			tabInd.pop();
			tabInd.pop();
			setTabId([]);
			tabInd.push(i);
			setTabId(tabInd)
		}
		else{}
		//console.log(e.target.src);
		//console.log(tab[t[i][0]][t[i][0]])
		// console.log(tab[t[i][0]].props.children[t[i][1]])
	}
    
 
   const affD=(boo,v1,v2,id1,id2)=>{
      boo[id1]=v1;
      boo[id2]=v2;
    	setEtat(boo);
     }

    const affOne=(boo,v1,id1)=>{
      boo[id1]=v1;
   	  setEtat(boo);
     }

   const tab = TabBoard(
   	20, imageA, etat, handleClick
   )
     useEffect(()=>{
    if(eta){
    	setEta(false);
     setTimeout(setEtat, 2000, 	tf)

    }
    
   // console.log(tab[0])
   },[setEtat]);

 useEffect(()=>{
 	const etat1 = etat.slice();
 	if(tabId.length === 2 && 
				tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src !== tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src ){
 			if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === true 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === false){
       setTimeout(affOne, 1000, etat1, false, tabId[1]);
     }
       else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === true 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === false){
			    setTimeout(affOne, 1000, etat1, false, tabId[0]);
			 }
			     else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === true){
               setTimeout(affOne, 1000, etat1, false, tabId[0]);
             }
             else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === true){
			     setTimeout(affOne, 1000, etat1, false, tabId[1]);
			 }
     else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === false){
     	    setTimeout(affD, 1000, etat1, false, false, tabId[0], tabId[1]);
     }
     else{}

      // console.log(tabId)
 	}
 	else 	if(tabId.length === 2 && 
 		tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src === tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src){
         // setTimeout(affD, 1000, etat1, true, true, tabId[0], tabId[1]);
          if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false){
 		     tabResult.push(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src);
         setResult(tabResult);
       }else{}
 	} else{}
 //   console.log(tabId)
},[tabId]);

  /*useEffect(()=>{
 
       setTimeout(setEtat, 1000, 	tf)
  
 //   console.log(tabId)
},[setEtat]);*/
  
  const isWin = tabResult.length === 8 ? <Row><h2 className="hh4">Félicitation</h2></Row>:<Row className="hh4"><h2>Memorisation</h2></Row>;

	return(
	    <>  
	      {isWin}

          {tab}
           <Row md= "6" className="justify-content-md-center">
       <Button as={Col} variant="secondary" onClick={handleRestart}>Restart</Button>
       </Row>

	    </>

	)//
}

export default AppMemoire3;




/*
	return(
	    <div>
	       
            <div className="row">
             <ImageComposant id={1} onClick={handleClick}/>
             <ImageComposant/>
             <ImageComposant/>
               <ImageComposant/>
             </div>
	         <div className="row">
             <ImageComposant/>
             <ImageComposant/>
             <ImageComposant/>
               <ImageComposant/>
            </div>
	         <div className="row">
             <ImageComposant/>
             <ImageComposant/>
             <ImageComposant/>
               <ImageComposant/>
             </div>
             <div className="row">
             <ImageComposant/>
             <ImageComposant/>
             <ImageComposant/>
               <ImageComposant/>
             </div>
            
	    </div>

	)




			
		if(tabId.length <= 1){

			tabInd.push(i);
			console.log(tabInd);

			setTabId(tabInd)
		//	alert(tabInd[0])
			//tf[tabInd[0]] = true;
			tf[i] = true;
			//tf[tabInd[1]] = true;
			setEtat(tf);

		//	console.log(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src === tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src)
	//	alert(tabId.length)
			if(tabId.length === 1 && 
				tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src !== tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src ){
               //alert(tabResult.length +"long");
               	if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === true 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === false){
                 tf[tabInd[1]] = false;
             }
             else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === true 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === false){
			     tf[tabInd[0]] = false;
			 } 

              else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === true){
                 tf[tabInd[0]] = false;
             }
             else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === true){
			     tf[tabInd[1]] = false;
			 }
			  else if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === true 
               		&& tabResult.includes(tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src) === true){
			     tf[tabInd[0]] = true;
			 tf[tabInd[1]] = true;
			 }
			 else{
			 	tf[tabInd[0]] = false;
			 	  tf[tabInd[1]] = false;
			 }
			//alert(2)
			}
			else if(tabId.length === 1){
				tf[tabInd[0]] = true;
			tf[tabInd[1]] = true;
			if(tabResult.includes(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src) === false){
               tabResult.push(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src);
               setResult(tabResult);
           }
			//console.log(tab[t[tabInd[0]][0]].props.children[t[tabInd[0]][1]].props.src === tab[t[tabInd[1]][0]].props.children[t[tabInd[1]][1]].props.src)
			//alert(3)
			}
			else{}

		}
		else if(tabId.length >= 2){
			tabInd.pop();
			tabInd.pop();
			setTabId([]);
			tabInd.push(i);
			setTabId(tabInd)
		}
		else{}
		//console.log(e.target.src);
		//console.log(tab[t[i][0]][t[i][0]])
		// console.log(tab[t[i][0]].props.children[t[i][1]])
	}
    
*/