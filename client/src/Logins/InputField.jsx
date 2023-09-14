import React from "react";

export default function InputField(props) {
  return (
    <div>
      <input
        className=""
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(error) => props.onChange(error.target.value)}
      />
    </div>
  );
}
