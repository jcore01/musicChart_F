import Vue from 'vue';
import VueRouter from 'vue-router';
import ChartsView from '../views/ChartsView.vue';
import MusicsView from '../views/MusicsView.vue';
import ArtistsView from '../views/ArtistsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/charts',
    },
    {
        // path: url 주소
        path: '/charts',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: ChartsView,
    },
    {
        path: '/musics',
        component: MusicsView,
    },
    {
        path: '/artists',
        component: ArtistsView,
    },
    {
        path: '/users',
        component: UserView,
    },
    {
      path: '/items',
      component: ItemView,
  }
  ]
});
