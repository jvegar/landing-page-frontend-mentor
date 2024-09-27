import React from "react";

const Main: React.FC = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__content">
          <div className="main__content-pills">
            <div className="main__content-pills-left">
              <span className="main__content-pill--premium">PREMIUM</span>
              <span className="main__content-pill--html">HTML</span>
              <span className="main__content-pill--css">CSS</span>
            </div>
            <div className="main__content-pills-right">
              <div className="difficulty-badge">
                <span className="difficulty-badge__number">1</span>
                <span className="difficulty-badge__label">NEWBIE</span>
              </div>
            </div>
          </div>
          <h1 className="main__content-title">
            Skilled e-learning landing page
          </h1>
          <p className="main__content-description">
            This responsive page is perfect if you've learned the fundamentals
            of HTML & CSS, completed a couple of smaller projects, and want to
            take it up a notch.
          </p>
          <div className="main__content-buttons">
            <button className="main__content-button">Start challenge</button>
          </div>
        </div>
        <div className="main__secondary-content">
          <button className="main__secondary-content-button">
            <img
              src={
                "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/fycej3bfur1qnf3ixtqq.jpg"
              }
              alt="logo"
              className="main__secondary-content-image"
            />
          </button>
          <div className="main__secondary-content-buttons">
            <button className="main__secondary-content-button--primary">
              Desktop design
            </button>
            <button className="main__secondary-content-button--secondary">
              Tablet design
            </button>
            <button className="main__secondary-content-button--secondary">
              Mobile design
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
