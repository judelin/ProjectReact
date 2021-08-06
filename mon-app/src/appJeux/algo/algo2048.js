function genereTabN(n){
    var tab = [];
    for(var i = 0; i < n; i++){
        tab.push(0);
    }
    return tab;
}

export function genereTabNXN(n){
    var tab = [];
    for(var i = 0; i < n; i++){
        tab.push(genereTabN(n));
        
    }
    return tab;
}


function countZero(tab, nomb){
    var j = 0;
    for(var i = 0; i < tab.length; i++){
        
        if(tab[i] === nomb){
            j++;
        }
    }
    return j;
}

function deplacerGauche(tab){
    var j = countZero(tab, 0);
    var k = 0;
    for(var i = 0; i < tab.length; i++){
       if(tab[i] !== 0){
          tab[k] = tab[i];
          k++;
        
       }
    }
    for(var i = tab.length - j; i < tab.length; i++){
       tab[k] = 0;
       k++;   
    }
    return tab;
}

function deplacerDroite(tab){
    var tab1 = genereTabN(tab.length);
    var tab3 = tab.slice();
    var j = countZero(tab, 0);
    var tab2 = deplacerGauche(tab3);
   
    var k = 0;
    for(var i = 0; i < tab.length; i++){
        if(i < j){
            //tab1[i] = 0;
        }
        else{
            tab1[i] = tab2[k];
                k++;
        }
    }
    return tab1;
}

function ajouterGauche(tab2){
    var tab3 = tab2.slice();
    var tab = deplacerGauche(tab3);
    var tab1 = genereTabN(tab.length);
   // var j = countZero(tab, 0);
    
    
    for(var i = 0; i < tab.length; i++){
        if(i === 0){
            tab1[i] = tab[0];
        }
        else{
            if(tab1[i-1] === tab[i]){
                tab1[i - 1] = tab[i]*2;
                tab1[i] = 0;
            }
            else{
                tab1[i] = tab[i];
            }
        }
    }
    return deplacerGauche(tab1);
}


function ajouterDroite(tab2){
     var tab = deplacerDroite(tab2);
    var tab1 = genereTabN(tab.length);
    //var j = countZero(tab, 0);
    
    
    for(var i = tab.length - 1; i >= 0; i--){
        if(i === tab.length - 1){
            tab1[i] = tab[tab.length - 1];
        }
        else{
            if(tab1[i + 1] === tab[i]){
                tab1[i + 1] = tab[i]*2;
                tab1[i] = 0;
            }
            else{
                tab1[i] = tab[i];
            }
        }
    }
    return deplacerDroite(tab1);
}

function columnBecomeLine(tab){
    var tab1 = genereTabNXN(tab.length);
    for(var i = 0; i < tab.length; i++){
        for(var j = 0; j < tab.length; j++){
            tab1[i][j] = tab[j][i];
        }
    }
    return tab1;
    
}

export function gauche(tab){
    var tab1 =  genereTabNXN(tab.length);
    for(var i = 0; i < tab.length; i++){
       tab1[i] = ajouterGauche(tab[i]);
    }
    return tab1;
    
}
export function droite(tab){
    var tab1 =  genereTabNXN(tab.length);
    for(var i = 0; i < tab.length; i++){
       tab1[i] = ajouterDroite(tab[i]);
    }
    return tab1;
    
}


export function haut(tab2){
    var tab = columnBecomeLine(tab2);
    var tab1 = genereTabNXN(tab.length);
    for(var i = 0; i < tab.length; i++){
       tab1[i] = ajouterGauche(tab[i]);
    }
     var tab3 = columnBecomeLine(tab1);
    return tab3;
    
}

export function bas(tab2){
    var tab = columnBecomeLine(tab2);
    var tab1 =  genereTabNXN(tab.length);
    for(var i = 0; i < tab.length; i++){
       tab1[i] = ajouterDroite(tab[i]);
    }
     var tab3 = columnBecomeLine(tab1);
    return tab3;
   
    
}


function detecteMoveV(tab){
    var tab2 = [];
    for(var i = 0; i < tab.length; i++){
        tab2.push(tab[i]);
    }
    var tab1 = deplacerGauche(tab);
    var j = 0;
    for(var i = 0; i < tab.length; i++){
        if(tab2[i] === tab1[i]){
            j++;
        }
    }
    
    return j === tab.length;
}

