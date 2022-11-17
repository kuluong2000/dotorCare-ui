import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Patient from './patient/Patient';

import './me.scss';
import Info from './info/Info';
import { useNavigate } from 'react-router-dom';
export default function Me() {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) return navigate('/');
  }, [token]);
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
                    <Info></Info>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="content">
                    <div className="title">Hồ sơ khám bệnh</div>
                    <div className="form-table">
                      <Patient></Patient>
                    </div>
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
