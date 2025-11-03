import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function JobDetails({ open, handleClose, job }) {
  const [jobToView, setJobToView] = useState();
  console.log(job);
  useEffect(() => {
    setJobToView(job);
  }, [job]);

  if (!jobToView) {
    return (
      <Dialog>
        <DialogContent> no job exist</DialogContent>
      </Dialog>
    );
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "16px", // or '1rem', '20px', etc.
          width: "600px",
          height: "70vh",
        },
      }}
    >
      <DialogContent
        sx={{
          height: "100%",
        }}
      >
        <div
          key={jobToView?.id}
          className="max-h-min mt-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer group"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Typography className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {jobToView.position}
                  </Typography>
                  <Typography className="text-indigo-400 font-medium">
                    {jobToView.company}
                  </Typography>
                </div>
              </div>
              <Box className="flex flex-wrap flex-col gap-4 text-sm text-slate-400 mt-3">
                <div className="flex items-center gap-1">
                  📍 {jobToView.location}
                </div>
                <div className="flex items-center gap-1">
                  💰 {jobToView.salary}
                </div>
                <div className="flex items-center gap-1">
                  📅 Applied:{" "}
                  {new Date(jobToView.dateApplied).toLocaleDateString()}
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    📞:{jobToView?.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    📩:{jobToView?.email}
                  </div>
                </div>
                <div>
                  <span className="flex items-center gap-1">
                    Notes: {jobToView?.notes}
                  </span>
                </div>
                <Button className="flex items-center gap-1" variant="contained">
                  <a href={jobToView?.jobURL}>View Job </a>
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default JobDetails;
