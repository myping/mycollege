import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import axios from 'axios'
import vuewechattitle from 'vue-wechat-title'
Vue.use(vuewechattitle)
import {Button} from 'vant'
Vue.use(Button);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col)
import { Icon } from 'vant'
Vue.use(Icon)
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Card } from 'vant';
Vue.use(Card);
import { Tag } from 'vant';
Vue.use(Tag);
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
import { Rate } from 'vant';
Vue.use(Rate);
import { List } from 'vant';
Vue.use(List);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
