function Blog() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="card p-3" style={{ "border-radius": "20px" }}>
            <div className="row mb-2">
              <div className="col-md-11 d-flex align-items-center">
                <img src="../assets/user.png" alt="" height={20} />
                <a
                  href="/"
                  style={{ "text-decoration": "none", color: "#000" }}
                  className="ml-1"
                >
                  Abc
                </a>
              </div>
              <div className="col-md-1 d-flex justify-content-center align-items-center">
                <i
                  class="fa-solid fa-ellipsis"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <a
                  href="/"
                  style={{
                    "text-decoration": "none",
                    color: "#000",
                    "font-weight": "bold",
                  }}
                >
                  <h4>Ba Na Hills - Golden Bridge Private Day Trip</h4>
                </a>

                <p>
                  Discover Vietnam's fairytale Ba Na Hills on a day tour from
                  Hoi An or Da Nang. Travel on the cable car, snap photos of the
                  Golden Bridge's giant hands, marvel at the Linh Ung Pagoda,
                  and more...
                </p>

                <div>
                  <span>3 ngày trước</span>
                  <span
                    style={{
                      margin: "0 10px",
                    }}
                  >
                    .
                  </span>
                  <span>9 phút đọc</span>
                </div>
              </div>
              <div className="col-xxl-4">
                <a href="/">
                  <img
                    src="../assets/thumbnail1.jpg"
                    alt="Thumbnail"
                    style={{
                      "max-width": "inherit",
                      background: "#ebebeb",
                      color: "#757575",
                      display: "block",
                      "font-size": "14px",
                      "line-height": "1.8",
                      "max-height": "120px",
                      objectFit: "cover",
                      "border-radius": "15px",
                      textAlign: "center",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
