import React from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import "./custom-slider.scss";
import Button from "../../common/button/Button";
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
  };
  const healthCare = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "health-care-slick",
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
    </main>
  );
}
