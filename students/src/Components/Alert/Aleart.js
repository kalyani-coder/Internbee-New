import React from "react";

const Alert = ({ type, children }) => {
  let alertClasses = "";
  let alertTextColor = "";

  // Set classes and text color based on the type of alert
  switch (type) {
    case "success":
      alertClasses = " text-white";
      alertTextColor = "text-green-700";
      break;
    case "error":
      alertClasses = " text-white";
      alertTextColor = "text-red-700";
      break;
    default:
      alertClasses = " text-white";
      alertTextColor = "text-gray-700";
      break;
  }

  return (
    <div role="alert">
      <div className={`${alertClasses} font-bold rounded-t px-4 py-2`}>
        {type === "success"
          ? "Success"
          : type === "error"
          ? "Error"
          : "Alert"}
      </div>
      <div
        className={`border border-t-0 rounded-b px-4 py-3 ${alertTextColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Alert;
