import { PlusOneOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addJob } from "../store/slices/jobSlice";
function AddJob() {
  const dispatch = useDispatch();
  const initialState = {
    position: "",
    company: "",
    location: "",
    salary: "",
    jobURL: "",
    status: "applied",
    dateApplied: "",
    phone: "",
    email: "",
    notes: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    dispatch(addJob(formData));
    setFormData(initialState);
  };
  return (
    <div style={{ padding: "20px", margin: "auto" }}>
      <Typography variant="h1"> Add New Job Application</Typography>
      <Card sx={{ marginTop: "20px" }}>
        <CardContent>
          <form
            onSubmit={handleSubmitJob}
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
            <Button
              variant="contained"
              sx={{ margin: "" }}
              onClick={handleSubmitJob}
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddJob;
