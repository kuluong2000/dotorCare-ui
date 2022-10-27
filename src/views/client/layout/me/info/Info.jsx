import React from "react";
import "./info.scss";
import Image from "./../../../common/image/Image";
import Button from "../../../common/button/Button";
export default function Info() {
  return (
    <div className="form-group">
      <div className="col-12 col-md-6">
        <div className="form-item d-block w-100">
          <label htmlFor="">Họ</label>
          <input type="text" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item d-block w-100">
          <label htmlFor="">Tên</label>
          <input type="text" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Số điện thoại</label>
          <input type="number" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Giới tính</label>
          <select>
            <option value="">Chọn giới tính</option>
            <option>Nam</option>
            <option>Nữ</option>
          </select>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Địa chỉ</label>
          <input type="text" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Ngày sinh</label>
          <input type="date" />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item form-photo-upload">
          <Image className="form-user-photo"></Image>
          <input className="form-upload" type="file" id="photo" name="photo" accept="image/*" />
          <label htmlFor="photo">Chọn hình ảnh</label>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <Button btn_blue>Lưu thay đổi</Button>
        </div>
      </div>
    </div>
  );
}
