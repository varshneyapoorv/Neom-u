import React from "react";

function Map() {
  return (
    <>
      <div className="gap-4  mr-20">
            <h2 className="text-black mt-10 text-4xl flex items-center justify-center ">Find events on Map</h2>
            <div className="mt-10 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.517347331312!2d34.705845773657096!3d28.047347459205383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15aca53e4bce93d9%3A0x31c070acff71674b!2sNEOM%20Sindalah%20Island!5e1!3m2!1sen!2sin!4v1727401463191!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-10"></div>
          </div>
    </>
  );
}

export default Map;
