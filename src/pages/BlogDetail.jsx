import { Navbar, Footer, DetailBlog, Avatar } from "../components"

function BlogDetail() {
    return (
      <>
        <Navbar>
          <Avatar link="/profile" height="30" />
        </Navbar>
        <DetailBlog />
        <Footer />
      </>
    );
}

export default BlogDetail;