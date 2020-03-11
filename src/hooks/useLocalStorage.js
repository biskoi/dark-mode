import React, {useState} from 'react';

export function useLocalStorage(key, init) {
    
    const [storedVal, setStoredVal] = useState(() => {
        
        const localStorage = window.localStorage;

        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
            // have to parse since we're getItem ing to return the value and not just getting the key
        } else {
            return localStorage.setItem(key, JSON.stringify(init));
        }
    });

    const setVal = (val) => {
        setStoredVal(val);
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    return [storedVal, setVal];

}