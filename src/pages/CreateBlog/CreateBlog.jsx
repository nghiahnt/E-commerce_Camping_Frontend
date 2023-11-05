import classNames from "classnames/bind";
import styles from "./CreateBlog.module.scss"

const cx = classNames.bind(styles)

function CreateBlog() {
  return (
      <>
          <div className="container">
              <div className="row-md">
                  <input
                      type="text"
                      placeholder="Tiêu đề"
                      className="col-md border-0 mt-5 mb-4 fw-bold"
                      style={{
                          fontSize: '30px',
                          lineHeight: '14px',
                      }}
                  />
              </div>

              <div className="container">
                <div className={cx('wrapper-content')}>
                    <div className={cx("body")}>
                      <input type="file" name="" id="" />
                      <input type="text" placeholder="Write content here..." className={cx("textblog")} />
                    </div>
                    <hr className={cx("vertical-hr")} />
                    <div className={cx("preview")}>Preview...</div>
                </div>
              </div>
          </div>
          {/* <Footer /> */}
      </>
  );
}

export default CreateBlog;
