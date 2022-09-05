import React, { useState } from "react";
import classNames from "classnames/bind";
import Image from "../../common/image/Image";
import Button from "../../common/button/Button";
import Modal from "../../common/modal/Modal";
import Slider from "react-slick";
import styles from "./bookClinic.module.scss";
import "./custom-slick.scss";
const cx = classNames.bind(styles);
export default function BookClinic() {
  const [isVisible, setIsVisible] = useState(false);
  const relatedDocor = {
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "related-doctor-list-slider",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // variableWidth: true,
    // swipeToSlide: true,
  };
  document.addEventListener("click", (e) => {
    const item = document.querySelectorAll(`.${cx("related-doctor-item")}`);
    item.forEach((el) => {
      const doctorInner = el.getElementsByClassName(`${cx("related-doctor-info-inner")}`);
      const doctorBtn = el.getElementsByClassName(`${cx("related-doctor-more-btn")}`);

      if (!doctorBtn[0].contains(e.target)) {
        doctorInner[0].classList.remove(`${cx("active")}`);
      }
    });
  });
  const handleClickShowRelatedDoctorInner = (e) => {
    const parent = e.target.parentNode.parentElement;
    const children = parent.getElementsByClassName(`${cx("related-doctor-info-inner")}`);
    console.log(children[0]);
    // const doctorInner = parent.querySelector(`.${cx("related-doctor-info-inner")}`);
    // console.log(doctorInner);
    children[0].classList.add(`${cx("active")}`);
  };
  const handleClickOpenModal = () => {
    setIsVisible(true);
    document.body.style = `overflow: hidden;`;
  };
  const handleCancelModal = () => {
    setIsVisible(false);
    document.body.style = `overflow: overlay;`;
  };
  return (
    <main>
      <Modal visible={isVisible} onCancel={handleCancelModal}></Modal>
      <section className={cx("banner")}>
        <div className={cx("banner-bg")}>
          <Image className={cx("banner-bg-1")} src={require("../../assets/images/clinic/dr-profile-banner-dt.svg").default}></Image>
          <Image className={cx("banner-bg-2")} src={require("../../assets/images/clinic/dr-profile-banner-dt-2.svg").default}></Image>
        </div>
        <div className="container">
          <div className="row">
            <div className={cx("banner-main")}>
              <div className={cx("info")}>
                <h1 className={cx("heading")}>TS.BS.Nguyễn Văn Sĩ</h1>
                <p className={cx("description")}>
                  Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm. Bác sĩ đã hoàn thành chương trình đào tạo Tiến sĩ tại Đại Học Yamanashi, Nhật Bản và hiện đang là Giảng viên tại Đại Học Y Dược TP.HCM.
                </p>
                <Button btn_green cursor_pointer onClick={handleClickOpenModal}>
                  Đặt lịch khám ngay
                </Button>
              </div>
              <div className={cx("avatar")}>
                <Image src={cx(require("../../assets/images/clinic/avatar.png"))}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("banner-bg-bottom")}>
          <Image src={require("../../assets/images/clinic/dr-profile-banner-dt-3.svg").default}></Image>
        </div>
      </section>
      <section className={cx("exp-blog")}>
        <div className="container">
          <div className="row">
            <div className={cx("exp-main")}>
              <h2 className={cx("title")}>Học vấn và kinh nghiệm</h2>
              <div className={cx("exp-content")}>
                <h3>Bác sĩ Nguyễn Văn Sĩ chuyên điều trị:</h3>
                <p>Bệnh lý Tim mạch:Tăng huyết áp, rối loạn lipid máu, bệnh tim thiếu máu cục bộ, suy tim,...</p>

                <ul className={cx("exp-list")}>
                  <li className={cx("exp-item")}>
                    <span className={cx("exp-item-icon")}>
                      <Image src={require("../../assets/images/clinic/clinical_experience-icon.svg").default}></Image>
                    </span>
                    <div className={cx("exp-item-content")}>
                      <h4 className={cx("exp-item-title")}>Quá trình công tác</h4>
                      <p className={cx("exp-item-info")}>
                        <span>2011 - nay:</span>
                        Giảng viên Đại học Y Dược TP.HCM
                      </p>
                      <p className={cx("exp-item-info")}>
                        <span>2008 - 2011:</span>
                        Bác sĩ Nội trú tại Bệnh viện Chợ Rẫy. Bệnh viện Nhân dân Gia Định
                      </p>
                    </div>
                  </li>
                  <li className={cx("exp-item")}>
                    <span className={cx("exp-item-icon")}>
                      <Image src={require("../../assets/images/clinic/training-icon.svg").default}></Image>
                    </span>
                    <div className={cx("exp-item-content")}>
                      <h4 className={cx("exp-item-title")}>Đào tạo</h4>
                      <p className={cx("exp-item-info")}>
                        <span>2008 - 2011:</span>
                        Bác sĩ Nội trú, Bác sĩ Chuyên khoa I chuyên ngành Nội tổng quát, Đại Học Y Dược TP.HCM.
                      </p>
                      <p className={cx("exp-item-info")}>
                        <span>2002 - 2008: </span>
                        Bác sĩ Đa khoa, Đại học Y Dược TP.HCM.
                      </p>
                      <p className={cx("exp-item-info")}>
                        <span>2013 - 2016: </span>
                        Tiến sĩ Y Khoa, Đại học Yamanashi, Nhật Bản.
                      </p>
                    </div>
                  </li>
                  <li className={cx("exp-item")}>
                    <span className={cx("exp-item-icon")}>
                      <Image src={require("../../assets/images/clinic/continuing_medical_education-icon.svg").default}></Image>
                    </span>
                    <div className={cx("exp-item-content")}>
                      <h4 className={cx("exp-item-title")}>Đào tạo liên tục</h4>
                      <p className={cx("exp-item-info")}>
                        <span>2016:</span>
                        Điện tâm đồ, Đại học Y Dược TP.HCM.
                      </p>
                      <p className={cx("exp-item-info")}>
                        <span>2012:</span>
                        Siêu âm tim và mạch máu, Đại học Y Dược TP.HCM.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("related-doctor")}>
        <div className="container">
          <div className="row">
            <div className={cx("related-doctor-main")}>
              <div className={cx("title")}>Xem thêm Bác sĩ chuyên khoa khác</div>
              <div className={cx("related-doctor-slider")}>
                <Slider {...relatedDocor}>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                  <div className={cx("related-doctor-item")}>
                    <div className={cx("related-doctor-info")}>
                      <Image src={require("../../assets/images/service/doctor1.png")} className={cx("related-doctor-info-avatar")}></Image>
                      <div className={cx("related-doctor-main-info")}>
                        <h3 className={cx("related-doctor-info-name")}>Ths.Bs.Nguyễn ngọc Bách </h3>
                        <p className={cx("related-doctor-info-specialty")}>Tai Mũi Họng</p>
                      </div>
                    </div>
                    <div className={cx("related-doctor-more-info")}>
                      <p className={cx("related-doctor-more-introduction")}>Bác sĩ Nguyễn Ngọc Bách là Thạc sĩ chuyên ngành Tai Mũi Họng với hơn 8 năm ki...</p>
                      <Button className={cx("related-doctor-more-btn")} onClick={handleClickShowRelatedDoctorInner}>
                        Xem thêm
                      </Button>
                    </div>
                    <div className={cx("related-doctor-info-inner")}>
                      <Button to="/phongkham">Đặt phòng khám</Button>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("fixed-bottom-group")}>
        <div className="container">
          <div className="row">
            <Button btn_green onClick={handleClickOpenModal}>
              Đặt lịch khám ngay
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
