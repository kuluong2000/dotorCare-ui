import { Modal, Table, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/button/Button";
import { openModal, hideModal } from "../../../redux/actions";
import "./patient.scss";
export default function Patient() {
  const isModalOpen = useSelector((state) => state.modal.modal.show);
  const dataModal = useSelector((state) => state.modal.data);
  console.log(dataModal);
  const dispatch = useDispatch();
  const showModal = (data) => {
    dispatch(openModal(data));
  };
  const handleOk = () => {
    dispatch(hideModal());
  };
  const handleCancel = () => {
    dispatch(hideModal());
  };

  const columns1 = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 150,
      fixed: "left",
    },
    {
      title: "Họ",
      dataIndex: "lastName",
      key: "lastName",
      width: 150,
      fixed: "left",
    },
    {
      title: "Tên",
      dataIndex: "firstName",
      key: "firstName",
      width: 120,
      fixed: "left",
    },
    {
      title: "Ngày khám",
      dataIndex: "date",
      key: "date",
      width: 120,
    },
    {
      title: "Bác sĩ khám",
      dataIndex: "doctor",
      key: "doctor",
      width: 170,
    },
    {
      title: "Chuẩn đoán",
      dataIndex: "diseases",
      key: "diseases",
      render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      width: 150,
    },
  ];

  const columns = [
    {
      title: "Họ",
      dataIndex: "lastName",
      key: "lastName",
      width: 150,
      fixed: "left",
    },
    {
      title: "Tên",
      dataIndex: "firstName",
      key: "firstName",
      width: 120,
      fixed: "left",
    },
    {
      title: "Ngày khám",
      dataIndex: "date",
      key: "date",
      width: 120,
    },
    {
      title: "Bác sĩ khám",
      dataIndex: "doctor",
      key: "doctor",
      width: 170,
    },
    {
      title: "Chuẩn đoán",
      dataIndex: "diseases",
      key: "diseases",
      render: (text) => <Typography.Text ellipsis>{text}</Typography.Text>,
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      width: 150,
    },

    {
      title: "Hành động",
      key: "operation",
      width: 200,
      fixed: "right",
      render: (text, record) => (
        <Button btn_green onClick={() => showModal(record)}>
          Xem chi tiết
        </Button>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      lastName: "Trần Hữu",
      firstName: "Lương",
      doctor: "Trần Hữu Lương",
      date: "1/1/2022",
      diseases: "Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu",
      price: "1000.000.000 vnđ",
    },
    {
      lastName: "Trần Hữu",
      firstName: "Lương",
      doctor: "Trần Hữu Lương",
      date: "1/1/2022",
      diseases: "Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu",
      price: "1000.000.000 vnđ",
    },
  ];
  return (
    <>
      <Modal title="Chi tiết hồ sơ khám bệnh" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Table columns={columns1} dataSource={dataModal.data} pagination={false} />
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
}
