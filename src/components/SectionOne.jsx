import React from "react";

const SectionOne = () => {
  return (
    // <section className="flex justify-center">
    //   <div className="section-one-text glass-effect ">
    //     <h3 className="section-one-headline">Be Curious About What Matters</h3>
    //     <p className="max-w-2xl font-light">
    //       Unlock the world of knowledge, investigate the unknown, and be engaged
    //       in the innovative journey.
    //     </p>
    //   </div>
    // </section>
    <section class="title my-40 relative text-center" style={{ transform: "" }}>
      <span class="text write" data-splitting="lines">
        Be Curious About What Matters
        <br />
        Unlock the world of knowledge, investigate the unknown, and be engaged
        in the innovative journey.
      </span>
      <span aria-hidden="true" class="text laser" data-splitting="lines">
        Be Curious About What Matters
        <br />
        Unlock the world of knowledge, investigate the unknown, and be engaged
        in the innovative journey.
      </span>
    </section>
  );
};

export default SectionOne;
