function isDifferent(array1) {
    var bool = true;
    var array = array1.slice();
    array.sort();
    
    for(var i = 0; i < array.length; i++) {
        if(i === 0 || array[i] === 0) {
            
        } else {
            if(array[i - 1] === array[i]) {
                bool = false;
                break;
            }
        }
        
    }
    
    return bool;
}

function isLine(array) {
    var bool = true;
    for(var i = 0; i < array.length; i++) {
        if(isDifferent(array[i]) === false) {
            bool = false;
        }
    }
    return bool;
}

function columnBecomeLine(array3) {
    var array = array3.slice();
    var array2 = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]];
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++) {
            array2[i][j] = array[j][i];
        }
    }
    return array2;
}


function  boxTroisParTrois(array3) {
    var array = array3.slice();
    var array2 = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]];
    
    for(var i = 0; i < array.length; i++) {
        var ind = 0;
       if(i < 3) {
        for(var j = 0; j < 3; j++) {
           if(i === 0) {
            for(var k = 0; k < 3; k++) {
                array2[i][ind] = array[j][k];
                ind++;
            }
           }  else if(i === 1) {
               for(var k1 = 3; k1 < 6; k1++) {
                    array2[i][ind] = array[j][k1];
                    ind++;
                }
           }
           else {
               for(var k2 = 6; k2 < 9; k2++) {
                    array2[i][ind] = array[j][k2];
                    ind++;
                }
           }
                 
        }
       } else if(i < 6) {
            for(var j1 = 3; j1 < 6; j1++) {
                 if(i === 3) {
                for(var k3 = 0; k3 < 3; k3++) {
                    array2[i][ind] = array[j1][k3];
                    ind++;
                }
                 }
                  else if(i === 4) {
                       for(var k4 = 3; k4 < 6; k4++) {
                            array2[i][ind] = array[j1][k4];
                            ind++;
                        }
                   }
                   else {
                       for(var k5 = 6; k5 < 9; k5++) {
                            array2[i][ind] = array[j1][k5];
                            ind++;
                        }
                   }
                    
            }
           
       }else {
            for(var j2 = 6; j2 < 9; j2++) {
                 if(i === 6) {
                        for(var k6 = 0; k6 < 3; k6++) {
                            array2[i][ind] = array[j2][k6];
                            ind++;
                        }
                         }
                          else if(i === 7) {
                               for(var k7 = 3; k7 < 6; k7++) {
                                    array2[i][ind] = array[j2][k7];
                                    ind++;
                                }
                           }
                           else {
                               for(var k8 = 6; k8 < 9; k8++) {
                                    array2[i][ind] = array[j2][k8];
                                    ind++;
                                }
                           }
                    
            }
       }
    }
    return array2;
}

export function isValidSudoku(array1) {
    var bool = true;
    var array = array1.slice();
    var grid1 = columnBecomeLine(array);
    var grid2 = boxTroisParTrois(array);
    
    if(isLine(array) === false) {
        bool = false;
    }
    else if(isLine(grid1) === false) {
        bool = false;
    }
    else if(isLine(grid2) === false) { 
        bool = false;
    }
    return bool;
}

export function genereCase(tab1){
    var tab = tab1.slice();
    var ind = [];
    var k = 0;
    for(var i = 0; i < tab.length; i++){
         for(var j = 0; j < tab.length; j++){
             
             if(tab[i][j] !== 0){
                
                 ind.push(k);
             }
         k++;
       }
    }
    return ind;
}

