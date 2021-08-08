import React, { Component } from 'react';
import './App2048.css';
import {
   InitialisationRandom, addTuileRandom, gauche, droite, bas, haut,
   scoreTotal, scoreTotal1, genereCase, detecteMov, nombreDeplacement, compareTab, genereTabNXN, win
} from './algo/algo2048';
import { Game } from './component/modal';
import { Row } from 'react-bootstrap';
function Carre(props) {
   return (
      <div className="carre3" style={{ backgroundColor: props.k }}><h1 className="item3">{props.valeur}</h1></div>

   );
}//
//style={{backgroundColor: `rgba(`+(242-props.k)+`,` +(237-props.k1)+`,`+(237-props.k1)+`,`+ 1+`)`}}
class TuileComponent extends Component {

   render() {
      return (
         <div className="column3">
            <Carre valeur={this.props.valeur} carre={this.props.carre} k1={this.props.k1} k={this.props.k} />
         </div>
      );
   }
}
//

function TabBoard(props) {
   //let sqrt = Math.round(Math.sqrt(ind));

   let color = {
      0: "rgba(230, 220, 220, 0.35)", 2: "rgba(221, 208, 208, 1)", 4: "rgba(208, 190, 190, 1)",
      8: "rgba(195, 172, 172, 1)", 16: "rgba(180, 151, 151, 1)", 32: "rgba(163, 128, 128, 1)", 64: "rgba(150, 110, 110, 1)",
      128: "rgba(118, 86, 86, 1)", 256: "rgba(98, 71, 71, 1)", 512: "rgba(74, 54, 54, 1)", 1024: "rgba(44, 32, 32, 1)",
      2048: "rgba(27, 19, 19, 1)", 4096: "rgba(9, 6, 6, 1)",
   }
   let n = props.n;
   let ligne = [];

   let id = 0;
   for (var i = 0; i < n; i++) {
      let colonne = [];
      for (var j = 0; j < n; j++) {
         let val = props.valeur[i][j];
         if (val === 0) {
            val = null;
         }
         colonne.push(<TuileComponent valeur={val} k={color[val]} carre={props.carre} key={id} />)
         id = id + 1;
      }//

      ligne.push(<div key={i} className="row3">{colonne}</div>)

   }//
   return ligne;
}
//


class App2048 extends Component {

   constructor(props) {
      super(props)

      this.state = {
         valeur: genereTabNXN(props.n),
         color: "carre",
         score: 0,
         message: "",
         move: 0,
         over: 0,
         decision: { keyCode: 0, gauche: 0, droite: 0 },
         mov: 0,
         show:true
      }
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleRestart = this.handleRestart.bind(this);
      this.handleClose = this.handleClose.bind(this);

   }

   handleRestart() {
      let tab = this.state.valeur.slice();
      window.location.reload();

   }

   handleKeyDown(event) {
      let tab = this.state.valeur.slice();
      let tab1 = this.state.valeur.slice();
      let tab2 = this.state.valeur.slice();
      let tab3 = this.state.valeur.slice();
     // gauche(tab);
     // droite(tab1);
      //haut(tab2);
      //bas(tab3)
      let score1 = this.state.score;

      
      if (event.keyCode === 37) {
     
        // console.log(event.keyCode);
         this.setState({
            valeur: gauche(tab),
            color: "carre1",
            score: scoreTotal(this.state.valeur) + this.state.score,
            //move:nombreDeplacement(tab) + this.state.move,
            over: genereCase(this.state.valeur).length,
            decision: { keyCode: 37, gauche: 1, droite: 2 }
         });
         //console.log(score1 +" "+ this.state.score);
         //console.log(tab);
         // console.log(this.state.valeur);

      }
      else if (event.keyCode === 38) {
        // console.log(event.keyCode);
         this.setState({
            valeur: haut(tab2),
            color: "carre1",
            score: scoreTotal1(this.state.valeur) + this.state.score,
            // move:nombreDeplacement(tab) + this.state.move,
            over: genereCase(this.state.valeur).length,
            decision: { keyCode: 38, gauche: 1, droite: 2 }

         });

      }
      else if (event.keyCode === 39) {
       //  console.log(event.keyCode);
         this.setState({
            valeur: droite(tab1),
            color: "carre1",
            score: scoreTotal(this.state.valeur) + this.state.score,
            // move:nombreDeplacement(tab) + this.state.move,
            over: genereCase(this.state.valeur).length,
            decision: { keyCode: 39, gauche: 2, droite: 1 }
         });
         // console.log(this.state.valeur);
         //console.log(score1 +" "+ this.state.score);

      }
      else if(event.keyCode === 40)  {
       //  console.log(event.keyCode);
         this.setState({
            valeur: bas(tab3),
            color: "carre1",
            score: scoreTotal1(this.state.valeur) + this.state.score,
            //  move:nombreDeplacement(tab) + this.state.move,
            over: genereCase(this.state.valeur).length,
            decision: { keyCode: 40, gauche: 2, droite: 1 }

         });

      } else{
    //     console.log("Rien");
      } 

   }
   handleClose(){
     this.setState({show: !this.state.show});
      this.handleRestart();
   //  alert("salut")
    }
   update(){
      this.setState({
         valeur: InitialisationRandom(this.state.valeur)
      });
   }

   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
      this.update();
   }

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);

   }
   componentDidUpdate(prevProps, prevState, snapshot) {
     // console.log(prevState.valeur);
    //  console.log(this.state.valeur);
     // console.log(this.state.decision.keyCode);
   //  console.log(compareTab(prevState.valeur, this.state.valeur));
    if(compareTab(prevState.valeur, this.state.valeur) === false){
     this.setState({
      valeur: addTuileRandom(this.state.valeur),
      color: "carre1",
     move:detecteMov(prevState.valeur, this.state.decision.keyCode, this.state.decision.gauche, this.state.decision.droite) + this.state.move,
      over: genereCase(this.state.valeur).length

   });
}
      //console.log(detecteMove(prevState.valeur, this.state.decision.keyCode, this.state.decision.gauche, this.state.decision.droite));
     
    }
   
   render() {
     
      const isWin = win(this.state.valeur) ? <> <Game show={this.state.show} fel="Felicitation" mess="Gagnant(e)" onClick={this.handleClose}/></> :
      (genereCase(this.state.valeur).length === 0 && scoreTotal1(this.state.valeur) === 0 && scoreTotal(this.state.valeur) === 0)?
      <> <Game show={this.state.show} fel="" mess="Game Over" onClick={this.handleClose}/></>:<div></div>;
 
      return (
         <div>
            {isWin}
            <div className="score">
               <div className="row3">
                  <div className="column3">
                     <h3>Move:{this.state.move}</h3>
                  </div>
                  <div className="column3">
                     <h3>Score:{this.state.score}</h3>
                  </div>
               </div>
               <button className="button" onClick={this.handleRestart}>Restart</button>
            </div>
            <div className="wrap3" style={{ maxWidth: this.state.valeur.length * 125 + 'px' }}>
               <TabBoard n={this.state.valeur.length} valeur={this.state.valeur} carre={this.state.color} />
            </div>
         </div>
      );
   }
}
//
export default App2048;