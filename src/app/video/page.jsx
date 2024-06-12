"use client";
import "@/app/video/styles.css";
import React from "react";
import Navigation from "../components/Navbar/Navbar";

function VideoView() {
  return (
    <>
      <body>
        <Navigation />

        <div class="video-container">
          <video id="videoView" width="100%" controls>
            <source src="videos/sample_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button id="buttonPlayPause">Play/Pause</button>
        </div>

        <div class="controls">
          <button id="buttonLike">Like</button>
          <button id="buttonDislike">Dislike</button>
          <button id="buttonSave">Save</button>
        </div>

        <input
          type="text"
          id="editTextComment"
          placeholder="Add a comment..."
        />

        <div class="related-videos">
          <div class="related-video">
            <img src="thumbnail.jpg" alt="Related Video 1" />
            <p>Related Video 1</p>
          </div>
        </div>

        {}
      </body>
    </>
  );
}

export default VideoView;
