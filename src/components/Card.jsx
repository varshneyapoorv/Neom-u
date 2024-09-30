import React from "react";
import { TbWorld } from "react-icons/tb";

const Card = ({ name }) => {
  return (
    <div className="flex gap-5">
      <div className="flex w-[45vw] border-[1px] border-solid border-black h-[45vh] rounded-lg">
        <div
          className="w-[38%] bg-cover bg-center rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://vid.alarabiya.net/images/2023/05/09/d361d2eb-f13e-40e2-bdd8-c031071f5ead/d361d2eb-f13e-40e2-bdd8-c031071f5ead.jpg?width=372&format=jpg")',
          }}
        ></div>
        {/* <div className="flex  w-3/5 p-4"></div> */}

        <div className="pl-[15px] mt-[15px] w-[62%]">
          <h3 className="text-[1.3rem] font-[kanit-300]">{name}</h3>

          <div className="flex gap-1 mt-[1px]">
            <div class="flex  text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            <h1 className="text-[12px] mt-[-1px]">
              5.0 &nbsp;&nbsp;(23 Reviews)
            </h1>
          </div>

          <p className="text-[13px] mt-[11px] leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            repudiandae? Magnam dolorum odit hic, harum perspiciatis quasi
            earum....{" "}
            <span>
              <a className="text-[#f76b82] underline font-semibold">
                read more
              </a>
            </span>
          </p>

          <ul className="mt-[20px]">
            <li className="flex  gap-3 mt-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF69B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2l-.01 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-3.01L18 2h-2v4H8V2H6zm12 6v2h-2V8h2zm-10 0v2H6V8h2zm4 0v2h-2V8h2z" />
              </svg>

              <h1 className="text-[11px]">Nov-10, 10:30 AM-Nov 29. 6:30PM</h1>
            </li>
            <li className="flex  gap-3 mt-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF69B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.04 4.48 8.55 6.62 11.23a1 1 0 0 0 1.76 0C14.52 17.55 19 12.04 19 9c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2" />
              </svg>

              <h1 className="text-[11px]">Sindalah City</h1>
            </li>

            <li className="flex  gap-3 mt-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF69B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 17l-5-5 5-5" />
                <path d="M14 7l5 5-5 5" />
              </svg>

              <h1 className="text-[11px]">Golf</h1>
            </li>
          </ul>

          <div className="flex gap-2 mt-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <circle cx="9" cy="10" r="1.5" fill="white" />
              <circle cx="15" cy="10" r="1.5" fill="white" />
              <path
                d="M8 15c1.5 1.5 3.5 1.5 5 0"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <h3 className="text-[12px]">Overwhelmed vibes are coming here</h3>

            <h3 className="text-[13px] font:bold  font-[kanit] ml-[65px]">
              Scheduled
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
