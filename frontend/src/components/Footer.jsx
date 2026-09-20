import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'  // Add this import

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" style={{ display: 'inline-block' }}>
              <img 
                src={logo} 
                alt="BanorInc. Logo" 
                style={{ 
                  height: '100px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  marginBottom: '12px',
                }} 
              />
            </Link>
            <p>
              BanorInc. builds and operates technology-driven businesses that create 
              practical value — from sustainable supply chain solutions to platforms 
              that simplify everyday life.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer__links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/service">Our Solutions</Link>
          
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div className="footer__contact">
              <span>Plot 10CC Bosun Adekoya Street, Lekki, Lagos, Nigeria</span>
              <a href="tel:+2348170028278">+234 817 002 8278</a>
              <a href="mailto:info@banorinc.com">info@banorinc.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} BanorInc. All rights reserved.</span>
          <span>Technology · Solutions · Products</span>
        </div>
      </div>
    </footer>
  )
}