
import { createStore } from "vuex"
import postStore from "./module/postStore"


export default createStore({
    modules: {
        postStore
    }
})