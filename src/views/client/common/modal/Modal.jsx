import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import Image from '../image/Image';
import Button from '../button/Button';
import { formatPrice } from './../../utils/numberFomat';

import styles from './modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { userBooking } from '../../redux/actions';
import Swal from 'sweetalert2';
import { DatePicker, Space } from 'antd';

const cx = classNames.bind(styles);
export default function Modal({ data, visible = false, onCancel }) {
  const dispatch = useDispatch();
  const dateFormat = 'DD/MM/YYYY';
  const { dataUser, patient } = useSelector((state) => state.authentication);
  const [formData, setFormData] = useState({
    gender: '',
    message: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    setFormData({ ...dataUser, date: moment().format('DD/MM/YYYY') });
  }, [dataUser]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const listBtn = document.querySelectorAll(`.${cx('list-btn')} > button`);

  listBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      listBtn.forEach((item) => item.classList.remove(`${cx('active')}`));
      const className = e.target.className;

      if (!className.includes(`${cx('active')}`)) {
        e.target.classList.add(`${cx('active')}`);
      }
    });
  });

  const classes = cx('modal', {
    visible,
  });

  //handle submit

  const handleSubmit = () => {
    if (!formData?.date || !formData?.time) {
      alert('vui lòng nhập đầy đủ thông tin');
    } else {
      dispatch(
        userBooking({
          ...formData,
          patient: patient,
          price: data?.price,
          department: data?._id,
        })
      );
      onCancel();
    }
  };
  const listTime = [
    {
      hour: '8:00',
    },
    {
      hour: '8:30',
    },
    {
      hour: '9:00',
    },
    {
      hour: '9:30',
    },
    {
      hour: '10:00',
    },
    {
      hour: '10:30',
    },
    {
      hour: '11:00',
    },
    {
      hour: '1:30',
    },
    {
      hour: '2:00',
    },
    {
      hour: '2:30',
    },
    {
      hour: '3:00',
    },
    {
      hour: '3:30',
    },
    {
      hour: '4:00',
    },
    {
      hour: '4:30',
    },
    {
      hour: '5:00',
    },
  ];
  return (
    <div className={classes}>
      <div className={cx('wrapper')}>
        <FontAwesomeIcon
          icon={faXmark}
          className={cx('modal-icon-close')}
          onClick={onCancel}
        />
        <h2 className={cx('heading')}>Đặt khám bệnh</h2>
        <div className={cx('main')}>
          {/* <div className={cx("info")}>
            <Image src={require("../../assets/images/doctor/doctor1.png")} className={cx("avatar")}></Image>
            <h2 className={cx("name")}>TS.BS.Nguyễn Văn Sĩ</h2>
          </div> */}
          <div className={cx('content')}>
            <div className={cx('content-info')}>
              <div className={cx('form')}>
                <div className={cx('form-item')}>
                  <label>
                    Họ Tên <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Điền đủ họ và tên"
                    disabled
                    value={
                      `${dataUser?.lastName || ''} ${
                        dataUser?.firstName || ''
                      }` || ''
                    }
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>
                    Số điện thoại <span>*</span>
                  </label>
                  <input
                    type="number"
                    disabled
                    value={dataUser?.phone || ''}
                    placeholder="Vui lòng nhập số điện thoại"
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    disabled
                    placeholder="Vui lòng nhập email"
                    value={dataUser?.email || ''}
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>
                    Giới tính <span>*</span>
                  </label>
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
                <div className={cx('form-item')}>
                  <label>
                    Lý do <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="vui lòng nhập lý do khám"
                    onChange={handleOnChange}
                    name="message"
                    value={formData?.message || ''}
                  />
                </div>
              </div>
              <div className={cx('time-booking')}>
                <div className={cx('day-choose')}>
                  <Space direction="vertical">
                    <DatePicker
                      format={dateFormat}
                      defaultValue={moment()}
                      name="date"
                      onChange={(e, dateString) =>
                        setFormData({ ...formData, date: dateString })
                      }
                      disabledDate={(current) => {
                        let customDate = moment().format('DD/MM/YYYY');
                        return (
                          current && current < moment(customDate, 'DD/MM/YYYY')
                        );
                      }}
                    />
                  </Space>
                  {/* <label htmlFor="">Chọn ngày</label>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  >
                    <option value="31/8/2022">31/8/2022</option>
                    <option value="1/9/2022">1/9/2022</option>
                    <option value="2/9/2022">2/9/2022</option>
                  </select> */}
                </div>
                <div className={cx('time')}>
                  <p> Chọn thời gian</p>
                  <div className={cx('list-btn')}>
                    {listTime.map((el, idx) => (
                      <Button
                        key={idx}
                        onClick={(e) =>
                          setFormData({ ...formData, time: e.target.innerHTML })
                        }
                      >
                        {el.hour}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* <div className={cx('address')}>
                  <div>
                    <h4>Phòng khám khám</h4>
                    <p>Phòng khám Đa khoa Duy Tân</p>
                  </div>
                  <div>
                    <h4>Địa chỉ khám</h4>
                    <p>Nguyễn Văn linh - Đà Nẵng</p>
                  </div>
                </div> */}
                <div className={cx('price')}>
                  <h3>Thành tiền</h3>
                  <p>
                    Giá khám: <span>{formatPrice(data?.price || 0)}</span>
                  </p>
                </div>
              </div>
            </div>
            <Button
              btn_blue
              className={cx('btn-submit')}
              onClick={handleSubmit}
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