function score(tab2){
    var tab3 = tab2.slice();
    var tab = deplacerGauche(tab3);
    var score = 0;
    for(var i = 0; i < tab.length; i++){
      if(i > 0){
       if(tab[i-1] === tab[i]){
           score = score + tab[i]*2;   
           tab[i] = 0;
       }
      } else{
          
      }   
        
    }
    return score;
}

export function scoreTotal(tab){
    var totalScore = 0;
    for(var i = 0; i < tab.length; i++){
        totalScore = totalScore + score(tab[i]);
    }
    return totalScore;
}

export function scoreTotal1(tab2){
    var tab = columnBecomeLine(tab2);
    var totalScore = 0;
    for(var i = 0; i < tab.length; i++){
        totalScore = totalScore + score(tab[i]);
    }
    return totalScore;
}

export function detecteMoveTab(tab){
    var bool = true;
    
    for(var i = 0; i < tab.length; i++){
       //print(detecteMove(tab[i]));
        if(detecteMove(tab[i]) === false){
            bool = false;
            break;
        }
        
    }
    
    return bool;
}


/************************************************************************/
    export function genereCase(tab){
    var ind = [];
    var k = 0;
    for(var i = 0; i < tab.length; i++){
         for(var j = 0; j < tab.length; j++){
             if(tab[i][j] === 0){
                 ind.push(k);
             }
         k++;
    }
    }
    return ind;
}

