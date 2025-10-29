import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs, deleteJob, updateJob } from '../store/slices/jobSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector((state) => state.jobs.jobs)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({})

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'applied':
        return 'bg-blue-500/20 text-blue-400'
      case 'interview':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'rejected':
        return 'bg-red-500/20 text-red-400'
      case 'accepted':
        return 'bg-green-500/20 text-green-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  const handleDelete = (id) => {
    if (
      window.confirm('Are you sure you want to delete this job application?')
    ) {
      dispatch(deleteJob(id))
      toast.success('Job application deleted!')
    }
  }

  const handleEditClick = (job) => {
    setEditFormData(job)
    setEditDialogOpen(true)
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEditSave = () => {
    dispatch(updateJob(editFormData))
    setEditDialogOpen(false)
    toast.success('Job application updated!')
  }

  const handleAddNewJob = () => {
    navigate('/new-job')
  }
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Job Applications
        </h2>
        <button
          onClick={handleAddNewJob}
          className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2'
        >
          + Add New Job
        </button>
      </div>

      {data.length === 0 ? (
        <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-12 text-center'>
          <Box className='w-16 h-16 text-slate-600 mx-auto mb-4' />
          <p className='text-slate-400 text-lg'>No job applications found</p>
          <p className='text-slate-500 text-sm mt-2'>
            Click "Add New Job" to create your first job application
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {data.map((job) => (
            <div
              key={job.id}
              className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all'
            >
              <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-start justify-between mb-2'>
                    <div>
                      <h3 className='text-xl font-semibold text-white'>
                        {job.position}
                      </h3>
                      <p className='text-indigo-400 font-medium'>
                        {job.company}
                      </p>
                    </div>
                    <span
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status?.charAt(0).toUpperCase() +
                        job.status?.slice(1)}
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-4 text-sm text-slate-400 mt-3'>
                    <span className='flex items-center gap-1'>
                      📍 {job.location || 'N/A'}
                    </span>
                    <span className='flex items-center gap-1'>
                      💰 {job.salary || 'N/A'}
                    </span>
                    <span className='flex items-center gap-1'>
                      📅 Applied:{' '}
                      {job.dateApplied
                        ? new Date(job.dateApplied).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </div>
                  {job.notes && (
                    <p className='text-slate-400 text-sm mt-2'>
                      📝 {job.notes}
                    </p>
                  )}
                </div>
                <div className='flex gap-3'>
                  <button
                    onClick={() => handleEditClick(job)}
                    className='bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2'
                  >
                    <EditIcon fontSize='small' />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className='bg-red-600/50 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2'
                  >
                    <DeleteIcon fontSize='small' />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>Edit Job Application</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label='Company'
              name='company'
              value={editFormData.company || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Position'
              name='position'
              value={editFormData.position || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Location'
              name='location'
              value={editFormData.location || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Salary'
              name='salary'
              value={editFormData.salary || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Job URL'
              name='jobURL'
              value={editFormData.jobURL || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Date Applied'
              name='dateApplied'
              type='date'
              value={editFormData.dateApplied || ''}
              onChange={handleEditChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              select
              label='Status'
              name='status'
              value={editFormData.status || 'applied'}
              onChange={handleEditChange}
            >
              <MenuItem value='applied'>Applied</MenuItem>
              <MenuItem value='interview'>Interview</MenuItem>
              <MenuItem value='rejected'>Rejected</MenuItem>
              <MenuItem value='accepted'>Accepted</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label='Phone'
              name='phone'
              value={editFormData.phone || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Email'
              name='email'
              value={editFormData.email || ''}
              onChange={handleEditChange}
            />
            <TextField
              fullWidth
              label='Notes'
              name='notes'
              multiline
              rows={4}
              value={editFormData.notes || ''}
              onChange={handleEditChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave} variant='contained'>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Home
