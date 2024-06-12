"use client";
import "@/app/video/styles.css";
import React from "react";
import Navigation from "../components/Navbar/Navbar";

function VideoView() {
  return (
    <>
      <body>
        <Navigation />

        <div >
        <iframe width="400" height="200" src="https://www.youtube.com/embed/yaGE5nh0V3E" title="Como usar ChatGPT para ser más productivo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
