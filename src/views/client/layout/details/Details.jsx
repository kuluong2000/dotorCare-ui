import React from "react";
import classNames from "classnames/bind";
import styles from "./details.module.scss";
import Button from "../../common/button/Button";
import Image from "../../common/image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Details() {
  return (
    <>
      <section className={cx("banner-care")}>
        <div className="container">
          <div className="row">
            <div className={cx("banner-care-images")}>
              <div className={cx("banner-care-images-bg")}></div>
              <div className={cx("banner-care-images-circle-1")}></div>
              <div className={cx("banner-care-images-circle-2")}></div>
              <div className={cx("banner-care-images-person")}>
                <Image src={require("../../assets/images/details/eye_care.png")}></Image>
              </div>
            </div>
            <div className={cx("banner-care-inner")}>
              <h1 className={cx("heading")}>Nhãn Khoa</h1>
              <p className={cx("description")}>Tầm soát các bệnh về mắt và kê toa với một số bệnh lý thường gặp. </p>
              <div className={cx("price-group")}>
                <div className={cx("price-inside")}>
                  <p className={cx("price-title")}>Giá tư vấn chỉ từ</p>
                  <h2 className={cx("price")}>500.000đ</h2>
                </div>
                <div className={cx("price-outside")}>
                  <Button to={`/dich-vu/dat-hen-kham`} btn_blue className={cx("price-outside-btn")}>
                    Đặt hẹn khám
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("section-care-info")}>
        <div className="container">
          <div className="row">
            <h2 className={cx("title")}>Các bệnh lý về mắt sẽ được bác sĩ của Jio Health tầm soát - điều trị</h2>
            <div className={cx("content")}>
              <ul className={cx("section-care-info-list")}>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Thị lực</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Thị trường</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Kê toa kính</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Nhược thị</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Lác</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Mù màu</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Glô-côm (cườm nước)</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Thoái hóa hoàng điểm</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Bệnh võng mạc tiêu đường</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Bệnh võng mạc tăng huyết áp</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Đục thủy tinh thể</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Đau mắt đỏ</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Khô mắt</p>
                </li>
                <li className={cx("section-care-info-item")}>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Đau mắt hột</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
