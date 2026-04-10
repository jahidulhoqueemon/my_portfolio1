import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jahidulhoqueemonl@gmail.com" data-cursor="disable">
                jahidulhoqueemonl@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+8801862866827" data-cursor="disable">
                01862866827
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.facebook.com/share/19u7qSyM1H/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "2rem" }}>Address</h4>
            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
            >
              Shahjalal Hall at <br/>Chittagong University
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Md. Jahidul Hoque Emon</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
