import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import Secrets from '../views/Secrets.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Home',
        component: Home,
        meta: {
			allowAnonymous: true,
			loggedOut: true
		}
    },
    {
        path: '/',
        name: 'Secrets',
        component: Secrets,
        meta: {
			allowAnonymous: false
		}
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

	// store.commit('setError', null);
	// store.commit('setSuccess', '');

	if(to.meta.loggedOut && store.getters.isLoggedIn) {
		next({
			path: '/',
			query: { redirect: to.fullPath }
		});
	}
	// not allowed for anyone && user isnt logged in
	if (!to.meta.allowAnonymous && !store.getters.isLoggedIn) {
		next({
			path: '/login',
			query: { redirect: to.fullPath }
		});
	}
	else {
		next();
	}
});

export default router
