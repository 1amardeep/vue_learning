import Vue from 'vue';
import App from './App';
import store from './store/index'
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ImageList from './components/ImageList';
import Upload from './components/Upload';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {path:'/home', component: Home},
        {path:'/upload',component: Upload},
        {path:'/imageGallery', component: ImageList},
        {path:'/aboutUs',component: AboutUs},
        {path:'/oauth2/callback', component: AuthHandler}
    ]
})

new Vue({
 //   el : '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');