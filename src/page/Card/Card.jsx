import React from "react";

const Card = () => {
  return (
    <div className="p-6">
      <div
        className=" max-w-md mx-auto border shadow-lg  bg-white  mt-9 p-4 rounded-md "
      >
        <div className=" text-purple-700 font-bold">Growth</div>
        <div>
          <span className="font-medium">
            {" "}
            All the extract fro your growing team.
          </span>
        </div>
        <div className="mt-6  flex  space-x-2">
          <span className="text-4xl font-bold">$49</span>
          <div>
            <spna className="text-gray-600 font-medium">USD</spna>
            <br></br>
            <spna className="text-gray-600 font-medium">Per Month</spna>
          </div>
        </div>
        <div className=" mt-6">
          <button className=" bg-purple-600 py-2 p-3 rounded-lg text-white font-medium">
            {" "}
            Start a free train{" "}
          </button>
        </div>
        <div className=" mt-6 space-y-2">
          <span className=" font-medium">Start selling with :</span>
        </div>
        <div className=" space-y-3">
          <span className="font-medium text-gray-600">+ Custom domains</span>
          <br></br>
          <span className="font-medium text-gray-600 ">
            + Edge content Delivery
          </span>
          <br></br>
          <span className="font-medium text-gray-600">+ Advance anlytics</span>
          <br></br>

          <span className="font-medium text-gray-600">
            + Quartelry worlshops
          </span>
          <br></br>
          <span className="font-medium text-gray-600">
            + Single sign-on(SSO)
          </span>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Card;
