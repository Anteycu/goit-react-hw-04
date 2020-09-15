import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});

export function Button({ handleFetch }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <button className="Button" type="button" onClick={handleFetch}>
      Load more
    </button>
  );
}

Button.propTypes = {};
