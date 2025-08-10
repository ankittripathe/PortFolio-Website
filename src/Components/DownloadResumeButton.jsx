import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FiDownload } from "react-icons/fi";

export default function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const link = document.createElement("a");
    link.href = "/resume/ANKIT.pdf";
    link.download = "ANKIT.pdf";
    link.click();

    setTimeout(() => {
      setLoading(false);
    }, 3500); // simulate download
  };

  return (
    <Button
      variant="contained"
      startIcon={
        loading ? (
          <CircularProgress size={22} sx={{ color: "white" }} />
        ) : (
          <FiDownload style={{ fontSize: "22px" }} />
        )
      }
      onClick={handleDownload}
      sx={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "400",
        fontFamily: "Poppins",
        paddingInline: "10px",
        fontSize: "16px",
        paddingBlock: "4px",
        textTransform: "none",
        margin: 0,
        minWidth: "unset", // remove default button width
        height: "36px", // same as social icons
        lineHeight: "1.2", // align text vertically
      }}
    >
      {loading ? "wait..." : "Resume"}
    </Button>
  );
}
