import { createSlice } from '@reduxjs/toolkit'

const localStorageKey = 'jobs'
const jobSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [] },
  reducers: {
    fetchJobs: (state) => {
      const data = localStorage.getItem(localStorageKey)
      try {
        state.jobs = data ? JSON.parse(data) : []
      } catch (error) {
        console.error('Error parsing jobs from localStorage:', error)
        state.jobs = []
      }
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload)
      localStorage.setItem(localStorageKey, JSON.stringify(state.jobs))
    },
    updateJob: (state, action) => {
      const updatedJobs = state.jobs.map((j) =>
        j.id === action.payload.id ? action.payload : j
      )
      state.jobs = updatedJobs
      localStorage.setItem(localStorageKey, JSON.stringify(updatedJobs))
    },
    deleteJob: (state, action) => {
      const updatedJobs = state.jobs.filter((j) => j.id !== action.payload)
      state.jobs = updatedJobs
      localStorage.setItem(localStorageKey, JSON.stringify(updatedJobs))
    },
  },
})

export const { fetchJobs, addJob, deleteJob, updateJob } = jobSlice.actions
export default jobSlice.reducer
