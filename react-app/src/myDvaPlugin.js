const logger = store => next => action => {
    console.log('旧状态', store.getState());
    next(action);
    console.log('新状态', store.getState());
}

const dvaPlugin = {
    onAction: logger
}

export default dvaPlugin;