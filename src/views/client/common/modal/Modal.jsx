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
// import { doctor } from '../../redux/reducer/doctor';
const cx = classNames.bind(styles);
export default function Modal({ data, visible = false, onCancel }) {
  const dispatch = useDispatch();

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
    setFormData({ ...dataUser, date: moment().format('YYYY-MM-DD') });
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
      Swal.fire('vui l??ng nh???p ?????y ????? th??ng tin');
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
        date: moment(),
        // date: moment(),
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
        <h2 className={cx('heading')}>?????t kh??m b???nh</h2>
        <div className={cx('main')}>
          {/* <div className={cx("info")}>
            <Image src={require("../../assets/images/doctor/doctor1.png")} className={cx("avatar")}></Image>
            <h2 className={cx("name")}>TS.BS.Nguy???n V??n S??</h2>
          </div> */}
          <div className={cx('content')}>
            <div className={cx('content-info')}>
              <div className={cx('form')}>
                <div className={cx('form-item')}>
                  <label>H??? T??n</label>
                  <input
                    type="text"
                    placeholder="??i???n ????? h??? v?? t??n"
                    disabled
                    value={
                      `${dataUser?.lastName || ''} ${
                        dataUser?.firstName || ''
                      }` || ''
                    }
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>S??? ??i???n tho???i</label>
                  <input
                    type="number"
                    disabled
                    value={dataUser?.phone || ''}
                    placeholder="Vui l??ng nh???p s??? ??i???n tho???i"
                  />
                </div>
                <div className={cx('form-item')}>
                  <label>Email</label>
                  <input
                    type="email"
                    disabled
                    placeholder="Vui l??ng nh???p email"
                    value={dataUser?.email || ''}
                  />
                </div>
                {/* <div className={cx('form-item')}>
                  <label>Gi???i t??nh</label>
                  <select
                    disabled
                    onChange={handleOnChange}
                    name="gender"
                    value={formData?.gender || ''}
                  >
                    <option disabled selected>
                      Ch???n gi???i t??nh
                    </option>
                    <option value="Nam">Nam</option>
                    <option value="N???">N???</option>
                  </select>
                </div> */}
                <div className={cx('form-item')}>
                  <label>
                    L?? do kh??m<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="vui l??ng nh???p l?? do kh??m"
                    onChange={handleOnChange}
                    name="message"
                    value={formData?.message || ''}
                  />
                </div>
              </div>

              <div className={cx('time-booking')}>
                <div className={cx('form-item')}>
                  <label>Ch???n b??c s??</label>
                  <select
                    placeholder="Ch???n b??c s??"
                    defaultValue={'DEFAULT'}
                    onChange={(e) => {
                      setFormData({ ...formData, doctor: e.target.value });
                    }}
                  >
                    <option disabled value="DEFAULT">
                      Ch???n b??c s??
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
                    Ch???n ng??y<span className="text-danger">*</span>
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
                    Ch???n th???i gian<span className="text-danger">*</span>
                  </p>
                  {weekend !== 7 ? (
                    <div className={cx('list-btn')}>
                      {!formData?.doctor
                        ? listTime.map((el, idx) => (
                            <Button
                              key={idx}
                              className={
                                !formData?.date ||
                                (moment().format('YYYY-MM-DD') ===
                                  formData.date &&
                                  `${moment().format('HH:mm')}` >= el.hour)
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
                          ))
                        : listTime.map((el, idx) => (
                            <Button
                              key={idx}
                              className={
                                !formData?.date ||
                                moment().format('YYYY-MM-DD') === formData.date
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
                    <div>kh??ng c?? l???ch kh??m v??o th???i gian n??y</div>
                  )}
                </div>
                {/* <div className={cx('address')}>
                  <div>
                    <h4>Ph??ng kh??m kh??m</h4>
                    <p>Ph??ng kh??m ??a khoa Duy T??n</p>
                  </div>
                  <div>
                    <h4>?????a ch??? kh??m</h4>
                    <p>Nguy???n V??n linh - ???? N???ng</p>
                  </div>
                </div> */}
                <div className={cx('price')}>
                  <h3>Th??nh ti???n</h3>
                  <p>
                    Gi?? kh??m: <span>{formatPrice(data?.price || 0)}</span>
                  </p>
                </div>
              </div>
            </div>
            <Button
              btn_blue
              className={cx('btn-submit')}
              onClick={handleSubmit}
            >
              ????ng k??
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
