
/*export function calculateWinner(squares) {

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
 /* for (let i = 0; i < lines.length; i++) {
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

}*/
function tabLines(ind){
  var ligne = [];
  var k = 0;
  var l = 0;
  var c = 0;
 for(var i = 0; i < 2 * ind + 2; i++){
   var colonne = [];
   l = 0;
   c = 0;
   if(k <= ind * ind - 1){
      for(var j = 0; j < ind; j++){
         colonne.push(k);
         k = k + 1;
   }
 }
   else if(l <= ind * ind - 1 && i < 2 * ind ){
         l = i - ind;
        for(var j = 0; j < ind; j++){
         colonne.push(l);
         l = l + ind;
        
   }
  
 }
   else if(c <= ind * ind - 1){
         
        for(var j = 0; j < ind; j++){
         
        if(i === 2 * ind){
           colonne.push(c);
           c = ind + 1 + c;
       }
       else{
          colonne.push(c + ind -1);
         c = ind - 1 + c;
       }
   }

  }
  ligne.push(colonne);

}
return ligne;
 
}


/*export function calculateWinner(squares) {

 var lines = tabLines(3); 

 for (var i = 0; i < lines.length; i++) {
   var [a, b, c] = lines[i]
   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
     return squares[a];
   }
 }
 return null;
}*/

export function calculateWinner4(squares) {
  
  const lines = tabLines(squares.length);
  // console.log(tabLines(5));

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

 // var lignes = tabLines(4); 
export function calculateWinner(squares){
 var lignes = tabLines(Math.sqrt(squares.length)); 

  var ind = 0;
  for(var i = 0; i < lignes.length; i++){
      ind = 0;
       for(var j = 0; j < lignes[0].length; j++){
           
           if(j === 0 && squares[lignes[i][j]] &&  squares[lignes[i][j]] === squares[lignes[i][j+1]]){ind = 1;}
           else if(j !== 0){
               if(squares[lignes[i][j-1]]&& squares[lignes[i][j-1]]  === squares[lignes[i][j]]){
                      ind++;
                
                   if(ind === lignes[0].length){
                       return squares[lignes[i][j]];
                   }
               
                      
                  
               }
           }
       
           else{}
       }
       if(ind === lignes[0].length){
           
           break;
       }
    }
  

      return null;

}

function scoreEv(array){
   var score = 0;
   if(calculateWinner(array) === "O"){
       score = 10;
   }
   else if(calculateWinner(array) === "X"){
       score = -10;
   }
   else{}
   return score; 
}

function isNoMove(board)
{
 for (var i = 0; i < board.length; i++)
   if (board[i] === "")
     return true;
 return false;
}


/*export function minimax(board, depth, isMax){
   
    var score = scoreEv(board);

   if (score === 10)
          return score;
 
   if (score === -10)
         return score;
  
   if (isNoMove(board) === false)
        return 0;
  
   if (isMax)
   {
       var best = -1000;
 
       for(var i = 0; i < board.length; i++)
       {
        
               if (board[i] === "")
               {
                 
                   board[i] = "O";
 
                   best = Math.max(best, minimax(board,
                                   depth + 1, !isMax));
 
                   board[i] = "";
               }
           
          }
       
       return best;
   }
 
   else
   {
       var best = 1000;
 
       for(var i = 0; i < board.length; i++)
       {
           
                if (board[i] === "")
               {
                  
                   board[i] = "X";
 
                   best = Math.min(best, minimax(board,
                                   depth + 1, !isMax));
                     
                   board[i] = "";
               }
           }
       
       return best;
   }
}

export function findBestMove(board)
{
 var bestVal = -1000;
 var bestMoveRow = -1;
 var bestMoveCol = -1;
   var ind = [];

 for (var i = 0; i < board.length; i++)
 { 
       
   if (board[i] === "")
     {
       
       board[i] = "O";
      
       var moveVal = minimax(board, 0, false);
         
               board[i] = "";
     
       if (moveVal > bestVal)
       {
                   bestMoveRow = i;
               
         bestVal = moveVal;
       }
     }
     
 }


 return bestMoveRow;
}
*/



export function minimax(board, depth, isMax, alpha, beta){
    
  var score = scoreEv(board);

 if (score === 10)
        return score;

 if (score === -10)
       return score;

 if (isNoMove(board) === false)
      return 0;

 if (isMax)
 {
     var best = -1000;

     for(var i = 0; i < board.length; i++)
     {
      
             if (board[i] === "")
             {
               
                 board[i] = "O";

                 var val = minimax(board, depth + 1, !isMax, alpha, beta);
                 best = Math.max(best, val);
                 alpha = Math.max(alpha, best);
                 board[i] = "";
                 if (beta <= alpha){
                    break; 
                       }
       }
             }
         
        
     return best;
 }

 else
 {
     var best = 1000;

     for(var i = 0; i < board.length; i++)
     {
         
              if (board[i] === "")
             {
                
                 board[i] = "X";

                  var val = minimax(board, depth + 1, !isMax, alpha, beta);
                 best = Math.min(best, val);
                 beta = Math.min(beta, best);
                 board[i] = "";
                 if (beta <= alpha){
               break; 
          
       }
             }
         }
      
     return best;
 }
}

export function findBestMove(board)
{
var bestVal = -1000;
var bestMoveRow = -1;
var bestMoveCol = -1;
 var ind = [];

for (var i = 0; i < board.length; i++)
{ 
  if (board[i] === "")
   {
       board[i] = "O";
     
     var moveVal = minimax(board, 0, false, -1000, 1000);
           
             board[i] = "";
          
     if (moveVal > bestVal)
     { 					
                 bestMoveRow = i;
                // bestMoveCol = j;
       bestVal = moveVal;
     }
   }
   
}

return bestMoveRow;
}



export function differentZero(array, numb){
  var ind = 0;
  for(var i = 0; i < array.length; i++){
      if(array[i] !== ""){
          ind++;
      }
      if(ind === numb){
          break;
      }
  
  }
  return ind;
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

export function numbRandom(array){
  var tab = [];
  for(var i = 0; i < array.length; i++){
      if(array[i] === ""){
          tab.push(i);
      }
  }
  return melange(tab);
}