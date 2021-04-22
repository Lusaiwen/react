import React, { useState, useEffect } from 'react';

export default function App() {

    const [N, setN] = useState(0);

    useEffect(() => {
       setTimeout(() => {
           console.log(N);
       }, 5000)
    })
    return (
        <div>
            <button onClick={() => {
                setN(N+1)
            }}>点击</button>
        </div>
    )
}
