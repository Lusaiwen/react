export default class BlockManger {
    constructor() {
        this.prompt = null;
    }

    /**
     *
     * @param {*} prompt  函数
     */
    block(prompt) {
        if (!prompt) {
            throw new TypeError('block must be string or function');
        }
        this.prompt = prompt;
        // this.prompt({location, action, retry})
        //取消函数

        return () => {
            this.prompt = null;
        };
    }


    /**
     * 此函数运行后需要执行unBlock函数以及retry函数，才能实现跳转
     * 若一开始没有阻塞，则直接跳转
     * @param {*} location 
     * @param {*} action 
     * @param {*} callback 
     * @returns 
     */
    triggerBlock(location, action, callback) {
        if (this.prompt === null) {
            callback();
            return;
        }

        //触发
        const _this = this;
        
        /**
         * 重新触发
         */
        function retry(){
            if(_this.prompt){
                _this.triggerBlock(location, action, callback);
            }else {
                console.log(_this.prompt);
                if(_this.prompt === null){
                    callback();
                }
            }
        }
        this.prompt && this.prompt({ location, action, retry});
        // callback();
    }

}
