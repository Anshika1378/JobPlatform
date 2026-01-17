import { CiLocationOn, CiSearch } from "react-icons/ci";
// import CategoryCompany from "./Category";

function MainHead() {
  return (
    <>
      <div className="container mx-auto px-3 flex flex-col items-center">
        <h1 className="mt-14 rounded-2xl border-2 border-blue-700 bg-blue-100 text-blue-600 font-bold px-4">1+ jobs available</h1>
        <h1 className="text-black font-bold text-2xl sm:text-4xl mt-2  text-center">
          Your ideal job is{" "}
          <span
            className="
              bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900
              bg-clip-text text-transparent
            "
          >
            just click away
          </span>
        </h1>

        <p className="mt-2 text-base sm:text-sm text-center">
          Discover opportunities from top companies and kickstart your carrer <br />journey 
        </p>

        {/* 🔍 Search Bar – always row */}
        <div className="mt-6 w-full max-w-4xl  rounded-2xl shadow-lg  flex items-center overflow-x-auto">
          {/* Skills */}
          <div
            className="
              mt-6 w-full max-w-6xl
              bg-white
              rounded-2xl
              shadow-lg
              border border-gray-200
              flex items-center
              overflow-x-auto
            "
          >
            {/* Skills */}
            <div className="relative flex items-center min-w-[220px] flex-1">
              <CiSearch className="absolute left-3 text-gray-400 text-lg sm:text-xl" />
              <input
                type="text"
                placeholder="Skills / Designation / Companies"
                className=" w-full h-10 sm:h-12 pl-9 sm:pl-10 pr-3  outline-none bg-white text-sm sm:text-base "
              />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Experience */}
            <div className="min-w-[160px] flex-1">
              <select
                className="
                  w-full h-10 sm:h-12
                  px-2 sm:px-3
                  outline-none
                  bg-white
                  text-sm sm:text-base
                  text-gray-500
                "
              >
                <option value="">Experience</option>
                <option>Fresher</option>
                <option>0 - 3 Years</option>
                <option>3 - s Years</option>
                <option>5 - 8 Years</option>
                <option>8 - 12 Years</option>
                <option>12 - 18 Years</option>
                <option>18 - 25 Years</option>
                <option>25+ Years</option>
              </select>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Location */}
            <div className="relative flex items-center min-w-[160px] flex-1">
              <CiLocationOn className="absolute left-3 text-gray-400 text-lg sm:text-xl" />
              <input
                type="text"
                placeholder="Location"
                className="
                  w-full h-10 sm:h-12
                  pl-9 sm:pl-10 pr-3
                  outline-none
                  bg-white
                  text-sm sm:text-base
                "
              />
            </div>

            {/* Search Button */}
            <button
              className="
                min-w-[120px]
                h-10 sm:h-12
                px-5
                bg-gradient-to-r from-blue-900 to-blue-800
                text-white
                font-semibold
                text-sm sm:text-base
                rounded-r-2xl
                hover:from-blue-800 hover:to-blue-700
                transition
              "
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-[8%] w-full max-w-4xl ">
          <img
            src="https://static.naukimg.com/s/0/0/i/naukri-pro/desktop/naukripro-newyear-banner-homepage.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default MainHead;
