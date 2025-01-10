import React from "react";
import Smart from "../assets/Image/Smart.jpg";
import Product14 from "../assets/Image/Product14.webp";
const Card = () => {
  return (
    <div>
      <div className=" flex flex-grow p-6 space-x-5">
        <div className=" bg-white shadow-xl  rounded-lg max-w-[320px]  mt-2  border  p-2">
          <div className=" flex   flex-row justify-between items-center">
            <div className="  text-gray-500">
              <span>&#9829;</span> 239
            </div>
            <div className=" text-gray-100 bg-orange-500 w-20 text-center py-1 rounded-md">
              <span>30% Off</span>
            </div>
          </div>
          {/*  main card section  */}

          <div className=" flex justify-center items-center">
            <img
              src={Smart}
              className=" object-cover object-center  overflow-hidden h-48 "
              alt=""
            />
          </div>
          {/*  image end  */}
          {/*  Paragraph */}
          <div className=" text-center ">
            {" "}
            <span className=" font-semibold">Water proof Smart Watch</span>
            <br></br>
            <span className=" font-semibold">
              <span>Moniter fro iOS And Android </span>
            </span>
            <br></br>
            <span className=" font-medium text-gray-400"> Smart watch </span>
          </div>

          <div className=" mt-12 flex justify-evenly">
            <button className=" py-1  text-center bg-green-500 p-2 px-4 rounded-md text-white">
              {" "}
              Buy Now
            </button>
            <button className=" text-gray-400  border  pt-1 p-2 font-semibold rounded-md  border-gray-500">
              Add To Card
            </button>
          </div>
        </div>
        {/*  Crad to 2 */}
        <div className=" bg-white shadow-xl mt-3 rounded-lg max-w-[320px]   border  p-2">
          <div className=" flex   flex-row justify-between items-center">
            <div className="  text-gray-500">
              <span>&#9829;</span> 714
            </div>
            <div className=" text-gray-100 bg-blue-500 w-44 text-center py-1 rounded-md">
              <span className=" inline"> New Collection</span>
            </div>
          </div>
          {/*  main card section  */}

          <div className=" mt-5 flex justify-center items-center">
            <img
              src={Product14}
              className=" object-cover object-center  overflow-hidden h-48 "
              alt=""
            />
          </div>
          {/*  image end  */}
          {/*  Paragraph */}
          <div className=" text-center  mt-6">
            {" "}
            <span className=" font-semibold">Nike Running Man Shoes </span>
            <br></br>
            <span className=" font-medium text-gray-400 mt-4"> Running </span>
          </div>
          <div className=" text-center ">
            <span className=" text-center font-semibold    text-2xl text-gray-500">
              {" "}
              Choice Size{" "}
            </span>
            <div className=" mb-3 flex flex-row space-x-1">
              <div className=" border  text-center  border-gray-700 h-8 w-8 rounded-full  font-medium bg-white">
                12
              </div>
              <div className=" border  text-center  border-gray-700 h-8 w-8 rounded-full  font-medium bg-white">
                16
              </div>
              <div className=" border  text-center  border-gray-700 h-8 w-8 rounded-full  font-medium bg-white">
                18
              </div>
              <div className=" border  text-center  border-gray-700 h-8 w-8 rounded-full  font-medium bg-white">
                15
              </div>{" "}
              <div className=" border  text-center  border-gray-700 h-8 w-8 rounded-full  font-medium bg-white">
                10
              </div>
            </div>
          </div>

          <div className="  flex justify-evenly">
            <button className=" py-1  text-center bg-pink-500 p-2 px-4 rounded-md text-white">
              {" "}
              Buy Now
            </button>
            <button className=" text-gray-400  border  pt-1 p-2 font-semibold rounded-md  border-gray-500">
              {" "}
              Add To Card{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
