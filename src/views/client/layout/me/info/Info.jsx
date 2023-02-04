import React, { useEffect, useState } from 'react';
import './info.scss';
import Image from './../../../common/image/Image';
import Button from '../../../common/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BASE_URL from '../../../utils/configUrl';
import { useParams } from 'react-router-dom';
import { UpdateMe } from '../../../redux/actions';
export default function Info() {
  const { dataUser } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    birthday: '',
  });

  useEffect(() => {
    if (dataUser) {
      setFormData(dataUser);
    }
  }, [dataUser]);

  const [file, setFile] = useState(null);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (file) {
      const formDataFile = new FormData();
      formDataFile.append('image', file);
      try {
        const fileImage = await axios.post(
          `${BASE_URL}/api/upload`,
          formDataFile
        );
        return dispatch(
          UpdateMe(dataUser._id, { ...formData, image: fileImage.data.data })
        );
      } catch (error) {
        alert('Cập nhật không thành công');
        // update profile khong thanh cong
      }
    }
    dispatch(UpdateMe(dataUser._id, formData));
  };
  return (
    <div className="form-group">
      <div className="col-12 col-md-6">
        <div className="form-item d-block w-100">
          <label htmlFor="">Họ</label>
          <input
            type="text"
            name="lastName"
            onChange={handleOnChange}
            value={formData?.lastName || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item d-block w-100">
          <label htmlFor="">Tên</label>
          <input
            type="text"
            name="firstName"
            onChange={handleOnChange}
            value={formData?.firstName || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={formData?.email || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Số điện thoại</label>
          <input
            type="number"
            name="phone"
            onChange={handleOnChange}
            value={formData?.phone || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Giới tính</label>
          <select
            onChange={handleOnChange}
            name="gender"
            value={formData?.gender || ''}
          >
            <option>Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Địa chỉ</label>
          <input
            type="text"
            name="address"
            onChange={handleOnChange}
            value={formData?.address || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <label htmlFor="">Ngày sinh</label>
          <input
            type="date"
            name="birthday"
            onChange={handleOnChange}
            value={formData?.birthday || ''}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item form-photo-upload">
          <Image
            src={
              file
                ? URL.createObjectURL(file)
                : formData?.image && `${BASE_URL}/${formData?.image}`
            }
            className="form-user-photo"
          ></Image>
          <input
            className="form-upload"
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            accept="image/*"
          />
          <label htmlFor="photo">Chọn hình ảnh</label>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-item">
          <Button btn_blue onClick={handleSubmit}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
}
