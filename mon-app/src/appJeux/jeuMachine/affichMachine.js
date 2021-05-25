  import {Machine,assign} from 'xstate';

  export
    const affichMachine = Machine({
    id: 'fetch',
    initial: 'affiche',
    context:{
    },
    
    states: {
      affiche: {},
      brasser:{
       
      },
      brass:{
        on:{
          BRASSER:{target:"brasser"}
        }
      }
        
    },
    on:{
      AFFICHER:"affiche",
      BRASSER:"brass"
      
    }
    
  });
  
  