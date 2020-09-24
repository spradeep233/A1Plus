import React from 'react';
import web from '../src/Images/david-becker-YCF34YywBrs-unsplash.jpg'
import Common from './Common'



const About = () =>{
    return(
        <>
        <Common title="In-progress" 
        brand_name="SF"
         tag_line=" Working on to improove"
         btn_name=" Go to our Services"
         btn_link="/Services"
         img_src={web}/>
        </>
        )
}

export default About;