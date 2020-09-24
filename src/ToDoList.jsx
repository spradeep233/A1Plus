import React, {useState} from 'react';
import TodoListItem from './TodoListPartialComponent';


const ToDolists = () =>{
    const [inputlist, setlistName] = useState("")
    const [listitem, setItem]= useState([]);
    const ToDolistName= (event) =>{
        setlistName(event.target.value)
    };
    const btnclick = (event) =>{
        event.preventDefault();
        setItem((preValue)=>{
            return [...preValue, inputlist]
        })
       
    };

    const deleteItem = (id) =>{
        //alert('delete')
        setItem((preValue)=>{
          return preValue.filter((arr, index)=>{
                return index!= id;
          })
        })

    }

    return(
        <>
        <div>
        <form onSubmit={btnclick}>
            <input type="text" onChange={ToDolistName} value={inputlist}></input>
            <button type="submit" >Click</button>
            <ul>
            {

                listitem.map((val, index) => {
                    return <TodoListItem 
                    text={val} 
                    onSelect={deleteItem}
                     id={index} 
                     key={index}
                     />
                })
            }
            </ul>
        </form>
        </div>
        </>
    )
};
export default ToDolists;