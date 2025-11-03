import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateJob } from "../store/slices/jobSlice";

function EditJob({ open, handleClose, job }) {
  const initialState = {
    position: "",
    company: "",
    location: "",
    salary: "",
    jobURL: "",
    status: "",
    dateApplied: "",
    phone: "",
    email: "",
    notes: "",
    id: "",
  };
  console.log(job, "jooob----b");
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    setFormData(job);
  }, [job]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    dispatch(updateJob(formData));
    handleClose();
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "16px", // or '1rem', '20px', etc.
            width: "500px",
          },
        }}
      >
        <DialogTitle>{"Edit Job"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"Company name"}
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"position name"}
              value={formData.position}
              name="position"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"location"}
              value={formData.location}
              onChange={handleChange}
              name="location"
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"salary"}
              value={formData.salary}
              onChange={handleChange}
              name="salary"
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"jobURL"}
              value={formData.jobURL}
              onChange={handleChange}
              name="jobURL"
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"jobURL"}
              value={formData.jobURL}
              onChange={handleChange}
              name="jobURL"
            />
            <TextField
              sx={{ marginTop: "5px" }}
              fullWidth
              label={"dateApplied"}
              type="date"
              value={formData.dateApplied}
              onChange={handleChange}
              name="dateApplied"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.status}
                label="Status"
                name="status"
                onChange={handleChange}
              >
                <MenuItem value={1}>Applied</MenuItem>
                <MenuItem value={2}>Rejected</MenuItem>
                <MenuItem value={3}>Accepted</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label={"Phone number"}
              value={formData.phone}
              name="phone"
              onChange={handleChange}
            />
            <TextField
              label={"Email"}
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EditJob;
