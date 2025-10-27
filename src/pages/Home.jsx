import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/slices/jobSlice";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs.jobs);
  console.log(data, "jobs");
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div>
      {" "}
      {data.length === 0 ? (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-12 text-center">
          <Box className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">No job applications found</p>
          <p className="text-slate-500 text-sm mt-2">
            Try adjusting your search or add a new job application
          </p>
        </div>
      ) : (
        data.map((job) => (
          <div
            key={job.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {job.position}
                    </h3>
                    <p className="text-indigo-400 font-medium">{job.company}</p>
                  </div>
                  <span
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {/* {getStatusIcon(job.status)} */}
                    {/* {job.status.charAt(0).toUpperCase() + job.status.slice(1)} */}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    📍 {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    💰 {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    📅 Applied: {new Date(job.dateApplied).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
