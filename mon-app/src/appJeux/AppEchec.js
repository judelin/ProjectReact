import React, {useState,useEffect} from  'react';
import TabComponent  from './component/tabComponent';
import './styles/echec.css';
import Imagg from './image/imageEchec/roi.png';
import {Imag,TabInd,ImagT,Imaga} from "./image/Imag";
import {echange,chercherPosition,verifierCaseSauter,capture} from './algoEchec/AlgoEchec';


 const images=[Imagg]
    const styleC={
	"backgroundColor":"#808080",
	"height": 40+"px",
	"width": 40+"px",
		
}

   const styleN={
	"backgroundColor":"#DCDCDC",
	"height": 40+"px",
	"width": 40+"px",	
}

function retourneLigne(id){


   var ide=0;
	if(id<8&&id>=0){
		ide=0;
	}
	else if(id<16&&id>=8){

       ide=1;
	}
	else if(id<24&&id>=16){
        ide=2;
	}
	else if(id<32&&id>=24){
        ide=3;
	}
	else if(id<40&&id>=32){
		ide=4;
	}
	else if(id<48&&id>=40){
		ide=5;
	}
	else if(id<56&&id>=48){
		ide=6;
	}
	else{
       ide=7;
	}
	return ide;

}


function TabComposant({imags,onClick}){
     let ligne=[];
    let k=0;
    let kk=0;

	for(var i=0; i<8; i++){
		let colonne=[];
		for( var j=0; j<8; j++){
			if (kk/2 === Math.round(kk/2)){
			colonne.push(<TabComponent key={k} id={k} styles={styleC} onClick={onClick} imagg={imags[i][j]}/>);
		}
		else{
			colonne.push(<TabComponent key={k} id={k} styles={styleN} onClick={onClick} imagg={imags[i][j]}/>);
		}
			k++;
			kk++;
		}
		ligne.push(  <div className="row1" key={i}>{colonne}</div>);
			kk++;//
	}
//
           return ligne;
		
}//

function ComposantEch(props){
    let ligne=[];
    let k=0;
    let kk=0;

	for(var i=0; i<8; i++){
		let colonne=[];
		for( var j=0; j<8; j++){
			if (kk/2 === Math.round(kk/2)){
			colonne.push( <TabComponent key={k} id={k} styles={styleC} onClick={props.onClick} imagg={props.imag[i][j]}/>);

		}
		else{
			colonne.push( <TabComponent key={k} id={k} styles={styleN} onClick={props.onClick} imagg={props.imag[i][j]}/>);
		}
			k++;
			kk++;
		}

		ligne.push(<div className="row1" key={i}>{colonne}</div>);
			
			kk++;
	}
//
	return(
		<div className="wrap">
           {ligne}
		</div>
		)
}//

