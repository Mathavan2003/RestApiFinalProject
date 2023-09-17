import React from 'react';
import './Cssfiles/HomePage.css';
import { Link, useNavigate } from 'react-router-dom';  // Import your CSS file for styling

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <a href="/">Online Bill Payment System</a>
        </div>
        <nav className="nav">
          <ul>
            <li><a onClick={() => scrollToSection('aboutUs')}>About Us</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a onClick={() => scrollToSection('contactUs')}>Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Online Bill Payment System</h1>
          <p>Simplify your bill payments with us.</p>
          {/*<button className="cta-button">Get Started</button>*/}
          <Link to="/Register" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutUs" className="about-section">
        <h2>About Us</h2>
        <p>
          At Online Bill Payment System, we understand the hassle of managing and paying your bills. That's why we've created a user-friendly platform to simplify your life. Why choose us?
        </p>
        <ul>
          <li>Easy Bill Management: With our system, you can effortlessly add, track, and manage all your bills in one place. Say goodbye to missed due dates and late fees.</li>
          <li>Secure Transactions: Your financial security is our top priority. We use state-of-the-art encryption to protect your payment information.</li>
          <li>Multiple Payment Options: We offer a variety of payment methods, including credit/debit cards, bank transfers, and digital wallets, so you can pay the way you prefer.</li>
          <li>Bill Notifications: Never forget a due date again. Our system sends you timely reminders, so you're always ahead of your payments.</li>
          <li>Transparent Records: Keep a record of all your transactions and payment history. Easily access your receipts whenever you need them.</li>
          <li>24/7 Access: Our platform is available 24/7, allowing you to pay bills and manage your finances at any time, from anywhere.</li>
          <li>Outstanding Support: Have a question or need assistance? Our dedicated customer support team is here to help.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section id="contactUs" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a question or feedback? Reach out to our team:</p>
        <ul>
          <li>Email: support@onlinebillpaymentsystem.com</li>
          <li>Phone: +1-800-123-4567</li>
          <li>Address: 123 Payment Avenue, Cityville, State</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Online Bill Payment System</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
