import {createStore} from 'vuex';
import todos from './modules/todos.js';


/*  Way of using in Vue2  */

        // import Vuex from 'vuex';
        // import Vue from 'vue';

        // // Load Vuex
        // Vue.use(Vuex);

        // export default new Vuex.Store({
        //     modules: {
        //         todos
        //     }
        // });
/* --------------------------------------------  */



/*  Way of using in Vue2  */

export default createStore({
    modules: {
        todos
    }
});
