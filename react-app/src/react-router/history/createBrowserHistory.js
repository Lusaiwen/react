import './ListenerManger';
import ListenerManger from './ListenerManger';
import BlockManger from './BlockManger';

/**
 * 创建一个history api 对象
 * @returns
 */

function createBrowserHistory() {
    const listenerManger = new ListenerManger();
    const blockManger = new BlockManger();
    const history = {
        action: 'POP',
        location: createLocation(),
        block,
        go,
        back,
        forward,
        listen,
        push,
        replace,
    };

    function go(step) {
        window.history.go(step);
    }
    function back() {
        window.history.back();
    }
    function forward() {
        window.history.forward();
    }

    /**
     *
     * @param {*} path  路径
     * @param {*} state 附加的状态数据
     */
    function push(path, state) {
        changePage(path, state, true);
    }

    function replace(path, state) {
        changePage(path, state, false);
    }

    /**
     * 抽离的push和replace函数
     * @param {*} path
     * @param {*} state
     * @param {*} isPush
     */
    function changePage(path, state, isPush) {
        let action = 'PUSH';
        if (!isPush) {
            action = 'REPLACE';
        }

        const pathInfo = handlePath(path, state);
        const changeState = {
            key: createKey(6),
            state: pathInfo.state,
        };

        const location = createLocationFromPath(pathInfo);
        console.log(location);
        blockManger.triggerBlock(location, action, () => {
            console.log(location);
            if (isPush) {
                window.history.pushState(changeState, null, pathInfo.path);
            } else {
                window.history.replaceState(changeState, null, pathInfo.path);
            }
            console.log(location);
            listenerManger.triggerListener(location, action);
            //改变action
            history.action = action;
            //改变location
            history.location = location;
        });
    }

    /**
     * 添加对地址变化的监听
     */
    function addDomListener() {
        //popstate事件，仅能监听前进、后退、用户对地址hash的改变
        //无法监听到pushState、replaceState
        window.addEventListener(
            'popstate',
            () => {
                const location = createLocation();
                const action = 'POP';
                listenerManger.triggerListener(location, action);
                history.location = location;
            },
            false
        );
    }

    addDomListener();

    /**
     * 创建一个监听器，并且返回一个监听器函数
     * @param {*} listener
     */
    function listen(listener) {
        return listenerManger.addListener(listener);
    }

    /**
     * 阻塞函数
     * @param {*} prompt  函数
     */
    function block(prompt) {
        return blockManger.block(prompt);
    }

    return history;
}

function createLocation() {
    const location = {
        hash: window.location.hash,
        pathname: window.location.pathname,
        search: window.location.search,
    };

    let state,
        historyState = window.history.state;
    if (historyState === null) {
        state = undefined;
    } else {
        if (typeof historyState !== 'object') {
            state = historyState;
        } else {
            if ('key' in historyState) {
                location.key = historyState.key;
                state = historyState.state;
            } else {
                state = historyState;
            }
        }
    }
    location.state = state;
    return location;
}

/**
 * 根据跳转的路径生成location对象
 * @param {*} pathInfo
 */
function createLocationFromPath(pathInfo) {
    const location = {
        search: '',
        hash: '',
        pathname: '',
        state: pathInfo.state,
    };
    let path = pathInfo.path;
    //不含search和hash
    if (path.indexOf('?') === -1 && path.indexOf('#') === -1) {
        location.pathname = path;
        return location;
    }

    const questionIndex = path.indexOf('?');
    const hashIndex = path.indexOf('#');

    //  /news#hash?search=1
    if (questionIndex > hashIndex) {
        location.search = path.substring(questionIndex, path.length);
        if (hashIndex !== -1) {
            location.hash = path.substring(hashIndex, questionIndex);
        }
        location.pathname = path.substring(0, hashIndex);
    } else {
        //  /news?search=1#hash
        location.hash = path.substring(hashIndex, path.length);
        if (questionIndex !== -1) {
            location.search = path.substring(questionIndex, hashIndex);
        }
        location.pathname = path.substring(0, questionIndex);
    }

    return location;
}

function handlePath(path, state) {
    if (typeof path === 'string') {
        return {
            path,
            state,
        };
    } else if (typeof path === 'object') {
        let { pathname = '', hash = '', search = '', state = null } = path;
        if (hash.charAt(0) !== '#') {
            hash = '#' + hash;
        }
        if (search.charAt(0) !== '?') {
            search = '?' + search;
        }
        pathname = pathname + hash;
        pathname = pathname + search;
        return {
            path: pathname,
            state: state,
        };
    }
}

function createKey(length = 6) {
    return Math.random().toString(36).substr(2, length);
}

window.myHistory = createBrowserHistory();

window.unBlock = window.myHistory.block((tx) => {
    console.log(tx);
    if (window.confirm('是否真的要进入')) {
        window.unBlock();
        tx.retry();
    } else {
        console.log('取消跳转');
    }
    // A transition was blocked!
});

console.log(window.unBlock);

window.myHistory.listen((location, action) => {
    console.log('地址变化了', location, action);
});

export default createBrowserHistory;
