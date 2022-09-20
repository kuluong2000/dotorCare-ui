import React from "react";
import classNames from "classnames/bind";
import styles from "./service.module.scss";

import Button from "../../common/button/Button";
import Image from "../../common/image/Image";

//import image
import generalCare from "../../assets/images/service/general_care.png";
import pediatrics from "../../assets/images/service/pediatrics.png";
import vaccineConsultation from "../../assets/images/service/vaccine_consultation.png";
import maternity from "../../assets/images/service/maternity.png";
import gynecology from "../../assets/images/service/gynecology.png";
import dentistry from "../../assets/images/service/dentistry.png";

const cx = classNames.bind(styles);
export default function Service() {
  const serviceList = [
    {
      title: "khám tổng quát",
      desc: "Giá tư vấn chỉ từ",
      price: "400.000",
      image: generalCare,
      to: "kham-tong-quat",
    },
    {
      title: "Nhi khoa",
      desc: "Giá tư vấn chỉ từ",
      price: "500.000",
      image: pediatrics,
      to: "nhi-khoa",
    },
    {
      title: "Chủng ngừa",
      desc: "Giá tư vấn chỉ từ",
      price: "400.000",
      image: vaccineConsultation,
      to: "chung-ngua",
    },

    {
      title: "Sản phụ khoa",
      desc: "Giá tư vấn chỉ từ",
      price: "500.000",
      image: maternity,
      to: "san-phu-khoa",
    },
    {
      title: "Sức khỏe phụ nữ",
      desc: "Giá tư vấn chỉ từ",
      price: "500.000",
      image: gynecology,
      to: "suc-khoe-phu-nu",
    },
    {
      title: "Nha khoa",
      desc: "Giá tư vấn chỉ từ",
      price: "400.000",
      image: dentistry,
      to: "nha-khoa",
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
      <section className={cx("care-service")}>
        <div className="container">
          <div className="row">
            <h2 className={cx("title")}>Dịch vụ phòng khám</h2>
            <ul className={cx("service-list")}>
              {serviceList.map((item, idx) => (
                <li key={idx} className={cx("service-item")}>
                  <div className={cx("service-item-content")}>
                    <div className={cx("service-item-image")}>
                      <Image src={item.image} />
                    </div>
                    <div className={cx("service-item-info")}>
                      <h4 className={cx("service-item-title")}>{item.title}</h4>
                      <p className={cx("service-item-desc")}>{item.desc}</p>
                      <div className={cx("service-item-price")}> {item.price}đ</div>
                    </div>
                  </div>
                  <div className={cx("service-item-more")}>
                    <Button to={`/dich-vu/${item.to}`} btn_green className={cx("service-item-more-btn")}>
                      Đặt tại phòng khám
                    </Button>
                    <Button to={`/dich-vu/${item.to}`} btn_outline className={cx("service-item-more-btn")}>
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
