import React, { memo } from "react";

const InputForm = ({ label, id }) => {
  return (
    <div >
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="outline-non bg-blue-50 p-2 rounded-md w-full mt-1"
      />
    </div>
  );
};

export default memo(InputForm);