function genereLineCol(tab, nomb){
    var ind = [];
    var k = 0;
    for(var i = 0; i < tab.length; i++){
         for(var j = 0; j < tab.length; j++){
             if(k === nomb){
                 ind.push(i);
                 ind.push(j);
                
             }
         k++;
    }
    }
    return ind;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  function addTuileRandomV(tab){
      var rand = getRandomInt(4);
      var rand1 = getRandomInt(4);
      tab[rand1][rand] = (getRandomInt(2) === 0) ? 2 : 4;
      return tab;
}

export function compareTab(tab, tab1){
    var bool = true;
    for(var i = 0; i < tab.length; i++){
        for(var j = 0; j < tab1.length; j++){
            if(tab[i][j] !== tab1[i][j]){
                bool = false;
                break;
            }
        }
    }
    return bool;
}



function detect(tab,commande, commande1){
  var ind = 0;
  var ind1 = 0;
  var bool = false;
  for(var i = 0; i < tab.length; i++){
      
      if(i === 0){
       
      }
      else{
          if((tab[i - 1] !== tab[i] ||tab[i] !== tab[i - 1]) 
             && (tab[i] === 0 || tab[i-1] === 0)){
              ind++;
          }
          else{
              ind1++;
          }
      }
    }
    if(ind > 1){
        bool = true;
    }
    else if (ind1 >= 1 && ind === 1 && tab[0] === 0 && commande === 1 && commande1 === 2){
        bool = true;
       
    }
    else if (ind1 >= 1 && ind === 1 && tab[tab.length-1] === 0 && commande === 2 && commande1 === 1){
         bool = true;
        
    }else{}
    return bool;
}

function detectVide(tab,commande, commande1){
    var bool = false;
    for(var i = 0; i < tab.length; i++){
        if(detect(tab[i],commande,commande1) === true){
            bool = true;
        }
    }
    return bool;
}

export function detecteMove(tab,fleche, commande, commande1){
    var bool = false;
    if(fleche === 37){
        if(commande === 1 && commande1 === 2){
            bool = detectVide(tab, commande, commande1);
           
        }
    }
     else if(fleche === 39){
          if(commande === 2 && commande1 === 1){
               bool = detectVide(tab, commande, commande1);
           
        }
    }
    else{}
   
    return bool;
}

 export  function addTuileRandom(tab){
            
             var tab1 = genereCase(tab);
             var rand = getRandomInt(tab1.length);
             var ind = genereLineCol(tab,tab1[rand]);
            // console.log(tab);
            //console.log(tab2);
            //console.log(compareTab(tab, tab2));
          // console.log(detectVide(tab));
            if(tab1.length !== 0 ){
                tab[ind[0]][ind[1]] = (getRandomInt(2) === 0) ? 2 : 4;
       }
       return tab;
}

/*function mergeTab(tab){
    var tab1 = [];
    for(var i = 0; i < tab.length; i++){
        for(var j = 0; j < tab.length; j++){
           tab1.push(tab[i][j]);
           
      }
    }
    return tab1;
}*/


function longueurDifferentZero(tab){
   
   var indic = 0;  
   for(var i = 0; i < tab.length; i++){
         if(tab[i] !== 0){
             indic++;
         }
     }
    return indic;
}

function jeuBloquer(tab){
    var tab1 = [];
    for(var i = 0; i < tab.length; i++){
       tab1.push(longueurDifferentZero(tab[i]));
    }
        
   return tab1;
}

export function compareTabV(tab2, tab3){
    var tab = jeuBloquer(tab2);
    var tab1 = jeuBloquer(tab3);
    var j = 0;
   // var bol = false;
    for(var i = 0; i < tab.length; i++){
        if(tab[i] === tab1[i]){
            j++;
        }
    }
  
    return j===tab.length;
        
}


export function InitialisationRandomV(tab){
    var rand = getRandomInt(4);
    var rand1 = getRandomInt(4);
    var rand2 = getRandomInt(4);
    var rand3 = getRandomInt(4);
    
  tab[rand1][rand] = (getRandomInt(2) === 0) ? 2 : 4;
  tab[rand2][rand3] = (getRandomInt(2) === 0) ? 2 : 4;
   return tab;

}

function extraireElement(tab, elem){
    var tab1 = [];

    for(var i = 0; i < tab.length; i++){
        if(tab[i] !== elem){
            tab1.push(tab[i]);
        }
    }
    return tab1;
}

export function InitialisationRandom(tab){
  
    var tab1 = genereCase(tab);
    var rand = getRandomInt(tab1.length);
    var tab2 = extraireElement(tab1, rand);
    var rand1 = getRandomInt(tab2.length);
    var ind = genereLineCol(tab,tab1[rand]);
    var ind1 = genereLineCol(tab,tab2[rand1]);
    //console.log(ind);
    // console.log(ind1);
    
    tab[ind[0]][ind[1]] = (getRandomInt(2) === 0) ? 2 : 4;
    tab[ind1[0]][ind1[1]] = (getRandomInt(2) === 0) ? 2 : 4;
    return tab;

}


export function nombreDeplacement(tab){
   var k = 0;
   for(var i = 0; i < tab.length; i++){
       for(var j = 0; j < tab.length; j++){
           if(tab[i][j] !== 0){
              k = k + 1;
           }
       }
   }
   return k;
}

export function win(tab){
    var bool = false;
    for(var i = 0; i < tab.length; i++){
        for(var j = 0; j < tab.length; j++){
            if(tab[i][j] === 2048){
                bool = true;
            }
    }
    }
    return bool;
}

export function scoreAd(tab2){
    var tab3 = tab2.slice();
    var tab = deplacerGauche(tab3);
    var score = 0;
    for(var i = 0; i < tab.length; i++){
      if(i > 0){
       if(tab[i-1] === tab[i]){
           score = score + 1;   
           tab[i] = 0;
       }
      } else{
          
      }   
        
    }
    return score;
}

function extraireNumb(tab){
    var tab1 = [];
    for(var i = 0; i < tab.length; i++){
        if(tab[i] !==0){
            tab1.push(tab[i]);
        }
    }
    return tab1.length;
}

function detectVid(tab,commande, commande1){
    var bool = false;
    var longueur = 0;
   // var scor = 0;
    for(var i = 0; i < tab.length; i++){
        if(detect(tab[i],commande,commande1) === true){
            longueur = longueur + extraireNumb(tab[i]);
           
        }
    }
    return longueur;
}

export function detecteMov(tab,fleche, commande, commande1){
    var longueur = 0;
     var tab1 = tab.slice();
     var tab2 = columnBecomeLine(tab1);
     if(fleche === 37){
         if(commande === 1 && commande1 === 2){
             longueur = detectVid(tab, commande, commande1);
            
         }
     }
      else if(fleche === 38){
         if(commande === 1 && commande1 === 2){
             longueur = detectVid(tab2, commande, commande1);
            
         }
     }
      else if(fleche === 39){
           if(commande === 2 && commande1 === 1){
                longueur = detectVid(tab, commande, commande1);
            
         }
     }
      else if(fleche === 40){
           if(commande === 2 && commande1 === 1){
                longueur = detectVid(tab2, commande, commande1);
            
         }
     }
     else{}
    
     return longueur;
 }
 