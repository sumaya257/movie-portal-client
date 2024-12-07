import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6">
            <div className="container mx-auto px-6">
                {/* Website Name and Copyright */}
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold">MoviePortal</h1>
                    <p>&copy; {new Date().getFullYear()} MoviePortal. All Rights Reserved.</p>
                </div>

                {/* Contact Information */}
                <div className="text-center mb-4">
                    <p>Email: <a href="mailto:support@movieportal.com" className="text-blue-500 hover:underline">support@movieportal.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 234 567 890</a></p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 text-xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 text-xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 hover:text-pink-800 text-xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
