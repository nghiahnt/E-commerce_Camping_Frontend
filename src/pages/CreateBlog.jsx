import { Navbar, Footer, Avatar, Button } from "../components";

function CreateBlog() {
  return (
    <>
      <Navbar>
        <Button content="Publish" />
        <Avatar height="30" />
      </Navbar>
      <div className="container">
        <div className="row-md">
            <input type="text" placeholder="Tiêu đề" className="col-md border-0 mt-5 mb-4 fw-bold" style={{
                fontSize: "30px",
                lineHeight: "14px",

            }} />
        </div>
        <div className="" style={{
            minHeight: "1000px",
        }}>
            <div className="">Body</div>
            <div className="">Preview Body</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateBlog;
