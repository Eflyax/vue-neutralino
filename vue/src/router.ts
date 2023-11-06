import * as VueRouter from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';

const
	urlBase = '/',
	routes: RouteRecordRaw[] = [{
		name: 'home',
		path: urlBase,
		component: () => import ('./views/Home/Home.vue')
	}];

export default VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes
});
