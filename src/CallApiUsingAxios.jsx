import Axios from 'axios';
import React, {useState, useEffect} from 'react';





const CallPockamanApi = () => {

    const[num, setNum] =  useState("No");
    const[name, setName] = useState();
    const[move, setMoves] = useState(0);
    const Dropdownchange = (event) =>{
        setNum(event.target.value);
    };


    useEffect(() => {
       async function getData(){
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        setName(res.data.name)
        setMoves(res.data.moves.length)
        console.log(res.data.name)
        console.log(res.data.moves.length)
       }
       getData()
    }, [num]);
    return (
        <>
        <h1> you select <span style={{color: "red"}}>{num} option</span ><br/></h1>
        <h1>Name is <span style={{color: "red"}}>{name}<br/></span ></h1>
        <h1>I have <span style={{color: "red"}}>{move} moves<br/></span ></h1>
        <select value={num} onChange={Dropdownchange}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
        </select>
        </>
    )
}
export default CallPockamanApi;