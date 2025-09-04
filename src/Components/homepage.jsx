import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen min-h-screen relative bg-black overflow-y-auto">
      {/* 🔹 Video Section */}
      <video
        className="w-full h-[40vh] relative object-cover homepage-video"
        src="https://cdn.pixabay.com/video/2022/02/09/107243-678130082_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Poster Section (directly under video, no gap) */} 
      <img
        src="/src/assets/poster.png"
        alt="Poster"
        onClick={() => navigate("/about")}
        className="w-full lg:h-[70vh]  sm:absolute  bottom-0 cursor-pointer homepage-poster "
      />
    </section>
  );
};

export default Homepage;
