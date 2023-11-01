import images from '../../assets/img';

function Blog() {
    return (
        <div className="container">
            <div className="row mb-5 mt-5">
                <div className="col-md-8 offset-md-2">
                    <div
                        className="card p-3"
                        style={{ 'border-radius': '20px' }}
                    >
                        <div className="row mb-2">
                            <div className="col-md-11 d-flex align-items-center">
                                <a href="/profile">
                                    <img src={images.user} alt="" height={20} />
                                </a>
                                <a
                                    href="/profile"
                                    style={{
                                        'text-decoration': 'none',
                                        color: '#000',
                                    }}
                                    className="ml-1 mt-1"
                                >
                                    Abc
                                </a>
                            </div>
                            <div className="col-md-1 d-flex justify-content-center align-items-center">
                                <i
                                    className="fa-solid fa-ellipsis"
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <a
                                    href="/blog/detail"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#000',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <h4>
                                        Ba Na Hills - Golden Bridge Private Day
                                        Trip
                                    </h4>
                                </a>

                                <p>
                                    Discover Vietnam's fairytale Ba Na Hills on
                                    a day tour from Hoi An or Da Nang. Travel on
                                    the cable car, snap photos of the Golden
                                    Bridge's giant hands, marvel at the Linh Ung
                                    Pagoda, and more...
                                </p>

                                <div>
                                    <span>3 ngày trước</span>
                                    <span
                                        style={{
                                            margin: '0 10px',
                                        }}
                                    >
                                        .
                                    </span>
                                    <span>9 phút đọc</span>
                                </div>
                            </div>
                            <div className="col-xxl-4">
                                <a href="/blog/detail">
                                    <img
                                        src={images.thumbnail}
                                        alt="Thumbnail"
                                        style={{
                                            maxWidth: 'inherit',
                                            background: '#ebebeb',
                                            color: '#757575',
                                            display: 'block',
                                            fontSize: '14px',
                                            lineHeight: '1.8',
                                            maxHeight: '120px',
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                            textAlign: 'center',
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
