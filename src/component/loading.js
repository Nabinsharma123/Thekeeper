import "./Loading.css";
const Loading = () => {
    return (
        <div className="loading_screen_container" >
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{ "margin": "auto", " background": "rgb(241, 242, 243) none repeat scroll 0% 0%", "display": "block", "shapeRendering": "auto" }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#fcba03" strokeWidth="11" r="45" strokeDasharray="212.05750411731105 72.68583470577035">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>

    );
}
export default Loading;