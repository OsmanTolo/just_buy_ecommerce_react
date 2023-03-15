import React from 'react';

function Footer() {
    return (
        <footer>
            <div class="footer-upper">
                <div class="footer-cell">
                    <h4>Just Buy</h4>
                    <p>eCommerce Made Easy</p>
                </div>
                <div class="footer-cell">
                    <ul>
                        <li>Products</li>
                        <li>Category One</li>
                        <li>Category Two</li>
                        <li>Category Three</li>
                    </ul>
                </div>
                <div class="footer-cell">
                    <ul>
                        <li>About Us</li>
                        <li>Sitemap</li>
                        <li>FAQ</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div class="footer-cell">
                    <ul>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                        <li>Order Tracking</li>
                        <li>Shipping and Returns</li>
                    </ul>
                </div>
            </div>
            <div class="footer-lower">
                <p>&copy; Just Buy</p>
                <p>We accept all major credit cards</p>
                <p>Back to Top</p>
            </div>
        </footer>
    );
}

export default Footer;
