import React from "react";

const Registration = () => {
    return (
        <section className="h-80">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card card-registration my-1">
                            <div className="row g-0">
                                <div className="col-xl-4 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" className="img-fluid"
                                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                </div>
                                <div className="col-xl-8">
                                    <div className="card-body text-black">
                                        <h3 className="mb-1 text-uppercase">Student registration form</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                    <input type="text" id="form3Example1m" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                    <input type="text" id="form3Example1n" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                                                    <input type="text" id="form3Example1m1" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                                                    <input type="text" id="form3Example1n1" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-2">
                                            <label className="form-label" htmlFor="form3Example8">Address</label>
                                            <input type="text" id="form3Example8" className="form-control" />
                                        </div>

                                        <div className="d-md-flex justify-content-start align-items-center mb-2 py-2">

                                            <h6 className="mb-0 me-4">Gender: </h6>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                    value="option1" />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                    value="option2" />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                    value="option3" />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-2" >
                                                <select data-mdb-select-init className="form-control">
                                                    <option value="1">State</option>
                                                    <option value="2">Option 1</option>
                                                    <option value="3">Option 2</option>
                                                    <option value="4">Option 3</option>
                                                </select>

                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <select data-mdb-select-init className="form-control">
                                                    <option value="1">City</option>
                                                    <option value="2">Option 1</option>
                                                    <option value="3">Option 2</option>
                                                    <option value="4">Option 3</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="form3Example9">DOB</label>
                                                    <input type="text" id="form3Example9" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="form3Example90">Pincode</label>
                                                    <input type="text" id="form3Example90" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="form3Example99">Class Roll No</label>
                                                    <input type="text" id="form3Example99" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                                    <input type="text" id="form3Example97" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning ms-2">Submit form</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration;