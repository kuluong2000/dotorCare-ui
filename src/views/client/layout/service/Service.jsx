import React from "react";
import classNames from "classnames/bind";
import styles from "./service.module.scss";
//import fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import component
import Image from "../../common/image/Image";
import Button from "../../common/button/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Service() {
  const handleOnChangeValue = (e) => {
    const select = e.target;
    select.classList.add(`${cx("active")}`);
    if (select.options[select.selectedIndex].value === "-2") {
      select.classList.remove(`${cx("active")}`);
    }
  };

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
              <div className={cx("banner-images")}>
                <Image src={require("../../assets/images/service/doctor-list-banner-dt.svg").default} className={cx("banner-image-1")} alt="" />
                <Image src={require("../../assets/images/service/doctor-list-banner-2-dt.png")} className={cx("banner-image-2")} alt="" />
                <Image src={require("../../assets/images/service/doctor-list-banner-3-dt.svg").default} className={cx("banner-image-3")} alt="" />
              </div>
            </div>
          </div>
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
                  <select className={cx("jio-select")} onChange={handleOnChangeValue}>
                    <option value="-2" selected>
                      Tìm theo chuyên khoa
                    </option>
                    <option value="1">Thuốc gây nghiện</option>
                    <option value="2">Dị Ứng Miễn Dịch</option>
                    <option value="3">Gây Mê</option>
                    <option value="4">Điện sinh tim</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
