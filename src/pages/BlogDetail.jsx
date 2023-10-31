import { Navbar, Footer, DetailBlog, Avatar } from "../components"

function BlogDetail() {
    return (
      <>
        <Navbar>
          <Avatar link="/profile" />
        </Navbar>
        <DetailBlog />
        <Footer />
      </>
    );
}

export default BlogDetail;