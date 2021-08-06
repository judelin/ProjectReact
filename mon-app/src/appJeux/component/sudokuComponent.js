import React from "react";
import '../styles/sudoku.css';


export function FormCh(props){
   return(
      <>
      <label>
        Choisissez le nombre case vide:
        <select value={props.value} onChange={props.onChange}>
        <option value="55">Numero</option>
          <option value="20">20</option>
          <option value="35">35</option>
          <option value="55">55</option>
          <option value="71">71</option>
        </select>
      </label>
       <button className="butt" onClick={props.onClick}>Restart</button>
    </>
   );
}
export function SudokuComponent(props){

 
    let n = 9;
    let ligne = [];
    let id = 0;
 // let col = "black";
    let col = props.colo;
    let bool = props.bool;
    //let idi = props.idi;
    let tab = []
    for (var i = 0; i < n; i++) {
       //let colonne = [];
       for (var j = 0; j < n; j++) {
          let val = props.valeur[i][j];
         
          if (val === 0) {
             val = null;
          }
    
          ligne.push(<div className="grid-item" style={{color: col[id]}} key={id} id={id} onClick={props.onClick}>{val}</div>)
          id = id + 1;
       }//
    }//
    return (
        <div className="board">
            <div className="grid-container">
                 {ligne}
            </div>
        </div>
    );
 }




 