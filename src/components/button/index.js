import React from "react";

const SharedButton = ({ buttonText, emitEvent }) => {
  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };

  return (
    <button onClick={() => submitEvent()} className="buttonComponent">
      {buttonText}
    </button>
  );
};

export default SharedButton;
