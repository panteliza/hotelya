import React from 'react';
import './about.css'; // CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header234">
        <div className="slideshow-container">
          <img className="slide-image" src="image1.jpg" alt="Nepal 1" />
          <img className="slide-image" src="image2.jpg" alt="Nepal 2" />
          <img className="slide-image" src="image3.jpg" alt="Nepal 3" />
        </div>
      </header>
      <div className="content">
        <h1>About Hotelya</h1>
        <p>Welcome to Hotelya to help you find the perfect accommodation for your stay in Nepal.
         We strive to make your booking process simple, efficient, and enjoyable.</p>

        <h2>Why Choose Hotelya?</h2>
        <p>Here are some of the reasons why you should use our platform:</p>
        <ul>
          <li>Extensive Database: We have a vast collection of hotels in Nepal, ensuring you have a wide range of options to choose from.</li>
          <li>Easy-to-Use Interface: Our application offers a user-friendly interface, making it simple for you to search, compare, and book hotels.</li>
          <li>Secure Payment: We prioritize your security by providing a secure payment gateway to ensure safe transactions.</li>
          <li>Customer Support: Our dedicated support team is available 24/7 to assist you with any inquiries or issues you may have.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="faq-section">
          <div className="faq-box">
            <h3>How do I search for hotels?</h3>
            <p>On the homepage, enter your destination, check-in and check-out dates, and the number of guests. Click the search button to find hotels matching your criteria.</p>
          </div>
          <div className="faq-box">
            <h3>Can I modify or cancel my booking?</h3>
            <p>Yes, you can modify or cancel your booking. Simply log into your account, go to your bookings, and follow the instructions to make changes or cancel.</p>
          </div>
          <div className="faq-box">
            <h3>How do I make a payment?</h3>
            <p>We offer various payment options, including credit/debit cards and online payment platforms. Choose your preferred method during the booking process.</p>
          </div>
          <div className="faq-box">
            <h3>Do you charge any fees for using the platform?</h3>
            <p>No, our platform is free to use. We do not charge any additional fees for booking through our application.</p>
          </div>
          <div className="faq-box">
            <h3>Is my personal information secure?</h3>
            <p>Yes, we take data privacy seriously. We implement security measures to protect your personal information and ensure it remains confidential.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
