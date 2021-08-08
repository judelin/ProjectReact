import React from 'react';
import { Container} from 'react-bootstrap';
import './affBra.css';

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

    ligne.push(<div className="rowww"  key={k}>{colonne}</div>);
  }
  //
   return ligne;
      
    
    //
}


function Affic(props){
  const ligne=brasserMelange(props.tab,props.onClick);
  return(

     <Container className="wrap">
       {ligne}
        </Container>
    );//
}

export default React.memo(Affic)

/*function Affic(props){
  const ligne=brasserMelange(props.tab,props.onClick);
  return(

     <div className="wrap">
       {ligne}
        </div>
    );//
}

function Braa(props){
  const tab=props.tab;//melange(props.tab);
 const ligne=brasserMelange(tab,props.onClick);
  
  return(

     <div className="wrap">
       {ligne}
        </div>
    );//






     const af=state.matches("affiche")?<div><Affic tab={srce} onClick={handleClick} /></div>:<div></div>;
  const br=state.matches("brasser")||state.matches("brass")?<div><Braa tab={tabi} onClick={handleClick} /></div>:<div></div>;
}*/