import React, {Component,useState,useEffect} from "react";
import Result from "./Result";
import ShowCard from "./ShowCard"


const Game = ()=>{


    const welcome = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        fontSize:"2rem",
        marginTop:"1.5rem",
    }
    const styleP = {
        margin:"30px 0 0 0",
        fontFamily:"arial"
    }  
    return (
        <>
            <div style={welcome}>
                <p style={styleP}>Witaj w grze</p>
                <p style={styleP}>Ćwicz swoją pamięć</p>
            </div>
            <ShowCard/>
           
        </>
    )
}

export default Game;