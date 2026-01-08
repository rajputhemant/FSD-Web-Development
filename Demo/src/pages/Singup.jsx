import React, { useState } from "react";

const Singup = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="fullName" className="form-label w-25 ms-4 ">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                
              />
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="email" className="form-label w-25 ms-4 ">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="form-control"
                
              />
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="phone" className="form-label w-25 ms-4 ">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="form-control"
                
              />
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="city" className="form-label w-25 ms-4 ">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="form-control"
                
              />
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="subject" className="form-label w-25 ms-4 ">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="form-control"
               
              />
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="religion" className="form-label w-25 ms-4 ">Religion</label>
              <select
                name="religion"
                id="religion"
                onChange={handleChange}
                value={contactData.religion}
                
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="gender" className="form-label w-25 ms-4 ">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-label w-25 ms-4 "
                onChange={handleChange}
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="skill" className="form-label w-25 ms-4 ">Skill known</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "js"
                  )
                    ? true
                    : false
                }
              />{" "}
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).includes("react")
                }
              />{" "}
              React
            </div>

            <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
              <label htmlFor="message" className="form-label w-25 ms-4 ">Message</label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
               className="form-control"
              ></textarea>
            </div>
            <div >
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Singup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Singup;