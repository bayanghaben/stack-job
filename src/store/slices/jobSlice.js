import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "jobs";
const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [] },
  reducers: {
    fetchJobs: (state) => {
      const data = localStorage.getItem(localStorageKey)
        ? localStorage.getItem(localStorageKey)
        : [];
      state.jobs = JSON.parse(data);
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
      localStorage.setItem(localStorageKey, JSON.stringify(state.jobs));
    },
    updateJob: (state, action) => {
      const updatedJob = state.jobs.find((j) => j.id == action.payload.id);
      state.jobs = [...state.jobs, updatedJob];
      localStorage.setItem(localStorageKey, JSON.stringify(state.jobs));
    },
    deleteJob: (state, action) => {
      const updatedJobs = state.jobs.filter((j) => j.id !== action.payload);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedJobs));
    },
  },
});

export const { fetchJobs, addJob, deleteJob, updateJob } = jobSlice.actions;
export default jobSlice.reducer;
