import React from "react";
import Button from "../button/Button";
import Image from "../image/Image";
import classNames from "classnames/bind";
import styles from "./appItem.module.scss";
const cx = classNames.bind(styles);
export default function AppItem() {
  return (
    <section>
      <section className={cx("app-download")}>
        <div className="container">
          <div className="row">
            <div className={cx("app-download-main")}>
              <div className={cx("app-download-content")}>
                <h2 className={cx("app-download-content-title")}>
                  Tìm hiểu thêm về Jio Health?
                  <br />
                  Tải ứng dụng ngay!
                </h2>
                <div className={cx("app-download-links")}>
                  <Button>
                    <Image src={require("../../assets/images/app-store-vi.svg").default}></Image>
                  </Button>
                  <Button>
                    <Image src={require("../../assets/images/google-play-vi.svg").default}></Image>
                  </Button>
                </div>
              </div>
              <div className={cx("app-download-images")}>
                <Image className={cx("app-download-images-iconmess")} src={require("../../assets/images/message-icon.svg").default}></Image>
                <Image className={cx("app-download-images-doctor")} src={require("../../assets/images/doctor-get-in-touch.png")}></Image>
                <Image className={cx("app-download-images-iconphone")} src={require("../../assets/images/virtual-care-icon.svg").default}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
