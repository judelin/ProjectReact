import React, { useState, useEffect } from 'react';
import './AppSudoku.css';

import {
  genererSudoku, genereCase, isValidSudoku, allDiff
} from './algo/algoSudoku';

import {SudokuComponent, FormCh} from './component/sudokuComponent';

function Carre(props) {
   return (
      <div className="carree" id={props.id} onClick={props.onClick}><h1 id={props.id} className="item">{props.valeur}</h1></div>

   );
}//
//style={{backgroundColor: `rgba(`+(242-props.k)+`,` +(237-props.k1)+`,`+(237-props.k1)+`,`+ 1+`)`}}
function TuileComponent(props) {
   return (
      <div className="columnn">
         <Carre valeur={props.valeur} carre={props.carre} id={props.id} onClick={props.onClick} />
      </div>
   );

}
//
function construireTab(ind) {
   var tab = [];
   var tab1 = [];
   var k = 0;

   for (var i = 0; i < ind; i++) {
      for (var j = 0; j < ind; j++) {
         tab[k] = [i, j];

         k++;
      }
   }
   return tab;
}

function TabBoardV(props) {
  

   let n = props.n;
   let ligne = [];
   let id = 0;
   for (var i = 0; i < n; i++) {
      let colonne = [];
      for (var j = 0; j < n; j++) {
         let val = props.valeur[id];
         if (val === 0) {
            val = null;
         }
         colonne.push(<TuileComponent valeur={val} key={id} id={id} onClick={props.onClick} />)
         id = id + 1;
      }//

      ligne.push(<div key={i} className="roww">{colonne}</div>)

   }//
   return ligne;
}
//
function add(tab, ind, val) {
   let indice = construireTab(9);
   //console.log(indice);
   tab[indice[ind][0]][indice[ind][1]] = val;
   return tab;
}
const valBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function genereTabCol(){
   var tab = [];
   for(var i = 0; i < 81; i++){
       tab.push("black");
   }
   return tab;
}

function AppSudoku() {
  let nombCase = 55;
   const [valeur, setValeur] = useState(genererSudoku(nombCase));//useState(genererSudoku(genereTabNXN(props.n)));
   const [valeurBoard, setValeurB] = useState(valBoard);
   const [val, setVal] = useState(0);
   const [ind, setInd] = useState(0);
   const [etat, setEtat] = useState(true);
   const [valNonMod, setNonM] = useState([]);
   const [etatJeu, setEtatJ] = useState(true);
   const [value, setValue] = useState(nombCase);
   const [idEroor, setIdError] = useState([]);
   const [select, setSelect] = useState(false);
   const [colo, setColo] = useState(genereTabCol());

   function handleClick(event) {
    
      const i = parseInt(event.target.id, 10);
      setInd(i);

   }

   function handleClickVal(event) {
      event.preventDefault();
      let isTrue = isValidSudoku(valeur)
      let vali = colo.slice();
      const i = parseInt(event.target.id, 10);
    
      setSelect(true);
      const tabV = valeur.slice();
      if (!valNonMod.includes(ind)) {
         let tab = add(tabV, ind, valeurBoard[i]);
         setValeur(tab);
         
         if(isValidSudoku(tab)){
            vali[ind] = "black";
            setColo(vali);
         }
      }
      //setEtatJ(isTrue);
      if(isTrue && allDiff(valeur)){
          alert("Win");
      }
      
      //alert();
   }

   function handleValue(event){
      setValeur(genererSudoku(event.target.value));
      setValue(event.target.value);
      setEtat(true);
    }

    function handleRestart(){
       let v = value;
       setValeur(genererSudoku(v))
       setColo(genereTabCol())
       setEtat(true);
    }

  


/*********************************************************************************/
   useEffect(() => {
      let vali = colo.slice();
      let isTrue = isValidSudoku(valeur);
      if(isTrue === false && select && !valNonMod.includes(ind)){
        
         if(!vali.includes(ind)){
            vali[ind] = "red";
         //vali.push(ind);
        // console.log(vali)
      }
        // console.log("test");
         setColo(vali);
         setSelect(false);
      }
    
      
   }, [colo, ind, valeur, select,setSelect, setColo ]);


   useEffect(() => {
      let vali = valeur.slice();
       setEtatJ(isValidSudoku (vali));
   }, [setEtatJ, valeur]);

   useEffect(() => {
      //setValeur(tab);
      // console.log(valeur);
      if (etat) {
         let val = valeur.slice();

         setNonM(genereCase(val));
         setEtat(false);
      }
   }, [valeur, setNonM, setEtat, etat]);
   return (
      <div className="roww">
         
         <div className="columnn">
         
            <div className="wrappper">
               <SudokuComponent bool={etatJeu} colo ={colo} valeur={valeur} onClick={handleClick} />
            </div>
         </div>
         <div className="colum1">
            <FormCh onChange = {handleValue} onClick ={handleRestart}/>
            <div className="wrapp">
               <TabBoardV n={3} valeur={valeurBoard} carre="carree" onClick={handleClickVal} />
            </div>
         </div>
      </div>

   );

}

export default AppSudoku;

