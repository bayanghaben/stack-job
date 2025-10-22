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
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
function AddJob() {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    salary: "",
    jobURL: "",
    status: "applied",
    dateApplied: "",
    contact: [{ mathod: "", value: "" }],
    notes: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleContactChange = (index, feild, value) => {
    const updatedcontacts = [...formData.contact];
    updatedcontacts[index][feild] = value;
    setFormData({ ...formData, contact: updatedcontacts });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h1"> Add New Job Application</Typography>
      <Card sx={{ marginTop: "20px" }}>
        <CardContent>
          <form onSubmit={handleSubmit} style={{ padding: "5px" }}>
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
            />
            <Box
              py={1}
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",

                gap: "5px",
              }}
            >
              {formData.contact.map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: "5px",
                    width: "85%",
                  }}
                >
                  <TextField
                    sx={{ width: "25%" }}
                    label={"Contact method"}
                    value={contact.mathod}
                    onChange={(e) =>
                      handleContactChange(index, "method", e.target.value)
                    }
                  />
                  <TextField
                    sx={{ width: "75%" }}
                    label={"Contact Value"}
                    value={contact.value}
                    onChange={(e) =>
                      handleContactChange(index, "value", e.target.value)
                    }
                  />
                </Box>
              ))}{" "}
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "15%",
                  backgroundColor: "#0F172A",
                  color: "#fff",
                  height: "54px",
                  alignItems: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <AddIcon />
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddJob;
