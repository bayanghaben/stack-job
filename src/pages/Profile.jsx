import React, { useState } from 'react'
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
} from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import PersonIcon from '@mui/icons-material/Person'

function Profile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    // Update user in localStorage
    const updatedUser = { ...user, ...profileData }
    localStorage.setItem('user', JSON.stringify(updatedUser))

    // Update in users array
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u))
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    toast.success('Profile updated successfully!')
    setIsEditing(false)
  }

  const handleCancel = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      location: user?.location || '',
      bio: user?.bio || '',
    })
    setIsEditing(false)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant='h4' sx={{ mb: 3, color: 'white' }}>
        My Profile
      </Typography>

      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Avatar sx={{ width: 100, height: 100, mb: 2, bgcolor: '#6366f1' }}>
              <PersonIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant='h5'>{profileData.name || 'User'}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {profileData.email}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label='Name'
              name='name'
              value={profileData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <TextField
              fullWidth
              label='Email'
              name='email'
              value={profileData.email}
              onChange={handleChange}
              disabled={!isEditing}
              type='email'
            />
            <TextField
              fullWidth
              label='Phone'
              name='phone'
              value={profileData.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <TextField
              fullWidth
              label='Location'
              name='location'
              value={profileData.location}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <TextField
              fullWidth
              label='Bio'
              name='bio'
              value={profileData.bio}
              onChange={handleChange}
              disabled={!isEditing}
              multiline
              rows={4}
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {!isEditing ? (
                <Button
                  variant='contained'
                  fullWidth
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                  <Button variant='outlined' fullWidth onClick={handleCancel}>
                    Cancel
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
