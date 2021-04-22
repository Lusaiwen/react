import React, { useState, useEffect } from 'react';

export default function App() {
    const [N, setN] = useState(10);

    useEffect(() => {
        if (N === 0) {
            return null;
        }
        setTimeout(() => {
            setN(N - 1);
        }, 1000);
    });
    return <div>{N}</div>;
}
