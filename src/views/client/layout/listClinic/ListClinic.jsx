import React from "react";
import classNames from "classnames/bind";
import styles from "./listClinic.module.scss";

import Button from "../../common/button/Button";
import Image from "../../common/image/Image";

const cx = classNames.bind(styles);
export default function ListClinic() {
  const Clinics = [
    {
      title: "Phòng khám Đa Khoa",
      to: "dich-vu",
    },
    {
      title: "Phòng khám Duy Tân",

      to: "dich-vu",
    },
    {
      title: "Phòng khám Đa khoa ĐÔng Phương",
      to: "dich-vu",
    },

    {
      title: "Phòng khám Thiên Phước",
      to: "dich-vu",
    },
    {
      title: "Phòng khám Đa khoa Hữu Nghị",
      to: "dich-vu",
    },
    {
      title: "Phòng khám Pasteur Đà Nẵng",
      to: "dich-vu",
    },
  ];

  return (
    <>
      <section className={cx("banner")}>
        <div className="container">
          <div className="row">
            <div className={cx("bg-push-large")}></div>
            <div className={cx("bg-right")}></div>
            <div className={cx("ball-wrapper")}>
              <div className={cx(["ball", "small"])}></div>
              <div className={cx(["ball", "medium"])}></div>
              <div className={cx(["ball", "large"])}></div>
            </div>
            <div className={cx("content")}>
              <h1 className={cx("heading")}>
                Bạn thấy không khỏe? <br /> Hãy để Jio Health chăm sóc cho bạn !
              </h1>
              <p className={cx("description")}>Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ cảm mạo thông thường đến các bệnh mạn tính - các bác sĩ Jio thân thiện sẽ tận tình chăm sóc bạn và gia đình.</p>
              <Button className={cx("btn-booking")}>Đặt khám ngay</Button>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("care-clinics")}>
        <div className="container">
          <div className="row">
            <h2 className={cx("title")}>Danh sách phòng khám</h2>
            <ul className={cx("clinics-list")}>
              {Clinics.map((item, idx) => (
                <li key={idx} className={cx("clinics-item")}>
                  <div className={cx("clinics-item-content")}>
                    <div className={cx("clinics-item-image")}>
                      <Image />
                    </div>
                    <div className={cx("clinics-item-info")}>
                      <h4 className={cx("clinics-item-title")}>{item.title}</h4>
                    </div>
                  </div>
                  <div className={cx("clinics-item-more")}>
                    <Button btn_green className={cx("clinics-item-more-btn")}>
                      Đặt tại phòng khám
                    </Button>
                    <Button to={`/${item.to}`} btn_outline className={cx("clinics-item-more-btn")}>
                      Xem chi tiết
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
