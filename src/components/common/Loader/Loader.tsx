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
          top: "50%",
          left: "50%",
          zIndex: "999",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="loader"></div>
      </Box>
    </div>
  );
};

export default Loader;
