import React, {useState} from 'react';
import axios from "axios";

const ContentNote = (props) =>{
    const [note, setnote] = useState({
        title:'',
        content:'',
        mobile:''
    });

    const inputElelment = (event) =>{
     const {value, name}= event.target;
        setnote((preval)=>{
        return{
            ...preval,
            [name]:value
        };
        });
    };
   
    const NoteAddBtn = (event) =>{
        event.preventDefault();
        props.passNote(note);
       
                axios
                    .get("https://localhost:44327/Home/Users?title='fdsfsf'")
                    .then(function(response) {
                        alert(response.Orgname);
                      })
                      .catch(function(error) {
                        alert(1)
                      });
                   
          

        setnote({
            title:'',
            content:'',
            mobile: ''
        })
    }
    return(
        <>
        <div>
            <form onSubmit={NoteAddBtn}>
                    <input type="text"
                    name="title" 
                    placeholder="title"
                    onChange={inputElelment} 
                    value={note.title}/><br/><br/>

                    <input type="text"
                    name="mobile"
                    placeholder="Enter mobile number"
                    onChange={inputElelment} 
                    value={note.mobile}
                    /><br/><br/>

                    <textarea type="text" 
                    name="content"
                    placeholder="Enter your content" 
                    onChange={inputElelment}
                    value={note.content}></textarea>
         
        <button>Add Note</button><br/>
        </form>
        </div>
        </>
    )
}



export default ContentNote;