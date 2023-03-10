import React from "react";
const ResearchProgram = () => {
  const info = [
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
      PointOne:
        "Take your research skills to the next level with PaperCraft.",
      PointTwo:
        "Craft an impressive research paper with guidance on abstract, introduction, methodology, results, conclusion, reference,figures, title, and keyword.",
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
        {info.map((info) => (
          <div className={`card-design even:bg-[#fff] even:text-zinc-900`}>
            <h3 className="card-heading">{info.heading}</h3>
            <ul className="list-disc list-outside">
              <li>{info.PointOne}</li>
              <li>{info.PointTwo}</li>
            </ul>
            {/* <h4 className="card-description">
              {info.PointOne}
            </h4>
            <h4 className="card-description">
              {info.PointTwo}
            </h4> */}
            
          </div>
        ))}
      </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid gap-4 lg:border-r-2 pr-4 border-white">
            <p className="font-bold text-center text-lg lg:text-2xl">
              Introductory Class: "ResIntro"
            </p>
            <p>
              Kick off your research journey with ResIntro, where you'll get an
              introduction to research and an understanding of our course goals.
            </p>
            <p>
              Learn about Original Work and Review Work details, and what's
              expected of you during the program.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="font-bold text-center text-lg lg:text-2xl">
              Pre Research Skill Workshops: "SkillLab"
            </p>
            <p>
              Get equipped with the essential skills you need to excel in
              research with our SkillLab.
            </p>
            <p>
              Master Google docs, forms, sheets & their formatting, zotero, data
              analysis, basic graph creation with sheets, citation style,
              paraphrasing & plagiarism, paper finding, reading, article search
              & download, and ethics of research.
            </p>
          </div>

          <div className="grid gap-4 lg:border-r-2 pr-4 border-white">
            <p className="font-bold text-center text-lg lg:text-2xl">
              Research Work: "ResearchHub"
            </p>

            <p>
              Join the ResearchHub, where our experienced mentors will guide you
              to select a paper topic and assign tasks.
            </p>
            <p>
              Ensure you meet all deadpnes with the help of your research guide
              and attend weekly 2 research meetings with your mentor, as well as
              3 weekly 1:1 checkups.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="font-bold text-center text-lg lg:text-2xl">
              After Research Work: "PaperCraft"
            </p>

            <p>Take your research skills to the next level with PaperCraft.</p>
            <p>
              Craft an impressive research paper with guidance on abstract,
              introduction, methodology, results, conclusion, reference,
              figures, title, and keyword.
            </p>
          </div>
        </div> */}

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
        <h2>
          <b>How to Apply for the Centre for Undergraduate Research</b>
        </h2>
        <p>
          Ready to embark on an exciting journey of discovery and personal
          growth with the Centre for Undergraduate Research? Applying is simple
          and affordable! Here's how:
        </p>
        <p>
          <b> Register Online:</b> Fill out our user-friendly online
          registration form to begin the application process.
        </p>
        <p>
          <b>Pay One-Time Refundable Program Fee:</b> There are no application
          fees! Instead, pay a nominal one-time program fee, which is refundable
          under certain conditions.
        </p>
        <p>
          <b>Submit Necessary Credentials:</b> Provide your academic
          transcripts, personal statement, and letters of recommendation to
          support your application.
        </p>
        <p>
          <b>Join a Community of Learners:</b> After your application has been
          accepted, join a dynamic community of learners and researchers
          dedicated to making research popular in Bangladesh.
        </p>
        <p>
          At the{" "}
          <i>
            <b> Centre for Undergraduate Research</b>
          </i>
          , we believe that everyone should have access to quality research
          opportunities. That's why we offer an affordable, user-friendly
          application process with no hidden fees.{" "}
          <p>
            <b>Here are some of the features that set us apart:</b>
          </p>
        </p>
        <p>
          <b>No Application Fees: </b> Save money with our no application fee
          policy.
        </p>
        <p>
          <b>Refundable Program Fee:</b> Pay a nominal one-time program fee that
          is refundable under certain conditions.
        </p>
        <p>
          <b>Expert Support:</b>Our experienced staff are available to provide
          personalized support throughout the application process.
        </p>
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
    </>
  );
};

export default ResearchProgram;
