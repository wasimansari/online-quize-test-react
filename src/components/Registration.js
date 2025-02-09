import React, { useState,useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useFirebase } from "../context/Firebase";
import DistrictNameBlockName from "../utills/DistrictNameBlockName";
import Block from "../utills/Block";

// Modified Validation
const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "First name is required";
    if (!values.lastName) errors.lastName = "Last name is required";
    if (!values.motherName) errors.motherName = "Mother's name is required";
    if (!values.fatherName) errors.fatherName = "Father's name is required";
    if (!values.address) errors.address = "Address is required";
    if (!values.gender) errors.gender = "Gender is required";
    if (!values.state) errors.state = "State is required";
    if (!values.district) errors.district = "District is required";
    if (!values.dob) errors.dob = "DOB is required";
    if (!values.pincode) errors.pincode = "Pincode is required";
    if (!values.studentClass) errors.studentClass = "Student class is required";
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { // Validate email format
        errors.email = "Email is invalid";
    }

    return errors;
};



const Registration = ({ onValueChange }) => {
  const firebase = useFirebase();
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const {isHomeClick,setIsHomeClick} = useFirebase();

  useEffect(() => {
    if (firebase.isSuccess) {
      onValueChange.handleRegistration([false, ""]);
    }
    if(isHomeClick){
      onValueChange.handleRegistration([false,""]);
    }
    //if(onValueChange.filterData?.length > 0) return alert("Email id already exist, you can't registration for same class and same email id")
  }, [firebase.isSuccess,isHomeClick]);

  const handleStateChange = (e, setFieldValue) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setFieldValue("state", selectedState); // Update Formik's field value for 'state'
    setDistrict(""); // Reset district when state changes
    setFieldValue("district", ""); // Reset district in Formik
  };

  // Handling district change
  const handleDistrictChange = (e, setFieldValue) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setFieldValue("district", selectedDistrict); // Update Formik's field value for 'district'
  };

  const handleCancel = () => {
    onValueChange.handleRegistration([false,""]);
  };

  if (onValueChange.isRegistrationVisible) return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        motherName: "",
        fatherName: "",
        address: "",
        gender: "",
        state: "",
        block: "",
        dob: "",
        pincode: "",
        studentClass: onValueChange.selectClass,
        email: onValueChange.loginStatus.email,
        district: ""
      }}
      validate={validate}
      onSubmit={async (values) => {
        await firebase.handleNewRegistration(values);
        alert("Form submitted successfully with values: " + JSON.stringify(values, null, 12));
      }}
    >
      {({ setFieldValue,values }) => (
        <Form style={{ marginTop: "0px", paddingTop: "0px" }}>
          <section className="h-80">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="card card-registration my-1">
                    <div className="row g-0">
                      <div className="col-xl-4 d-none d-xl-block">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                          alt="Sample photo"
                          className="img-fluid"
                          style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                        />
                      </div>
                      <div className="col-xl-8">
                        <div className="card-body text-black">
                          <h4 className="mb-1 text-uppercase">Student registration form</h4>

                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1m">
                                  First name
                                </label>
                                <Field
                                  type="text"
                                  id="form3Example1m"
                                  name="firstName"
                                  className="form-control"
                                />
                                <ErrorMessage name="firstName" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1n">
                                  Last name
                                </label>
                                <Field
                                  type="text"
                                  id="form3Example1n"
                                  name="lastName"
                                  className="form-control"
                                />
                                <ErrorMessage name="lastName" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1m1">
                                  Mother's name
                                </label>
                                <Field
                                  type="text"
                                  id="form3Example1m1"
                                  name="motherName"
                                  className="form-control"
                                />
                                <ErrorMessage name="motherName" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1n1">
                                  Father's name
                                </label>
                                <Field
                                  type="text"
                                  id="form3Example1n1"
                                  name="fatherName"
                                  className="form-control"
                                />
                                <ErrorMessage name="fatherName" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example8">
                              Address
                            </label>
                            <Field
                              type="text"
                              id="form3Example8"
                              name="address"
                              className="form-control"
                            />
                            <ErrorMessage name="address" component="div" style={{ color: "red", fontSize: "11px" }} />
                          </div>

                          {/* Gender Section */}
                          <div className="d-md-flex justify-content-start align-items-center mb-2 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                              <Field
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="femaleGender"
                                value="female"
                              />
                              <label className="form-check-label" htmlFor="femaleGender">
                                Female
                              </label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                              <Field
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleGender"
                                value="male"
                              />
                              <label className="form-check-label" htmlFor="maleGender">
                                Male
                              </label>
                            </div>
                            <ErrorMessage name="gender" component="div" style={{ color: "red", fontSize: "11px" }} />
                          </div>

                          {/* State and City Select */}
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <Field as="select" name="state" className="form-control" value={state}
                                onChange={(e) => handleStateChange(e, setFieldValue)}>
                                <option value="">State</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="West Bengal">West Bengal</option>
                              </Field>
                              <ErrorMessage name="state" component="div" style={{ color: "red", fontSize: "11px" }} />
                            </div>
                            <div className="col-md-6 mb-2">
                            <DistrictNameBlockName selectedState={state} onDistrictChange={(e) => handleDistrictChange(e, setFieldValue)} />
                            <ErrorMessage name="district" component="div" style={{ color: "red", fontSize: "11px" }} />
                            </div>
                            <Block state={state} district={district} />
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example9">
                                  DOB
                                </label>
                                <Field type="date" id="form3Example9" name="dob" className="form-control" />
                                <ErrorMessage name="dob" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example90">
                                  Pincode
                                </label>
                                <Field
                                  type="number"
                                  id="form3Example90"
                                  name="pincode"
                                  className="form-control"
                                />
                                <ErrorMessage name="pincode" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example99">
                                  Student Class
                                </label>
                                <Field type="number" name="studentClass" className="form-control"
                                disabled={values.studentClass ? true : false}/>
                                  {/* <option value="">Student Class</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option> */}
                                {/* </Field> */}
                                <ErrorMessage name="studentClass" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example97">
                                  Email ID
                                </label>
                                <Field
                                  type="email"
                                  id="form3Example97"
                                  name="email"
                                  className="form-control"
                                  required
                                  disabled={values.email ? true : false}/>
                                <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: "11px" }} />
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-warning ms-2 mr-3" onClick={handleCancel}>
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success ms-2">
                              Submit form
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;