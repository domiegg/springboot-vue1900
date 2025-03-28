const base = {
    get() {
        return {
            url : "http://localhost:8080/hongshegemingwenwu/",
            name: "hongshegemingwenwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/hongshegemingwenwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "红色革命文物征集管理系统"
        } 
    }
}
export default base
