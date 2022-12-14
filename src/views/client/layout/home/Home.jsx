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
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <>
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
                <h1 className={cx("title")}>Ch??o m???ng b???n ?????n v???i T????ng lai c???a Ch??m s??c S???c kh???e!</h1>
                <div className={cx("action")}>
                  <Button to="/dich-vu" className={cx(["btn-booking", "btn-banner"])}>
                    ?????t H???n Kh??m
                  </Button>
                  <Button className={cx(["btn-banner", "btn-learn-more"])}>T??m Hi???u Th??m</Button>
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
              <h2 className={cx("clinic-title")}>Kh??m Ph?? ph??ng Kh??m</h2>
              <div className={cx("clinic-content")}>
                <div className={cx("clinic-image")}>
                  <img src={require("../../assets/images/banner-04.png")} alt="" />
                </div>
                <div className={cx("clinic-info")}>
                  <h2 className={cx("clinic-name")}>mPlaza - ???? N???ng</h2>
                  <div className={cx("clinic-address")}>
                    <img src={require("../../assets/images/location.svg").default} alt="" />
                    <p>1120 Nguy???n V??n Linh - ???? N???ng</p>
                  </div>
                  <div className={cx("clinic-time")}>
                    <img src={require("../../assets/images/clock.svg").default} alt="" />
                    <p>08:00 AM - 17:00 PM h???ng ng??y</p>
                  </div>
                  <div className={cx("clinic-action")}>
                    <Button btn_blue>G???i Ngay</Button>
                    <Button to="/dich-vu" btn_green>
                      ?????t Kh??m
                    </Button>
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
                <div to={"/bac-si"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/home-visit-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>D???ch v??? B??c S?? ?????n nh??</h2>
                </div>
                <Link to={"/dichvu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/pharmacy-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>Nh?? thu???c tr???c tuy???n</h2>
                </Link>
                <Link to={"/bac-si"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/find-doctor-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>T??m b??c s??</h2>
                </Link>
                <Link to={"/dich-vu"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/care-packages-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>G??i ch??m s??c s???c kh???e</h2>
                </Link>
                <Link to={"/bac-si"} className={cx("health-care-item")}>
                  <img src={require("../../assets/images/home-visit-bg.png")} alt="" />
                  <h2 className={cx("health-care-item-title")}>D???ch V??? B??c S?? ?????n Nh??</h2>
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
                <h2 className={cx("doctor-come-content-title")}>B??c s?? ?????n nh??</h2>
                <p className={cx("doctor-come-content-desc")}>
                  Th??m kh??m t???n n??i ch??? t??? <span>400.000??</span>
                </p>
                <div className={cx("doctor-come-content-action")}>
                  <Button btn_green>?????t Kh??m Ngay</Button>
                  <Button btn_blue>T??m Hi???u Th??m</Button>
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
                <h2 className={cx("pharmacy-content-title")}>Nh?? Thu???c Tr???c Tuy???n Jio</h2>
                <p className={cx("pharmacy-content-desc")}>D??? dang ?????t tr???c tuy???n thu???c v?? c??c s???n ph???m ch??m s??c s???c kh???e ch??nh h??ng v??i m???c gi?? ti???t ki???m</p>
                <div className={cx("pharmacy-content-info")}>
                  <div className={cx("pharmacy-content-row")}>
                    <img src={require("../../assets/images/delivery-icon.svg").default} alt="" />
                    <span>Giao h??ng nhanh trong 2 gi???</span>
                  </div>
                  <div className={cx("pharmacy-content-row")}>
                    <img src={require("../../assets/images/discount-icon.svg").default} alt="" />
                    <span>Ti???t ki???m 20% t???t c??? c??c s???n ph???m</span>
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
                  B???n th???y kh??ng kh???e?
                  <br />
                  H??y ????? Jio Health ch??m s??c cho b???n!
                </h2>
                <p className={cx("feeling-content-desc")}>T??m hi???u th??m v??? c??c d???ch v??? ch??m s??c s???c kh???e c???a ch??ng t??i, t??? c???m m???o th??ng th?????ng ?????n c??c b???nh m???n t??nh - c??c b??c s?? Jio th??n thi???n s??? t???n t??nh ch??m s??c b???n v?? gia ????nh.</p>
                <div className={cx("feeling-content-info")}>
                  <div className={cx("feeling-content-row")}>
                    <img src={require("../../assets/images/stethoscope-icon.svg").default} alt="" />
                    <span>D???ch v??? B??c s?? & ??i???u d?????ng</span>
                  </div>
                  <div className={cx("feeling-content-row")}>
                    <img src={require("../../assets/images/lab-icon.svg").default} alt="" />
                    <span>L???y m???u x??t nghi???m</span>
                  </div>
                </div>
                <div className={cx("feeling-btn-more")}>
                  <Button btn_green>T??m hi???u th??m</Button>
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
                <h2 className={cx("video-chat-content-title")}>T?? v???n s???c kh???e t??? xa 24/7 qua video & chat</h2>
                <p className={cx("video-chat-content-desc")}>
                  B???n c???n s??? t?? v???n chuy??n m??n khi g???p c??c v???n ????? s???c kh???e? D?? b???n ??? ????u hay v??o b???t c??? l??c n??o, c??c b??c s?? chuy??n khoa c???a Jio Health lu??n s???n s??ng t?? v???n, gi???i ????p ????p m???i th???c m???c c???a b???n
                </p>
                <div className={cx("video-chat-content-info")}>
                  <div className={cx("video-chat-content-row")}>
                    <img src={require("../../assets/images/video-icon.svg").default} alt="" />
                    <span>Video call v???i b??c s??</span>
                  </div>
                  <div className={cx("video-chat-content-row")}>
                    <img src={require("../../assets/images/chat-icon.svg").default} alt="" />
                    <span>Chat v???i b??c s??</span>
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
                <h2 className={cx("health-resources-content-title")}>Th??ng tin s???c kh???e d??nh cho b???n</h2>
                <p className={cx("health-resources-content-desc")}>
                  360 ????? n???i dung s???c kh???e thu???c c??c ch??? ????? ???????c nhi???u ng?????i quan t??m hi???n nay, d?????i s??? x??y d???ng t??? c??c chuy??n gia s???c kh???e t???i Jio Health.
                  <br />
                  <br />
                  C???n xem th??m nhi???u b??i vi???t chuy??n khoa th?? v??? kh??c? <Link to="/tin-tuc">Blog Jio Health</Link> l?? ??i???m ?????n v??? tin t???c v?? ki???n th???c s???c kh???e l?? t?????ng d??nh cho b???n
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
                      <h4>Tim m???ch</h4>
                      <span>13 b??i vi???t</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/pediatrics-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Nhi Khoa</h4>
                      <span>21 b??i vi???t</span>
                    </div>
                  </div>
                </div>
                <div className={cx("health-resources-items")}>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/endocrinology-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>????i th??o ???????ng</h4>
                      <span>7 b??i vi???t</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/kidneys-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Th???n - Ti???t Ni???u</h4>
                      <span>10 b??i vi???t</span>
                    </div>
                  </div>
                </div>
                <div className={cx("health-resources-items")}>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/fetus-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>Thai s???n</h4>
                      <span>71 b??i vi???t</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/sexual-health-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>S???c kh???e gi???i t??nh</h4>
                      <span>12 b??i vi???t</span>
                    </div>
                  </div>
                  <div className={cx("health-resources-item")}>
                    <img src={require("../../assets/images/woman-icon.svg").default} alt="" />
                    <div className={cx("health-resources-item-info")}>
                      <h4>S???c kh???e ph??? n???</h4>
                      <span>8 b??i vi???t</span>
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
                <h2 className={cx("news-content-title")}>Truy???n th??ng n??i v??? Jio Health</h2>
                <p className={cx("news-content-desc")}>C??ng kh??m ph?? nh???ng g??c nh??n ??a chi???u t??? c??c c?? quan truy???n th??ng v??? Jio Health v?? hi???u h??n v??? c??ch ch??ng t??i c???i ti???n d???ch v??? ch??m s??c s???c kh???e</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
