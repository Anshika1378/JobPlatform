import { useEffect, useRef, useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";


// 📍 Real Job Hubs (India)
const locations = [
  "Remote",
  "Hybrid",
  "Bangalore",
  "Delhi NCR",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Gurgaon",
  "Noida",
  "Faridabad",
  "Ghaziabad",
  "Chandigarh",
  "Ahmedabad",
  "Vadodara",
  "Surat",
  "Coimbatore",
  "Kochi",
  "Trivandrum",
  "Vizag",
  "Vijayawada",
  "Kolkata",
  "Bhubaneswar",
  "Indore",
  "Jaipur",
  "Mohali",
];

function MainHead() {
  // 🔹 Location dropdown state
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  // 🔹 Ref for outside click detection
  const locationRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Filtered locations
  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto px-3 flex flex-col items-center">
      {/* Badge */}
      <h1 className="mt-14 rounded-2xl border-2 border-blue-700 bg-blue-100 text-blue-600 font-bold px-4">
        1+ jobs available
      </h1>

      {/* Heading */}
      <h1 className="text-black font-bold text-2xl sm:text-4xl mt-2 text-center">
        Your ideal job is{" "}
        <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 bg-clip-text text-transparent">
          just click away
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-base sm:text-sm text-center">
        Discover opportunities from top companies and kickstart your career
        <br />
        journey
      </p>

      {/* 🔍 Search Bar */}
      <div className="mt-6 w-full max-w-4xl rounded-2xl shadow-lg">
        <div className="w-full bg-white rounded-2xl border border-gray-200 flex items-center">

          {/* Skills */}
          <div className="relative flex items-center min-w-[220px] flex-1">
            <CiSearch className="absolute left-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Skills / Designation / Companies"
              className="w-full h-10 sm:h-12 pl-9 pr-3 outline-none text-sm"
            />
          </div>

          <div className="h-6 w-px bg-gray-200"></div>

          {/* Experience */}
          <div className="min-w-[160px] flex-1">
            <select className="w-full h-10 sm:h-12 px-3 outline-none text-sm text-gray-500">
              <option value="">Experience</option>
              <option>Fresher</option>
              <option>0 - 3 Years</option>
              <option>3 - 5 Years</option>
              <option>5 - 8 Years</option>
              <option>8 - 12 Years</option>
              <option>12 - 18 Years</option>
              <option>18 - 25 Years</option>
              <option>25+ Years</option>
            </select>
          </div>

          <div className="h-6 w-px bg-gray-200"></div>

          {/* 📍 Location (Searchable + Outside Click Close) */}
          <div
            ref={locationRef}
            className="relative min-w-[180px] flex-1"
          >
            <div
              onClick={() => setLocationOpen((prev) => !prev)}
              className="flex items-center h-10 sm:h-12 pl-9 pr-3 cursor-pointer text-sm text-gray-500"
            >
              <CiLocationOn className="absolute left-3 text-gray-400 text-lg" />
              {selectedLocation || "Location"}
            </div>

            {locationOpen && (
              <div className="absolute z-30 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                
                {/* Search input */}
                <input
                  type="text"
                  placeholder="Search location..."
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  className="w-full px-3 py-2 border-b outline-none text-sm"
                />

                {/* Location list */}
                <div className="max-h-48 overflow-y-auto">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((loc) => (
                      <div
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                          setLocationSearch("");
                        }}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
                      >
                        {loc}
                      </div>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-sm text-gray-400">
                      No results found
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="min-w-[120px] h-10 sm:h-12 px-5 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold text-sm rounded-r-2xl hover:from-blue-800 hover:to-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
