import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./Loader.scss";

const Loader = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1970px",
          position: "absolute",
          top: "60px",
          zIndex: "999",
        }}
      >
        <LinearProgress />
      </Box>
    </div>
  );
};

export default Loader;
