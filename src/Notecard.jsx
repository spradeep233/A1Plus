import React from 'react';

const Note =(props) =>{
   return(
       <>
       <button area-hidden='true' onClick={()=>{
           props.onSelect(props.id)
       }}>Delete</button>
       <h1>{props.title} {props.mobile} {props.content} </h1>
       </>
   )
}

export default Note;