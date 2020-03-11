import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useDarkMode(key, init) {

    const [storedVal, setVal] = useLocalStorage(key, init);
    const body = document.querySelector('body')

    useEffect(() => {

        if (storedVal) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

    }, [storedVal]);

    return [storedVal, setVal];

}