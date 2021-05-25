import React from 'react';


function Imagee({ src,gray,lg,lr,numeroAfficher}) {
 
    const mainImage = new Image();

    let width;
    let height;
   let length=lg;
   let ylength=lr;
   let numeroAf=numeroAfficher;

  let tab=[];
  var x=window.x;
  window.x=8888;
  var imgg=window.imgg;
   
   
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
      window.imgg=tab;
      //console.log(tab.length)

    };
 
    mainImage.src = src;
  

  return window.imgg;
}

export default Imagee;