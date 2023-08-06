import React from 'react'
import './loading.css'

const loading = () => {
    return (
        <div id="loading">
            {/* Loading... */}
        </div>
    )
}

let preload = document.getElementById("loading");

const time = 5000;
setTimeout(runPage, time);

function runPage() {
    preload.style.display = "none";
}

export default loading