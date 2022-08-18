import React from "react";
import classNames from "classnames/bind";
import styles from "./footer.module.scss";

//import img
import footerLogo from "../../assets/images/logo-white.svg";
import Image from "../../common/image/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className="container">
        <div className="row">
          <div className={cx("footer-main")}>
            <div className={cx("footer-logo")}>
              <Image src={footerLogo} alt="logo"></Image>
            </div>
            <div className={cx("row footer-top")}>
              <div className={`col-lg-5  ${cx("footer-col")}`}>
                <ul className={cx("footer-list")}>
                  <li className={cx("footer-item")}>
                    <span>Hotline:</span>
                    <p>1900636893</p>
                  </li>
                  <li className={cx("footer-item")}>
                    <span>Hỗ Trợ:</span>
                    <p>support@jiohealth.com</p>
                  </li>
                  <li className={cx("footer-item")}>
                    <p>Copyright © 2017-2022 Rai and Rohl Technologies, Inc. All rights reserved</p>
                  </li>
                </ul>
              </div>
              <div className={`col-lg-2 col-md-6  ${cx("footer-col")}`}>
                <ul className={cx("footer-list")}>
                  <li className={cx("footer-item")}>
                    <span>Dịch Vụ</span>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/tham-kham-tai-nha">Hẹn Bác Sĩ, Điều Dưỡng Đến Nhà</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/nha-thuoc-jio">Nhà Thuốc Trực Tuyến Jio</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/jio-premium">Jio Premium</Link>
                  </li>
                </ul>
              </div>
              <div className={`col-lg-2 col-md-6  ${cx("footer-col")}`}>
                <ul className={cx("footer-list")}>
                  <li className={cx("footer-item")}>
                    <span>Tìm Hiểu Thêm</span>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/doi-ngu-bac-si">Đội Ngũ Bác Sĩ</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/phong-kham">Dịch Vụ Phòng Khám</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/bao-chi">Dành Cho Báo Chí</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/tuyen-dung">Vị Trí Tuyển Dụng</Link>
                  </li>
                </ul>
              </div>
              <div className={`col-lg-3 col-md-6  ${cx("footer-col")}`}>
                <ul className={cx("footer-list")}>
                  <li className={cx("footer-item")}>
                    <span>Hỗ Trợ Khách Hàng</span>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/cau-hoi-thuong-gap">Câu Hỏi Thường Gặp</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/chinh-sach-hoat-dong">Chính Sách Hoạt Động</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/lien-he">Liên Hệ</Link>
                  </li>
                  <li className={cx("footer-item")}>
                    <Link to="/giai-quyet-khieu-nai">Chính Sách Giải Quyết Khiếu Nại</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("footer-bottom")}>
              <div className="col-md-12">
                <hr className={cx("separated-line")} />
              </div>
              <div className={`col-md-12 ${cx("footer-copyright")} `}>
                "Dự án Jio Health được thiết kế dựa vào website
                <span>
                  <a href="https://jiohealth.com/" alt="jio Health" target="_blank">
                    Jio Health
                  </a>
                </span>
                by Hữu Lương"
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
