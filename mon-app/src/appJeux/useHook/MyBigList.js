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


function MyBigList({ term, onItemClick,items }) {
 


  const map = item => <div onClick={onItemClick}>{item}</div>;

  return <div>{items.map(map)}</div>;
}

export default React.memo(MyBigList);