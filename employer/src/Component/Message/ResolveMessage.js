import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ResolveMessage() {
  const [reply, setReply] = useState("");

  const Id = useParams().id;
  console.log(Id);

  const handlePatch = async () => {
    try {
      const response = await axios.patch(
        `https://internbee-backend-apis.onrender.com/api/enquiry/${Id}`,
        {
          EnquiryStatus: "resolved",
          EnquiryReply: reply,
        }
      );

      // Check the response and handle accordingly (e.g., show a success message)
      console.log("Enquiry Reply Patched:", response.data);
      alert("Enquiry Reply Patched Successfully!");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error patching Enquiry Reply:", error);
      alert("Error patching Enquiry Reply!");
    }
  };

  return (
    <div>
        
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Write a Reply</h1>
          <textarea
            className="w-full h-40 border rounded p-2 mb-4"
            onChange={(e) => {
              setReply(e.target.value);
            }}
          ></textarea>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={handlePatch}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResolveMessage;
