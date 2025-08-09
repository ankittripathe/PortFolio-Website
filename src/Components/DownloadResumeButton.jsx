import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FiDownload } from "react-icons/fi";

export default function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/files/ANKIT.pdf"; // must be inside public/files
      link.download = "ANKIT.pdf";
      document.body.appendChild(link); // ensure it’s in DOM
      link.click();
      document.body.removeChild(link);

      setLoading(false);
    }, 3000);
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
        "&:hover": { backgroundColor: "#222" },
      }}
    >
      {loading ? "Downloading..." : "Resume"}
    </Button>
  );
}
