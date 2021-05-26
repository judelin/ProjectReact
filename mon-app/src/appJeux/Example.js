import React,{useCallback} from 'react';
import { Row, Col, Button, Container, Form} from 'react-bootstrap';
import './styles.css';

import Affic from "./component/affic";
import Braa from "./component/braa";

import { useMachine } from "@xstate/react";

import { affichMachine } from "./jeuMachine/affichMachine";

//import Imagee from './component/imagee';

function isResolu(tab){
  var tabR=[];
  var k=0;
  
  for(var i=0; i<tab.length; i++){
   // console.log(i)
     tabR[i]=tab[i].key;
  }
  for(var i=0; i<tab.length; i++){
    
    
    if(parseInt(tabR[i])===i+1){
      k++;
    

    }
  }
  return k===tab.length;
}

function calculPosition(pos1,pos2,longueur){

  var k1=pos1+longueur;
  var k2=pos1-longueur;
  var k3=pos1-1;
  var k4=pos1+1;
   var booli=false;

 
   
   var p2=0;
   if(pos2>pos1){
       p2=pos1+1;
   }
   else if(pos1>pos2){
      p2=pos2+1;
   }

  console.log("p2 "+p2)

   if(k1===pos2){
      booli=true;
      console.log("k1")
   }
   else if(k4===pos2&&(p2%longueur!==0)){
     booli=true;
        console.log("k4");
   }
   else if(k2===pos2){
      booli=true;
         console.log("k2")
   }
   else if(k3===pos2 &&(p2%longueur!==0)){
      booli=true;
         console.log("k3");
   }
   else{
    booli=false;
   }
   return booli;

}

function trouverIndice(tab,index){
  var j=0;
      for(var i=0; i<tab.length; i++){
      //console.log(indexClick+1+"?="+tab[i].key)
     if(parseInt(tab[i].key)===index+1){
      console.log(i)
      j=i;
      break;
     }

  }
  return j;
}

