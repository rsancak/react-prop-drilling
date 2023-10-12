import React, { useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
    const [booklength, setBookLength] = useState(0);
    const bookLengthFn = (e)=>{
        setBookLength(e);
    }
    return (
        <>
            <Component1 setBook={bookLengthFn}></Component1>
            <Component2 bookLength={booklength}></Component2>
        </>
    )
}

export default App;
