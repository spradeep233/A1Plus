import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

//useparam : to pass dyanmamic parameter using route dom 
//useLocation : to find the current location url
//useHistory: to collect all the refer url and contains the url history


const UserDetail = () =>{
   
   const {fname, lname} = useParams();
   const location = useLocation();
   const hisory = useHistory();
    return( 
    <>
    <h1>  name is {fname} {lname}
    </h1><br/>
    <h1>your location is {location.pathname}</h1><br/>
    {location.pathname===`/UserDetail/Pradeep/Sharma`?
    <button onClick={()=>{hisory.push('/')}}>Go to Home page</button>:
    <button onClick={()=>hisory.goBack()}>Back</button>}
    </>
    )
}

export default UserDetail;