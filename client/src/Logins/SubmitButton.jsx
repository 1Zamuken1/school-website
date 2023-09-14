import React from "react";

export default function SubmitButton(props) {
  return (
    <div>
      <button
        className="bg-Crystal"
        disabled={props.disabled}
        onClick={() => props.onClick()}
      >
        {props.text}
      </button>
    </div>
  );
}
