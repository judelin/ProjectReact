import React,{useCallback} from 'react';
import '../styles.css';

import Affic from "./affic";
import Braa from "./braa";

import { useMachine } from "@xstate/react";

import { affichMachine } from "../jeuMachine/affichMachine";

import Imagee from './imagee';

function echange(tab,lastIndex,indexClick){

  var temps=tab[lastIndex];
  tab[lastIndex]=tab[indexClick];
  tab[indexClick]=temps;
  //console.log(tab[8].key)

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
        const numero=numeroAf?<p>{k2}</p>:<p></p>;

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


function getTab({tab}){

const tae= tab.map((res, index)=><h4 key={index} id={index}>{res}</h4>)//
  return tae;
}

function JeuTaquin() {

const [state, send] = useMachine(affichMachine);

  const [coli,setColi]=React.useState('gray');
  const [imag,setImage]=React.useState("https://www.economie-magazine.com/images/dossiers/2017-06/animaux-133014.jpg");
  const[lon,setLong]=React.useState(3);
  const[lag,setLag]=React.useState(3);
  const[idi,setIdi]=React.useState(0);
  const[numeroAfficher,setNumeroAfficher]=React.useState(false);

  const[ind,setInd]=React.useState(0);
  const[ide,setIde]=React.useState(0);

  const src = useProgressiveImage({
    src:
    imag,
      gray:coli,
      lg:lon,
      lr:lag,
      numeroAfficher
      
  });


      const srci = Imagee({
    src:
    imag,
      gray:coli,
      lg:lon,
      lr:lag,
      numeroAfficher
      
  });

      console.log(srci)
   
   const[tabi,setTabi]=React.useState(src);
   //console.log(tabi);

  
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

const affich=()=>{

   console.log("test")

  setTabi(srci)
    melange(srci)
   send("BRASSER");
 
  // alert("afficher")
}

  let tabb=srci;
   const handleCli= useCallback(event => {
   const ttt=srci;
     // console.log(ttt)
      alert(event.target.id)
    
     
      setTabi(echange(ttt,8,event.target.id-1))
      
  }, [tabi,setTabi]);


const brass=()=>{
   setInd(2)



}


  React.useEffect(() => {
     
    if(srci!==undefined&&srci.length!==undefined){

    setTabi(srci)
  }

  },[setTabi]);

//console.log(tabi.length)




  if(src.length!==0||srci!==undefined){
   
   const af=state.matches("affiche")?<div><Affic tab={src} onClick={handleCli} /></div>:<div></div>;
     //const br=state.matches("brasser")||state.matches("brass")?<div><Braa tab={tabi} onClick={handleCli} /></div>:<div></div>;
    const brr=<div><Braa tab={tabi} onClick={handleCli} /></div>
//
  return (
    <div>
    <div>
 
     {brr}
  </div>

    <div className="wrap1">
    <div style={{margin:"10px"}}>
       <label>
       Choisir numero: 
      <input
        name="numberOfGuests"
            type="number"
            value={lag}
            onChange={onChangeLag}
      />
      </label>
      </div>
     <div style={{margin:"10px"}}>

      <label>
      Afficher Numero:
      <input

      name="AfficherNumero"
            type="checkbox"
            checked={numeroAfficher}
            onChange={onChangeNumero}
      />
     </label>
    </div>
    </div>
    <div className="wrap1">
    <div style={{margin:"10px"}}>
       <label>
       Url Image: 
      <input
        name="ImageUrl"
            type="text"
            value={imag}
            onChange={onChangeImag}
      />
      </label>
       </div>
     <div style={{margin:"10px"}}>
      
        <label>
          Choisissez votre couleur favori :
          <select value={coli} onChange={handleChangeCol}>
            <option value="gray">Gris</option>
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="yellow">Jaune</option>
          </select>
        </label>

    </div>
    </div>
    <div className="wrap1">
    <div >
    <button onClick={()=>send("AFFICHER")} style={{margin:"10px"}}>Afficher</button>
    <button onClick={affich} style={{margin:"10px"}}>Brasser</button>
    </div>
    </div>
</div>

  );
  //https://www.pieuvre.ca/wp-content/uploads/2020/09/Zebre.jpg
  //https://images.lpcdn.ca/924x615/201904/04/1629591.jpg
  //https://educaloi.qc.ca/wp-content/uploads/507810382_1200x563.jpg
}
else{
  return(
  <div><h1>Error</h1></div>
  )
}

}

export default JeuTaquin;