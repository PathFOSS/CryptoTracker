const Footer = () => {

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return <footer>
        <div>
            <div id="footer-explainer">
                <a onClick={ScrollToTop}><h4>PathFOSS</h4></a>
                <p>Sensible tech solutions since 2023</p>
                <p className="italic-text">PathFOSS.com | GPLv3 Licensed Website</p>
            </div>
            <div id="footer-menu">
                <h4>Browse</h4>
                <a href="https://github.com/PathFOSS/CryptoTracker" rel="nofollow" target="_blank">GitHub</a>
                <a href="mailto:info@pathfoss.com" rel="nofollow" target="_blank">Email</a>
            </div>
        </div>
    </footer>
}
export default Footer;