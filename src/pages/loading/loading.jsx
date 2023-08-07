import React, { useEffect } from 'react';
import './loading.css';

const Loading = () => {
    useEffect(() => {
        const preload = document.getElementById("loading");
        const time = 5000;
        setTimeout(() => {
            if (preload) {
                preload.style.display = "none";
            }
        }, time);
    }, []);

    return (
        <div id="loading">
            {/* Loading... */}
        </div>
    );
};

export default Loading;