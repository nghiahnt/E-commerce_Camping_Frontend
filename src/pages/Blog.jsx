// import { Navbar } from "../components";
import { Blog } from "../components";

function Blogs() {
  return (
    <>
      {/* <Navbar>
        <Button content="Create Blog" link="/blog/createblog" />
        <Button content="Login" link="/login" />
      </Navbar> */}
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
    </>
  );
}

export default Blogs;
