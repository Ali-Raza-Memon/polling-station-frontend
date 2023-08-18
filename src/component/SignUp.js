import React from 'react';

const SignUp = () => {
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    {/*<form onSubmit={handleSubmit}>*/}
                                        <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fName"
                                                        name="first_name"
                                                        className="form-control form-control-lg"
                                                        // value={first_name}
                                                        // onChange={(e) => setFirstName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lName"
                                                        name="last_name"
                                                        className="form-control form-control-lg"
                                                        // value={last_name}
                                                        // onChange={(e) => setLastName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="CMS-ID" className="form-label">
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="CMS-ID"
                                                        name="cmsId"
                                                        className="form-control form-control-lg"
                                                        // value={cmsId}
                                                        // onChange={(e) => setCmsId(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="role">
                                                        Class
                                                    </label>
                                                    <select
                                                        id="role"
                                                        name="role"
                                                        className="form-select form-control-lg"
                                                        // value={role}
                                                        // onChange={handleRoleChange}
                                                        required
                                                    >
                                                        <option value="">Select Class</option>
                                                        <option value="Student">5th</option>
                                                        <option value="Teacher">6th</option>
                                                        <option value="Student">7th</option>
                                                        <option value="Teacher">8th</option>
                                                        <option value="Student">9th</option>
                                                        <option value="Teacher">10th</option>
                                                        <option value="Student">11th</option>
                                                        <option value="Teacher">12th</option>

                                                    </select>
                                                </div>
                                            </div>
                                            {/*<div className="col-md-6 mb-4">*/}
                                            {/*    <h6 className="mb-2 pb-1">Gender: </h6>*/}
                                            {/*    <div className="form-check form-check-inline">*/}
                                            {/*        <input*/}
                                            {/*            className="form-check-input"*/}
                                            {/*            type="radio"*/}
                                            {/*            name="inlineRadioOptions"*/}
                                            {/*            id="femaleGender"*/}
                                            {/*            value="female"*/}
                                            {/*            // checked={gender === 'female'}*/}
                                            {/*            // onChange={() => setGender('female')}*/}
                                            {/*            required*/}
                                            {/*        />*/}
                                            {/*        <label className="form-check-label" htmlFor="femaleGender">*/}
                                            {/*            Female*/}
                                            {/*        </label>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="form-check form-check-inline">*/}
                                            {/*        <input*/}
                                            {/*            className="form-check-input"*/}
                                            {/*            type="radio"*/}
                                            {/*            name="inlineRadioOptions"*/}
                                            {/*            id="maleGender"*/}
                                            {/*            value="male"*/}
                                            {/*            // checked={gender === 'male'}*/}
                                            {/*            // onChange={() => setGender('male')}*/}
                                            {/*            required*/}
                                            {/*        />*/}
                                            {/*        <label className="form-check-label" htmlFor="maleGender">*/}
                                            {/*            Male*/}
                                            {/*        </label>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="form-check form-check-inline">*/}
                                            {/*        <input*/}
                                            {/*            className="form-check-input"*/}
                                            {/*            type="radio"*/}
                                            {/*            name="inlineRadioOptions"*/}
                                            {/*            id="otherGender"*/}
                                            {/*            value="other"*/}
                                            {/*            // checked={gender === 'other'}*/}
                                            {/*            // onChange={() => setGender('other')}*/}
                                            {/*            required*/}
                                            {/*        />*/}
                                            {/*        <label className="form-check-label" htmlFor="otherGender">*/}
                                            {/*            Other*/}
                                            {/*        </label>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="emailAddress"
                                                        className="form-control form-control-lg"
                                                        // value={email}
                                                        // onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        className="form-control form-control-lg"
                                                        // value={phone_number}
                                                        // onChange={(e) => setPhoneNumber(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="password">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        className="form-control form-control-lg"
                                                        // value={password}
                                                        // onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="confirmPassword">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="confirmPassword"
                                                        className="form-control form-control-lg"
                                                        // value={confirmPassword}
                                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/*<div className="col-md-6 mb-3">*/}
                                            {/*    <div className="form-outline">*/}
                                            {/*        <label className="form-label" htmlFor="role">*/}
                                            {/*            Class*/}
                                            {/*        </label>*/}
                                            {/*        <select*/}
                                            {/*            id="role"*/}
                                            {/*            name="role"*/}
                                            {/*            className="form-select form-control-lg"*/}
                                            {/*            // value={role}*/}
                                            {/*            // onChange={handleRoleChange}*/}
                                            {/*            required*/}
                                            {/*        >*/}
                                            {/*            <option value="">Select Class</option>*/}
                                            {/*            <option value="Student">5th</option>*/}
                                            {/*            <option value="Teacher">6th</option>*/}
                                            {/*            <option value="Student">7th</option>*/}
                                            {/*            <option value="Teacher">8th</option>*/}
                                            {/*            <option value="Student">9th</option>*/}
                                            {/*            <option value="Teacher">10th</option>*/}
                                            {/*            <option value="Student">11th</option>*/}
                                            {/*            <option value="Teacher">12th</option>*/}



                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-md-6 mb-4">*/}
                                            {/*    <div className="form-outline">*/}
                                            {/*        <label className="form-label" htmlFor="department">*/}
                                            {/*            Department*/}
                                            {/*        </label>*/}
                                            {/*        <select*/}
                                            {/*            className="select form-control-lg me-5"*/}
                                            {/*            // value={department}*/}
                                            {/*            // onChange={(e) => setDepartment(e.target.value)}*/}
                                            {/*        >*/}
                                            {/*            <option value="" disabled>*/}
                                            {/*                Choose Department*/}
                                            {/*            </option>*/}
                                            {/*            <option value="Computer Science">Computer Science</option>*/}
                                            {/*            <option value="Software Engineering">Software Engineering</option>*/}
                                            {/*            <option value="Computer Science Engineering">Computer Science Engineering</option>*/}
                                            {/*            <option value="Business Administration">Business Administration</option>*/}
                                            {/*            <option value="Education">Education</option>*/}
                                            {/*            <option value="Physical">Physical</option>*/}
                                            {/*            <option value="Media and Science Communication">Media and Science Communication</option>*/}
                                            {/*            <option value="Accounting and Finance">Accounting and Finance</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>

                                        {/*{showTeacherId && (*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-md-6 mb-4">*/}
                                        {/*            <div className="form-outline">*/}
                                        {/*                <label className="form-label" htmlFor="teacherId">*/}
                                        {/*                    Teacher ID*/}
                                        {/*                </label>*/}
                                        {/*                <input*/}
                                        {/*                    type="text"*/}
                                        {/*                    id="teacherId"*/}
                                        {/*                    name="teacher_cms"*/}
                                        {/*                    className="form-control form-control-lg"*/}
                                        {/*                    value={teacher_cms}*/}
                                        {/*                    onChange={(e) => setTeacherId(e.target.value)}*/}
                                        {/*                    required*/}
                                        {/*                />*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}

                                        <div className="row justify-content-center">
                                            <div className="col-md-6">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;