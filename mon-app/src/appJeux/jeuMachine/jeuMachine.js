 import {Machine,assign} from 'xstate';

  /*else if(valeur[line[0]]==="X"&&valeur[line[1]]===null&&valeur[line[2]]===null){
      k={ind:line[1],ver:true};
     }

    else if(valeur[line[2]]==="X"&&valeur[line[1]]===null&&valeur[line[0]]===null){
      k={ind:line[1],ver:true};
    }
    else if(valeur[line[0]]==="X"&&valeur[line[2]]===null&&valeur[line[1]]===null){
     k={ind:line[2],ver:true};


     function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
    }*/

    function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
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

  
 function winnerByline(valeur,line){
  return (valeur[line[0]]==="X"&&valeur[line[0]]===valeur[line[1]]&&valeur[line[2]]===valeur[line[0]]||
    valeur[line[0]]==="O"&&valeur[line[0]]===valeur[line[1]]&&valeur[line[2]]===valeur[line[0]]);
}
function calculWinner(valeur){
  const prob=[
     [0,1,2],[3,4,5],[6,7,8],[0,3,6],
     [1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];

 const bol = prob.map(line=>winnerByline(valeur,line));
 const reducer = (accumulator, currentValue) => accumulator + currentValue;


return bol.reduce(reducer)===1||bol.reduce(reducer)===2;
  
}
 function calculAdv(valeur,line){

     let k={};

  
      if(valeur[line[0]]==="O"&&valeur[line[1]]==="O"&&valeur[line[2]]===null){
      k={ind:line[2],ver:true};
     }

    else if(valeur[line[2]]==="O"&&valeur[line[1]]==="O"&&valeur[line[0]]===null){
      k={ind:line[0],ver:true};
    }
    else if(valeur[line[0]]==="O"&&valeur[line[2]]==="O"&&valeur[line[1]]===null){
     k={ind:line[1],ver:true};
    }
    else{
         const isNull = (element) => element ===null;
         const taa=tabAlea(valeur);
         console.log(taa+ " tab");
         melange(taa)
      const i=taa[0]; 
      k={ind:i,ver:false};//Math.floor(Math.random() * Math.floor(valeur.length-1));
    
    }
    return k;
      
 }

function tabAlea(tab){

     const ta=[0,1,2,3,4,5,6,7,8];
     const t=[];
     let k=0;
     for(var i=0; i<ta.length; i++){
       if(tab[i]===null){
           t[k]=ta[i];
           k++;
       }
     }
     return t;
}

 function calculGagnant(valeur,line){

 // console.log(line);
  let k={};

    if(valeur[line[0]]==="X"&&valeur[line[1]]==="X"&&valeur[line[2]]===null){
      k={ind:line[2],ver:true};
     }

    else if(valeur[line[2]]==="X"&&valeur[line[1]]==="X"&&valeur[line[0]]===null){
      k={ind:line[0],ver:true};
    }
    else if(valeur[line[0]]==="X"&&valeur[line[2]]==="X"&&valeur[line[1]]===null){
     k={ind:line[1],ver:true};
    }
 
    return k;

 }

 function findId(valeur){
    let i=0;
    let bol=false;
    const prob=[
     [0,1,2],[3,4,5],[6,7,8],[0,3,6],
     [1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];
  const ta=[0,1,2];
  let k=0;
 // console.log(calculGagnant(valeur,ta))
 
  for(var j=0; j<prob.length; j++){

   i=calculGagnant(valeur,prob[j]);
   if(i.ver===true){
    bol=true;
     console.log(j+"kk")
    break;
   }
  
 
  }
 
if(bol===false){
     for(var j=0; j<prob.length; j++){

   i=calculAdv(valeur,prob[j]);
   if(i.ver===true){
     console.log(j+"kk")
    break;
   }
  
 
  }
}

  return i.ind;
 }
 
   
 const setCount = context => context.count + 1;
const setCountt = context => context.countt +1;



//const setMessage = context => context.message=; actions: assign({ count: context => context.count + 1 })

    
export const jeuMachine=Machine({
   
   id:"jeu",
   context:{
     count:0,
     countt:0,
     id:Array(9).fill(0),
     valuee:Array(9).fill(null),
     message:"",
     tab:Array(1).fill("O"),
     tabe:melange([0,1,2,3,4,5,6,7,8])
   },
   initial:"joueur1",
   states:{
     joueur1:{
       after:{
         1000:{
           target:'counting',
           // actions:[assign({ count: setCount }),'activate']
         }
       }
     },
        counting: {
  invoke: {
    id: 'incInterval',
    src: (context, event) => (callback, onReceive) => {
      // This will send the 'INC' event to the parent every second
      const id = setInterval(() => callback('CLICK'), 1000);

      // Perform cleanup
      return () => clearInterval(id);
    }
  },
  on: {
    CLICK: {
      actions: 'handleClick1',
      target:'joueur2'
    },
    GAME:{
    actions:'handleGame'}
  }
},
     joueur2:{
       on:{
       CLICK:{
         target:'joueur1',
         actions:'handleClick'
       },
       GAME:{actions:'handleGame',
        target:'joueur1',
     }
       }
     }
   }
 },
 
  
   {  actions: {
      // action implementations
      activate: (context, event) => {
    
        
       alert(context.count);
      },
      
    melangeTab:(context,event)=>{
    let a=0;
    let t;
    let i
    for(i=context.tabe.length-1; i>=0; i--){
      a=Math.floor(Math.random() * Math.floor(context.tabe.length));
      t=context.tabe[a];
      context.tabe[a]=context.tabe[i];
      context.tabe[i]=t;
    
    }
    return context.tabe;
},
       
    handleClick:(context,event)=>{

        const valeur= context.valuee.slice();
        const ide=context.id.slice();
        const i=event.id;
        
         
         const resul=context.tabe.filter(res=>res!=i);
       // console.log(resul)
         context.tabe=resul;

        const va=context.tab[0]==="X"?"O":"X";
        
       if(ide[i]===0 &&calculWinner(valeur)===false){
       valeur[i]=va;
       context.tab[0]=va;
  
    if(context.tab[0]==="X" &&calculWinner(valeur)===true){
        
        context.count++;
        context.message="X a gagné  "+context.count+" fois";
    }
      else if(context.tab[0]==="O" &&calculWinner(valeur)===true){
       context.countt++;
        context.message="O a gagné  "+context.countt+" fois";

      }
      else{
        context.message="Aucun gagnant";
      }
    }
    else{}
    
  

      ide[i]=i+1;

//    alert(i)
    console.log(context.tab)
      context.valuee=valeur; 
      context.id=ide;
     // console.log(calculWinner(valeur));

      

   },


    handleClick1:(context,event)=>{

        const valeur= context.valuee.slice();

        
        const ide=context.id.slice();

    const isLargeNumber = (element) => element ===0;

 //const i=ide.findIndex(isLargeNumber); 
   const i=findId(valeur);
       

        const resul=context.tabe.filter(res=>res!=i);
      //  console.log(resul)
         context.tabe=resul;

        const va=context.tab[0]==="X"?"O":"X";
        
       if(ide[i]===0 &&calculWinner(valeur)===false){
       valeur[i]=va;
       context.tab[0]=va;
  
    if(context.tab[0]==="X" &&calculWinner(valeur)===true){
        
        context.count++;
        context.message="X a gagné  "+context.count+" fois";
    }
      else if(context.tab[0]==="O" &&calculWinner(valeur)===true){
       
       context.countt++;
        context.message="O a gagné  "+context.countt+" fois";

      }
      else{
        context.message="Aucun gagnant";
      }
    }
    else{}
    
  

      ide[i]=i+1;

    
   // alert(i)
  //  console.log(context.tabe)
      context.valuee=valeur; 
      context.id=ide;
     // console.log(calculWinner(valeur));

      

   },


 handleGame:(context,event)=>{
     
        const valeur= context.valuee.slice();
          const ide=context.id.slice();
        
      valeur.fill(null)
        ide.fill(0)
      context.valuee=valeur;
      context.tab[0]="O";
      context.message="";
          context.id=ide;   
       
   

   },
 
 
 
      notifyActive: (context, event) => {
        alert('active!');
      },
      notifyInactive: (context, event) => {
        console.log('inactive!');
      },
      sendTelemetry: (context, event) => {
        console.log('time:', Date.now());
      }
    }
  })
