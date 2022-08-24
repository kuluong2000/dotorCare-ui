import React from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import "./custom-slider.scss";
import "./view-responsive.scss";
import Button from "../../common/button/Button";
import Image from "../../common/image/Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Home() {
  const banner = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    className: "jio-slick",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          swipeToSlide: false,
          arrows: false,
        },
      },
    ],
  };
  const healthCare = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "health-care-slick",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <main>
      <section className={cx("banner")}>
        <div className="container">
          <div className="row">
            <div className={cx("banner-main")}>
              <div className={cx("banner-slider")}>
                <Slider {...banner}>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-01.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-02.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-03.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-04.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-05.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-06.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-07.png")} alt="" />
                  </div>
                  <div className={cx("slider-image")}>
                    <img src={require("../../assets/images/banner-08.png")} alt="" />
                  </div>
                </Slider>
              </div>
              <div className={cx("content")}>
                <img className={cx("heart-icon")} src={require("../../assets/images/heart-icon.svg").default} alt="" />
                <img className={cx("clinic-icon")} src={require("../../assets/images/clinic-icon.svg").default} alt="" />
                <h1 className={cx("title")}>Chào mừng bạn đến với Tương lai của Chăm sóc Sức khỏe!</h1>
                <div className={cx("action")}>
                  <Button className={cx(["btn-booking", "btn-banner"])}>Đặt Hẹn Khám</Button>
                  <Button className={cx(["btn-banner", "btn-learn-more"])}>Tìm Hiểu Thêm</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("clinic")}>
        <div className="container">
          <div className="row">
            <div className={cx("clinic-main")}>
              <h2 className={cx("clinic-title")}>Khám Phá các phòng Khám</h2>
              <div className={cx("clinic-content")}>
                <div className={cx("clinic-image")}>
                  <img src={require("../../assets/images/banner-04.png")} alt="" />
                </div>
                <div className={cx("clinic-info")}>
                  <h2 className={cx("clinic-name")}>mPlaza - HCM</h2>
                  <div className={cx("clinic-address")}>
                    <img src={require("../../assets/images/location.svg").default} alt="" />
                    <p>Lầu 1, Tòa nhà Mplaza, 39 Lê Duẩn, Bến Nghé, Quận 1</p>
                  </div>
                  <div className={cx("clinic-time")}>
                    <img src={require("../../assets/images/clock.svg").default} alt="" />
                    <p>07:00 AM - 08:00 PM hằng ngày</p>
                  </div>
                  <div className={cx("clinic-action")}>
                    <Button btn_blue>Gọi Ngay</Button>
                    <Button btn_green>Đặt Khám</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("health-care")}>
        <div className="container">
          <div className="row">
            <div className="health-care-main">
              <Slider {...healthCare}>
                <div to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/home-visit-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Dịch vụ Bác Sĩ đến nhà</h2>
                </div>
                <Link to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/pharmacy-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Nhà thuốc trực tuyến</h2>
                </Link>
                <Link to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/find-doctor-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Tìm bác sĩ</h2>
                </Link>
                <Link to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/care-packages-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Gói chăm sóc sức khỏe</h2>
                </Link>
                <Link to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/home-visit-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Dịch Vụ Bác Sĩ Đến Nhà</h2>
                </Link>
              </Slider>
            </div>
          </div>
        </div>
        <img className={cx("health-care-inserted")} src={require("../../assets/images/health-care-bottom-wave.svg").default} alt="" />
      </section>
      <section className={cx("doctor-come")}>
        <div className="container">
          <div className="row">
            <div className={cx("doctor-come-main")}>
              <div className={cx("doctor-come-content")}>
                <h2 className={cx("doctor-come-content-title")}>Bác sĩ đến nhà</h2>
                <p className={cx("doctor-come-content-desc")}>
                  Thăm khám tận nơi chỉ từ <span>400.000đ</span>
                </p>
                <div className={cx("doctor-come-content-action")}>
                  <Button btn_green>Đặt Khám Ngay</Button>
                  <Button btn_blue>Tìm Hiểu Thêm</Button>
                </div>
              </div>
              <div className={cx("doctor-come-social")}>
                <div className={cx("doctor-come-video")}>
                  <video className={cx("doctor-come-video-player")} muted autoPlay="autoplay" loop="loop" poster="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.6/assets/images/video-posters/doctors-come-to-you-video-poster.jpg">
                    <source src="https://cdn.jiohealth.com/video/doctor/Our_Doctors_Come_to_You_Short_Ver_LQ.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className={cx("doctor-come-image")}>
                  <img src={require("../../assets/images/doctors-come-to-you-video-cover.svg").default} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("pharmacy")}>
        <div className="container">
          <div className="row">
            <div className={cx("pharmacy-main")}>
              <div className={cx("pharmacy-video")}>
                <video muted autoPlay="autoplay" loop="loop" className={cx("pharmacy-video-player")} poster="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.6/assets/images/video-posters/online-pharmacy-video-poster.jpg">
                  <source src="https://cdn.jiohealth.com/video/doctor/Pharmacy_Short_Version_LQ.mp4" type="video/mp4"></source>
                </video>
              </div>
              <div className={cx("pharmacy-image")}>
                <img src={require("../../assets/images/online-pharmacy-video-cover.svg").default} alt="" />
              </div>
              <div className={cx("pharmacy-content")}>
                <h2 className={cx("pharmacy-content-title")}>Nhà Thuốc Trực Tuyến Jio</h2>
                <p className={cx("pharmacy-content-desc")}>Dễ dang đặt trực tuyến thuốc và các sản phẩm chăm sóc sức khỏe chính hãng vơi mức giá tiết kiệm</p>
                <div className={cx("pharmacy-content-info")}>
                  <div className={cx("pharmacy-content-row")}>
                    <img src={require("../../assets/images/delivery-icon.svg").default} alt="" />
                    <span>Giao hàng nhanh trong 2 giờ</span>
                  </div>
                  <div className={cx("pharmacy-content-row")}>
                    <img src={require("../../assets/images/discount-icon.svg").default} alt="" />
                    <span>Tiết kiệm 20% tất cả các sản phẩm</span>
                  </div>
                </div>
                <div className={cx("pharmacy-content-shop-now")}>
                  <Button btn_green>Xem Ngay</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("feeling")}>
        <div className="container">
          <div className="row">
            <div className={cx("feeling-main")}>
              <div className={cx("feeling-content")}>
                <h2 className={cx("feeling-content-title")}>
                  Bạn thấy không khỏe?
                  <br />
                  Hãy để Jio Health chăm sóc cho bạn!
                </h2>
                <p className={cx("feeling-content-desc")}>Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ cảm mạo thông thường đến các bệnh mạn tính - các bác sĩ Jio thân thiện sẽ tận tình chăm sóc bạn và gia đình.</p>
                <div className={cx("feeling-content-info")}>
                  <div className={cx("feeling-content-row")}>
                    <img src={require("../../assets/images/stethoscope-icon.svg").default} alt="" />
                    <span>Dịch vụ Bác sĩ & Điều dưỡng</span>
                  </div>
                  <div className={cx("feeling-content-row")}>
                    <img src={require("../../assets/images/lab-icon.svg").default} alt="" />
                    <span>Lấy mẫu xét nghiệm</span>
                  </div>
                </div>
                <div className={cx("feeling-btn-more")}>
                  <Button btn_green>Tìm hiểu thêm</Button>
                </div>
              </div>
              <div className={cx("feeling-image")}>
                <img src={require("../../assets/images/not-feeling-well.svg").default} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("video-chat-section")}>
        <div className="container">
          <div className="row">
            <div className={cx("video-chat-main")}>
              <div className={cx("video-chat-image")}>
                <img src={require("../../assets/images/24-7-video-chat-vietnamese.png")} alt="" />
              </div>
              <div className={cx("video-chat-content")}>
                <h2 className={cx("video-chat-content-title")}>Tư vấn sức khỏe từ xa 24/7 qua video & chat</h2>
                <p className={cx("video-chat-content-desc")}>
                  Bạn cần sự tư vấn chuyên môn khi gặp các vấn đề sức khỏe? Dù bạn ở đâu hay vào bất cứ lúc nào, các bác sĩ chuyên khoa của Jio Health luôn sẵn sàng tư vấn, giải đáp đáp mọi thắc mắc của bạn
                </p>
                <div className={cx("video-chat-content-info")}>
                  <div className={cx("video-chat-content-row")}>
                    <img src={require("../../assets/images/video-icon.svg").default} alt="" />
                    <span>Video call với bác sĩ</span>
                  </div>
                  <div className={cx("video-chat-content-row")}>
                    <img src={require("../../assets/images/chat-icon.svg").default} alt="" />
                    <span>Chat với bác sĩ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("health-resources")}>
        <div className="container">
          <div className="row">
            <div className={cx("health-resources-main")}>
              <div className={cx("health-resources-content")}>
                <h2 className={cx("health-resources-content-title")}>Thông tin sức khỏe dành cho bạn</h2>
                <p className={cx("health-resources-content-desc")}>
                  360 độ nội dung sức khỏe thuộc các chủ đề được nhiều người quan tâm hiện nay, dưới sự xây dựng từ các chuyên gia sức khỏe tại Jio Health.
                  <br />
                  <br />
                  Cần xem thêm nhiều bài viết chuyên khoa thú vị khác? <Link to="/tin-tuc">Blog Jio Health</Link> là điểm đến về tin tức và kiến thức sức khỏe lý tưởng dành cho bạn
                </p>
              </div>
              <div className={cx("health-resources-image")}>
                <img src={require("../../assets/images/health-resource-background.svg").default} alt="" />
              </div>
              <div className={cx("health-resources-list")}>
                <div className={cx("health-resources-items")}>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/cardiology-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Tim mạch</h4>
                      <span>13 bài viết</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/pediatrics-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Nhi Khoa</h4>
                      <span>21 bài viết</span>
                    </div>
                  </div>
                </div>
                <div className={cx("health-resources-items")}>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/endocrinology-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Đái tháo đường</h4>
                      <span>7 bài viết</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/kidneys-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Thận - Tiết Niệu</h4>
                      <span>10 bài viết</span>
                    </div>
                  </div>
                </div>
                <div className={cx("health-resources-items")}>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/fetus-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Thai sản</h4>
                      <span>71 bài viết</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/sexual-health-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Sức khỏe giới tính</h4>
                      <span>12 bài viết</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/woman-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Sức khỏe phụ nữ</h4>
                      <span>8 bài viết</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("news")}>
        <div className="container">
          <div className="row">
            <div className={cx("news-main")}>
              <div className={cx("news-main-image")}>
                <Image src={require("../../assets/images/as-seen-on-news-background.svg").default}></Image>
              </div>
              <div className={cx("news-list")}>
                <div className={cx("news-item")}>
                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/vietcetera.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/nhipcaudautu.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/vnexpress.svg").default} alt="" />
                  </Button>
                </div>
                <div className={cx("news-item")}>
                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/dantri.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/cafef.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/thanh-nien.svg").default} alt="" />
                  </Button>
                </div>
                <div className={cx("news-item")}>
                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/htv9.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/zing.svg").default} alt="" />
                  </Button>

                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/vietnamnet.svg").default} alt="" />
                  </Button>
                  <Button className={cx("news-item-btn")}>
                    <img src={require("../../assets/images/tuoitre.svg").default} alt="" />
                  </Button>
                </div>
              </div>
              <div className={cx("news-content")}>
                <h2 className={cx("news-content-title")}>Truyền thông nói về Jio Health</h2>
                <p className={cx("news-content-desc")}>Cùng khám phá những góc nhìn đa chiều từ các cơ quan truyền thông về Jio Health và hiểu hơn về cách chúng tôi cải tiến dịch vụ chăm sóc sức khỏe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("app-download")}>
        <div className="container">
          <div className="row">
            <div className={cx("app-download-main")}>
              <div className={cx("app-download-content")}>
                <h2 className={cx("app-download-content-title")}>
                  Tìm hiểu thêm về Jio Health?
                  <br />
                  Tải ứng dụng ngay!
                </h2>
                <div className={cx("app-download-links")}>
                  <Button>
                    <Image src={require("../../assets/images/app-store-vi.svg").default}></Image>
                  </Button>
                  <Button>
                    <Image src={require("../../assets/images/google-play-vi.svg").default}></Image>
                  </Button>
                </div>
              </div>
              <div className={cx("app-download-images")}>
                <Image className={cx("app-download-images-iconmess")} src={require("../../assets/images/message-icon.svg").default}></Image>
                <Image className={cx("app-download-images-doctor")} src={require("../../assets/images/doctor-get-in-touch.png")}></Image>
                <Image className={cx("app-download-images-iconphone")} src={require("../../assets/images/virtual-care-icon.svg").default}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
