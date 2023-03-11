import React from "react";
import ApplyButton from "./ApplyButton";

const ResearchProgram = () => {
  const researchProgram = [
    {
      id: 1,
      heading: `Introductory Class: "ResIntro"`,
      PointOne:
        "Kick off your research journey with ResIntro, where you'll get an introduction to research and an understanding of our course goals.",
      PointTwo:
        "Learn about Original Work and Review Work details, and what's expected of you during the program.",
    },

    {
      id: 2,
      heading: `Pre Research Skill Workshops: "SkillLab"`,
      PointOne:
        "Get equipped with the essential skills you need to excel in research with our SkillLab.",
      PointTwo:
        "Master Google docs, forms, sheets & their formatting, zotero, data analysis, basic graph creation with sheets, citation style,paraphrasing & plagiarism, paper finding, reading, article search & download, and ethics of research.",
    },

    {
      id: 3,
      heading: `Research Work: "ResearchHub"`,
      PointOne:
        "  Join the ResearchHub, where our experienced mentors will guide you to select a paper topic and assign tasks.",
      PointTwo:
        "Ensure you meet all deadpnes with the help of your research guide and attend weekly 2 research meetings with your mentor, a well as 3 weekly 1:1 checkups.",
    },

    {
      id: 4,
      heading: `After Research Work: "PaperCraft"`,
      PointOne: "Take your research skills to the next level with PaperCraft.",
      PointTwo:
        "Craft an impressive research paper with guidance on abstract, introduction, methodology, results, conclusion, reference,figures, title, and keyword.",
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      stepName: "Register Online:",
      whatToDO:
        "Fill out our user-friendly online registration form to begin the application process.",
    },
    {
      step: 2,
      stepName: "Pay One-Time Refundable Program Fee:",
      whatToDO:
        " There are no application fees! Instead, pay a nominal one-time program fee, which is refundable under certain conditions.",
    },
    {
      step: 3,
      stepName: "Submit Necessary Credentials:",
      whatToDO:
        "Provide your academic transcripts, personal statement, and letters of recommendation to support your application.",
    },
    {
      step: 4,
      stepName: "Join a Community of Learners:",
      whatToDO:
        "After your application has been accepted, join a dynamic community of learners and researchers dedicated to making research popular in Bangladesh.",
    },
  ];
  const benefits = [
    {
      perks: 1,
      benefitName: "No Application Fees:",
      whatIsIt: "Save money with our no application fee policy.",
    },

    {
      perks: 2,
      benefitName: "Refundable Program Fee:",
      whatIsIt:
        "Pay a nominal one-time program fee that is refundable under certain conditions.",
    },

    {
      perks: 3,
      benefitName: "Expert Support:",
      whatIsIt:
        "Our experienced staff are available to provide personalized support throughout the application process.",
    },
  ];

  return (
    <>
      <div className="introTwo">
        <h1 className="mb-32">
          Welcome to the Centre for Undergraduate Research, where we offer an
          affordable research program for Bangladeshi undergraduates, with the
          aim to make research popular in Bangladesh. Here's what you can expect
          from our program:
        </h1>

        <div className={`card-layout grid-cols-1`}>
          {researchProgram.map((researchProgram) => (
            <div className={`card-design even:bg-[#fff] even:text-zinc-900`}>
              <h3 className="card-heading">{researchProgram.heading}</h3>
              <ul className="list-disc list-outside">
                <li>{researchProgram.PointOne}</li>
                <li>{researchProgram.PointTwo}</li>
              </ul>
            </div>
          ))}
        </div>

        <p>
          At the{" "}
          <i>
            <b>Centre for Undergraduate Research</b>
          </i>{" "}
          we're committed to providing you with an exceptional research
          experience that helps you achieve your academic goals.
        </p>
      </div>

      <div className="introThree">
        <h1>
          <b>How to Apply for the Centre for Undergraduate Research</b>
        </h1>
        <p>
          Ready to embark on an exciting journey of discovery and personal
          growth with the Centre for Undergraduate Research? Applying is simple
          and affordable! Here's how:
        </p>

        <ol className=" list-outside list-decimal">
          {applicationProcess.map((application) => (
            <span key={application.step}>
              <li className="my-6 ">
                <b>{application.stepName} </b>

                {application.whatToDO}
              </li>
            </span>
          ))}
        </ol>

        <p>
          At the{" "}
          <i>
            <b> Centre for Undergraduate Research</b>
          </i>
          , we believe that everyone should have access to quality research
          opportunities. That's why we offer an affordable, user-friendly
          application process with no hidden fees.{" "}
          <b>Here are some of the features that set us apart:</b>
        </p>

        <ol className=" list-outside list-decimal">
          {benefits.map((benefit) => (
            <span key={benefit.perks}>
              <li className="my-6 ">
                <b>{benefit.benefitName} </b>

                {benefit.whatIsIt}
              </li>
            </span>
          ))}
        </ol>

        <p>
          Join us at the{" "}
          <i>
            <b>Centre for Undergraduate Research</b>
          </i>{" "}
          and unlock your full potential with the power of research. Apply now
          and become part of a community of learners dedicated to making a
          difference in the world.
        </p>
      </div>

      <ApplyButton />
    </>
  );
};

export default ResearchProgram;
