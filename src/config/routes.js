const routes = {
    home: "/",
    products: "/product",
    product: "/product/:id",
    about: "/about",
    contact: "/contact",
    cart: "/cart",
    login: "/login",
    register: "/register",
    checkout: "/checkout",
    pagenotfound: ["*", "/product/*"],
    blog: "/blog",
    blogdetail: "/blog/detail",
    createblog: "blog/createblog",
    profile: "/profile",
}

export default routes;