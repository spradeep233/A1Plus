import React, {useState} from 'react';




const Forsubmission = () => {
    const [fullName, setfullname] = useState({
      fname: "",
      lname: "",
      Email: "",
      Mobile: "",
    });

    const texboxInputevent = (event) =>{
        console.table(event.target.value);
        console.table(event.target.name);

        const value= event.target.value;
        const name= event.target.name;

        setfullname((preValue)=>{

            return{
                ...preValue,
                [name]: value
            }
            
        //     if(name==='fname'){
        //         return{
        //             fname: value,
        //             lname: preValue.lname,
        //             Email: preValue.Email
        //         }
        //     }
        //     else if(name==='lname')
        //     {
        //         return{
        //             lname: value,
        //             fname: preValue.fname,
        //             Email: preValue.Email
        //         }
        //     }
        //     else if(name==='Email')
        //     {
        //         return{
        //             lname: preValue.lname,
        //             fname: preValue.fname,
        //             Email: value
        //         }
        //     }
        });
    }

    const btnsubmit = (event) =>{
        event.preventDefault();
        
    }
    return(
        <>
    <div>
    <form onSubmit={btnsubmit}>
        <h1>{fullName.fname} {fullName.lname} <br/>{fullName.Email}<br/> {fullName.Mobile}</h1>
            <input type="text"
               name= 'fname'
               placeholder="Enter first name"
               onChange={texboxInputevent}
               value={fullName.fname}
            /><br/>

            <input type="text"
               name='lname'
               placeholder= "Enter last name"
               onChange={texboxInputevent}
               value={fullName.lname}/><br/>

            <input type="text"
               name='Email'
               placeholder= "Enter Email Address"
               onChange={texboxInputevent}
               value={fullName.Email}/><br/>

            <input type="text"
              name='Mobile'
               placeholder= "Enter Mobile nnumber"
               onChange={texboxInputevent}
               value={fullName.Mobile}/><br/>
            <button type="submit"> Click Me</button>
    </form>
    </div>
        
        </>
    )
}

export default Forsubmission;