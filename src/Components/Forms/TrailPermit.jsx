import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function TrailPermit() {
  const location = useLocation();
  const stdId = location.state;

  const formik = useFormik({
    initialValues: { fname: "", lname: "" },
    validationSchema: Yup.object({}),
  });

  return (
    <div className="flex flex-1 justify-center items-center w-screen mt-4">
      <Card style={{ width: "40em" }}>
        <Card.Body>
          <div className="p-4">
            <Row>
              <div className="flex justify-center p-2 bg-neutral-100 rounded-md text-2xl mb-3">
                Trail Permit
              </div>
            </Row>

            <div className="bg-slate-100 w-fit p-3 rounded-md mb-3 text-sm">
              <table className="gap-y-1">
                <tr className="">
                  <td>Student ID:</td> <td className="pl-4">CN-5001</td>
                </tr>
                <tr className="">
                  <td>Name:</td> <td className="pl-4">Kasun Dhananjaya</td>
                </tr>
                <tr className="">
                  <td>NIC:</td> <td className="pl-4">200117202070</td>
                </tr>
                <tr className="">
                  <td>Contact:</td> <td className="pl-4">0771701288</td>
                </tr>
              </table>
            </div>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Serial Number:<span className="text-red-500"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder=""
                    {...formik.getFieldProps("email")}
                    required
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.email && formik.errors.email}
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Exam Date:<span className="text-red-500"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="Date"
                    {...formik.getFieldProps("telephone")}
                    required
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.telephone && formik.errors.telephone}
                  </Form.Text>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
