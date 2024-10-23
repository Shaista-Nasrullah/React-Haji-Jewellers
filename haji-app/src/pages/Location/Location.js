import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import "./../../styles/location.css";

const Location = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !phone || !city || !msg) {
        toast.error("PLease Provide all fields");
      }
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/portfolio/sendEmail`,
        {
          name,
          email,
          phone,
          city,
          msg,
        }
      );
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Location - Haji Jewellers"}>
      <div>
        <div className="picture">
          <img src="images/Haji-Jewellers-location.jpg" alt />
        </div>
        <div className="location">
          <h1 className="textt">LOCATION</h1>
        </div>
        <div className="exact-location">
          <div className="right">
            <h2>MOHAMMAD DAWOOD MALL</h2>
            <p>SHOP GF11, HAZARA TOWN, QUETTA, PAKISTAN.</p>
            <p>tel: +92-305-3400112</p>
          </div>
          <div className="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6898.5455973870485!2d66.95925497558439!3d30.172200377343852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681895360891!5m2!1sen!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h1 className="text">CONTACT US</h1>
        <form action="/" method="post" id="contact">
          <div className="input-row">
            <div className="input-group">
              <label className="text">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="text">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="YourName@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label className="text">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="0340-4234728"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="text">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="pagal">
            <label className="text">Message</label>
            <textarea
              name="more"
              id="more"
              rows={5}
              placeholder="Your Message....."
              defaultValue={""}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Location;
