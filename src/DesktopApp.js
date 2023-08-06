import React, { useState, useEffect } from 'react';
import Loading from "./pages/loading/loading"
import Home from "./pages/home/home"

const DesktopApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <Home />}
    </div>
  );
};

export default DesktopApp;
