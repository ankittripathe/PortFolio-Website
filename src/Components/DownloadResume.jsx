import "../Components/Styles/DownloadResume.css";

const DownloadResume = () => {
  return (
    <button className="download-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="white"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v4h16v-4M12 4v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>
      Resume
    </button>
  );
};

export default DownloadResume;
