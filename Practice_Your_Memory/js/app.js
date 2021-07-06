import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Game from "./Game"
import Result from "./Result";
import Home from "./Home"



const App = ()=>{

    const styleUl = {
        listStyle:"none",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:"#000",
        margin:"0",
        height:"5vh",
        maxHeight:"7vh",
    }

    const styleLink = {
        textDecoration:"none",
        height:"100%",
        fontFamily:"arial",
        color:"#fff",
        padding: "15px 30px"

    }
    return (
        <Router>
            <div>
                <ul style={styleUl}>
                    <li>
                        <Link to="/" style={styleLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/game" style={styleLink}>Zagraj</Link>
                    </li>
                    <li>
                        <Link to="/result" style={styleLink}>Sprawdź wyniki</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/game">
                        <Game/>
                    </Route>
                    <Route path="/result">
                        <Result/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));