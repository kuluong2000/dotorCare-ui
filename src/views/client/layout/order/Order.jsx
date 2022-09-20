import React from "react";
import classNames from "classnames/bind";
import styles from "./order.module.scss";
import Button from "../../common/button/Button";
import Image from "../../common/image/Image";

//import image
import imageDoctor from "../../assets/images/order/doctor.png";

const cx = classNames.bind(styles);

export default function Order() {
  const doctors = [
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
    {
      name: "Bs.Nguyễn Thụy Đan",
      speciatly: "Nhãn khoa",
      image: imageDoctor,
      to: "nguyen-thuy-dan",
    },
  ];

  return (
    <>
      <section className={cx("banner")}>
        <div className="container">
          <div className={cx("title")}>Đặt hẹn khám</div>
        </div>
      </section>
      <section className={cx("doctor-list")}>
        <div className="container">
          <div className={cx("content")}>
            <div className={cx("doctor-title")}>
              <Image src={require("../../assets/images/order/doctor-booking-icon.svg").default} className={cx("doctor-title-icon")}></Image>
              <p>Chọn bác sĩ</p>
            </div>
            <ul className={cx("cards")}>
              {doctors.map((doctor, idx) => (
                <li key={idx} className={cx("card")}>
                  <div className={cx("inner")}>
                    <Image src={doctor.image} className={cx("doctor-image")}></Image>
                    <div className={cx("doctor-info")}>
                      <h4 className={cx("doctor-name")}>{doctor.name}</h4>
                      <p className={cx("doctor-specialty")}>{doctor.speciatly}</p>
                    </div>
                  </div>
                  <div className={cx("cover")}>
                    <Button to={`/bac-si/${doctor.to}`} btn_green className={cx("cover-btn")}>
                      Đặt lịch khám
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
