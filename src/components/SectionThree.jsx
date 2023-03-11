import React from "react";

const SectionThree = () => {
  const info = [
    {
      id: 1,
      heading: "Affordable Opportunities",
      description:
        "Our program provides affordable research opportunities for all students, regardless of their background or financial situation.",
    },
    {
      id: 2,
      heading: "Expert Faculty",
      description:
        "Our experienced faculty and academic team offer expert mentorship and support to help you reach your full potential.",
    },
    {
      id: 3,
      heading: "Dynamic Collaborations ",
      description:
        "We collaborate with top organizations to offer diverse research opportunities that align with your interests and career goals.",
    },
    {
      id: 4,
      heading: "Cutting-Edge Facilities",
      description:
        "Our state-of-the-art facilities provide access to cutting-edge equipment and resources for conducting groundbreaking research.",
    },
    {
      id: 5,
      heading: "Real-World Impact",
      description:
        "Our research focuses on making a real-world impact, providing you with opportunities to contribute to society in meaningful ways.",
    },
    {
      id: 6,
      heading: "Skills for Success",
      description:
        "Our program is designed to cultivate critical thinking skills, preparing you for success in any field you choose.",
    },
  ];

  return (
    <div className="introThree">
      <h1>
        <b>Why the Centre for Undergraduate Research?</b>
      </h1>
      <p>
        Are you a Bangladeshi undergraduate with a passion for research? Look no
        further than the Centre for Undergraduate Research! Here are just a few
        reasons why our program is the right choice for you:
      </p>

      <div className="rect"></div>
      <div className="card-layout">
        {info.map((info) => (
          <div className="card-design" key={info.id}>
            <h3 className="card-heading">{info.heading}</h3>
            <h4 className="card-description">{info.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
