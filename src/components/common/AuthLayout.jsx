import { Box, Container, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// Animated blob keyframes
const blobAnimation = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
`;

// Styled background container
const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(2),
}));

// Animated blob
const AnimatedBlob = styled(Box)(({ delay = 0 }) => ({
  position: "absolute",
  width: "320px",
  height: "320px",
  borderRadius: "50%",
  mixBlendMode: "multiply",
  filter: "blur(60px)",
  opacity: 0.3,
  animation: `${blobAnimation} 7s infinite`,
  animationDelay: `${delay}s`,
}));

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <BackgroundContainer>
      {/* Animated background blobs */}
      <AnimatedBlob
        sx={{
          top: "-160px",
          right: "-160px",
          backgroundColor: "#a855f7",
        }}
        delay={0}
      />
      <AnimatedBlob
        sx={{
          bottom: "-160px",
          left: "-160px",
          backgroundColor: "#7c3aed",
        }}
        delay={2}
      />
      <AnimatedBlob
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#c084fc",
        }}
        delay={4}
      />

      {/* Main content */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 1,
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        {children}
      </Container>
    </BackgroundContainer>
  );
};

export default AuthLayout;
