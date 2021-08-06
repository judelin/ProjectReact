
export function calculateWinner(squares) {

  const lines = tabLines(3); /*[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];*/
 // console.log(tabLines(3));
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function calculateWinner4(squares) {
  
  const lines = tabLines(4);
  // console.log(tabLines(5));

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

function tabLines(ind){
   var ligne = []
   var k = 0;
   var l = 0;
   var c = 0;
  for(var i = 0; i < 2 * ind + 2; i++){
    var colonne = [];
    l = 0;
    c = 0;
    if(k <= ind * ind - 1){
       for(var j = 0; j < ind; j++){
          colonne[j] = k;
          k = k + 1;
    }
  }
    else if(l <= ind * ind - 1 && i < 2 * ind ){
          l = i - ind;
         for(var j = 0; j < ind; j++){
          colonne[j] = l;
          l = l + ind;
         
    }
   
  }
    else if(c <= ind * ind - 1){
          
         for(var j = 0; j < ind; j++){
          
         if(i === 2 * ind){
            colonne[j] = c;
            c = ind + 1 + c;
         
        }
        else{
         

           colonne[j] = c + ind -1;
          c = ind - 1 + c;
        }
    }

   }
   ligne[i] = colonne;
 
 }
 return ligne
  
}



function score(tabBoard){
 let score = 0
  if(calculateWinner(tabBoard) === "X"){
     score = 10;
  }
  else if (calculateWinner(tabBoard) === "O"){
    score = -10;

  }
  else{
    score = 0;
  }
   return score
}


function scoreV(tabBoard){
  return (calculateWinner(tabBoard) === "O") ? 10 :
  (calculateWinner(tabBoard) === "X") ? -10 : 0;

}


export function bestMoveV(board) {
  // AI to make its turn
  let bestScore = -1000;
  let move;
  for (let i = 0; i < board.length; i++) {
    
      if (board[i] === null) {
   
        board[i] = 'O';
        let score = minimax(board, 0, false);
    
        board[i] = null;
        if (score > bestScore) {
      
          bestScore = score;
          move = i;
        }
      
    }
  }
  return move;
  
}


export function minimaxV(board, depth, isMaximizing) {

  let result = calculateWinner(board);
 // console.log(result);

  if (result !== null) {
    return score(board);
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
     
        // Is the spot available?
        if (board[i] === null) {
          board[i] = "O";
         
          let score = minimaxV(board, depth + 1, false);
         
          board[i] = null;
          bestScore = Math.max(score, bestScore);

        }
      
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
         // console.log(i)
        // Is the spot available?
        if (board[i] === null) {
          board[i] = "X";
          let score = minimaxV(board, depth + 1, true);
       
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      
    }
    return bestScore;
  }
}



export function minimax(node, depth, isMaximizing) {

  let result = calculateWinner(node);
 // console.log(result);

  if (result !== null) {
    return score(node);
  }



  if(isMaximizing){
     let  bestScore = -10000;

      for(var i = 0; i < node.length; i++){

        if(node[i] === null){
          node[i] = "O"
          let score = minimax(node, depth + 1, false);
          node[i] = null;

          bestScore = Math.max(score, bestScore);
            //   console.log(bestScore);

        }

      }
      return bestScore;
  }
  else{

      let bestScore = 10000;

      for(var i = 0; i < node.length; i++){

        if(node[i] === null){
          node[i] = "X"
          let score = minimax(node, depth + 1, true);
          node[i] = null;

          bestScore = Math.min(score, bestScore);

        }

      }
      return bestScore;
  }
}

export function minimaxAl(node, depth, player){
  let result = calculateWinner(node);
  if (result !== null) {
    return score(node);
  }

  let scores = [];
  let moves = [];
  
    for(var i = 0; i < node.length; i++){
      let score_move = {}
      if(player){
         if(node[i] === null){
         node[i] = "O";
         let score = minimaxAl(node, depth + 1, false);
         node[i] = null;
         score_move.score = {score: score, move: i}
         scores.push(score_move);
        // moves.push(i)
       
     }
   }
  else{
         if(node[i] === null){
         node[i] = "X";
         let score = minimaxAl(node, depth + 1, true);
         node[i] = null;
         score_move.score = {score: score, move: i}
         scores.push(score_move);
        // moves.push(i)
         
    }
  }

  }
 
 var bestMove;
if (player === false) {
        // If the player is aiPlayer, it sets a variable called bestScore to a very low number and loops through the moves array, 
        var bestScore = -10000;
        for (var i = 0; i <scores.length; i++) {
            // if a move has a higher score than bestScore, the algorithm stores that move
            if (scores[i].score.score > bestScore) {
                bestScore = scores[i].score.score;
                 //console.log(bestScore);
                bestMove = scores[i].score.move; // In case there are moves with similar score, only the first one will be stored.
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < scores.length; i++) {
            if (scores[i].score.score < bestScore) {
                bestScore = scores[i].score.score;
                //console.log(bestScore);
                bestMove = scores[i].score.move;
            }
        }
    }

return bestMove;

}



export function bestMov(squares){
  var scores = minimaxAl(squares, 0, false);
  let bestMov = 0;
 // console.log(scores.length);
 /* let  bestMov = 0;
  let countM = 0;
  let countM1 = 0;
   for(var i = 0; i < scores.length; i++){
    //  console.log(Array.isArray(scores[i].score.score))
   if(Array.isArray(scores[i].score.score)){
     // bestMov = scores[i].score.move;
    //  console.log(scores[i].score.move);
    countM = countM + 1;
   }
   else{
       // bestMov = scores[i].score.move;
        console.log(Number.isInteger(scores[i].score.score))
        countM1 = countM1 + 1;
        console.log(countM1);
   }
    
   if(countM - countM1 === countM){
        bestMov = scores[i].score.move;
   }
   else{
       bestMov = scores[i].score.move;
   }

   }*/

    for(var i = 0; i < scores.length; i++){
      if(Number.isInteger(scores[i].score.score)){
        bestMov = scores[i].score.move;
        break;
      }else{
        bestMov = scores[i].score.move;
      }
    }




   return bestMov;
}




/****************************************************************************************************************************************************/
