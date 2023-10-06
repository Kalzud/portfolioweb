import React from 'react';

function Blob(){
    var tween = KUTE.fromTo(
        '#blob1',
        {path: '#blob1'},
        {path: '#blob2'},
        {repeat: 999, duration: 3000, yoyo: true}
    )
    tween.start()
    return(
        <div>
                 <svg id="visual" viewBox="0 0 960 300" width="960" height="300" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blob-motion">
        <g transform="translate(488.7381610197854 158.13192303957476)">
            <path id="blob1"
                d="M60.5 -110.4C85.5 -78.1 117.8 -73.3 131.7 -56.2C145.6 -39.1 141.1 -9.8 137.1 19.9C133.1 49.5 129.7 79.5 117.6 112.6C105.6 145.8 84.9 182.3 55.7 191.9C26.5 201.5 -11.3 184.2 -47 169.5C-82.8 154.7 -116.6 142.5 -128.1 117.5C-139.5 92.5 -128.7 54.7 -134.7 18.8C-140.7 -17.1 -163.6 -51.1 -157.6 -75.3C-151.7 -99.4 -116.9 -113.6 -85.9 -143.2C-54.8 -172.7 -27.4 -217.6 -4.8 -210.1C17.7 -202.6 35.5 -142.7 60.5 -110.4"
                fill="#6245af">
            </path>
        </g>
        <g transform="translate(502.6891347676951 148.7520566650057)" style="visibility: hidden">
            <path id="blob2"
                d="M111.4 -160.6C142 -153.6 162.9 -118.8 161.2 -84.7C159.5 -50.6 135.2 -17.3 121.3 11.2C107.4 39.7 104 63.4 93.1 86.8C82.3 110.2 64.1 133.3 38.7 148.2C13.3 163.1 -19.3 169.8 -45.3 159.7C-71.3 149.6 -90.8 122.6 -125.5 99.4C-160.2 76.2 -210 56.8 -206.5 34C-203.1 11.3 -146.3 -14.8 -119.7 -47C-93 -79.1 -96.5 -117.4 -81.6 -131.6C-66.7 -145.8 -33.3 -135.9 3.5 -141.3C40.4 -146.8 80.7 -167.6 111.4 -160.6"
                fill="#6245af">
            </path>
        </g>
    </svg>
        </div>
    );
}

export default Blob;

if (document.getElementById('blob')) {
    const Index = ReactDOM.createRoot(document.getElementById("blob"));
    Index.render(
        <React.StrictMode>
            <Blob/>
        </React.StrictMode>
    )

}
