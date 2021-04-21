import React, { useState } from 'react';

export default function App() {
    const [n, setN] = useState(0);
    return ( 
        <div>
            <button
                onClick={() => {
                    
                    setN(n - 2);
                    setN(n - 1);
                }}
            >
                -
            </button>
            {n}
            <button
                onClick={() => {
                    //当要运行多次时使用函数
                    setN(prevN => prevN + 1);
                    setN(prevN => prevN + 2);
                    // setN(n + 2);
                    // setN(n + 1);
                }}
            >
                +
            </button>
        </div>
    );
}
