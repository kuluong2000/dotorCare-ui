import React from "react";
import classNames from "classnames/bind";
import Image from "../image/Image";
import Button from "../button/Button";
import styles from "./modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Modal({ visible = false, onCancel, onSubmit }) {
  const listBtn = document.querySelectorAll(`.${cx("list-btn")} > button`);

  listBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      listBtn.forEach((item) => item.classList.remove(`${cx("active")}`));
      const className = e.target.className;
      if (!className.includes(`${cx("active")}`)) {
        e.target.classList.add(`${cx("active")}`);
      }
    });
  });
  const classes = cx("modal", {
    visible,
  });

  return (
    <div className={classes}>
      <div className={cx("wrapper")}>
        <FontAwesomeIcon icon={faXmark} className={cx("modal-icon-close")} onClick={onCancel} />
        <h2 className={cx("heading")}>Đặt khám bệnh</h2>
        <div className={cx("main")}>
          <div className={cx("info")}>
            <Image src={require("../../assets/images/doctor/doctor1.png")} className={cx("avatar")}></Image>
            <h2 className={cx("name")}>TS.BS.Nguyễn Văn Sĩ</h2>
          </div>
          <div className={cx("content")}>
            <div className={cx("content-info")}>
              <div className={cx("form")}>
                <div className={cx("form-item")}>
                  <label>
                    Họ Tên <span>*</span>
                  </label>
                  <input type="text" placeholder="Điền đủ họ và tên" />
                </div>
                <div className={cx("form-item")}>
                  <label>
                    Số điện thoại <span>*</span>
                  </label>
                  <input type="number" placeholder="Vui lòng nhập số điện thoại" />
                </div>
                <div className={cx("form-item")}>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="email" placeholder="Vui lòng nhập email" />
                </div>
                <div className={cx("form-item")}>
                  <label>
                    Giới tính <span>*</span>
                  </label>
                  <select defaultValue={"0"}>
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </div>
                <div className={cx("form-item")}>
                  <label>
                    Tin nhắn <span>*</span>
                  </label>
                  <input type="text" placeholder="vui lòng nhập lý do khám" />
                </div>
              </div>
              <div className={cx("time-booking")}>
                <div className={cx("day-choose")}>
                  <label htmlFor="">Chọn ngày</label>
                  <select name="" id="">
                    <option value="">31/8/2022</option>
                    <option value="">1/9/2022</option>
                    <option value="">2/9/2022</option>
                  </select>
                </div>
                <div className={cx("time")}>
                  <p> Chọn thời gian</p>

                  <div className={cx("list-btn")}>
                    <Button>8:00 - 8:30</Button>
                    <Button>8:30 - 9:00</Button>
                    <Button>9:00 - 9:30</Button>
                    <Button>9:30 - 10:00</Button>
                    <Button>10:00 - 10:30</Button>
                    <Button>10:30 - 11:00</Button>
                    <Button>1:30 - 2:00</Button>
                    <Button>2:00 - 2:30</Button>
                    <Button>2:30 - 3:00</Button>
                    <Button>3:00 - 3:30</Button>
                    <Button>3:30 - 4:00</Button>
                  </div>
                </div>
                <div className={cx("address")}>
                  <div>
                    <h4>Phòng khám khám</h4>
                    <p>Phòng khám Đa khoa Duy Tân</p>
                  </div>
                  <div>
                    <h4>Địa chỉ khám</h4>
                    <p>Nguyễn Văn linh - Đà Nẵng</p>
                  </div>
                </div>
                <div className={cx("price")}>
                  <h3>Thành tiền</h3>
                  <p>
                    Giá khám: <span>1.000.000đ</span>
                  </p>
                </div>
              </div>
            </div>
            <Button btn_blue className={cx("btn-submit")} onClick={onSubmit}>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
