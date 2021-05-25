import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//import Tabl from './component/Tabl';
import AppT from './component/TablM'
import AppQ from './Example';


import AppE from './AppEchec2';
import AppM from './AppMemoire2';

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Jeu Taquin</Link>
                    </li>
                    <li>
                        <Link to="/memoire">JeuMemoire</Link>
                    </li>
                    <li>
                        <Link to="/titacto">Titacto</Link>
                    </li>
                    <li>
                        <Link to="/echec">Jeu Echec</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Taquin />
                    </Route>
                    <Route path="/memoire">
                        <Memoire />
                    </Route>
                    <Route path="/titacto">
                        <Titacto />
                    </Route>
                    <Route path="/echec">
                        <Echec />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Taquin() {
    return (
        <div>
            <div className="wrap">
                <h1 >Jeux Taquin</h1>
            </div>
            <div className="wrap">

                <AppQ />


            </div>

        </div>
    );
}

function Echec() {
    return (
        <div>
            <div className="wrap">
                <h1 >Jeux Echec</h1>
            </div>
            <div className="wrap">

                <AppE />


            </div>

        </div>
    );
}

function Memoire() {
    return (
        <div>
            <div className="wrap">
                <h1 >Jeux Memoire</h1>
            </div>
            <div className="wrap">

                <AppM />


            </div>

        </div>
    );
}

function Titacto() {
    return (
        <div>
            <div className="wrap">
                <h1 >Jeux Titacto</h1>
            </div>
            <div className="wrap">

                <AppT />


            </div>

        </div>
    );
}