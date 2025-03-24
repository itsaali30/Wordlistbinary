
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Auth/Login.vue';
import Signup from '../components/Auth/Signup.vue';
import ForgotPin from '../components/Auth/ForgotPin.vue';
import WalletHome from '../components/Wallet/WalletHome.vue';
import BuySell from '../components/Wallet/BuySell.vue';
import Transactions from '../components/Wallet/Transactions.vue';
import OrderList from '../components/Orders/OrderList.vue';
import OrderDetails from '../components/Orders/OrderDetails.vue';
import Profile from '../components/Profile.vue';
import ReferFriend from '../components/ReferFriend.vue';
import SendFriend from '../components/SendFriend.vue';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/forgot-pin', component: ForgotPin },
    { path: '/wallet', component: WalletHome },
    { path: '/wallet/buy-sell', component: BuySell },
    { path: '/wallet/transactions', component: Transactions },
    { path: '/orders', component: OrderList },
    { path: '/orders/:id', component: OrderDetails },
    { path: '/profile', component: Profile },
    { path: '/refer', component: ReferFriend },
    { path: '/send-friend', component: SendFriend }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
