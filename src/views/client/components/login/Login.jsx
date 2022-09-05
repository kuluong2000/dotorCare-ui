import React from "react";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import Button from "../../common/button/Button";
import Image from "../../common/image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faMobileScreen, faUnlock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { forwardRef } from "react";
const cx = classNames.bind(styles);

const Login = forwardRef(({ visible = false, onCancel }, ref) => {
  const handleOpenRegister = () => {
    const registerForm = document.querySelector(`.${cx("form-register")}`);
    console.log(registerForm);
    registerForm.style = `
    transform:translateX(0);
    z-index: 10000;
    `;
  };
  const handleCloseRegister = () => {
    const registerForm = document.querySelector(`.${cx("form-register")}`);
    registerForm.style = `transform:translateX(100%)`;
  };
  const classes = cx("wrapper", {
    visible,
  });
  return (
    <div ref={ref} className={classes}>
      <div className={cx("main")}>
        <div className={cx("form-login")}>
          <Button className={cx("btn-close")} onClick={onCancel}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <div className={cx("image")}>
            <Image src={require("../../assets/images/image-login.png")}></Image>
          </div>
          <h2 className={cx("title")}>Wellcome back!</h2>
          <p className={cx("desc")}>Login to your existant account</p>
          <div className={cx("content")}>
            <div className="form-group">
              <div className={cx("form-input")}>
                <input type="text" placeholder="Vui lòng nhập email" />
                <FontAwesomeIcon icon={faEnvelope} className={cx("form-input-icon")} />
              </div>
              <div className={cx("form-input")}>
                <input type="password" placeholder="Vui lòng nhập mật khẩu" />
                <FontAwesomeIcon icon={faUnlock} className={cx("form-input-icon")} />
              </div>
              <p className={cx("forgotPassword")}>Quên mật khẩu</p>
              <Button btn_blue className={cx("btn-submit")}>
                Đăng nhập
              </Button>
            </div>
            <div className={cx("social")}>
              <p> or connect using</p>
              <Button className={cx("btn-face")}>
                <FontAwesomeIcon icon={faFacebookF} className={cx("btn-face-icon")} /> Facebook
              </Button>
              <Button className={cx("btn-google")}>
                <FontAwesomeIcon icon={faGoogle} className={cx("btn-google-icon")} /> Google
              </Button>
            </div>
            <p className={cx("question")}>
              Bạn chưa có tài khoảng? <Button onClick={handleOpenRegister}>Đăng ký ngay</Button>
            </p>
          </div>
        </div>
        <div className={cx("form-register")}>
          <Button className={cx("btn-close")} onClick={onCancel}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <Button className={cx("btn-back")} onClick={handleCloseRegister}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <h2 className={cx("title")}>Let's Get Started!</h2>
          <p className={cx("desc")}>Create an account to Jio Health to get all features</p>
          <div className={cx("content")}>
            <div className="form-group">
              <div className={cx("form-input")}>
                <input type="text" placeholder="Họ và Tên" />
                <FontAwesomeIcon icon={faUser} className={cx("form-input-icon")} />
              </div>
              <div className={cx("form-input")}>
                <input type="text" placeholder="Email" />
                <FontAwesomeIcon icon={faEnvelope} className={cx("form-input-icon")} />
              </div>
              <div className={cx("form-input")}>
                <input type="number" placeholder="Số điện thoại" />
                <FontAwesomeIcon icon={faMobileScreen} className={cx("form-input-icon")} />
              </div>
              <div className={cx("form-input")}>
                <input type="password" placeholder="Mật khẩu" />
                <FontAwesomeIcon icon={faUnlock} className={cx("form-input-icon")} />
              </div>
              <div className={cx("form-input")}>
                <input type="password" placeholder="Nhập lại mật khẩu" />
                <FontAwesomeIcon icon={faUnlock} className={cx("form-input-icon")} />
              </div>
              <Button btn_blue className={cx("btn-submit")}>
                Đăng ký
              </Button>
              <p className={cx("question")}>
                Bạn đã có tài? <Button onClick={handleCloseRegister}>Đăng nhập ngay</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Login;
