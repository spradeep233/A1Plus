import React from 'react';


const TodoListItem = (props) =>{
 return (

     <>
     <button area-hidden='true' onClick={()=>{
        props.onSelect(props.id)}}>Delete</button>
     <li>
         {props.text}
      </li>
     </>
 )
}


export default TodoListItem;