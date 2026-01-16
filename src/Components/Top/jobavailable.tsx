import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const JobCompanies = () => {
  const jobs = [
    "DevOps Engineering",
    "Fullstack Developer",
    "Cyber Security",
    "Technical lead",
    "Business analyst",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "QA Engineer",
    "Product Manager",
  ];

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const visibleJobs = jobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < jobs.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className="relative flex items-center justify-center px-8 py-12">
      {/* Pink Background */}
      <div className="absolute inset-0 flex justify-center z-0">
        <div className="bg-pink-50 rounded-3xl w-[90%] max-w-[1200px] h-[400px]"></div>
      </div>

      {/* Content on top */}
      <div className="relative flex flex-col md:flex-row w-full items-center justify-center px-4 md:px-8 gap-6 z-10">
        
        {/* LEFT IMAGE & TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
          <img
            src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
            alt="Jobs Illustration"
            className="h-52 w-auto"
          />
          <h1 className="font-bold text-3xl">
            Discover Jobs across <br /> Popular roles
          </h1>
          <p className="text-gray-700">
            Select a role and we'll show you relevant jobs for it!
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative md:w-[400px] mt-[-30px] z-10">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 h-[300px] rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {visibleJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 flex flex-col items-start justify-center shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-sm">{job}</h4>
                  <p className="text-gray-400 text-xs">2.8k jobs</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
          >
            <AiOutlineRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCompanies;
