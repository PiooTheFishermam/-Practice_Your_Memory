import React, {Component,useState,useEffect} from "react";
// import AllCards from "./AllCards";


const ShowCard = ()=>{
    const initialState = 0;
    const [count,setCount] = useState(initialState);
    const [cards,setCards] = useState(null);
    const [currentCards,setCurrentCards] = useState([]);

    useEffect(()=>{
        const baseUrl ="http://localhost:3000";
        fetch(`${baseUrl}/cards`)
        .then(response =>response.json())
        .then(data=>setCards(data))
        .catch(err=>console.log(err))
    },[])


    const handleStart = ()=>{
        setCurrentCards([]);

        const intervalId = setInterval(()=>{ 
            let index = Math.floor(Math.random() * (cards.length - 1)); 

            setCount(prev=>{
                if(prev===6) {
                    clearInterval(intervalId);
                    return prev=initialState
                }
                setCurrentCards(prev=>{
                    return [...prev,cards[index].url]
                })
                return prev+1
            })
        },1000)
    };



    // style
    const card = {
        maxHeight:"35vh",
        marginTop:"1rem"
    }
    const cardContainer = {
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"2rem"
    }

    if(count === 0 || currentCards===6){
        return (
                    <>
                        <div style={cardContainer}>
                            <button 
                            disabled = {false} 
                            onClick = {handleStart}>Start</button>
                            <img src={"../img/rev/purple_back.png"} style={card}/>
                        </div>
                        {/* <AllCards currentCards={currentCards}/> */}
                    </>
                )
    }

    return (
                <>
                    <div style={cardContainer}>
                        <button 
                        disabled = {true} 
                        onClick={handleStart}>Start</button>
                        <img src={currentCards[count-1]} style={card}/>
                    </div>
                    {/* <AllCards currentCards={currentCards} cards={cards}/> */}
                    {/* <div>
                        {cards.map(card=><img src={card.url} style={cardStyle}/>)}
                    </div>   */}
                </>
    )

}
export default ShowCard