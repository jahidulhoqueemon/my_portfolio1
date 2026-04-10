import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3rd Year student (BBA)</h4>
                <h5>University of Chittagong</h5>
              </div>
              <h3 style={{ marginRight: "25px" }}>2026–Present</h3>
            </div>
            <p>Education</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphics Designer & Secretary</h4>
                <h5>Chittagong University Business Club</h5>
              </div>
              <h3 style={{ marginRight: "25px" }}>2026–Running</h3>
            </div>
            <p>Experience</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive Member (Graphics team wing)</h4>
                <h5>Boalkhali Student Welfare Association</h5>
              </div>
              <h3>2024–2025</h3>
            </div>
            <p>Experience</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Member</h4>
                <h5>Management Communication Club</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>Experience</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (Science)</h4>
                <h5>Sir Ashutosh Government College</h5>
              </div>
              <h3>2019–2021</h3>
            </div>
            <p>Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
