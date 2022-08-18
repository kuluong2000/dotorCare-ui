import React from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import "./custom-slider.scss";
import Button from "../../common/button/Button";
const cx = classNames.bind(styles);
export default function Home() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    // autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    className: "jio-slick",
  };
  return (
    <main>
      <section className={cx("banner")}>
        <div className="container">
          <div className="row">
            <div className={cx("banner-main")}>
              <div className={cx("banner-slider")}>
                <Slider {...settings}>
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
    </main>
  );
}
