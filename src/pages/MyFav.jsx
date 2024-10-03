import React, { useEffect, useState } from "react";
import SmallCard from "../components/SmallCard";

import BigCard from "../components/BigCard";
import Heading from "../components/Heading";

const MyFav = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch("/constants/MyFavorite/SmallCardData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/constants/MyFavorite/BigCardData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData2(data);
      });
  }, []);

  return (
    <>
      {/* SECTION - 1 */}

      <section>
        <Heading text={"Good morning Charlie!"} />
        <p className="text-base font-serif text-[#000000c5] mt-[10px] text-[17px] mb-[30px]">
          You have short listed 8 events to join later.
        </p>

        <div className="grid grid-cols-5 gap-[10px]">
          {data.map((item) => {
            return (
              <>
                <div className="relative">
                  <SmallCard key={item.id} url={item.path} title={item.title} />
                  <button className="text-[red] bg-white top-4 right-7 rounded-[10px] px-[10px] py-[2px] text-[13px] absolute">
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* SECTION-2 */}
      <section>
        <Heading text={"Charlie, we have find some recommendation for you"} />

        <div className="flex gap-[20px] overflow-x-auto w-auto">
          {data2.map((data) => {
            return <BigCard key={data.id} data={data} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MyFav;
