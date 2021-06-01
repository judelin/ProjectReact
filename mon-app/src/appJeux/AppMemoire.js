import React,{useState,useEffect} from 'react';
import MemoireComponent from './component/MemoireComponent';
import Chat from './image/imageMem/chat.jpg';
import Chien from './image/imageMem/chien.jpg';
import Jaco from './image/imageMem/jaco.jpg';
import Chien1 from './image/imageMem/chien1.jpg';
import Ecureuil from './image/imageMem/ecureuil.jpg';
import Singe from './image/imageMem/singe.jpg';
import Tigre from './image/imageMem/titre.jpg';
import Lapin from './image/imageMem/lapin.jpg';
import Couvert from './image/imageMem/couvert.jpg';
import './component/affBra.css';


const imageA=[Chat,Jaco,Chien,Lapin,Chien1,Chat,Chien,Singe,Jaco,Lapin,Tigre,Ecureuil,Tigre,Singe,Chien1,Ecureuil];

const jsonImage = [{
	id:1,
	etat:true,
	imag:Chat
},
{
	id:1,
	etat:true,
	imag:Chat
},
{
	id:3,
	etat:true,
	imag:Chien
},
{
	id:2,
	etat:true,
	imag:Lapin
}];

const jsonImagee = [{
	id:1,

	imag:Chat
},
{
	id:2,

	imag:Jaco
},
{
	id:3,

	imag:Chien
},
{
	id:4,
	imag:Lapin
}
,
{
	id:5,
	imag:Chien1
},

{
	id:6,
	imag:Singe
},
{
	id:7,
	imag:Tigre
},
{
	id:8,
	imag:Ecureuil
},{
	id:1,
	imag:Chat
},
{
	id:2,
	imag:Jaco
},
{
	id:3,
	imag:Chien
},
{
	id:4,
	imag:Lapin
}
,
{
	id:5,
	imag:Chien1
},

{
	id:6,
	imag:Singe
},
{
	id:7,
	imag:Tigre
},
{
	id:8,
	imag:Ecureuil
}
]

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

function retournerCard(tab){
  var tabe = [];
	for(var i = 0; i<tab.length; i++){
		 tab[i].etat = false;

	}
	tabe = tab;

	return tab;


}

function ImageComponent(props){
	return(
	<div  onClick={props.onClick}>
	    <img src={props.src} className="image"/>
	</div>
	)//
}

function AfficheComponent(j, etat, src, onClick){
	let i = j;
	const affiche = etat? <ImageComponent etat ={etat} src={src} onClick ={()=>onClick(i)}/>:
	 <ImageComponent etat ={etat} src={Couvert} onClick ={()=>onClick(i)}/>
	return(
		<>
         {affiche}
         </>
		)
}//

function TabBoard(props){
	let sqrt = Math.round(Math.sqrt(props.tab.length));
	let tab = props.tab;
	let onClick = props.onClick;
	const etat = props.etat;
	//alert(sqrt)
	let ligne = [];
	let  id = 0;
	//const affiche = AfficheComponent()
	for(var i = 0; i<sqrt; i++){
         let colonne = [];
		for(var j = 0; j<sqrt; j++){
			const affiche = AfficheComponent(id, etat[id], tab[id].imag, onClick)
			colonne.push(<div className="column" key={id}>{affiche}</div>)
          id = id+1;
		}//

		ligne.push(<div key={i} className="row">{colonne}</div>)

	}//
	return ligne;
}//

function AppMemoire(){
	//const jsonImagee = jsonImage.concat(jsonImage);

   const tf = construireFaux(4);
   const tv = construireVrai(4);

  const [etatt, setEtatt] = useState(true);

	const [pair, setPaire] = useState([]);
	const [id1, setId1] = useState(0);
	const [id2, setId2] = useState(0);
	const [click, setClick] = useState(0);
	const[etat1, setEtat1] = useState(false);
	const[etat2, setEtat2] = useState(false);
	const [etat, setEtat] = useState(tv);
  const[tabImage, setTabImage] = useState(jsonImagee);

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

	function handleClic(i){
		
        // console.log(pair.length);
        // console.log(listPair.length);
        // console.log(imagi);
        // jsonImagee[i].etat = true;
        if(pair.length === 0 && etatM[i] === false){
          //setPaire([]);
           	listPair[0] = tabI[i].id;
          	etatM[i] = true;
          	setId1(i);
          	setEtat1(true);

          	console.log("etat1");;
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
           setClick(click + 1);
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
      	  alert("egal");
      	 console.log(pair[0]+" "+pair[1]);
      	 setPaire([]);
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
  
  // console.log(pair)
  console.log("click "+click);

   },[pair, setPaire, click]);

	return(
		   <div> 
		       <h1>Tester votre capacité de memoriser</h1>
		       <TabBoard etat={etat} tab={tabImage}onClick={(i) => handleClic(i)}/>
		    </div>
		);//
}
//
export default AppMemoire;




const jsonImagi = [{
	id:1,
	etat:true,
	imag:Chat
},
{
	id:2,
	etat:true,
	imag:Jaco
},
{
	id:3,
	etat:true,
	imag:Chien
},
{
	id:4,
	etat:true,
	imag:Lapin
}
,
{
	id:5,
	etat:true,
	imag:Chien1
},

{
	id:6,
	etat:true,
	imag:Singe
},
{
	id:7,
	etat:true,
	imag:Tigre
},
{
	id:8,
	etat:true,
	imag:Ecureuil
},{
	id:1,
	etat:true,
	imag:Chat
},
{
	id:2,
	etat:true,
	imag:Jaco
},
{
	id:3,
	etat:true,
	imag:Chien
},
{
	id:4,
	etat:true,
	imag:Lapin
}
,
{
	id:5,
	etat:true,
	imag:Chien1
},

{
	id:6,
	etat:true,
	imag:Singe
},
{
	id:7,
	etat:true,
	imag:Tigre
},
{
	id:8,
	etat:true,
	imag:Ecureuil
}
]