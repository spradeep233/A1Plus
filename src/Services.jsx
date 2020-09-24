import React from 'react';
import  Card from './Card';
import SData from './CardData';
const Service = () =>{
    
return(
    <>
    <div className="my-5">
        <h1 className="text-center">our products</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-5">
                   {
                   SData.map((val, index, arr)=>{
                       return(
                        <Card id={index} key={index} title={val.title} imgsrc={val.imgsrc}/>
                        )
                    })
                   };
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Service;