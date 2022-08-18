import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";

//import Comp
import Image from "../../common/image/Image";
import Button from "../../common/button/Button";
//import image
import Logo from "../../assets/images/logo.svg";
import ViIcon from "../../assets/images/vi.png";
import EnIcon from "../../assets/images/en.png";

//import icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function Header() {
  const dropdownMenuRef = useRef();
  const Menu = [
    {
      name: "Trang Chủ",
      to: "/",
    },
    {
      name: "Các dịch Vụ",
      to: "/dichvu",
    },

    {
      name: "Nhà Thuốc Jio",
      to: "/dichvu",
    },
    {
      name: "Gói Chăm Sóc",
      to: "/dichvu",
    },
    {
      name: "Đội Ngũ Bác Sĩ",
      to: "/dichvu",
    },
    {
      name: "Tin Tức",
      to: "/dichvu",
    },
  ];
  const Language = [
    {
      name: "Vi",
      title: "Tiếng Việt",
      icon: ViIcon,
    },
    {
      name: "En",
      title: "Tiếng Anh",
      icon: EnIcon,
    },
  ];

  const handleClickShowLanguage = (e) => {
    const dropdownMenu = dropdownMenuRef.current;
    dropdownMenu.classList.toggle(cx("open"));
  };
  return (
    <header className={cx("header")}>
      <div className="container">
        <div className="row">
          <div className={cx("header-main")}>
            <div className={cx("header-logo")}>
              <Image src={Logo} alt="logo"></Image>
            </div>
            <nav className={cx("header-nav")}>
              <ul className={cx("header-items")}>
                {Menu.map((item, idx) => (
                  <li className={cx("header-item")} key={idx}>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={cx("multi-language")} onClick={handleClickShowLanguage}>
              <div href="#" className={cx("dropdown-toggle")}>
                <img src={ViIcon} alt="Viet Nam" />
                <span>Vi</span>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </div>
              <div ref={dropdownMenuRef} className={cx("dropdown-menu")}>
                {Language.map((item, idx) => (
                  <p key={idx}>
                    <Image src={item.icon}></Image>
                    <span>{item.title}</span>
                  </p>
                ))}
              </div>
            </div>
            <ul className={cx("app-list")}>
              <li className={cx("app-item")}>
                <Button btn_blue>Đặt Hẹn Khám Ngay</Button>
              </li>
              <li className={cx("app-item")}>
                <Button btn_green>Tải Ứng Dụng Ngay</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
