import React, {useState, useEffect} from 'react';
import {calculateWinner, calculateWinner4, bestMoveV, minimaxAl, bestMov, minimax} from './calculateWinner';
import {CarreVal} from './component/Carre';
import './component/affBra.css';


function TabBoard(props){
	//let sqrt = Math.round(Math.sqrt(props.tab.length));
	let tab = props.tab;
	let onClick = props.onClick;
	
  
	let ligne = [];
	let  id = 0;

	for(var i = 0; i<3; i++){
         let colonne = [];
		for(var j = 0; j<3; j++){
			const affiche = CarreVal(id, tab, onClick)
			colonne.push(<div className="column" key={id}>{affiche}</div>);
          id = id+1;
		}//

		ligne.push(<div key={i} className="row">{colonne}</div>)

	}//
	return ligne;
}//

 function AppTictacto(){
 	const arrayT = Array(9).fill(null);
 	const [history, setHistory] = useState(arrayT)
 	const [xIsNext, setIsNest] = useState(true);
  const [status, setStatus] = useState("");
 		/*squares: Array(9).fill(null),
 		 xIsNext: true
 	});*/
   
 	
   function handleClick(i){


     const squares = history.slice();
     if (calculateWinner(squares) || squares[i]) {
         return;
    }
       // console.log(squares[i]);
   
       squares[i] = xIsNext ? 'X' : 'O';

      /*setHistory({
      	squares: squares,
      	xIsNext: !history.xIsNext
      })*/

    setHistory(squares);
    setIsNest(!xIsNext);
   // console.log(xIsNext)

    //console.log(minimaxAl(squares, 0, true));
   }


    const winner = calculateWinner(history);
        let status1;
    useEffect(()=>{
    
     const squares = history.slice();

     
      if(!xIsNext && winner === null){
    //  console.log(minimaxAl(squares, 0, false));
       console.log(bestMoveV(squares))

        let ii = bestMoveV(squares);//minimaxAl(squares, 0, false);//bestMov(squares);

         if (calculateWinner(squares) || squares[ii]) {
         return;
    }
       //console.log(ii);
    
         squares[ii] = xIsNext ? 'X' : 'O';
       //  setHistory(squares);
        setIsNest(!xIsNext);
        setTimeout(setHistory, 1000, squares);
      
    }
  
   },[xIsNext, setIsNest, setHistory]);


    if (winner) {
        status1 = 'Winner: ' + winner;
      
    } else {
      status1 = 'Next player: ' + (xIsNext ? 'X' : 'O');
 
    }


	return(
		  <div>
		  <h1>Titacto</h1>
		  <TabBoard tab={history} onClick={(i) => handleClick(i)}/>
           {status1}
		  </div>
		);//
	
}

export default AppTictacto;


/*

   function bestM(squares) {
   // const squares = history.slice();
  // AI to make its turn
  let bestScore = -Infinity;
  let move;
 // console.log()
  for (let i = 0; i < squares.length; i++) {
      // Is the spot available?
      if (squares[i] === null) {
        squares[i] = 'O';
        setHistory(squares)
        //console.log(squares)
        let score = 10;//minimaxV(squares, 0, false);
        // console.log(score)
        squares[i] = null;
        setHistory(squares)
        if (score > bestScore) {

          bestScore = score;
          move = i;
        }
      
    }
  }
  return move;
  //currentPlayer = "X";
}
*/