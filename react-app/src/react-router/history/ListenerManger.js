export default class ListenerManger {


    constructor(){
        this.listeneArr = [];
    }

    addListener(listener){
        this.listeneArr.push(listener);

        const unListen = () => {
            const index = this.listeneArr.indexOf(listener);
            this.listeneArr.splice(index, 1);
        }

        return unListen;
    }


    /**
     * 触发监听器
     * @param {*} location 
     * @param {*} action 
     */
    triggerListener(location, action){
        for (const listener of this.listeneArr) {
            listener(location, action);
        }
    }



}