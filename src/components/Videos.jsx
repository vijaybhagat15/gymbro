import React, { useRef } from 'react';

function Videos() {
  // Create references for each video
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  // Handle play on hover
  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Autoplay blocked: ", error.message));
    }
  };

  // Handle pause when hover ends
  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="py-10 px-6 font-sans">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-orange-500 mb-8 font-serif">
          Watch Our Workout Videos
        </h2>

        {/* Video Grid */}
        <div className="flex justify-center gap-6 sm:gap-9 flex-wrap">
          {/* Video 1 */}
          <div
            className=" text-orange-500 hover:text-orange-400 font-bold text-xl rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform"
            onMouseEnter={() => handleMouseEnter(videoRef1)} // Trigger play on hover
            onMouseLeave={() => handleMouseLeave(videoRef1)} // Trigger pause on hover leave
          >
            <video
              ref={videoRef1} // Attach the ref to the video element
              controls
              muted
              className="rounded-lg shadow-lg h-auto max-h-96"
            >
              <source src="/videos/t1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mt-2 text-orange-500 hover:text-yellow-400 font-serif">
              Chest Workout
            </h3>
          </div>

          {/* Video 2 */}
          <div
            className=" text-orange-500 hover:text-orange-400 font-bold text-xl rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform"
            onMouseEnter={() => handleMouseEnter(videoRef2)} // Trigger play on hover
            onMouseLeave={() => handleMouseLeave(videoRef2)} // Trigger pause on hover leave
          >
            <video
              ref={videoRef2} // Attach the ref to the video element
              controls
              muted
              className="rounded-lg shadow-lg h-auto max-h-96"
            >
              <source src="/videos/t2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mt-2 text-orange-500 hover:text-yellow-400 font-serif">
              Bicep Workout
            </h3>
          </div>

          {/* Video 3 */}
          <div
            className=" text-orange-500 hover:text-orange-400 font-bold text-xl rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform"
            onMouseEnter={() => handleMouseEnter(videoRef3)} // Trigger play on hover
            onMouseLeave={() => handleMouseLeave(videoRef3)} // Trigger pause on hover leave
          >
            <video
              ref={videoRef3} // Attach the ref to the video element
              controls
              muted
              className="rounded-lg shadow-lg h-auto max-h-96"
            >
              <source src="\videos\t3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mt-2 text-orange-500 hover:text-yellow-400 font-serif">
              Chest Workout
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