function caseN(n){
    var array = [];
     for(var i = 0; i < n; i++){
        array.push(i+1);
     }
     return array;
    
 }
 
 function caseIJ(n){
    var array = [];
     for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
        array.push([i,j]);
     }
     }
     return array;
    
 }
 function update(tab){
     var array = [];
     for(var i = 0; i < tab.length; i++){
         if(tab[i] !== 0){
             array.push(tab[i]);
         }
     }
     return array;
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
 function verifier(array, ind){
     var bool = true;
     if(array.length === 0){
     }
     else{
     for(var i = 0; i < array.length; i++){
         if(array[i][0] === ind[0] ||
            array[i][1] === ind[1] || (Math.floor(array[i][0]/3) === Math.floor(ind[0]/3) &&
            Math.floor(array[i][1]/3) === Math.floor(ind[1]/3)) ){
             bool = false;
         }
     }
     }
     return bool;
 }

 
 
 function voisinLigne(array, i){
     var tabLigne = [];
     for(var j = 0; j < array.length; j++){
        if(array[i][j] !== 0){
          tabLigne.push(array[i][j]);
     }
     }
                      
   return tabLigne;
 }
                      
 function voisinColonne(array, j){
     var tabColonne = [];
     for(var i = 0; i < array.length; i++){
      if(array[i][j] !== 0){
        tabColonne.push(array[i][j]);
     }
     }
                      
   return tabColonne;
 }
                      
 function voisinBloc(array1, indi, indj){
     var array = array1.slice();
     var tabBloc = [];
     for(var i = indi; i < 9; i++){
         for(var j = indj; j < 9; j++){
            if(Math.floor(i/3) === indi && Math.floor(j/3)=== indj  && array[i][j] !== 0){
              tabBloc.push(array[i][j]);
            }
         }
     }
                      
   return tabBloc;
 }
 
 /*function dejaV(array, elem){
     var bool = false;
     for(var i = 0; i < array.length; i++){
         if(array[i] === elem){
             bool = true;
             break;
         }
     }
     
     return bool;
 }*/
 
 
 
 function nombDif(array1, array2, array3){
    
     var couleurVoisin = [];
     
     for(var i = 0; i < array1.length; i++){
         if(couleurVoisin.length === 0){
             couleurVoisin.push(array1[i]);
         }
        else if(couleurVoisin.includes(array1[i]) === false){
             couleurVoisin.push(array1[i]);
            }
     }
     
      for(var j = 0; j < array2.length; j++){
        if(couleurVoisin.includes(array2[j]) === false){
             couleurVoisin.push(array2[j]);
            }
     }
          
          
     for(var k = 0; k < array3.length; k++){
        if(couleurVoisin.includes(array3[k]) === false){
            couleurVoisin.push(array3[k]);
            }
     }
         
     return couleurVoisin;
 }
    var indic = caseIJ(9);
 function nombLong(array, sommet){
     //var ind = caseIJ(9);
     var i = indic[sommet][0];
     var j = indic[sommet][1];
     var ligne = voisinLigne(array, i);
     var colonne = voisinColonne(array, j);
     var bloc = voisinBloc(array, Math.floor(i/3),  Math.floor(j/3));
     var possib = nombDif(ligne, colonne, bloc);
   
         
     return possib;
     
 }
 
 function retirer(t, t1){
     var t2 = t.slice();
     var t3 = [];
    for(var i = 0; i < t2.length; i++){
      if(t1.includes(t2[i])){
          t2[i] = 0;
        }
       }
     for(var j = 0; j < t2.length; j++){
        if(t2[j] !== 0){
            t3.push(t2[j]);
           }
     }
     return t3;
 }
 function egalA(t, t1){
     t.sort();
     t1.sort();
     var tab = melange([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     
     var numb = 0;
     
     for(var i = 0; i < t.length; i++){
         // var t = update(t);
        if(t.length > t1.length){
           //print(t + " " + t1);
            
            if(retirer(t, t1).length !== 0){
                numb = retirer(t,t1)[0];
            }
        }else if (t.length === t1.length ) {
           // print(tab + " " + t);
          if(tab.length > t.length){
            numb = retirer(tab, t)[0];
          }
        }
     }
     
     return numb;
 }
 function egal(array){
     var bool = true;
     for(var i = 0; i < array.length; i++){
         if(i === 0){
         }else{
            if(array[i-1] !== array[i]){
                bool = false;
            }
         }
     }
     return bool;
 }
 export function dsatura(){
       var array = [[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0]];
     
     var dsatur = 0;
     //var indd = 0;
     var sommetChoisi = 0;
     var sommets = caseN(81);
     var tab = [];//melange([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     var ind = [];
     var nombDejaUtilisé = [];
     //var desa = [];
           //var desa = nombLong(array, 0);
     for(var i = 0; i < sommets.length; i++){
         tab = melange([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          var tabDesa = [];
          dsatur = 0;
          ind = [];
         if(i === 0){
             array[indic[i][0]][indic[i][1]] = tab[0];
             nombDejaUtilisé.push(tab[0]);
             sommetChoisi = i;
             
         }
        else{
         
          for(var j = 0; j < sommets.length; j++){
             if(sommets[j] !== 0){
              var desa = nombLong(array, j);
              if(desa.length !== 0 && tabDesa.includes(desa.length) === false && ind.includes(j) === false){
                  tabDesa.push(desa.length);
                  ind.push(j);  
              }
             }
          }
            //print(indd);
               
       //  print(tabDesa + " " + ind);
         for(var k =0; k < tabDesa.length; k++){
             if(tabDesa[k] > dsatur){
                 dsatur = tabDesa[k];
                 sommetChoisi = ind[k];
             }
             
             
        }
          var voisDifferent = nombLong(array, sommetChoisi);
            var numb = egalA(nombDejaUtilisé, voisDifferent);
         // print(egalA(nombDejaUtilisé, voisDifferent));
          //print(voisDifferent);
         //if(egal(tabDesa))
         // print(sommetChoisi);
           array[indic[sommetChoisi][0]][indic[sommetChoisi][1]] = numb;
           for(var k2 = 0; k2 < nombDejaUtilisé.length; k2++){
             if(nombDejaUtilisé.includes(numb) === false){
              nombDejaUtilisé.push(numb);
             }
           }
         // print(ind+ " "+tabDesa);
        }
          sommets[sommetChoisi] = 0;
      }
     return array;
 }

 export function sudoku(){
    var grid = [];
    var bool = false;
    var ind = 0;
    while(bool === false){
      
         grid = dsatura();
         ind = 0;
        for(var i = 0; i < grid.length; i++){
         for(var j = 0; j < grid.length; j++){
            if(grid[i][j] !== 0){
               ind++;   
            }
         }
    }
        //print(ind);
        if(ind === 81){
          
            bool = true;
        }
    }
    return grid;    
}
 export function genererSudoku(n){
     //var grid = grid1.slice();
     var grid = sudoku();
     var ind = melange(caseIJ(9));
     for(var i = 0; i < n; i++){
         grid[ind[i][0]][ind[i][1]] = 0;
     }
     return grid;
 }

 export function allDiff(grid){
    //var grid = grid.sl;
    var bool = false;
    var ind = 0;
  
      
        
         ind = 0;
        for(var i = 0; i < grid.length; i++){
         for(var j = 0; j < grid.length; j++){
            if(grid[i][j] !== 0){
               ind++;   
            }
         }
    }
        //print(ind);
        if(ind === 81){
          
            bool = true;
        }
    
    return bool;    
}
