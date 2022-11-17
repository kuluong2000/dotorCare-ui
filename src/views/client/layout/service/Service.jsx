import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './service.module.scss';

import Button from '../../common/button/Button';
import Image from '../../common/image/Image';
import axios from 'axios';

import BASE_URL from '../../utils/configUrl';
const cx = classNames.bind(styles);
export default function Service() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/admin/department`).then((res) => {
      if (res.status === 200) {
        setClinics(res.data.data);
      }
    });
  }, []);

  return (
    <>
      <section className={cx('banner')}>
        <div className="container">
          <div className="row">
            <div className={cx('bg-push-large')}></div>
            <div className={cx('bg-right')}></div>
            <div className={cx('ball-wrapper')}>
              <div className={cx(['ball', 'small'])}></div>
              <div className={cx(['ball', 'medium'])}></div>
              <div className={cx(['ball', 'large'])}></div>
            </div>
            <div className={cx('content')}>
              <h1 className={cx('heading')}>
                Bạn thấy không khỏe? <br /> Hãy để Jio Health chăm sóc cho bạn !
              </h1>
              <p className={cx('description')}>
                Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ
                cảm mạo thông thường đến các bệnh mạn tính - các bác sĩ Jio thân
                thiện sẽ tận tình chăm sóc bạn và gia đình.
              </p>
              {/* <Button className={cx("btn-booking")}>Đặt khám ngay</Button> */}
            </div>
          </div>
        </div>
      </section>
      <section className={cx('care-service')}>
        <div className="container">
          <div className="row">
            <h2 className={cx('title')}>Dịch vụ phòng khám</h2>
            <ul className={cx('service-list')}>
              {clinics.map((item, idx) => (
                <li key={idx} className={cx('service-item')}>
                  <div className={cx('service-item-content')}>
                    <div className={cx('service-item-image')}>
                      <Image
                        src={
                          item.image
                            ? `http://127.0.0.1:3030/${item.image}`
                            : ''
                        }
                      />
                    </div>
                    <div className={cx('service-item-info')}>
                      <h4 className={cx('service-item-title')}>
                        {item.nameDepartment}
                      </h4>
                      <p className={cx('service-item-desc')}>
                        giá tư vấn chỉ từ
                      </p>
                      <div className={cx('service-item-price')}>
                        {' '}
                        {item.price.toLocaleString('vi-vn', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={cx('service-item-more')}>
                    <Button
                      to={`/dich-vu/${item.slugs}`}
                      btn_green
                      className={cx('service-item-more-btn')}
                    >
                      Đặt tại phòng khám
                    </Button>
                    <Button
                      to={`/dich-vu/${item.slugs}`}
                      btn_outline
                      className={cx('service-item-more-btn')}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
