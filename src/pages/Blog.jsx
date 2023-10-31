import { Navbar, Footer } from "../components";
import { Button, Blog } from "../components";

function Blogs() {
  return (
    <>
      <Navbar>
        <Button content="Create Blog" />
        <Button content="Login" link="/login" />
      </Navbar>
      <div className="container text-center mt-3 ">
        <h1>Bài viết nổi bật</h1>
        <p>Tổng hợp các bài viết về dịch vụ và trải nghiệm du lịch</p>
        <hr />
      </div>
      <div className="container">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
