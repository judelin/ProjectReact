import React from 'react';

function PositionRoi(pos1,pos2,longueur){

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

function positionRo(idC){
	return[parseInt(idC)+9,parseInt(idC)-9,parseInt(idC)+8,parseInt(idC)-8,parseInt(idC)+7,parseInt(idC)-7,parseInt(idC)+1,parseInt(idC)-1];
}

function positionCaval(idC){
	return[parseInt(idC)+10,parseInt(idC)-6,parseInt(idC)+6, parseInt(idC)-10, 
	parseInt(idC)+17,parseInt(idC)-17,parseInt(idC)+16,parseInt(idC)-16,parseInt(idC)+15,parseInt(idC)-15
		];
}
function positionPionN(idC){
	return [parseInt(idC)+8,parseInt(idC)+16];
}

function positionPionW(idC){
	return [parseInt(idC)-8,parseInt(idC)-16];
}


function positionTour(idC,ligne,colonne){
	var tabT=[]
	console.log(ligne+" ligne "+colonne+" colonne");

	 var t1=parseInt(idC);
	 var t2=parseInt(idC);
	 var t3=parseInt(idC);
	 var t4=parseInt(idC);
	 var b=7-ligne;
	 var a=7-colonne;
	 var b1=7-b;
	 var a1=7-a;

     
     var j=8;
      var j1=8;
      var k=1;
      var k1=1;
	 for(var i=ligne; i<8; i++){
       	tabT.push(t4+j)
       	j=j+8;
       }

        for(var i=a1; i>=0; i--){
        
	 	tabT.push(t1-k1);
	 	k1=k1+1;
	 }
	   for(var i=colonne; i<8; i++){
	 	tabT.push(t2+k);
	 	k=k+1;

	 }
	 	
	 for(var i=b1-1; i>=0; i--){
	 	//console.log(t3-j1)
	 	tabT.push(t3-j1);
	 	j1=j1+8;
	 }
	 
//console.log(tabT)
	 return tabT;
}



function positionFou(idC,ligne,colonne){
	var tabT=[]
	console.log(ligne+" ligne "+colonne+" colonne");

	 var t1=parseInt(idC);
	 var t2=parseInt(idC);
	 var t3=parseInt(idC);
	 var t4=parseInt(idC);
	 var b=7-ligne;
	 var a=7-colonne;
	 var b1=10-b;
	 var a1=10-a;

     var j=9;
      var j1=9;
      var k=7;
      var k1=7;
	 for(var i=ligne; i<8; i++){
       	tabT.push(t4+j)
       	j=j+9;
       }

        for(var i=a1; i>=0; i--){
        
	 	tabT.push(t1-k1);
	 	k1=k1+7;
	 }
	   for(var i=colonne; i<10; i++){
	 	tabT.push(t2+k);
	 	k=k+7;

	 }
	 	
	 for(var i=b1-1; i>=0; i--){
	 	//console.log(t3-j1)
	 	tabT.push(t3-j1);
	 	j1=j1+9;
	 }
	 
//console.log(tabT)
	 return tabT;
}


function positionReine(idC,ligne,colonne){

	var tab=positionTour(idC,ligne,colonne);
	var tab1=positionFou(idC,ligne,colonne);

    
	 return tab.concat(tab1);;
}

export function retournerPosition(id,idC,ligne,colonne){

	var posF=[];

	switch(id){

        case 0: 
		posF=positionTour(idC,ligne,colonne);
		break;
		case 1: 
		posF=positionCaval(idC)
		break;

        case 2: 
		posF=positionFou(idC,ligne,colonne);
		break;
		case 3: 
		posF=positionReine(idC,ligne,colonne)
		break;

		case 4: 
	    posF=positionRo(idC)
		break;
		case 5: 
		posF= positionPionN(idC);
		break;

        case 6: 
		posF=positionTour(idC,ligne,colonne);
		break;
		case 7: 
		posF=positionCaval(idC)
		break;

		case 8: 
		posF=positionFou(idC,ligne,colonne);
		break;
       	case 9: 
		posF=positionReine(idC,ligne,colonne)
		break;

		case 10: 
		posF=positionRo(idC)
		break;
       
		case 11: 
		posF=positionPionW(idC);
		break;
		default: console.log("default -1");
	}
	return posF;

}

function difference(a, b) {
  return Math.abs(a - b);
}

export function verifierCaseSauter(taa,t,idC,idF){
   var valD=difference(idC,idF);
   var bool=true;
   var ind=0;
   console.log(valD+" val")
   var i=0;
   var min=Math.min(idF,idC);
   var indi=0;

   if(valD>7&& Number.isInteger(valD/8)){
   	  i=valD/8;
   	  indi=8;
   }
    else if(valD>7&& Number.isInteger(valD/9)){
   	  i=valD/9;
   	  indi=9;
   }

    else if(valD>7&& Number.isInteger(valD/10)){
   	  i=valD/10;
   	  indi=10;
   }
    else if(valD>7&& Number.isInteger(valD/17)){
   	  i=valD/17;
   	  indi=17;
   }
    else if(valD>7&& Number.isInteger(valD/15)){
   	  i=valD/15;
   	  indi=15;
   }
    else if(valD>7&& Number.isInteger(valD/6)){
   	  i=valD/6;
   	  indi=6;
   }
    else if(valD>=7&&Number.isInteger(valD/7)){
   	  i=valD/7;
   	  indi=7;
   	  //console.log("77777")
   }
   else {
   	i=valD/1;
   	indi=1;
   //	console.log("1111")
   }
     var cum=indi;

 
   for(var j=0; j<i-1; j++){
     
     ind=parseInt(min)+cum;
      console.log(ind+" inddd")
     if(taa[t[ind][0]].props.children[t[ind][1]].props.imagg!==""&&i>1){
     	bool=false;
     	break;
     }
    
     cum=cum+indi;
   }
 


   return bool;
	}


export function capture(tab,ind1,ind2){

	  return tab[ind1[0]][ind2[1]]=tab[ind2[0]][ind2[1]];

}

export function estAp(ind1){
   return (ind1>=0&&ind1<6);
}
export function estAp1(ind2){
   return (ind2>5&&ind2<12);
}
export function chercherPosition(tabImage,image){
	
const ima = (element) => element === image;

return tabImage.findIndex(ima);
}

export function echange(i,j,pos1,pos2,tab,id,idC,idF){

  var posF=retournerPosition(id,idC,i,j);
  var temps;
 // console.log((posF[0]===parseInt(idF))+" posF");
 // console.log(verifierCaseSauter(tab,idC,idF)+" valeur absolue")
  for( var k=0; k<posF.length; k++){
    //console.log((posF[k]+" "+parseInt(idF))+" posF")
  if(posF[k]===parseInt(idF)){
  		//console.log("je suis echangé")
  temps=tab[i][j];
  tab[i][j]=tab[pos1][pos2];
  tab[pos1][pos2]=temps;
  break;
}else{}
}
  return tab;


}

export function echangeCapture(i,j,pos1,pos2,tab,id,idC,idF){

  var posF=retournerPosition(id,idC,i,j);
  var temps;
 // console.log((posF[0]===parseInt(idF))+" posF");
 // console.log(verifierCaseSauter(tab,idC,idF)+" valeur absolue")
  for( var k=0; k<posF.length; k++){
    //console.log((posF[k]+" "+parseInt(idF))+" posF")
  if(posF[k]===parseInt(idF)){
  		//console.log("je suis echangé")
  temps=tab[i][j];
  tab[i][j]="";
  tab[pos1][pos2]=temps;
  break;
}else{}
}
  return tab;


}


/*export function verifierCaseSauter(taa,t,idC,idF){
   var valD=difference(idC,idF);
   var bool=true;
   var ind=0;
   console.log(valD+" val")
   var i=0;
   var min=Math.min(idF,idC);
   var indi=0;

   if(valD>7&& Number.isInteger(valD/8)){
   	  i=valD/8;
   	  indi=8;
   }
    else if(valD>7&& Number.isInteger(valD/9)){
   	  i=valD/9;
   	  indi=9;
   }

    else if(valD>7&& Number.isInteger(valD/10)){
   	  i=valD/10;
   	  indi=10;
   }
    else if(valD>7&& Number.isInteger(valD/17)){
   	  i=valD/17;
   	  indi=17;
   }
    else if(valD>7&& Number.isInteger(valD/15)){
   	  i=valD/15;
   	  indi=15;
   }
    else if(valD>7&& Number.isInteger(valD/6)){
   	  i=valD/6;
   	  indi=6;
   }
    else if(valD>=7&&Number.isInteger(valD/7)){
   	  i=valD/7;
   	  indi=7;
   	  //console.log("77777")
   }
   else {
   	i=valD/1;
   	indi=1;
   //	console.log("1111")
   }
     var cum=indi;

   if(valD!==17&&valD!==15&&valD!==10&&valD!==6){
   for(var j=0; j<i-1; j++){
     
     ind=parseInt(min)+cum;
      console.log(ind+" inddd")
     if(taa[t[ind][0]].props.children[t[ind][1]].props.imagg!==""&&i>1){
     	bool=false;
     	break;
     }
    
     cum=cum+indi;
   }
  }else{
	 
	 if(valD===17){
	 	cum=9;
	 }
	 else if(valD===15){
	 	cum=7;
	 }
     else if(valD===10) {
     	cum=9;
     }
     else if(valD===6){
     	cum=7;
     }
     else{
     	cum=8;
     }
	  ind=parseInt(min)+cum;
      console.log(ind+" inddd")
     if(taa[t[ind][0]].props.children[t[ind][1]].props.imagg!==""){
     	bool=false;
 
     }
    
     
   }


   return bool;
	}
*/