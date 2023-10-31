import { useSelector } from "react-redux";
import { Navbar, Main, Product, Footer, Button } from "../components";

function Home() {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <Navbar>
        <Button content="Login" className="fa fa-sign-in-alt mr-1" link="/login" />
        <Button content="Cart" className="fa fa-cart-shopping mr-1" cart={state.length} link="cart" />
      </Navbar>
      <Main />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
