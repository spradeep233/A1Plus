import React from 'react';




const LiveSearchResult = (props) =>{

    const ImageUrl =`https://source.unsplash.com/600x500/?${props.name}`;
    return(
        <>
        <img src={ImageUrl} alt="_searchImage"/>
        
        </>
    )
}
export default LiveSearchResult;