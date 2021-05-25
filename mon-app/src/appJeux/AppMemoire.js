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

const boolT=[[true,true,true,true],[true,true,true,true],[true,true,true,true],[true,true,true,true]]
const boolF=[[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]]
const imageA=[Chat,Jaco,Chien,Lapin,Chien1,Chat,Chien,Singe,Jaco,Lapin,Tigre,Ecureuil,Tigre,Singe,Chien1,Ecureuil]



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

function retournerCarte(id,t,tab){
	var tabI=[];
	tabI=tab[t[id][0]][t[id][1]]=true;
	return tabI;
}

	function retourneC( taa,t,boot,v){
		
	if(taa[0].ima!==taa[1].ima){ //if(taa[0].id!==taa[1].id && taa[0].ima===taa[1].ima)
            boot[t[taa[1].id][0]][t[taa[1].id][1]]=v;
            console.log("testest")
		}
		return boot;
	}

	

function TabMem({imag,etat,onClick}){
    let ligne=[];
    let k=0;

   // console.log("test")

	for(var i=0; i<4; i++){
		let colonne=[];
		for( var j=0; j<4; j++){
						colonne.push( <MemoireComponent etat={etat[i][j]} imag={imag[k]} key={k} id={k} onClick={onClick}/>);
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
						colonne.push( <MemoireComponent etat={props.etat[i][j]} imag={props.imag[k]} key={k} id={k} onClick={props.onClick}/>);
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

function AppMemoire(){
	const [id,setId]=useState(0);
	const [eta,setTa]=useState(true);

	const[v,setV]=useState(true);
    
    const[ti,setTi]=useState(0);
	const t=construireTab(4);

   const[boot,setBoot]=useState(boolF);
	const[etat,setEtat]=useState(boolT);
	const[taa,setTaa]=useState([]);
	const[affi,setAffi]=useState(false);
   
   const aff=()=>{
   	 // alert("test");
   	 setEtat(boolF);
   }
      
    const affD=(boo,v1,v2)=>{
   	 console.log("test");
      boo[0][0]=v1;
      boo[0][1]=v2;
   	 setEtat(boo);
     }

  const handleClic=()=>{}
        let taaa=[];

    const handleClick1=(event)=>{
    //	alert(event.target.id)
 
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

            	boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;
                //setTimeout(console.log,3000,"Je vais voir")
            	if(taa[0].ima===taa[1].ima){
                 console.log("egal")
            	boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;
            	//console.log(etat[1][2])
            } 
            else{
            	setTimeout(console.log,3000,"pas egal")
                   
            	 	//boolF[t[taa[0].id][0]][t[taa[0].id][1]]=false;
            	 	//boolF[t[taa[1].id][0]][t[taa[1].id][1]]=false;
            	 	console.log(boolF)
            	 	setTimeout(affD,3000,boolF,false,false)
            	 	setEtat(boolF)
            	 	setTimeout(console.log,4000,boolF)

            	// setTimeout(setEtat,4000,boolF);

            	 setTaa([])
            }
           		// setTimeout(affD,4000,boolF,false,false)
           setTimeout(setEtat,4000,boolF);
            	 setTaa([])
            }
            else{
            	//setTaa([])
            }
        }else{

        }
            setEtat(boolF);
         // console.log(taa)
            //setTimeout(affD,4000,boolF,false,false)
            	//setTimeout(console.log,4000,boolF)
         setTi(event.target.id);
    }
	const handleClick=(event)=>{
	
		//alert(event.target.id)
		//setId(event.target.id)
		//console.log(t[event.target.id])
    const tabM=TabMem({imag:imageA,etat:etat,onClick:handleClic});
		//setTi(event.target.id);
       
       if(taa.length===0){
		taa.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
             }
             else if(taa.length===1){
             	taa.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag})
      
             } else{}

		if(taa.length>=1){
         
			boolF[t[taa[0].id][0]][t[taa[0].id][1]]=true;

		  if(taa.length===2&&taa[0].ima===taa[1].ima){

		
			//boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;

		//if(taa[0].ima!==taa[1].ima){ //if(taa[0].id!==taa[1].id && taa[0].ima===taa[1].ima) boolF[t[taa[1].id][0]][t[taa[1].id][1]]=false;}
	      
	           boolF[t[taa[1].id][0]][t[taa[1].id][1]]=true;
         // setTimeout(retourneC,4000,taa,t,boolF,true);
         //retourneC(taa,t,boolF,true);
          //console.log(boolF)
        // if(taa[0].ima===taa[1].ima){
         	// retourneC(taa,t,boolF,true);
               
      // console.log(fal)

            //  }
	     
	   }
	      setEtat(boolF);
              setTaa([])
	 
	   }
	   else{ 
           //setTaa([])
	   }
   
          // retournerCarte(event.target.id,t,boolF);
		//console.log(event.currentTarget)
		
		console.log(taa)
	
	}
   //  console.log(construireTab(3))
   useEffect(()=>{
   	   if(eta){
		setTa(false);
		setTimeout(aff, 1000);
		
	} else{}
    //setFal(false)
 	//const tabM=TabMem({imag:imageA,etat:etat,onClick:handleClic});
     //  boolF[t[event.target.id][0]][t[event.target.id][1]]=true;
		
		//boolF[t[taa[0].id][0]][t[taa[0].id][1]]=false;
       //boolF[t[taa[1].id][0]][t[taa[1].id][1]]=false;
           
         //  boolF[0][3]=false;
       	 //  boolF[1][3]=false;

       	/*if(affi){
       	   setEtat(boolF);
       	  		//setAffi(false)
       	  setTimeout(affD,1000)

       	  console.log(boolF[1][2])
       }else{ console.log("affiD")}*/
       //setTimeout(aff,10000)
   },[eta,setTa,affi])

 /*  useEffect(()=>{
        const tabM=TabMem({imag:imageA,etat:etat,onClick:handleClic});
      
        //setId(ti);
     	//boolF[0][ti]=true
     	setTimeout(console.log,3000,ti);
       if(taa.length===0&& ti!==0){
		taa.push({id:tabM[t[ti][0]].props.children[t[ti][1]].props.id,
		  	ima:tabM[t[ti][0]].props.children[t[ti][1]].props.imag})
             }
            else if(taa.length===1){
            taa.push({id:tabM[t[ti][0]].props.children[t[ti][1]].props.id,
			ima:tabM[t[ti][0]].props.children[t[ti][1]].props.imag})
              
             } else{}

       if(taa.length!==0){
           setTimeout(console.log,2000,etat[0][1]=true);
        }

   },[etat,taa,setEtat,setTaa,ti,setTi]);*/
   //let i=0;
   //console.log(i)
      
	return(

    <div>
	    <ComposantMem etat ={etat} imag={imageA} onClick={handleClick1}/>
	</div>
	     )
	     //
}

export default AppMemoire


/*
taa.push({id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id,
			id:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.id
			,ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag,
			ima:tabM[t[event.target.id][0]].props.children[t[event.target.id][1]].props.imag}

			)

*/