import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';

export default function Transition({component: Component, ...rest}) {
    return (
        <Route {...rest}>
            {({ match }) => {
                return (
                    <CSSTransition
                        in={match ? true : false}
                        timeout={500}
                        classNames={{
                            enter:
                                'animate__animated animate__faster animate__fadeInRight',
                            exit:
                                'animate__animated animate__faster animate__fadeOutLeft',
                        }}
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                        <Component/>
                    </CSSTransition>
                );
            }}
        </Route>
    );
}
