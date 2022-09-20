import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./me.scss";
export default function Me() {
  return (
    <section className="profile">
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Thông tin cá nhân</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Hồ sơ bệnh nhân</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="content">
                    <div className="title">Thông tin bệnh nhân</div>
                    <div className="form-group">
                      <div className="col-12 col-md-6">
                        <div className="form-item d-block w-100">
                          <label htmlFor="">Họ và tên</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-item">
                          <label htmlFor="">Email</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-item">
                          <label htmlFor="">Số điện thoại</label>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-item">
                          <label htmlFor="">Giới tính</label>
                          <select>
                            <option value="">Chọn giới tính</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="content">
                    <div className="title">Hồ sơ khám bệnh</div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  );
}
