import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Forsubmission from './UseStateinReactjs';
import ToDolists from './ToDoList';
import { createContext } from 'react';
import ComponentA from './ComponentA';
import ContentNote from './Googlekeep';
import Note from './Notecard';
import CallPockamanApi from './CallApiUsingAxios';
import {Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import Aboutpage from './About';
import Error from './Error';
import Navbar from './NavBar';
import UserDetail from './UseParamsforpassDataDyanamic';
import LiveSearchFilter from './LiveSearchFilter';
import Home from './Home'; 
import About from './About';
import Services from './Services';
import Footer from './Footer';
// const firstname = createContext();
// const lastname = createContext();

///when you use component props that uses the React.createElement to create 
//new react element for every route request. thats means if you provide a 
//inline function to componentProps that new create and render component every
//route request. whereas render props render the same created component element 
//for every route request until anything updated  in component.

function App() {
  
  // const [additem, setadditem]= useState([]);
  // const AddNote =(note)=>{
  //   setadditem((preval)=>{
  //     return[...preval,note];
     
  //   })

  // }
  // const deleteElement = (id) =>{
  //   setadditem((preval)=>{
  //       return preval.filter((arr, index)=>{
  //            return index!==id;
  //       });
  //   });
  // };
  return (
    <div>
      <Navbar/>
      <Switch>
           <Route exact path='/'  component={Home}></Route>
           <Route       path='/About'   component={About}></Route>
           <Route       path='/Contact' component={Contact}></Route>
           <Route       path='/Services'component={Services}></Route>
      </Switch>
       <Footer/>
      {/* <Forsubmission/>
      <ToDolists/>
      <firstname.Provider value={"Softmind"}>
            <lastname.Provider value={'Infotech'}>
                <ComponentA/>
            </lastname.Provider>
      </firstname.Provider>
      <ContentNote passNote={AddNote}/>
      {
        additem.map((val, index)=>{
          return  <Note key={index}
           id= {index}
           title= {val.title}
           content = {val.content}
           mobile= {val.mobile}
           onSelect= {deleteElement}/>
        })
      }
     */}
    </div>
  );
}

export default App;
//export {firstname, lastname};
