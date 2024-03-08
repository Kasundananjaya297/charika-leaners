import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function ProfileDetailsCard() {
  return (
    <div>
      <Row className="flex overflow-hidden text-sm item-center">
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "24rem" }}>
            <Card.Body className="p-4">
              <Row className="mb-2 items-end flex flex-row justify-end">
                <Col xs={6} md={4}>
                  {/* Check and correct the image path */}
                  <Image src="./photo.jpg" roundedCircle fluid />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Contract No:</Col>
                <Col xs={8} className="pl-4">
                  CN-5001
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Name:</Col>
                <Col xs={8} className="pl-4">
                  Kasun Dhananjaya
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Contact:</Col>
                <Col xs={8} className="pl-4">
                  0758462129
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Email:</Col>
                <Col xs={8} className="pl-4">
                  Kasun.dananjaya297@gmail.com
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>NIC:</Col>
                <Col xs={8} className="pl-4">
                  200117202070
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Age:</Col>
                <Col xs={8} className="pl-4">
                  18
                </Col>
              </Row>
              <Row className="mb-2 items-center">
                <Col xs={4}>Account State:</Col>
                <Col xs={6} className="pl-4">
                  <Button size="sm" variant="danger" disabled>
                    Not-Activated
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Package:</Col>
                <Col xs={8} className="pl-4 font-bold">
                  Drive Ease
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Full-Payment:</Col>
                <Col xs={8} className="pl-4">
                  Rs. 28000
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={4}>Remain:</Col>
                <Col xs={8} className="pl-4 font-bold">
                  Rs. 28000
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
