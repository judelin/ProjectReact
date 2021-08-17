import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {calculateWinner, findBestMove, differentZero, numbRandom} from './calculateWinner';
//import {CarreVal} from './component/Carre';
import { CarreVal} from './component/tictactoComponent';
import './component/affBra.css';
import './AppTict.css';


function TabBoard(props){
	let sqrt = Math.round(Math.sqrt(props.tab.length));
	let tab = props.tab;
	let onClick = props.onClick;
	let carre = "carre"
  
	let ligne = [];
	let  id = 0;

	for(var i = 0; i < sqrt; i++){
         let colonne = [];
		for(var j = 0; j < sqrt; j++){
			const affiche = CarreVal(id, tab, onClick, carre)
			colonne.push(<div className="column" key={id}>{affiche}</div>);
          id = id + 1;
		}//

		ligne.push(<div key={i} className="row">{colonne}</div>)

	}//
	return ligne;
}//

 function AppTictacto(){
 	const arrayT =Array(9).fill("");
 	const [history, setHistory] = useState(arrayT)
 	const [xIsNext, setIsNest] = useState(false);
  const [status, setStatus] = useState("Next player");
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);
 		/*squares: Array(9).fill(null),
 		 xIsNext: true
 	});*/
   
 	
   function handleClick(i){

     //const winner = calculateWinner(history);
     const squares = history.slice();
     if (calculateWinner(squares) || squares[i]) {
         return;
    }
     
       squares[i] = xIsNext ? 'X' : 'O';
       setHistory(squares);
      setIsNest(!xIsNext);
      setStatus("Next player O")
    
    // setCountO(countO + 1);
   }
   function handleRestart(){
      	const arrayT =Array(9).fill("");
        const arrayTT =Array(16).fill("");
      if(history.length === 9){
           setHistory(arrayT);
      }
      if(history.length === 16){
           setHistory(arrayTT);
      }
       let fal = xIsNext;
      // if(xIsNext){
          setIsNest(fal);
      // }
      
      // window.location.reload();
   }
   function handleTrois(){
       	const arrayT = Array(9).fill("");
          let fal = xIsNext;
         setHistory(arrayT);
         setIsNest(fal);
         setCountO(0);
   }

    function handleQuatre(){
       	const arrayT = Array(16).fill("");
          let fal = xIsNext;
         setHistory(arrayT);
         setIsNest(fal);
         setCountX(0);
   }

   function handleHumain(){
       	const arrayT =Array(9).fill("");
        const arrayTT =Array(16).fill("");
      if(history.length === 9){
           setHistory(arrayT);
      }
      if(history.length === 16){
           setHistory(arrayTT);
      }
   //  if(xIsNext === false){
        setIsNest(true);
   //  }
   }

    function handleOrdinateur(){
        	const arrayT =Array(9).fill("");
        const arrayTT =Array(16).fill("");
      if(history.length === 9){
           setHistory(arrayT);
      }
      if(history.length === 16){
           setHistory(arrayTT);
      }
      let fal = xIsNext;
     // if(xIsNext){
        setIsNest(false);
     // }
   }

    const winner = calculateWinner(history);
     let status1;
    useEffect(()=>{
    
     const squares = history.slice();

     
      if(!xIsNext && winner === null){
  
       
        let ii = numbRandom(squares)[0];
        if(differentZero(squares, 5) === 5 && squares.length !== 9){
            ii = findBestMove(squares);
        }
        if(squares.length === 9){
            if(differentZero(squares, 1) === 1){
                ii = findBestMove(squares);
            }
         
        }
        //let ie = findBestMove(squares);
      //  console.log(squares);
       //  console.log(minimax(squares, 0, false));
         if (calculateWinner(squares) || squares[ii]) {
         return;
    }
       //console.log(ii);
    
         squares[ii] = xIsNext ? 'X' : 'O';
      // setHistory(squares);
        setIsNest(!xIsNext);
        setTimeout(setHistory, 1000, squares);
        setTimeout(setStatus, 1500, "Next player X");
       // console.log(xIsNext)
       
       if(calculateWinner(squares) === "O"){
          setCountO(countO + 1);
          setTimeout(setStatus, 1500, "Winner O");

       }
       else if(calculateWinner(squares) === "X"){
           setCountX(countX + 1);
       }else if(differentZero(squares, squares.length) === squares.length){
           setTimeout(setStatus, 1500, "Match null");
          //  let fal = !xIsNext;
          // setIsNest(fal);
       }
      }
  
   },[xIsNext, setIsNest, setHistory, countO]);

    /* useEffect(() => {
       let squares = history.slice();
       const winner = calculateWinner(squares);
      // console.log(calculateWinner(squares) === "X")
      
          if(winner === "X"){
        setCountX(countX + 1);
      }
      else if(winner === "O" && xIsNext === true){
       // alert("Winner");
             setCountO(countO + 1);
             setIsNest(false);
            // setHistory(arrayT);
      }else{}
    
     },[xIsNext, countX, countO]);*/

    /*if (winner) {
        status1 = 'Winner: ' + winner;
      
    } else {
        status1 = 'Next player: ' + (xIsNext ? 'O' : 'X');
 
    }*/
  
  //const status1 = winner ? 'Next player O' : '';
  //const win = winner === "X"?countX:countO;

	return(
		  <div className="row11">
      <div className="colum2">
		 
		  <TabBoard tab={history} onClick={(i) => handleClick(i)}/>
       <div><h4>{status}</h4></div>
      </div>
      <div className="colum2">
          <h4>Score X:{countX}  O: {countO}</h4>
          <div>
              <Button variant="light" onClick={handleTrois}>3X3</Button>
              <Button variant="light" onClick={handleQuatre}>4X4</Button>
       
         </div>
          
           <div>
              <Button variant="light" onClick={handleHumain}>Humain</Button>
              <Button variant="light" onClick={handleOrdinateur}>Ordinateur</Button>
       
         </div>
           <br/>
        <Button variant="secondary" onClick={handleRestart}>Redemarer</Button>

        </div>
		  </div>
		);//
	
}



export default AppTictacto;


