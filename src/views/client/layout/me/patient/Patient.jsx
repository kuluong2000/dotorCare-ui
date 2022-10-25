import { Table, Typography } from "antd";
import React from "react";
import Button from "../../../common/button/Button";

export default function Patient() {
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
      render: () => <Button btn_green>Xem chi tiết</Button>,
    },
  ];
  const data = [
    {
      key: "1",
      lastName: "Trần Hữu",
      firstName: "Lương",
      date: "1/1/2022",
      doctor: "Trần Hữu Lương",
      diseases: "Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu,Đau đầu",
      price: "1000.000.000 vnđ",
    },
  ];
  return (
    <>
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
