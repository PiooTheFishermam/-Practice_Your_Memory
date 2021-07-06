import React, {Component,useState,useEffect} from "react";


const Home = ()=>{


    const styleHeader = {
        backgroundColor: "#bada55",
        height:"30vh",
        display: "flex"

    }
    const styleImg = {
        height:"200px",
    }
    
    const styleTitle = {
        textAlign: "center",
        fontFamily: "arial",
        fontSize: "40px",
        color: "green",
        margin: "auto"
    }

    const styleContainer = {
        height:"60vh",
        display: "flex",
        justifyContent: "center",

    }

    return (
            <>  
            <div>
                <header style={styleHeader}>
                <h1 style={styleTitle}>Learn Your Brain ;)</h1>
                </header>
                <div style={styleContainer}>
                    <img src="../img/rev/honor_heart-14.png" style={styleImg}></img>
                </div>
            </div>
            </>
        )
}

export default Home