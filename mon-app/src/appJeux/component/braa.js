import React from 'react';

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



function brasserMelange(tab,onClickk){

  let ligne=[];
  let k=0;
  let tabe=tab;//melange(tab);
  for(let i=0; i<Math.sqrt(tabe.length); i++){

    let colonne=[];

    for( let j=0; j<Math.sqrt(tabe.length); j++){
       colonne.push(<div key={k}  id={k} onClick={onClickk}>{tabe[k]}</div>);
       k++;//
    }

    ligne.push(<div className="row1"  key={k}>{colonne}</div>);
  }
  //
   return ligne;
      
    
    //
}




function Braa(props){
  const tab=props.tab;//melange(props.tab);
 const ligne=brasserMelange(tab,props.onClick);
  
  return(

     <div className="wrap">
       {ligne}
        </div>
    );//
}

export default React.memo(Braa)