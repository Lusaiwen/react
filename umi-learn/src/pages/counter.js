import React from 'react'
import Counter from '@/components/Counter'

function CounterWrapper() {
    return (
        <div>
            <Counter/>
        </div>
    )
}

CounterWrapper.title = '计数器';
CounterWrapper.wrappers = ['@/wrappers/HandleTitle'];

export default CounterWrapper;

