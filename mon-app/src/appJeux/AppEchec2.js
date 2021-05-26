import React, {useState,useEffect} from  'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import TabComponent  from './component/tabComponent';
import './styles/echec.css';
import Imagg from './image/imageEchec/roi.png';
import {Imag,TabInd,ImagT,Imaga} from "./image/Imag";
import {echange,chercherPosition,verifierCaseSauter,capture,estAp,estAp1,echangeCapture} from './algoEchec/AlgoEchec';


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

function AppEchec2(){

	const[tabImag,setTabImag]=useState([]);
	const[ImagR,setImaR]=useState(Imag)
	const[ind1,setInd1]=useState([]);
	const[ind2,setInd2]=useState([]);
	const[ind3,setInd3]=useState([]);

	const[item1,setItem1]=useState(null);

	const[id,setId]=useState(0);
	const[idC,setIdC]=useState(0);
	const[idi,setIdi]=useState(0);

	const[v,setV]=useState(false);

	const[click,setClick]=useState(0);

	const[tae,setTae]=useState([]);
	const[pos,setPos]=useState(0);
	const[piece,setPiece]=useState(ImagT);

    const handleClic=()=>{
    	
    }

    const handleRestart=()=>{
    	//setV(true);
    	//alert(v)
    	window.location.reload();
    }
    let lig=0;
    let tabInd=[];
    let tabInd1=[];
    let poss=0;

	const handleClick=(event)=>{
        const imagi=tabImag.slice();
        const taee=tae.slice();
        let ind31=ind3.slice();
        //const taee=tae.slice();
     
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
      
          // console.log("tae "+tae.length)
	 	 if(tae.length===0&&taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==""){
          taee.push(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
               //console.log("tae "+taee.length)
               //setPos(event.target.id);
      }

      else if(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==""
      	&&taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg!==taee[0]&&taee.length===1){
      
              poss=chercherPosition(piece,taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
              console.log(poss);
              setPos(poss)
      		//console.log(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg===taa[TabInd[pos][0]].props.children[TabInd[pos][1]].props.imagg)
      	console.log("different pos "+poss+ " idi "+idi)
      	console.log(estAp(idi)&&estAp1(poss)||estAp(poss)&&estAp1(idi))

      	if(estAp(idi)&&estAp1(poss)||estAp(poss)&&estAp1(idi)){
      		ind31=TabInd[event.target.id];

      	 taee.push(taa[TabInd[event.target.id][0]].props.children[TabInd[event.target.id][1]].props.imagg);
      	 setInd3(ind31);

      	}

      }
          setTae(taee);

	}
    
	  useEffect(() => {
	  	//const =images[0][0];
       	// const taee=tae.slice();
       	  const imagi=tabImag.slice();
	  			setTabImag(Imag);
       
        if(tabImag.length!==0&&tabImag!==undefined){
              
         const taa=TabComposant({imags:tabImag,onClick:handleClic});

         console.log("tae "+tae.length)
	 	if(taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg!==""&&tae.length==1){
	 		setIdi(chercherPosition(ImagT,taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg));
	 		//console.log(ImagT[5]===taa[TabInd[id][0]].props.children[TabInd[id][1]].props.imagg)
	 		//console.log("idi "+idi)
	 		setInd1(TabInd[id]);
	 		setIdC(id);
	 		console.log(TabInd[id])
	 	}
	 	else if(tae.length>=1){
	 		//console.log(ind1)
	 		if(ind1.length!==0&&tae.length===1){
	 					setInd2(TabInd[id]);
	 					console.log("salut")
	 					
	 		if(ind2.length!==0){
	 		//console.log(verifierCaseSauter(taa,TabInd,idC,id))
            console.log("id1 "+ind1+" id2 "+ind2);
            if(verifierCaseSauter(taa,TabInd,idC,id)){
	 		echange(ind1[0],ind1[1],ind2[0],ind2[1],tabImag,idi,idC,id);
	 	} 
	 	else{}

	 		setInd2([])
	 		setInd1([])
	 	
	 		setIdC(0)
	 		console.log(idi+" id " +idC+" idC "+id)
	 			
	 	}
	 	} else if(tae.length===2){

	 		console.log("Vous voulez me capturer pos "+pos+" idi "+ idi)
	 		   console.log("ind1 "+ind1+" ind3 "+ind3);
	 		//imagi[0][0]=imagi[7][7];
	 		if(verifierCaseSauter(taa,TabInd,idC,id)){
	 		echangeCapture(ind1[0],ind1[1],ind3[0],ind3[1],tabImag,idi,idC,id);
	 	}else{}

	 		setInd3([]);

	 		setTae([])
	 	}
	 		
	 	setTabImag(Imag);
	 	}
	 
       }else{}
         
        

	  },[id,setId,ind1,setInd1,ind2,setInd2,idC,setIdC,idi,setIdi,tabImag,setTabImag,v,setV,setTae,ind3,pos,tae]);

	 if(tabImag.length!==0&&tabImag!==undefined){
	 	const taa=TabComposant({imags:tabImag,onClick:handleClic});
       
	
	return(
	   <Container>
	    <ComposantEch onClick={handleClick} imag={tabImag}/>
	    <Row md= "6" className="justify-content-md-center">
	   
	    <Button as={Col} variant="secondary" onClick={handleRestart} className="emo">Restart</Button>
	    
	    </Row>
	   </Container>
	)
}//
else{
	return(
      <div><h1>Echec</h1></div>
	)
  }
}
//
export default AppEchec2