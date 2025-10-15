// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   return (
//     <div>
//       <Paper >
//         <Typography>Login</Typography>
//         <form>
//           <TextField
//             label="Email"
//             type="email"
//             required
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <TextField
//             label="Password"
//             type="password"
//             required
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  GitHub,
  Google,
} from "@mui/icons-material";
import AuthLayout from "../components/common/AuthLayout";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const { login } = useAuth();
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "remember" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    login(formData.email, formData.password);
    // Add your login logic here
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
    >
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
          >
            Login to your account
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Enter your credentials to access your account
          </Typography>

          {/* Social login buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHub />}
              sx={{
                borderColor: "rgba(124, 58, 237, 0.3)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: "rgba(124, 58, 237, 0.05)",
                },
              }}
            >
              Github
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{
                borderColor: "rgba(124, 58, 237, 0.3)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: "rgba(124, 58, 237, 0.05)",
                },
              }}
            >
              Google
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="caption" color="text.secondary">
              OR CONTINUE WITH
            </Typography>
          </Divider>

          {/* Login form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "text.secondary" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
                mb: 3,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    sx={{
                      color: "primary.light",
                      "&.Mui-checked": {
                        color: "primary.main",
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" color="text.secondary">
                    Remember me
                  </Typography>
                }
              />
              <Link
                href="#"
                underline="hover"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Sign In
            </Button>

            <Typography variant="body2" align="center" color="text.secondary">
              Don't have an account?{" "}
              <Link
                component={RouterLink}
                to="/register"
                underline="hover"
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Login;
