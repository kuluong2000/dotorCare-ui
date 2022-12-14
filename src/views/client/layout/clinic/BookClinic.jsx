import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import axios from 'axios';
import Image from '../../common/image/Image';
import Button from '../../common/button/Button';
import Modal from '../../common/modal/Modal';
import Slider from 'react-slick';
import styles from './bookClinic.module.scss';
import './custom-slick.scss';
import { useSelector } from 'react-redux';
import BASE_URL from '../../utils/configUrl';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
export default function BookClinic() {
  const { doctor } = useSelector((state) => state.doctor);
  const { nickname } = useParams();
  console.log(nickname);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/admin/doctor/${nickname}`)
      .then((res) => {
        if (res.status === 200) {
          return setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [nickname]);

  console.log(data);
  const relatedDocor = {
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'related-doctor-list-slider',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // variableWidth: true,
    // swipeToSlide: true,
  };

  document.addEventListener('click', (e) => {
    const item = document.querySelectorAll(`.${cx('related-doctor-item')}`);
    item.forEach((el) => {
      const doctorInner = el.getElementsByClassName(
        `${cx('related-doctor-info-inner')}`
      );
      const doctorBtn = el.getElementsByClassName(
        `${cx('related-doctor-more-btn')}`
      );

      if (!doctorBtn[0].contains(e.target)) {
        doctorInner[0].classList.remove(`${cx('active')}`);
      }
    });
  });
  const handleClickShowRelatedDoctorInner = (e) => {
    const parent = e.target.parentNode.parentElement;
    const children = parent.getElementsByClassName(
      `${cx('related-doctor-info-inner')}`
    );
    console.log(children[0]);
    // const doctorInner = parent.querySelector(`.${cx("related-doctor-info-inner")}`);
    // console.log(doctorInner);
    children[0].classList.add(`${cx('active')}`);
  };
  const handleClickOpenModal = () => {
    setIsVisible(true);
    document.body.style = `overflow: hidden;`;
  };
  const handleCancelModal = () => {
    setIsVisible(false);
    document.body.style = `overflow: overlay;`;
  };

  return (
    <main>
      {/* <Modal visible={isVisible} onCancel={handleCancelModal}></Modal> */}
      <section className={cx('banner')}>
        <div className={cx('banner-bg')}>
          <Image
            className={cx('banner-bg-1')}
            src={
              require('../../assets/images/clinic/dr-profile-banner-dt.svg')
                .default
            }
          ></Image>
          <Image
            className={cx('banner-bg-2')}
            src={
              require('../../assets/images/clinic/dr-profile-banner-dt-2.svg')
                .default
            }
          ></Image>
        </div>
        <div className="container">
          <div className="row">
            <div className={cx('banner-main')}>
              <div className={cx('info')}>
                <h1 className={cx('heading')}>
                  BS.{data?.account?.people?.lastName}{' '}
                  {data?.account?.people?.firstName}
                </h1>
                <p className={cx('description')}>{data?.description}</p>
              </div>
              <div className={cx('avatar')}>
                <Image
                  src={`${BASE_URL}/${data?.account?.people?.image}`}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('banner-bg-bottom')}>
          <Image
            src={
              require('../../assets/images/clinic/dr-profile-banner-dt-3.svg')
                .default
            }
          ></Image>
        </div>
      </section>
      <section className={cx('exp-blog')}>
        <div className="container">
          <div className="row">
            <div className={cx('exp-main')}>
              <h2 className={cx('title')}>H???c v???n v?? kinh nghi???m</h2>
              <div className={cx('exp-content')}>
                <h3>
                  B??c s?? {data?.account?.people?.lastName}{' '}
                  {data?.account?.people?.firstName} chuy??n ??i???u tr???:
                </h3>
                <p>
                  B???nh l?? {data?.position?.namePosition} t???i chuy??n khoa{' '}
                  {data?.department?.nameDepartment}
                </p>

                <ul className={cx('exp-list')}>
                  <li className={cx('exp-item')}>
                    <span className={cx('exp-item-icon')}>
                      <Image
                        // src={
                        //   require('../../assets/images/clinic/clinical_experience-icon.svg')
                        //     .default
                        // }
                        src={`${BASE_URL}/${data?.account?.people?.image}`}
                      ></Image>
                    </span>
                    <div className={cx('exp-item-content')}>
                      <h4 className={cx('exp-item-title')}>
                        H???c v???n v?? Qu?? tr??nh c??ng t??c
                      </h4>
                      <p className={cx('exp-item-info')}>
                        <span>T???ng h???c t???i:</span>
                        {data?.education}
                      </p>
                      <p className={cx('exp-item-info')}>
                        <span>????n v??? c??ng t??c c??:</span>
                        {data?.oldWork}
                      </p>
                      <p className={cx('exp-item-info')}>
                        <span>N??i l??m vi???c hi???n t???i:</span>
                        ph??ng kh??m ??a khoa Jio Health
                      </p>
                    </div>
                  </li>
                  {/* <li className={cx('exp-item')}>
                    <span className={cx('exp-item-icon')}>
                      <Image
                        src={
                          require('../../assets/images/clinic/training-icon.svg')
                            .default
                        }
                      ></Image>
                    </span>
                    <div className={cx('exp-item-content')}>
                      <h4 className={cx('exp-item-title')}>????o t???o</h4>
                      <p className={cx('exp-item-info')}>
                        <span>2008 - 2011:</span>
                        B??c s?? N???i tr??, B??c s?? Chuy??n khoa I chuy??n ng??nh N???i
                        t???ng qu??t, ?????i H???c Y D?????c TP.HCM.
                      </p>
                      <p className={cx('exp-item-info')}>
                        <span>2002 - 2008: </span>
                        B??c s?? ??a khoa, ?????i h???c Y D?????c TP.HCM.
                      </p>
                      <p className={cx('exp-item-info')}>
                        <span>2013 - 2016: </span>
                        Ti???n s?? Y Khoa, ?????i h???c Yamanashi, Nh???t B???n.
                      </p>
                    </div>
                  </li>
                  <li className={cx('exp-item')}>
                    <span className={cx('exp-item-icon')}>
                      <Image
                        src={
                          require('../../assets/images/clinic/continuing_medical_education-icon.svg')
                            .default
                        }
                      ></Image>
                    </span>
                    <div className={cx('exp-item-content')}>
                      <h4 className={cx('exp-item-title')}>????o t???o li??n t???c</h4>
                      <p className={cx('exp-item-info')}>
                        <span>2016:</span>
                        ??i???n t??m ?????, ?????i h???c Y D?????c TP.HCM.
                      </p>
                      <p className={cx('exp-item-info')}>
                        <span>2012:</span>
                        Si??u ??m tim v?? m???ch m??u, ?????i h???c Y D?????c TP.HCM.
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('related-doctor')}>
        <div className="container">
          <div className="row">
            <div className={cx('related-doctor-main')}>
              <div className={cx('title')}>
                Xem th??m B??c s?? chuy??n khoa kh??c
              </div>
              <div className={cx('related-doctor-slider')}>
                <Slider {...relatedDocor}>
                  {doctor &&
                    doctor.map((el, idx) => (
                      <div key={idx} className={cx('related-doctor-item')}>
                        <div className={cx('related-doctor-info')}>
                          <Image
                            src={`${BASE_URL}/${el?.account?.people?.image}`}
                            className={cx('related-doctor-info-avatar')}
                          ></Image>
                          <div className={cx('related-doctor-main-info')}>
                            <h3 className={cx('related-doctor-info-name')}>
                              Bs.{el?.account?.people?.lastName}{' '}
                              {data?.account?.people?.firstName}
                            </h3>
                            <p className={cx('related-doctor-info-specialty')}>
                              {el?.position?.namePosition}
                            </p>
                          </div>
                        </div>
                        <div className={cx('related-doctor-more-info')}>
                          <p className={cx('related-doctor-more-introduction')}>
                            {el?.description}
                          </p>
                          <Button
                            className={cx('related-doctor-more-btn')}
                            onClick={handleClickShowRelatedDoctorInner}
                          >
                            Xem th??m
                          </Button>
                        </div>
                        <div className={cx('related-doctor-info-inner')}>
                          <Button to={`/bac-si/${el._id}`}>Xem chi ti???t</Button>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('fixed-bottom-group')}>
        <div className="container">
          <div className="row">
            <Button btn_green onClick={handleClickOpenModal}>
              ?????t l???ch kh??m ngay
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
