export default function bindactionCreatorsCreators(actionCreators, dispatch) {

    
    if (typeof actionCreators === 'object') {
        const result = {};
        for (const key in actionCreators) {
            if (Object.hasOwnProperty.call(actionCreators, key)) {
                const actionCreator = actionCreators[key];

                result[key] = getAutoDispatchActionCreator(
                    actionCreator,
                    dispatch
                );
            }
        }
        return result;
    }else if (typeof actionCreators === 'function') {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    }else {
        throw new TypeError('action must have a value')
    }
}

function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return (...args) => {
        const action = actionCreator(...args);
        dispatch(action);
    };
}
