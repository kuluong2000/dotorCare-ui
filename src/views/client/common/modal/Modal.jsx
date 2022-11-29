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
import { userBooking, getAllDoctorOfDepartment } from '../../redux/actions';
import Swal from 'sweetalert2';
import { DatePicker, Select, Space } from 'antd';
import { doctor } from '../../redux/reducer/doctor';
const cx = classNames.bind(styles);
export default function Modal({ data, visible = false, onCancel }) {
  const dispatch = useDispatch();
  const dateFormat = 'DD/MM/YYYY';
  const { dataUser, patient } = useSelector((state) => state.authentication);
  const { doctorOfDepartment } = useSelector((state) => state.doctor);
  const [weekend, setWeekend] = useState('');
  const [formData, setFormData] = useState({
    gender: '',
    message: '',
    date: '',
    time: '',
  });
  useEffect(() => {
    setFormData({ ...dataUser, date: moment().format('DD/MM/YYYY') });
  }, [dataUser]);
  useEffect(() => {
    if (data._id) {
      dispatch(getAllDoctorOfDepartment(data?._id));
    }
  }, [data._id]);

  const handleOnChangeDate = (date, dateString) => {
    setWeekend(date?.isoWeekday());
    setFormData({ ...formData, date: dateString });
  };
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
    if (!formData?.date || !formData?.time || !formData?.message) {
      alert('vui lòng nhập đầy đủ thông tin');
    } else {
      dispatch(
        userBooking({
          ...formData,
          date: moment(new Date(formData.date)).toISOString(),
          patient: patient,
          price: data?.price,
          department: data?._id,
        })
      );
      const listBtn = document.querySelectorAll(`.${cx('list-btn')} > button`);
      listBtn.forEach((item) => item.classList.remove(`${cx('active')}`));
      onCancel();
      setFormData({
        ...formData,
        message: '',
        date: moment().format(),
      });
    }
  };
  const listTime = [
    {
      hour: '08:00',
    },
    {
      hour: '08:30',
    },
    {
      hour: '09:00',
    },
    {
      hour: '09:30',
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
      hour: '13:30',
    },
    {
      hour: '14:00',
    },
    {
      hour: '14:30',
    },
    {
      hour: '15:00',
    },
    {
      hour: '15:30',
    },
    {
      hour: '16:00',
    },
    {
      hour: '16:30',
    },
    {
      hour: '17:00',
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
                  <label>Họ Tên</label>
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
                  <label>Số điện thoại</label>
                  <input
                    type="number"
                    disabled
                    value={dataUser?.phone || ''}
                    placeholder="Vui lòng nhập số điện thoại"
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>Email</label>
                  <input
                    type="email"
                    disabled
                    placeholder="Vui lòng nhập email"
                    value={dataUser?.email || ''}
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>Giới tính</label>
                  <select
                    disabled
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
                    Lý do khám<span className="text-danger">*</span>
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
                <div className={cx('form-item')}>
                  <label>Chọn bác sĩ</label>
                  <select
                    placeholder="Chọn bác sĩ"
                    onChange={(e) => {
                      setFormData({ ...formData, doctor: e.target.value });
                    }}
                  >
                    <option disabled selected defaultValue>
                      Chọn bác sĩ
                    </option>
                    {doctorOfDepartment &&
                      doctorOfDepartment.map((doc, idx) => (
                        <option key={idx} value={doc?._id || ''}>
                          {`${doc?.account?.people?.lastName} ${doc?.account?.people?.firstName}`}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={cx('day-choose')}>
                  <label>
                    Chọn ngày<span className="text-danger">*</span>
                  </label>
                  <Space direction="vertical">
                    <DatePicker
                      // format={dateFormat}
                      defaultValue={moment()}
                      name="date"
                      onChange={handleOnChangeDate}
                      disabledDate={(current) => {
                        let customDate = moment().format('DD-MM-YYYY');
                        return (
                          current && current < moment(customDate, 'DD-MM-YYYY')
                        );
                      }}
                    />
                  </Space>
                </div>
                <div className={cx('time')}>
                  <p>
                    Chọn thời gian<span className="text-danger">*</span>
                  </p>
                  {weekend !== 7 ? (
                    <div className={cx('list-btn')}>
                      {listTime.map((el, idx) => (
                        <Button
                          key={idx}
                          className={
                            !formData?.date ||
                            (moment().format('DD/MM/YYYY') === formData.date &&
                              `${moment().hour()}:${moment().minute()}` >=
                                el.hour)
                              ? cx('disable')
                              : ''
                          }
                          onClick={(e) =>
                            setFormData({
                              ...formData,
                              time: e.target.innerHTML,
                            })
                          }
                        >
                          {el.hour}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div>không có lịch khám vào thời gian này</div>
                  )}
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
