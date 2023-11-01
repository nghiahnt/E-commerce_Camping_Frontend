import Avatar from "./avatar";
import images from "../assets/img";
// import { ContentDetailBlog } from "../components"

function DetailBlog(children) {
  return (
    <div className="container">
      <div className="row">
        {/* Side bar Blog */}
        <div className="col-md-3 mt-5">
          <div
            className=""
            style={{
              width: "245px",
              position: "fixed",
            }}
          >
            <a
              href="/profile"
              className=""
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              <h5>User</h5>
            </a>
            <hr />
            <div className="d-flex">
              <div className="flex-grow-1 d-flex">
                <i
                  class="fa-regular fa-heart mt-1 pr-2"
                  style={{ cursor: "pointer" }}
                ></i>
                {/* Heart fill
                    <i class="fa-solid fa-heart"></i>
                  */}
                <p>8</p>
              </div>
              <div className="flex-grow-1 d-flex">
                <i class="fa-regular fa-comment mt-1 pr-2"></i>
                <p style={{ cursor: "pointer" }}>0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Blog */}
        <div
          className="col-md-7 mt-5 mb-5"
          style={{
            minHeight: "1000px",
          }}
        >
          <h1 className="mb-4">Ba Na Hills - Golden Bridge Private Day Trip</h1>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <Avatar link="/profile" height="45" />
              <div className="">
                <a href="/profile" className="text-dark text-decoration-none">
                  User
                </a>
                <p className="text-opacity-50">
                  3 ngày trước <span>.</span> 9 phút đọc
                </p>
              </div>
            </div>
            <div className="">
              <i
                className="fa-solid fa-ellipsis"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <div className="">
            <img src={images.main} alt="Bana hill" className="img-thumbnail border-0" />
            <p className="lh-4 fs-5 fw-normal">
              Explore the Ba Na Hills and including all of its attractions, both
              old and new. Your group will ride gravity-defying cable cars
              through the misty mountains, and there will be time to snap photos
              along the magnificent Golden Bridge, an elevated walkway through
              the mountains supported by two enormous stone hands. Afterwards,
              experience the history of the region by going on an adventure
              below ground to see French cellars that were used to distill
              alcohol during the colonial era; a true step back in time for
              history lovers. Before the end of the day, there will be a gentle
              hike up Chua Mountain for panoramic views and to visit the Linh
              Chua Linh Tu Temple and Linh Ung Pagoda, which is famous for its
              large Buddha.
            </p>
          </div>
          <div className="mt-5">
            <hr />
            <div><h5>Realated topic...</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBlog;
