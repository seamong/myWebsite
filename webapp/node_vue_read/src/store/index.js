import Vue from "vue";
import Vuex from "vuex";
// import user from "./modules/user";
// import order from "./modules/order";
import search from "./modules/search"
import book from "./modules/book"
Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    search,
    book
  }
});
