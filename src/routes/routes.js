import config from '../config';

import {
    AboutPage,
    Blog,
    BlogDetail,
    Cart,
    Checkout,
    ContactPage,
    CreateBlog,
    Home,
    Login,
    PageNotFound,
    Product,
    Products,
    Profile,
    Register,
} from '../pages';

const routes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.register, component: Register },
    { path: config.routes.product, component: Product },
    { path: config.routes.products, component: Products },
    { path: config.routes.about, component: AboutPage },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogdetail, component: BlogDetail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.createblog, component: CreateBlog },
    { path: config.routes.login, component: Login },
    { path: config.routes.pagenotfound[0], component: PageNotFound },
    { path: config.routes.pagenotfound[1], component: PageNotFound },
];

export default routes;
