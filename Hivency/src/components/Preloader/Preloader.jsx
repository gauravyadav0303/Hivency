import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 400)); // Wait for 1 second
      setLoading(false); // Set loading to false after 1 second
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div id="preloader">
        <div id="preloader-status">
          <div className="loading-container">
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
            <div className="ball4"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Return nothing when loading is false
  }
};

export default PageLoader;
