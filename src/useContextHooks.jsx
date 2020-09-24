import React from 'react';
import { createContext } from 'react';
import ComponentA from './ComponentA';

const firstname = createContext()
const lastname = createContext()

const useContextHook = () =>{

    return(
        <>
        <firstname.Provider value={"dasasdd"}>
            <lastname.Provider value={'wwqwqwqw'}>
                <ComponentA/>
            </lastname.Provider>
        </firstname.Provider>
        </>
    )
}

export default useContextHook;
export {firstname, lastname};
