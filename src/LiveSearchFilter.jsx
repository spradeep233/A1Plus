import React, {useState}  from 'react';
import LiveSearchResult from './LiveSearchFilterResult';



const LiveSearchFilter = () =>{
    const [img, setimg]= useState("");
    const inputSerch= (event)=>{
        setimg(event.target.value);
    }

    const searchClass={
        width:'50px',
        height: 'auto',
        margin: '0 auto',
        text_allign: 'center'
    }
    const searchinput={
        margin: '30px 0',
        padding: '5px 10px',
        border_radius: '5px',
        font_family: 'source-code-pro, Menlo, Monaco, Consolas, '
    }
    
    return(
        <>
        <div className="searchClass">
        <input type="text" placeholder="Search anything....." value={img} onChange={inputSerch}/>
       {img==="" ? null : <LiveSearchResult name={img}/>} 
        </div>
        </>
    )

};

export default LiveSearchFilter;