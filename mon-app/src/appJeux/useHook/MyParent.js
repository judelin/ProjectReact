import React, { useCallback,useState } from 'react';
import MyBigList from './MyBigList';


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


function MyParent({ term }) {
	  const items = ["Bonjour","Salut","Bonsoir"];
	  const [itemss,setItems]=useState(items)
  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
    let t=items.push("good")
     // setItems(t);
  }, [term]);

  return (
    <MyBigList

      term={term}
      onItemClick={onItemClick}
      items={itemss}
    />
  );
}

export default MyParent;