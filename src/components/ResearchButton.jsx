import React from "react";

const ResearchButton = () => {
  return (
    <div className="research-btn-bg">
      <div className="text-center">
        <h1>Have a research idea of your own?</h1>
        <p>Get in touch with us!</p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="research-btn"
          style={{
            backgroundImage:
              "linear-gradient(#212121, #212121),linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%)",
            backgroundClip: "content-box, border-box",
          }}
        >
          <strong style={{ textShadow: "0 0 4px white" }}>
            Research Program
          </strong>

          <div className="container-stars">
            <div className="stars"></div>
          </div>

          <div className="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ResearchButton;
