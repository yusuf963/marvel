import React from "react";
import "./style.css";
// This component meant to be used in the FullCardDetails component

const FullCardDetails = () => {
  return (
    <div className="=details-container">
      <div class="jumbotron">
        <img
          width="100%"
          src="https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt="marvel character"
        />
        <h1 class="display-4">Sample</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">
            Go to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default FullCardDetails;