function echange(tab,indexClick){
 var j= trouverIndice(tab,indexClick);
 var k=trouverIndice(tab,tab.length-1);
 
  console.log(j+"= "+k);
 var vr= calculPosition(k,j,Math.sqrt(tab.length));

if(calculPosition(k,j,Math.sqrt(tab.length))){
  var temps=tab[k];
  tab[k]=tab[j];
  tab[j]=temps;
  //console.log(tab[8].key)
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

function Affiche(props){

  let ligne=[];
  let k=0;

  for(let i=0; i<Math.sqrt(props.tab.length); i++){

     let colonne=[];

    for( let j=0; j<Math.sqrt(props.tab.length); j++){
       colonne.push(props.tab[k]);
       k++;
    }

    ligne.push(<div className="row1"  key={k}>{colonne}</div>);
  }
  //
   return(
    <div className="wrap">
       {ligne}
        </div>
    );
    //
}


//
function Brasser(props){

  let ligne=[];
  let k=0;
  let tabe=props.tab;//melange(props.tab);
  for(let i=0; i<Math.sqrt(tabe.length); i++){

     let colonne=[];

    for( let j=0; j<Math.sqrt(tabe.length); j++){
       colonne.push(<div key={k}  id={k}>{tabe[k]}</div>);
       k++;//
    }

    ligne.push(<div className="row1"  key={k}>{colonne}</div>);
  }
  //
   return(
    <div className="wrap">
       {ligne}
        </div>
    );
    //
}

function useProgressiveImage({ src,gray,lg,lr,numeroAfficher}) {
  const [tabImage,setTabImage] = React.useState([]);

  React.useEffect(() => {
    const mainImage = new Image();

    let width;
     let height;
   let length=lg;
   let ylength=lr;
   let numeroAf=numeroAfficher;

  let tab=[];

   
   
    mainImage.onload = () => {
      //dispatch({ type: 'main image loaded', src });


   let k1=0;
  let k2=1;

  width = mainImage.width;
  height = mainImage.height;

     // const element = <h1 style={divStyle}>Bonjour, monde !</h1>;

  for (var j = 0; j < length; j++){
    for (var i = 0; i < length; i++){
      let left = (-1 * width/length * i).toString() +"px";
      let top = (-1 * height/ylength * j).toString() +"px";
      let element;

      const divSt={
          "width" : Math.floor(width/length),
          "height":Math.floor(height/ylength),
          "backgroundPosition": left  + " " +  top,
          "backgroundImage" : 'url(' + mainImage.src + ')'
      };


   const divStt={
          "width" : Math.floor(width/length),
          "height":Math.floor(height/ylength),
          "backgroundPosition": left  + " " +  top,
          "backgroundColor" : gray
      };
        const numero=numeroAf?<div>{k2}</div>:<div></div>;

        if(k1<length*length-1||length===1){
       element = <div key={k2} id={k2} //onClick={handleClick}
        
        
        className="divElem"
        style= {
             divSt
           
        }>{numero}</div>
      
        }
        //
        else if(k1===length*length-1){
            element = <div  key={k2} id={k2}
        
        className="divElem"
        style= {
             divStt
           
        }>{numero}</div>
         
        }
   
         tab.push(element);   //
         //console.log(tab.length)
       k1++;
       k2++;
    }
  
  }
 
     //tab.push(element);
      setTabImage(tab);
      //console.log(tab.length)

    };

    mainImage.src = src;
  
  }, [src,gray,lg,lr,numeroAfficher]);

  return tabImage;
}



//const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

function getTab({tab}){

const tae= tab.map((res, index)=><h4 key={index} id={index}>{res}</h4>)//
  return tae;
}

function Example() {

const [state, send] = useMachine(affichMachine);

  const [coli,setColi]=React.useState('gray');
  const [imag,setImage]=React.useState("https://www.zoodejurques.fr/wp-content/uploads/2019/03/araararauna2-500x500-c-center.jpg");
  const[lon,setLong]=React.useState(3);
  const[lag,setLag]=React.useState(3);
  const[idi,setIdi]=React.useState(0);
  const[numeroAfficher,setNumeroAfficher]=React.useState(false);
  const[isRes,setIsRe]=React.useState(false);

  const[ind,setInd]=React.useState(1);
  const[ide,setIde]=React.useState(0);

  const src = useProgressiveImage({
    src:
    imag,
      gray:coli,
      lg:lon,
      lr:lag,
      numeroAfficher
      
  });

   const srce = useProgressiveImage({
    src:
    imag,
      gray:coli,
      lg:lon,
      lr:lag,
      numeroAfficher
      
  });
   
   const[tabi,setTabi]=React.useState([srce]);
   //console.log(tabi);

  /* const handleClickk= useCallback(event => {
    //console.log('You clicked ', event.currentTarget);
      // alert(event.target.id-1);
   // setIde(event.target.id-1)
      
      alert(event.target.id)
  // echange(src,8,3);
   // setTabi(srce)
  }, [srce]);


//const t=brasserMelange(src);
//console.log(t[1])
 let idd;
  /*const handleClick=(event)=>{

    
       idd=event.target.id;
       setIdi(event.target.id);
      // console.log(src[event.target.id-1].key)
      //console.log(src[8].props.style.backgroundColor)
        // console.log(event.target.id);
     // console.log(src[event.target.id-1]);
    // echange(src,8,idd-1);
      

    } */
    //setTabi(taa)
//echange(src,8,3)

const onChangeLag=(event)=>{
   setLag(event.target.value);
   setLong(event.target.value);
}
const onChangeNumero=(event)=>{
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
   setNumeroAfficher(value);
 
}

const onChangeImag=(event)=>{
   setImage(event.target.value);

}

 const handleChangeCol=(event)=> {
    setColi(event.target.value);
  }
//
const srcee=getTab({tab:[1,2,3,4,5]});
const tt=src.map(res=>res);

//console.log(shuffleArray([1,2,3,4,5]))
const affich=()=>{

 setTabi(srce)
   setInd(1)
 
  // alert("afficher")
}

  
  /* const handleCli= useCallback(event => {
   const ttt=srcee;
     // console.log(ttt)
      alert(event.target.id)
    
     
      setTabi(echange(ttt,4,event.target.id))
      
  }, [tabi,setTabi]);*/


  const handleClick= (event) => {
  // const ttt=srcee;
     // console.log(ttt)

    // melange(src)
     //alert(event.target.id)
     const ttt=tabi.map(res=>res);
     const tta=echange(ttt,event.target.id-1);
   
      setTabi(tta)

      
  };



const brass=()=>{
  setInd(2);
   console.log("test")
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  //setTabi(tt)
   setTabi(shuffleArray(tt))
 
}
//let taa=melange(src);

  React.useEffect(() => {
      //console.log(state.matches("affiche"))
   //setTabi(echange(srce,8,ide))
   //setIde(3)
    //echange(srce,8,ide)
     setIsRe(isResolu(tabi))

  });

//console.log(tabi.length)


  if(src.length!==0){
   
   const af=ind===1?<div><Affic tab={srce} onClick={handleClick} /></div>:<div></div>;
  const br=ind===2?<div><Braa tab={tabi} onClick={handleClick} /></div>:<div></div>;
    //const brr=<div><Braa tab={tabi} onClick={handleClick} /></div>
    const isWin=isRes?<div className="wrap"><h4> Felication</h4></div>:<div className="wrap"><h4> Joueur</h4></div>;
//
  return (
    <Container>
    <div>
    {isWin}
     {af}
     {br}
  </div>



      <Form>
      
    
      <br/>
         
           
      <Form.Row  md="6" className="justify-content-md-center">
         
        <Form.Group as={Col} >
          <Form.Label>Choisir un numero</Form.Label>
          <Form.Control
          placeholder="numero"
            name="numberOfGuests"
            type="number"
            value={lag}
            onChange={onChangeLag}/>
        
        </Form.Group>
      
        </Form.Row>

        <Form.Row md="6" className="justify-content-md-center">
         <Form.Group as={Col} >
          <Form.Label>Afficher numero</Form.Label>
           <Form.Check
           
      name="AfficherNumero"
            label="Aficher numero"
            checked={numeroAfficher}
            onChange={onChangeNumero}


            />

          </Form.Group>
        </Form.Row>

      <Form.Row  md="6" className="justify-content-md-center">
        <Form.Group as={Col}>
          <Form.Label>Url image</Form.Label>
          <Form.Control
          placeholder="Image"
             name="ImageUrl"
            type="text"
            value={imag}
            onChange={onChangeImag}/>
         
        </Form.Group>
        </Form.Row>
     



         <Form.Row  md="6" className="justify-content-md-center">
        <Form.Group as={Col} >
          <Form.Label>Statut</Form.Label>
          <Form.Control
            as="select"
            id="idSel"
            placeholder="Statut"
            onChange={handleChangeCol}>
             <option value="Public">Public</option>
          <option value="gray">Gris</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
     </Form.Control>

         
        </Form.Group>


        </Form.Row>
  
       <Row md= "6" className="justify-content-md-center">
    <Button as={Col} variant="secondary" onClick={affich} style={{margin:"10px"}}>Afficher</Button>
    <Button as={Col} variant="secondary" onClick={brass} style={{margin:"10px"}}>Brasser</Button>
    </Row>
  
     </Form>
     
</Container>

  );
  //https://www.pieuvre.ca/wp-content/uploads/2020/09/Zebre.jpg
  //https://images.lpcdn.ca/924x615/201904/04/1629591.jpg
  //https://educaloi.qc.ca/wp-content/uploads/507810382_1200x563.jpg
  //https://www.zoodejurques.fr/wp-content/uploads/2019/03/araararauna2-500x500-c-center.jpg
}
else{
  return(
    <Container>
      <Form>
          <h1>Loading...</h1>
    
      <br/>
         
           
      <Form.Row  md="6" className="justify-content-md-center">
         
        <Form.Group as={Col} >
          <Form.Label>Choisir un numero</Form.Label>
          <Form.Control
          placeholder="numero"
            name="numberOfGuests"
            type="number"
            value={lag}
            onChange={onChangeLag}/>
        
        </Form.Group>
      
        </Form.Row>

        <Form.Row  md="6" className="justify-content-md-center">
         <Form.Group as={Col} >
          <Form.Label>Afficher numero</Form.Label>
           <Form.Check
           
      name="AfficherNumero"
            label="Aficher numero"
            checked={numeroAfficher}
            onChange={onChangeNumero}


            />

          </Form.Group>
        </Form.Row>

      <Form.Row  md="6" className="justify-content-md-center">
        <Form.Group as={Col} >
          <Form.Label>Url image</Form.Label>
          <Form.Control
          placeholder="Image"
             name="ImageUrl"
            type="text"
            value={imag}
            onChange={onChangeImag}/>
         
        </Form.Group>
        </Form.Row>
     



         <Form.Row  md="6" className="justify-content-md-center">
        <Form.Group as={Col} >
          <Form.Label>Statut</Form.Label>
          <Form.Control
            as="select"
            id="idSel"
            placeholder="Statut"
            onChange={handleChangeCol}>
             <option value="Public">Public</option>
          <option value="gray">Gris</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
     </Form.Control>

         
        </Form.Group>


        </Form.Row>
  
       <Row md= "6" className="justify-content-md-center">
    <Button as={Col} variant="secondary" onClick={affich} style={{margin:"10px"}}>Afficher</Button>
    <Button as={Col} variant="secondary" onClick={brass} style={{margin:"10px"}}>Brasser</Button>
    </Row>
  
     </Form>
     </Container>

  )
}

}

export default Example;