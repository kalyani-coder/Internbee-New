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
    case "alert":
      alertClasses = " text-red";
      alertTextColor = "text-red-700";
      break;
    default:
      alertClasses = " text-white";
      alertTextColor = "text-gray-700";
      break;
  }

  return (
    <div role="alert">
      <div className={`color-red ${alertClasses} font-bold`}>
        {type === "success"
          ? "Success"
          : type === "error"
          ? "Error"
          : "Alert"}
      </div>
      <div
        className={` px-4 py-3 ${alertTextColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Alert;
