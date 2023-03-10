import React from 'react'

const ResearchButton = () => {
  return (
    <button type="button" class="btn">
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </button>
  );
}

export default ResearchButton