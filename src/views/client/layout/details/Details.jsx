import React, { useEffect, useState } from 'react';
import { Modal as Modals } from 'antd';
import classNames from 'classnames/bind';
import styles from './details.module.scss';
import Button from '../../common/button/Button';
import Image from '../../common/image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../common/modal/Modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../utils/configUrl';
import { formatPrice } from '../../utils/numberFomat';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const cx = classNames.bind(styles);
export default function Details() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState('');
  const [diseases, setDiseases] = useState([]);
  const [diseasesInfo, setDiseasesInfo] = useState([]);
  const { token } = useSelector((state) => state.authentication);
  const { slugs } = useParams();
  useEffect(() => {
    const getAPI = () => {
      return Promise.all([
        axios.get(`${BASE_URL}/api/admin/department/${slugs}`).then((res) => {
          if (res.status === 200) {
            setData(res.data.data.data);
          }
        }),
        axios.get(`${BASE_URL}/api/admin/diseases/${slugs}`).then((res) => {
          setDiseases(res.data.data);
        }),
      ]);
    };
    getAPI();
  }, []);
  const handleClickOpenModal = () => {
    if (token) {
      setIsVisible(true);
      document.body.style = `overflow: hidden;`;
    } else {
      Swal.fire('Vui lòng đăng nhập để đặt lịch');
    }
  };
  const handleCancelModal = () => {
    setIsVisible(false);
    document.body.style = `overflow: overlay;`;
  };
  const showModal = (data) => {
    setIsModalOpen(true);
    setDiseasesInfo(data);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        visible={isVisible}
        data={data}
        onCancel={handleCancelModal}
      ></Modal>
      <section className={cx('banner-care')}>
        <div className="container">
          <div className="row">
            <div className={cx('banner-care-images')}>
              <div className={cx('banner-care-images-bg')}></div>
              <div className={cx('banner-care-images-circle-1')}></div>
              <div className={cx('banner-care-images-circle-2')}></div>
              <div className={cx('banner-care-images-person')}>
                <Image src={data && `${BASE_URL}/${data?.image}`}></Image>
              </div>
            </div>
            <div className={cx('banner-care-inner')}>
              <h1 className={cx('heading')}>{data?.nameDepartment}</h1>
              <p className={cx('description')}>{data?.description}</p>
              <div className={cx('price-group')}>
                <div className={cx('price-inside')}>
                  <p className={cx('price-title')}>Giá tư vấn chỉ từ</p>
                  <h2 className={cx('price')}>
                    {formatPrice(data?.price ? data?.price : 1)}
                  </h2>
                </div>
                <div className={cx('price-outside')}>
                  <Button
                    onClick={handleClickOpenModal}
                    btn_blue
                    className={cx('price-outside-btn')}
                  >
                    Đặt hẹn khám
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx('section-care-info')}>
        <div className="container">
          <div className="row">
            <h2 className={cx('title')}>
              Các bệnh lý về {data?.nameDepartment} sẽ được bác sĩ của Jio
              Health tầm soát - điều trị
            </h2>
            <div className={cx('content')}>
              <ul className={cx('section-care-info-list')}>
                {diseases.length > 0 ? (
                  diseases.map((el, idx) => (
                    <li
                      key={idx}
                      className={cx('section-care-info-item')}
                      onClick={() => showModal(el)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      <p>{el?.nameDiseases}</p>
                    </li>
                  ))
                ) : (
                  <li className={cx('section-care-info-item')}>
                    <FontAwesomeIcon icon={faCheck} />
                    <p>không có bệnh</p>
                  </li>
                )}
                <Modals
                  title=""
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  centered={true}
                  width={250}
                  footer={null}
                >
                  <h3 className={cx('section-care-info-item-title')}>
                    {diseasesInfo?.nameDiseases}
                  </h3>
                  <p className={cx('section-care-info-item-desc')}>
                    {diseasesInfo?.description}
                  </p>
                </Modals>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
