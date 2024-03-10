import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { findStudentByID } from "../ApiService/api";

export default function TrailPermit() {
  const location = useLocation();
  const stdId = location.state;
  const [b1M, setB1M] = useState(false);
  const [bA, setBA] = useState(false);
  const [bM, setBM] = useState(false);
  const [a1A, setA1A] = useState(false);
  const [a1M, setA1M] = useState(false);
  const [aA, setAA] = useState(false);
  const [studentData, setStudentData] = useState("");

  const formik = useFormik({
    initialValues: { fname: "", lname: "" },
    validationSchema: Yup.object({}),
  });
  const nav = useNavigate();
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    console.log("role: " + role);
    if (!(role === "ADMIN" && sessionStorage.getItem("token") !== null)) {
      nav("/");
    } else if (stdId === null) {
      nav("/studentprofile");
    }
  });
  useEffect(() => {
    console.log("bike Auto" + a1A);
    console.log("bike Manual" + a1M);
  }, [b1M, bA, bM, a1A, a1M, aA]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await findStudentByID(stdId);
        setStudentData(response?.data?.content);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [stdId]);

  const back = () => {
    nav("/studentprofile");
  };
  return (
    <div className="flex flex-1 justify-center items-center w-screen mt-16">
      <Card style={{ width: "40em" }}>
        <Card.Body>
          <div className="p-4">
            <Row>
              <div className="flex justify-center p-2 bg-neutral-100 rounded-md text-2xl mb-4">
                Trail Permit
              </div>
            </Row>

            <div className="bg-slate-100 w-fit p-3 rounded-md mb-3 text-sm">
              <table className="gap-y-1">
                <tr className="">
                  <td>Student ID:</td>{" "}
                  <td className="pl-4">{studentData?.stdID}</td>
                </tr>
                <tr className="">
                  <td>Name:</td>{" "}
                  <td className="pl-4">
                    {studentData?.fname} {studentData?.lname}
                  </td>
                </tr>
                <tr className="">
                  <td>NIC:</td> <td className="pl-4">{studentData?.nic}</td>
                </tr>
                <tr className="">
                  <td>Contact:</td>{" "}
                  <td className="pl-4">{studentData?.telephone}</td>
                </tr>
              </table>
            </div>
            <Form>
              <Row className="">
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
                </Form.Group>
              </Row>

              <Row className="mt-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Exp Date:<span className="text-red-500"> *</span>
                  </Form.Label>
                  <Form.Control type="date" placeholder="" required />
                </Form.Group>
              </Row>

              <div className="mb-0 mt-3">Details Of leaner permit</div>
              <div className="flex flex-col items-center  pr-4">
                <table className="border-collapse w-full mt-2">
                  <thead>
                    <tr>
                      <th className="border p-2">
                        <label>Vehicle Type</label>
                      </th>
                      <th className="border p-2">Manual</th>
                      <th className="border p-2">Auto</th>
                      <th className="border p-2">None</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border p-2">
                        <label>B1 - Motor Tricycle</label>
                      </td>
                      <td className="border p-2">
                        <input type="radio" name="b1" disabled={true} />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="b1"
                          onChange={(e) => setB1M(e.target.checked)}
                          checked={b1M}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="b1"
                          defaultChecked={true}
                          onChange={() => setB1M(false)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <label>B - all cars/duel purpose</label>
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="b"
                          onChange={() => {
                            setBM(true);
                            setBA(false);
                          }}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="b"
                          onChange={() => {
                            setBM(false);
                            setBA(true);
                          }}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="b"
                          defaultChecked={true}
                          onChange={() => {
                            setBM(false);
                            setBA(false);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <label>A1 - Mortorcycle Engine Capacity &lt; 100</label>
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="A1"
                          onChange={() => {
                            setA1M(true);
                            setA1A(false);
                          }}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="A1"
                          onChange={() => {
                            setA1M(false);
                            setA1A(true);
                          }}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="A1"
                          defaultChecked={true}
                          onChange={() => {
                            setA1M(false);
                            setA1A(false);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <label>A - Mortorcycle Engine Capacity &ge; 100</label>
                      </td>
                      <td className="border p-2">
                        <input type="radio" name="A" disabled={true} />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="A"
                          onChange={() => {
                            setAA(true);
                          }}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="radio"
                          name="A"
                          defaultChecked={true}
                          onChange={() => {
                            setAA(false);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Row>
                <div className="flex flex-row justify-between items-center bg-neutral-100 p-3 rounded-md mt-4">
                  <Button variant="danger" onClick={back}>
                    Back
                  </Button>
                  <Button type="submit" variant="success">
                    Save
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
