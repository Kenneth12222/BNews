import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div class="footer-container">

                    <div class="footer-heading">
                        <h4>It's time to stop scrolling.
                            <br />
                            Let's create something.
                        </h4>
                        <h3>get in touch.</h3>
                    </div>

                    <div class="footer-content">

                        <div class="footer-box">
                            <strong>explore</strong>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Project</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer-box">
                            <strong>Social</strong>
                            <ul>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Dribble</a></li>
                                <li><a href="#">Behance</a></li>
                            </ul>
                        </div>

                        <div class="footer-box">
                            <strong>Contact</strong>
                            <ul>
                                <li><a href="#">hi@GTN.io</a></li>
                                <li><a href="#">+123456789</a></li>
                            </ul>
                        </div>

                        <div class="footer-box">
                            <strong>GTN.io</strong>
                            <ul>
                                <li>manteuffelstr.60b</li>
                                <li>l0qqq berlin</li>
                                <li>germany</li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">

                        <div class="footer-bottom-link">
                            <a href="#">privacy</a>
                            <a href="#">site info</a>
                            <a href="#">terms</a>
                        </div>

                        <div class="copyright">
                            <span>Made by GTI</span>
                            <span>&#169; 2021 GTN</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
