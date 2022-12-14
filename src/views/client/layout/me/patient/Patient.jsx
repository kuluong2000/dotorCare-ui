import { Modal, Table, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../common/button/Button';
import { formatPrice } from './../../../utils/numberFomat';
import {
  openModal,
  hideModal,
  getAllBookingPatient,
} from '../../../redux/actions';
import './patient.scss';
export default function Patient() {
  const isModalOpen = useSelector((state) => state.modal.modal.show);
  const dataModal = useSelector((state) => state.modal.data.data);
  const { dataBooking } = useSelector((state) => state.booking);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookingPatient(id));
  }, []);

  const showModal = (data) => {
    dispatch(openModal(data));
  };
  const handleOk = () => {
    dispatch(hideModal());
  };
  const handleCancel = () => {
    dispatch(hideModal());
  };

  const detail = [
    {
      title: 'Họ',
      dataIndex: 'lastName',
      key: 'lastName',
      fixed: 'left',
      width: 100,
      render: (text, record) => record.patient?.account?.people?.lastName,
    },
    {
      title: 'Tên',
      dataIndex: 'firstName',
      key: 'firstName',
      fixed: 'left',
      width: 100,
      render: (text, record) => record.patient?.account?.people?.firstName,
    },
    {
      title: 'Ngày khám',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Bác sĩ khám',
      dataIndex: 'doctor',
      key: 'doctor',
      render: (text, record) =>
        `${record.doctor?.account?.people?.lastName} ${record.doctor?.account?.people?.firstName}`,
    },
    {
      title: 'Phòng khám',
      dataIndex: 'department',
      key: 'department',
      render: (text, record) => record.department?.nameDepartment,
    },
    {
      title: 'Chuẩn đoán',
      dataIndex: 'diseases',
      key: 'diseases',
      // render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
      // render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => formatPrice(record?.price),
    },
    {
      title: 'Đơn Thuốc',
      dataIndex: 'medicine',
      key: 'medicine',
      width: 150,
    },
    {
      title: 'Dặn dò của bác sĩ',
      dataIndex: 'note',
      key: 'note',
      width: 200,
    },
  ];

  const columns = [
    {
      title: 'Họ',
      dataIndex: 'lastName',
      key: 'lastName',
      width: 150,
      fixed: 'left',
      render: (text, record) => record.patient?.account?.people?.lastName,
    },
    {
      title: 'Tên',
      dataIndex: 'firstName',
      key: 'firstName',
      width: 120,
      fixed: 'left',
      render: (text, record) => record.patient?.account?.people?.firstName,
    },
    {
      title: 'Ngày khám',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      render: (idx, data) =>
        new Date(Date.parse(data.date)).toLocaleDateString(),
    },
    {
      title: 'Bác sĩ khám',
      dataIndex: 'doctor',
      key: 'doctor',
      width: 170,
      render: (text, record) =>
        `${record.doctor?.account?.people?.lastName} ${record.doctor?.account?.people?.firstName}`,
    },
    {
      title: 'Chuẩn đoán',
      dataIndex: 'diseases',
      key: 'diseases',
      width: 200,
      render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      width: 150,
      render: (text, record) => formatPrice(record?.price),
    },

    {
      title: 'Hành động',
      key: 'operation',
      width: 150,
      fixed: 'right',
      render: (text, record) => {
        if (record?.status === true) {
          return (
            <Button btn_green onClick={() => showModal(record)}>
              Xem chi tiết
            </Button>
          );
        } else {
          return 'Chưa khám';
        }
      },
    },
  ];

  return (
    <>
      <Modal
        title="Chi tiết hồ sơ khám bệnh"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table
          rowKey={(record) => record._id}
          columns={detail}
          dataSource={[dataModal]}
          pagination={false}
          scroll={{
            x: 1300,
          }}
        />
      </Modal>
      <Table
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={dataBooking}
        pagination={{
          defaultPageSize: 5,
        }}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
}
