import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { useSelector, useDispatch } from 'react-redux';

import styles from './doctor.module.scss';
import './custom-slider.scss';
//import fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import component
import Image from '../../common/image/Image';
import Button from '../../common/button/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
//import image
import avatar from '../../assets/images/doctor/doctor1.png';
import { Link } from 'react-router-dom';

import { getAllDoctor } from './../../redux/actions';
import BASE_URL from '../../utils/configUrl';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useDebounce from '../../hook/useDebounce';
const cx = classNames.bind(styles);
export default function Service() {
  const dispatch = useDispatch();
  const { loading, doctor } = useSelector((state) => state.doctor);

  const [searchValue, setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 700);

  useEffect(() => {
    dispatch(getAllDoctor(debounceValue));
  }, [debounceValue, dispatch]);
  console.log(doctor);
  const handleOnChangeValue = (e) => {
    const select = e.target;
    select.classList.add(`${cx('active')}`);
    if (select.options[select.selectedIndex].value === '-2') {
      select.classList.remove(`${cx('active')}`);
    }
  };
  const handleClickShowDoctorInner = (e) => {
    const parent = e.target.parentNode.parentElement;
    const doctorInner = parent.querySelector(`.${cx('doctor-info-inner')}`);
    doctorInner.classList.add(`${cx('active')}`);
  };
  document.addEventListener('click', (e) => {
    const item = document.querySelectorAll(`.${cx('doctor-item')}`);
    item.forEach((el) => {
      const doctorInner = el.querySelector(`.${cx('doctor-info-inner')}`);
      const doctorBtn = el.querySelector(`.${cx('doctor-more-btn')}`);
      if (!doctorBtn.contains(e.target)) {
        doctorInner.classList.remove(`${cx('active')}`);
      }
    });
  });

  const blockSlider = {
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'block-list-slider',
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          swipeToSlide: false,
          arrows: false,
        },
      },
    ],
  };
  const listDoctor = [
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
    {
      avatar: avatar,
      name: 'TS.BS.Nguy???n V??n S??',
      specialty: 'Tim M???ch',
      introdution:
        'B??c s?? Nguy???n V??n S?? chuy??n ??i???u tr??? c??c b???nh l?? Tim m???ch v?? c?? h??n 12 n??m kinh nghi???m',
      to: 'nguyen-van-si',
    },
  ];
  return (
    <main>
      <section className={cx('banner')}>
        <div className="container">
          <div className="row">
            <div className={cx('main')}>
              <div className={cx('content')}>
                <h1 className={cx('heading')}>
                  ?????i ng?? B??c s?? ??u t?? t??? c??c B???nh vi???n h??ng ?????u
                </h1>
                <p className={cx('description')}>
                  ?????i ng?? B??c s?? ??u t?? v???i th??m ni??n trung b??nh 10 n??m kinh
                  nghi???m hi???n c??ng t??c t???i c??c B???nh vi???n h??ng ?????u Vi???t Nam, th??m
                  kh??m tr??n nhi???u chuy??n khoa ??a d???ng, t???n t??m ch??m s??c b???n c??ng
                  gia ????nh.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={cx('banner-images')}>
            <Image
              src={
                require('../../assets/images/doctor/doctor-list-banner-dt.svg')
                  .default
              }
              className={cx('banner-image-1')}
              alt=""
            />
            <Image
              src={require('../../assets/images/doctor/doctor-list-banner-2-dt.png')}
              className={cx('banner-image-2')}
              alt=""
            />
            <Image
              src={
                require('../../assets/images/doctor/doctor-list-banner-3-dt.svg')
                  .default
              }
              className={cx('banner-image-3')}
              alt=""
            />
          </div>
          <Image
            className={cx('banner-image-mb')}
            src={require('../../assets/images/doctor/doctor-list-banner-mb.png')}
          ></Image>
        </div>
      </section>
      <section className={cx('find-doctor')}>
        <div className="container">
          <div className="row">
            <div className={cx('find-doctor-main')}>
              <h2 className={cx('title')}>T??m b??c s?? c???a b???n</h2>
              <div className={cx('search-form')}>
                <div className={cx(['form-group', 'form-group-name'])}>
                  <input
                    type="text"
                    placeholder="T??m theo t??n"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>
              <div className={cx('doctor-content')}>
                <ul className={cx('doctor-list')}>
                  {loading || (!debounceValue && searchValue) ? (
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{
                            fontSize: 24,
                          }}
                          spin
                        />
                      }
                    />
                  ) : doctor ? (
                    doctor.map((el, idx) => (
                      <li key={idx} className={cx('doctor-item')}>
                        <div className={cx('doctor-info')}>
                          <Image
                            src={`${BASE_URL}/${el?.account?.people?.image}`}
                            className={cx('doctor-info-avatar')}
                          ></Image>
                        </div>
                        <div className={cx('doctor-more-info')}>
                          <h3 className={cx('doctor-info-name')}>
                            {`${el?.account?.people?.lastName} ${el?.account?.people?.firstName}` ||
                              ''}
                          </h3>
                          <p className={cx('doctor-info-specialty')}>
                            {el?.position?.namePosition}
                          </p>
                          <p className={cx('doctor-more-introduction')}>
                            {el.description}
                          </p>
                          <Button
                            className={cx('doctor-more-btn')}
                            onClick={handleClickShowDoctorInner}
                          >
                            Xem th??m
                          </Button>
                        </div>
                        <div className={cx('doctor-info-inner')}>
                          <Button to={`/bac-si/${el._id}`}>Xem chi ti???t</Button>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="w-100 text-center">
                      Kh??ng t??m th???y b??c s?? ph?? h???p ho???c t??? kh??a nh???p v??o b??? sai
                    </p>
                  )}
                </ul>
                <div className={cx('doctor-view-more')}>
                  <Button>Xem th??m</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('care')}>
        <div className={cx('care-bg')}>
          <Image
            src={
              require('../../assets/images/doctor/elite-care-bg.svg').default
            }
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className={cx('care-content')}>
              <h2 className={cx('title')}>?????i ng?? ch??m s??c chuy??n nghi???p</h2>
              <div className={cx('care-info')}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className={cx('care-info-item')}>
                      <div className={cx('care-info-item-media')}>
                        <Image
                          src={require('../../assets/images/doctor/experience.png')}
                        ></Image>
                      </div>
                      <div className={cx('care-info-item-body')}>
                        <h3 className={cx('care-info-item-title')}>
                          Gi??u kinh nghi???m
                        </h3>
                        <p className={cx('care-info-item-desc')}>
                          ?????i ng?? b??c s?? Jio Health l?? nh???ng b??c s?? ??u t?? Chuy??n
                          Khoa I & II, Th???c s??, Ti???n s?? v???i th??m ni??n trung b??nh
                          t??? 10 n??m kinh nghi???m.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx('care-info-item')}>
                      <div className={cx('care-info-item-media')}>
                        <Image
                          src={require('../../assets/images/doctor/distinguished.png')}
                        ></Image>
                      </div>
                      <div className={cx('care-info-item-body')}>
                        <h3 className={cx('care-info-item-title')}>
                          Chuy??n m??n cao
                        </h3>
                        <p className={cx('care-info-item-desc')}>
                          C??c b??c s?? Jio Health ?????u ??ang c??ng t??c v?? gi???ng d???y
                          t???i c??c b???nh vi???n uy t??n h??ng ?????u th??nh ph??? nh?? BV Ch???
                          R???y, BV Nh??n d??n Gia ?????nh, BV Nhi ?????ng 1 & 2, BV ?????i
                          h???c Y D?????c TP.HCM.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx('care-info-item')}>
                      <div className={cx('care-info-item-media')}>
                        <Image
                          src={require('../../assets/images/doctor/international.png')}
                        ></Image>
                      </div>
                      <div className={cx('care-info-item-body')}>
                        <h3 className={cx('care-info-item-title')}>
                          Kinh nghi???m qu???c t???
                        </h3>
                        <p className={cx('care-info-item-desc')}>
                          C??c b??c s?? Jio Health ?????u t???ng c?? th???i gian tu nghi???p
                          t???i c??c n?????c c?? n???n y h???c ph??t tri???n nh?? M???, Ph??p,
                          ?????c, Th??i Lan, Singapore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className={cx('care-info-item')}>
                      <div className={cx('care-info-item-media')}>
                        <Image
                          src={require('../../assets/images/doctor/multilingual.png')}
                        ></Image>
                      </div>
                      <div className={cx('care-info-item-body')}>
                        <h3 className={cx('care-info-item-title')}>
                          Tr??nh ????? ngo???i ng???
                        </h3>
                        <p className={cx('care-info-item-desc')}>
                          C??c chuy??n vi??n y t??? c???a Jio Health c?? th??? trao ?????i
                          v???i b???nh nh??n b???ng nhi???u ng??n ng??? nh?? ti???ng Anh, ti???ng
                          Ph??p.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('block-list')}>
        <div className="container">
          <div className="row">
            <div className={cx('block-list-main')}>
              <h2 className={cx('title')}>B??i vi???t y khoa n???i b???t</h2>
              <div className={cx('block-list-content')}>
                <div className={cx('block-list-content-slider')}>
                  <Slider {...blockSlider}>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img1.png')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          {' '}
                          C???m nang ti??m ch???ng vaccine Civud-19 t??? A-Z
                        </h3>
                      </div>
                    </div>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img2.png')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">Nhi khoa</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          {' '}
                          M??a dihcj tr??? tr??? l???ch ti??m ph??ng ?????nh k??? ph???i l??m sao
                        </h3>
                      </div>
                    </div>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img3.png')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">B??i vi???t c???a B??c s??</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          H?????ng d???n x??? l?? v?? c??ch ly tjai nh?? hco b???nh nh??n
                          Covid-19 l?? F0 kh??ng tri???u ch???ng
                        </h3>
                      </div>
                    </div>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img4.jpg')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">Nhi khoa</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          {' '}
                          Jio Health t??? ch???c kh??m s???c kh???e cho c??c b?? Tr?????ng M???m
                          Non Qu???c T??? ??c Ch??u
                        </h3>
                      </div>
                    </div>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img1.png')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          {' '}
                          C???m nang ti??m ch???ng vaccine Civud-19 t??? A-Z
                        </h3>
                      </div>
                    </div>
                    <div className={cx('block-list-item')}>
                      <Image
                        src={require('../../assets/images/doctor/block-list-img1.png')}
                      ></Image>
                      <div className={cx('block-list-item-content')}>
                        <div className={cx('block-list-item-time')}>
                          <Link to="/">Vaccine</Link>
                          <span> 22 th??ng 6, 2021</span>
                        </div>
                        <h3 className={cx('block-list-item-title')}>
                          {' '}
                          C???m nang ti??m ch???ng vaccine Civud-19 t??? A-Z
                        </h3>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
