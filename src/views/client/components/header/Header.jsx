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
import homeIcon from "../../assets/images/home-icon.svg";
import serviceIcon from "../../assets/images/care-service-icon.svg";
import pharmacyIcon from "../../assets/images/pharmacy-icon.svg";
import healthPlanIcon from "../../assets/images/health-plans-icon.svg";
import doctorIcon from "../../assets/images/doctor-icon.svg";
import blogIcon from "../../assets/images/blog-icon.svg";

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
      icon: homeIcon,
    },
    {
      name: "Các dịch Vụ",
      to: "/dichvu",
      icon: serviceIcon,
    },

    {
      name: "Nhà Thuốc Jio",
      to: "/dichvu",
      icon: pharmacyIcon,
    },
    {
      name: "Gói Chăm Sóc",
      to: "/dichvu",
      icon: healthPlanIcon,
    },
    {
      name: "Đội Ngũ Bác Sĩ",
      to: "/dichvu",
      icon: doctorIcon,
    },
    {
      name: "Tin Tức",
      to: "/dichvu",
      icon: blogIcon,
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

  //toggle menu
  const handleOpenMenu = () => {
    const nav = document.querySelector(`.${cx("header-nav")} `);
    const toggleMenu = document.querySelector(`.${cx("toggle-menu")} `);
    const navItem = document.querySelector(`.${cx("header-items")}`);
    nav.classList.add(`${cx("active")}`);
    navItem.classList.add(`${cx("active")}`);
    toggleMenu.classList.add(`${cx("close")}`);
    document.body.style = `overflow: hidden;`;
  };
  const handleCloseMenu = () => {
    const nav = document.querySelector(`.${cx("header-nav")} `);
    const toggleMenu = document.querySelector(`.${cx("toggle-menu")} `);
    const navItem = document.querySelector(`.${cx("header-items")}`);
    nav.classList.remove(`${cx("active")}`);
    navItem.classList.remove(`${cx("active")}`);
    toggleMenu.classList.remove(`${cx("close")}`);
    document.body.style = `overflow: overlay;`;
  };
  window.addEventListener("scroll", () => {
    const header = document.querySelector(`.${cx("header")}`);
    console.log(window.scrollY);
    if (window.scrollY > 68) {
      header.classList.add(`${cx("sticky")}`);
    } else {
      header.classList.remove(`${cx("sticky")}`);
    }
  });
  return (
    <header className={cx("header")}>
      <div className="container">
        <div className="row">
          <div className={cx("header-main")}>
            <div className={cx("header-logo")}>
              <Image src={Logo} alt="logo"></Image>
            </div>
            <div className={cx("toggle-menu")} onClick={handleOpenMenu}>
              <span className={cx("sub-title")}>Trang chủ</span>
              <div className={cx("sub-menu")}>
                <div className={cx("line1")}></div>
                <div className={cx("line2")}></div>
                <div className={cx("line3")}></div>
              </div>
            </div>
            <nav className={cx("header-nav")}>
              <ul className={cx("header-items")}>
                {Menu.map((item, idx) => (
                  <li className={cx("header-item")} key={idx}>
                    <Link to={item.to}>
                      <span>
                        <Image src={item.icon} className={cx("header-item-icon")}></Image>
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={cx("sub-menu")} onClick={handleCloseMenu}>
                <div className={cx("line1")}></div>
                <div className={cx("line2")}></div>
                <div className={cx("line3")}></div>
              </div>
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
