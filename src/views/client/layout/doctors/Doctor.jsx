import React from "react";
import classNames from "classnames/bind";
import styles from "./doctor.module.scss";
import "./custom-slider.scss";
//import fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import component
import Image from "../../common/image/Image";
import Button from "../../common/button/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
//import image
import avatar from "../../assets/images/doctor/doctor1.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Service() {
  const handleOnChangeValue = (e) => {
    const select = e.target;
    select.classList.add(`${cx("active")}`);
    if (select.options[select.selectedIndex].value === "-2") {
      select.classList.remove(`${cx("active")}`);
    }
  };
  const handleClickShowDoctorInner = (e) => {
    const parent = e.target.parentNode.parentElement;
    const doctorInner = parent.querySelector(`.${cx("doctor-info-inner")}`);
    doctorInner.classList.add(`${cx("active")}`);
  };
  document.addEventListener("click", (e) => {
    const item = document.querySelectorAll(`.${cx("doctor-item")}`);
    item.forEach((el) => {
      const doctorInner = el.querySelector(`.${cx("doctor-info-inner")}`);
      const doctorBtn = el.querySelector(`.${cx("doctor-more-btn")}`);
      if (!doctorBtn.contains(e.target)) {
        doctorInner.classList.remove(`${cx("active")}`);
      }
    });
  });

  const blockSlider = {
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "block-list-slider",
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
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
  const listDoctor = [
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
    {
      avatar: avatar,
      name: "TS.BS.Nguyễn Văn Sĩ",
      specialty: "Tim Mạch",
      introdution: "Bác sĩ Nguyễn Văn Sĩ chuyên điều trị các bệnh lý Tim mạch và có hơn 12 năm kinh nghiệm",
    },
  ];
  return (
    <main>
      <section className={cx("banner")}>
        <div className="container">
          <div className="row">
            <div className={cx("main")}>
              <div className={cx("content")}>
                <h1 className={cx("heading")}>Đội ngũ Bác sĩ ưu tú từ các Bệnh viện hàng đầu</h1>
                <p className={cx("description")}>Đội ngũ Bác sĩ ưu tú với thâm niên trung bình 10 năm kinh nghiệm hiện công tác tại các Bệnh viện hàng đầu Việt Nam, thăm khám trên nhiều chuyên khoa đa dạng, tận tâm chăm sóc bạn cùng gia đình.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("banner-images")}>
            <Image src={require("../../assets/images/doctor/doctor-list-banner-dt.svg").default} className={cx("banner-image-1")} alt="" />
            <Image src={require("../../assets/images/doctor/doctor-list-banner-2-dt.png")} className={cx("banner-image-2")} alt="" />
            <Image src={require("../../assets/images/doctor/doctor-list-banner-3-dt.svg").default} className={cx("banner-image-3")} alt="" />
          </div>
          <Image className={cx("banner-image-mb")} src={require("../../assets/images/doctor/doctor-list-banner-mb.png")}></Image>
        </div>
      </section>
      <section className={cx("find-doctor")}>
        <div className="container">
          <div className="row">
            <div className={cx("find-doctor-main")}>
              <h2 className={cx("title")}>Tìm bác sĩ của bạn</h2>
              <div className={cx("search-form")}>
                <div className={cx(["form-group", "form-group-name"])}>
                  <input type="text" placeholder="Tìm theo tên" />
                  <Button>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </div>
                <div className={cx(["form-group", "form-group-select"])}>
                  <select defaultValue={"DEFAULT"} className={cx("jio-select")} onChange={handleOnChangeValue}>
                    <option value="DEFAULT">Tìm theo chuyên khoa</option>
                    <option value="1">Thuốc gây nghiện</option>
                    <option value="2">Dị Ứng Miễn Dịch</option>
                    <option value="3">Gây Mê</option>
                    <option value="4">Điện sinh tim</option>
                  </select>
                </div>
              </div>
              <div className={cx("doctor-content")}>
                <ul className={cx("doctor-list")}>
                  {listDoctor.map((el, idx) => (
                    <li key={idx} className={cx("doctor-item")}>
                      <div className={cx("doctor-info")}>
                        <Image src={el.avatar} className={cx("doctor-info-avatar")}></Image>
                      </div>
                      <div className={cx("doctor-more-info")}>
                        <h3 className={cx("doctor-info-name")}>{el.name}</h3>
                        <p className={cx("doctor-info-specialty")}>{el.specialty}</p>
                        <p className={cx("doctor-more-introduction")}>{el.introdution}</p>
                        <Button className={cx("doctor-more-btn")} onClick={handleClickShowDoctorInner}>
                          Xem thêm
                        </Button>
                      </div>
                      <div className={cx("doctor-info-inner")}>
                        <Button to="/phongkham">Đặt phòng khám</Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={cx("doctor-view-more")}>
                  <Button>Xem thêm</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("care")}>
        <div className={cx("care-bg")}>
          <Image src={require("../../assets/images/doctor/elite-care-bg.svg").default} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className={cx("care-content")}>
              <h2 className={cx("title")}>Đội ngũ chăm sóc chuyên nghiệp</h2>
              <div className={cx("care-info")}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className={cx("care-info-item")}>
                      <div className={cx("care-info-item-media")}>
                        <Image src={require("../../assets/images/doctor/experience.png")}></Image>
                      </div>
                      <div className={cx("care-info-item-body")}>
                        <h3 className={cx("care-info-item-title")}>Giàu kinh nghiệm</h3>
                        <p className={cx("care-info-item-desc")}>Đội ngũ bác sĩ Jio Health là những bác sĩ ưu tú Chuyên Khoa I & II, Thạc sĩ, Tiến sĩ với thâm niên trung bình từ 10 năm kinh nghiệm.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx("care-info-item")}>
                      <div className={cx("care-info-item-media")}>
                        <Image src={require("../../assets/images/doctor/distinguished.png")}></Image>
                      </div>
                      <div className={cx("care-info-item-body")}>
                        <h3 className={cx("care-info-item-title")}>Chuyên môn cao</h3>
                        <p className={cx("care-info-item-desc")}>Các bác sĩ Jio Health đều đang công tác và giảng dạy tại các bệnh viện uy tín hàng đầu thành phố như BV Chợ Rẫy, BV Nhân dân Gia Định, BV Nhi Đồng 1 & 2, BV Đại học Y Dược TP.HCM.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx("care-info-item")}>
                      <div className={cx("care-info-item-media")}>
                        <Image src={require("../../assets/images/doctor/international.png")}></Image>
                      </div>
                      <div className={cx("care-info-item-body")}>
                        <h3 className={cx("care-info-item-title")}>Kinh nghiệm quốc tế</h3>
                        <p className={cx("care-info-item-desc")}>Các bác sĩ Jio Health đều từng có thời gian tu nghiệp tại các nước có nền y học phát triển như Mỹ, Pháp, Đức, Thái Lan, Singapore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx("care-info-item")}>
                      <div className={cx("care-info-item-media")}>
                        <Image src={require("../../assets/images/doctor/multilingual.png")}></Image>
                      </div>
                      <div className={cx("care-info-item-body")}>
                        <h3 className={cx("care-info-item-title")}>Trình độ ngoại ngữ</h3>
                        <p className={cx("care-info-item-desc")}>Các chuyên viên y tế của Jio Health có thể trao đổi với bệnh nhân bằng nhiều ngôn ngữ như tiếng Anh, tiếng Pháp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("block-list")}>
        <div className="container">
          <div className="row">
            <div className={cx("block-list-main")}>
              <h2 className={cx("title")}>Bài viết y khoa nổi bật</h2>
              <div className={cx("block-list-content")}>
                <div className={cx("block-list-content-slider")}>
                  <Slider {...blockSlider}>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img1.png")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}> Cẩm nang tiêm chủng vaccine Civud-19 từ A-Z</h3>
                      </div>
                    </div>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img2.png")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Nhi khoa</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}> Mùa dihcj trẻ trễ lịch tiêm phòng định kỳ phải làm sao</h3>
                      </div>
                    </div>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img3.png")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Bài viết của Bác sĩ</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}>Hướng dẫn xử lý và cách ly tjai nhà hco bệnh nhân Covid-19 là F0 không triệu chứng</h3>
                      </div>
                    </div>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img4.jpg")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Nhi khoa</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}> Jio Health tổ chức khám sức khỏe cho các bé Trường Mầm Non Quốc Tế Úc Châu</h3>
                      </div>
                    </div>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img1.png")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}> Cẩm nang tiêm chủng vaccine Civud-19 từ A-Z</h3>
                      </div>
                    </div>
                    <div className={cx("block-list-item")}>
                      <Image src={require("../../assets/images/doctor/block-list-img1.png")}></Image>
                      <div className={cx("block-list-item-content")}>
                        <div className={cx("block-list-item-time")}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 tháng 6, 2021</span>
                        </div>
                        <h3 className={cx("block-list-item-title")}> Cẩm nang tiêm chủng vaccine Civud-19 từ A-Z</h3>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
