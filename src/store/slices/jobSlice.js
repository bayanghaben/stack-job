import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const localStorageKey = "jobs";
const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [] },
  reducers: {
    fetchJobs: (state) => {
      const data = localStorage.getItem(localStorageKey)
        ? localStorage.getItem(localStorageKey)
        : [];
      state.jobs = data ? JSON.parse(data) : [];
    },
    addJob: (state, action) => {
      const newJob = { ...action.payload, id: Date.now() };
      state.jobs.push(newJob);
      localStorage.setItem(localStorageKey, JSON.stringify(state.jobs));
      toast.success("Job Added Successfully");
    },
    updateJob: (state, action) => {
      const updatedJob = state.jobs.find((j) => j.id == action.payload.id);
      state.jobs = [...state.jobs, updatedJob];
      localStorage.setItem(localStorageKey, JSON.stringify(state.jobs));
      toast.success("Job Updated Successfully");
    },
    deleteJob: (state, action) => {
      const updatedJobs = state.jobs.filter((j) => j.id !== action.payload);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedJobs));
      toast.success("Job Deleted Successfully");
    },
  },
});

export const { fetchJobs, addJob, deleteJob, updateJob } = jobSlice.actions;
export default jobSlice.reducer;
