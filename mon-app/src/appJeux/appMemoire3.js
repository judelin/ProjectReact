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
//import { Container, Row, Col} from 'react-bootstrap';




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

function afficheAl(chaine){
	//alert(chaine);
}
  const tf = construireFaux(4);
function AppMemoire3(){
	const imageA = [Chat,Jaco,Chien,Lapin,Chien1,Singe,Tigre,Ecureuil, Chat,Jaco,Chien,Lapin,Chien1,Singe,Tigre,Ecureuil]
    
     const tv = construireVrai(4);
  	const t = construireTab(4);


  const[etat,setEtat] = useState(tv);
  const [id, setId] = useState(0);
  const [id1, setId2] = useState(0);
  const [ tabId, setTabId] = useState([]);
  const [result, setResult] = useState([]);

  const tabResult = result.slice();
  const tabInd = tabId.slice();
  
     
	function handleClick(e){

		//console.log(e.target.src);
		 const i = parseInt(e.target.id, 10);
		// alert(i);
		tf[i] = true;
		setEtat(tf);
	
		if(tabId.length <= 1){

			tabInd.push(i);
			console.log(tabInd);

			setTabId(tabInd)
			tf[tabInd[0]] = true;
			tf[tabInd[1]] = true;
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
    
 
   const tab = TabBoard(
   	20, imageA, etat, handleClick
   )
      useEffect(()=>{
     setTimeout(setEtat, 2000, 	tf)
    
   // console.log(tab[0])
},[setEtat]);


	return(
	    <>  
          {tab}
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
*/