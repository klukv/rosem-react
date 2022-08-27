import {main, cart, seth} from './utils/const';

 import Main from './pages/main';
 import Cart from './pages/cart';
 import Seth from './pages/seth';

 export const publicRoutes = [
    {
        path: main,
        Component: Main
    },
    {
        path: cart,
        Component: Cart
    },
    {
        path: seth,
        Component: Seth
    }
 ]