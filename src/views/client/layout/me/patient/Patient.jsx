import { Modal, Table, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../common/button/Button';
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
      render: (text, record) => record.patient?.account?.people?.lastName,
    },
    {
      title: 'Tên',
      dataIndex: 'firstName',
      key: 'firstName',
      fixed: 'left',
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
      render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
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
      render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },

    {
      title: 'Hành động',
      key: 'operation',
      width: 200,
      fixed: 'right',
      render: (text, record) => (
        <Button btn_green onClick={() => showModal(record)}>
          Xem chi tiết
        </Button>
      ),
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
        />
      </Modal>
      <Table
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={dataBooking}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
}
