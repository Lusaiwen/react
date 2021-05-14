import React from 'react'
import ctx from './routerContext'

export default function withRouter(Comp) {
    function RouterWrapper(props){
        return <ctx.Consumer>
            {value => {
                return <Comp {...props} {...value} />
            }}
        </ctx.Consumer>
    }

    
    RouterWrapper.displayName = `WithRouter(${Comp.displayName || Comp.name})`
    return RouterWrapper;
}