function AppEchec(){

	const[tabImag,setTabImag]=useState([]);
	const[ImagR,setImaR]=useState(Imag)
	const[ind1,setInd1]=useState([]);
	const[ind2,setInd2]=useState([]);

	const[item1,setItem1]=useState(null);

	const[id,setId]=useState(0);
	const[idC,setIdC]=useState(0);
	const[idi,setIdi]=useState(0);

	const[v,setV]=useState(false);

	const[click,setClick]=useState(0);

	const[tae,setTae]=useState([]);

    const handleClic=()=>{
    	
    }

    const handleRestart=()=>{
    	//setV(true);
    	//alert(v)
    }
    let lig=0;
    let tabInd=[];
    let tabInd1=[];
	const handleClick=(event)=>{
        const imagi=tabImag.slice();
          const taee=tae.slice();
     
       // imagi[0][0]=imagi[7][7];
   
        setTabImag(imagi)
        // lig=retourneLigne(event.target.id);
		//console.log(event.currentTarget);

		//console.log(echange(tabImag));
		//console.log(event.currentTarget.value);
       
         setClick(click+1);

         	//const taa=TabComposant({imags:tabImag,onClick:handleClic});
        // console.log(click)
       // console.log(TabInd[event.target.id]);

        setId(event.target.id);
  
		//alert(event.target.id);


			 const taa=TabComposant({imags:tabImag,onClick:handleClic});
	    //console.log(taa[1]);
	    			//console.log(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
	 	//console.log(taa[2].props.children[0].props.imagg===taa[0].props.children[7].props.imagg);

	 	 if(tae.length===0&&taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==""){
          taee.push(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
              // console.log("tae "+taee.length)
      }
      else if(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==""
      	&&taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==taee[0]&&taee.length===1){
      	 taee.push(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
      	console.log("different")
      }
          setTae(taee);


	}
    
	  useEffect(() => {
	  	//const =images[0][0];
       	// const taee=tae.slice();
	  			setTabImag(Imag);
	  	  
       
        if(tabImag.length!==0&&tabImag!==undefined){

        		 const taa=TabComposant({imags:tabImag,onClick:handleClic});
        
         console.log("tae "+tae.length)
	 	if(taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg!==""){
	 		setIdi(chercherPosition(ImagT,taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg));
	 		//console.log(ImagT[5]===taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg)
	 		//console.log("different")
	 		setInd1(TabInd[id]);
	 		setIdC(id);
	 		console.log(TabInd[id])
	 	}
	 	else{
	 		//console.log(ind1)
	 		if(ind1.length!==0){
	 					setInd2(TabInd[id]);
	 					console.log("salut")
	 					
	 		if(ind2.length!==0){
	 		//console.log(verifierCaseSauter(taa,TabInd,idC,id))
            console.log("id1 "+ind1+" id2 "+ind2);
            if(verifierCaseSauter(taa,TabInd,idC,id)){
	 		echange(ind1[0],ind1[1],ind2[0],ind2[1],tabImag,idi,idC,id,ind1[0],ind1[1]);
	 	} 
	 	else{}

	 		setInd2([])
	 		setInd1([])
	 	
	 		setIdC(0)
	 		console.log(idi+" id " +idC+" idC "+id)
	 			//setTabImag(Imag);
	 	}
	 	}
	 		//setInd1(tt);
	 	//setInd2(tt)
	 	setTabImag(Imag);
	 	}
	 
       }else{}
         
         if(v){
         	//setTabImag(Imaga);
         	//console.log('V')
         	//setV(false);
         }

	  },[id,setId,ind1,setInd1,ind2,setInd2,idC,setIdC,idi,setIdi,tabImag,setTabImag,v,setV,setTae]);

	 if(tabImag.length!==0&&tabImag!==undefined){
	 	const taa=TabComposant({imags:tabImag,onClick:handleClic});
       
	    //console.log(taa[1]);
	    //console.log(taa[2].props.children[1].props.imagg);
	 	//console.log(taa[2].props.children[0].props.imagg===taa[0].props.children[7].props.imagg);
        //console.log(taa[6][0]);
        //console.log(tabImag[7][7])
	return(
	   <div>
	    <ComposantEch onClick={handleClick} imag={tabImag}/>
	    <button onClick={handleRestart} className="emo">Restart</button>
	   </div>
	)
}//
else{
	return(
      <div><h1>Echec</h1></div>
	)
  }
}
//
export default AppEchec

//
/**
 <div className="row1">
	     <TabComponent/>
	     <TabComponent/>
	     <TabComponent/>
	     </div>
	       <div className="row1">
	     <TabComponent/>
	     <TabComponent/>
	     <TabComponent/>
	     </div>
	       <div className="row1">
	     <TabComponent/>
	     <TabComponent/>
	     <TabComponent/>
	     </div>



	       useEffect(() => {
	  	//const =images[0][0];

	  			setTabImag(Imag);
	  	  
       
        if(tabImag.length!==0&&tabImag!==undefined){
        	 const taa=TabComposant({imags:tabImag,onClick:handleClic});
	    //console.log(taa[1]);
	    		//console.log(taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg);
	 	//console.log(taa[2].props.children[0].props.imagg===taa[0].props.children[7].props.imagg);

	 	if(taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg!==""){
	 		setIdi(chercherPosition(ImagT,taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg));
	 		//console.log(ImagT[5]===taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg)
	 		//console.log("different")
	 		setInd1(TabInd[id]);
	 		setIdC(id);
	 		console.log(TabInd[id])
	 	}
	 	else{
	 		//console.log(ind1)
	 		if(ind1.length!==0){
	 					setInd2(TabInd[id]);
	 					console.log("salut")
	 					
	 		if(ind2.length!==0){
	 		//console.log(verifierCaseSauter(taa,TabInd,idC,id))
            console.log("id1 "+ind1+" id2 "+ind2);
            if(verifierCaseSauter(taa,TabInd,idC,id)){
	 		echange(ind1[0],ind1[1],ind2[0],ind2[1],tabImag,idi,idC,id,ind1[0],ind1[1]);
	 	} 
	 	else{}

	 		setInd2([])
	 		setInd1([])
	 		setIdC(0)
	 		console.log(idi+" id " +idC+" idC "+id)
	 			//setTabImag(Imag);
	 	}
	 	}
	 		//setInd1(tt);
	 	//setInd2(tt)
	 	setTabImag(Imag);
	 	}
	 
       }else{}
         
         if(v){
         	//setTabImag(Imaga);
         	//console.log('V')
         	//setV(false);
         }

	  },[id,setId,ind1,setInd1,ind2,setInd2,idC,setIdC,idi,setIdi,tabImag,setTabImag,v,setV]);

*/