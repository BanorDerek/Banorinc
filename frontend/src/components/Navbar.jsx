import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const closeMenus = () => {
    setOpen(false)
  }

  const colors = {
    primary: '#1a2a6c',
    primaryLight: '#2a3a8c',
    primaryDark: '#0d1b3e',
    accent: '#4169E1',
    bg: '#0a192f',
    text: '#ffffff',
    textMuted: 'rgba(255,255,255,0.8)',
    shadow: 'rgba(26, 42, 108, 0.3)',
  }

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '12px 0',
        transition: 'all 0.3s ease',
        background: colors.bg,
        borderBottom: scrolled
          ? `1px solid ${colors.primary}`
          : 'none',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0,0,0,0.5)'
          : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <NavLink
          to="/"
          className="navbar__logo"
          onClick={closeMenus}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="BanorInc. Logo"
            style={{
              height: '100px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
            }}
          />
        </NavLink>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="navbar__links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {/* Home */}
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '8px 18px',
              borderRadius: '8px',
              color: isActive
                ? colors.accent
                : colors.textMuted,
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderBottom: isActive
                ? `2px solid ${colors.accent}`
                : '2px solid transparent',
            })}
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '8px 18px',
              borderRadius: '8px',
              color: isActive
                ? colors.accent
                : colors.textMuted,
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderBottom: isActive
                ? `2px solid ${colors.accent}`
                : '2px solid transparent',
            })}
          >
            About
          </NavLink>

          {/* Our Solutions - Goes to /service */}
          <NavLink
            to="/service"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '8px 18px',
              borderRadius: '8px',
              color: isActive
                ? colors.accent
                : colors.textMuted,
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderBottom: isActive
                ? `2px solid ${colors.accent}`
                : '2px solid transparent',
            })}
          >
            Our Solutions
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '8px 18px',
              borderRadius: '8px',
              color: isActive
                ? colors.accent
                : colors.textMuted,
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderBottom: isActive
                ? `2px solid ${colors.accent}`
                : '2px solid transparent',
            })}
          >
            Contact
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/contact"
            className="btn btn--primary"
            onClick={closeMenus}
            style={{
              padding: '10px 24px',
              borderRadius: '8px',
              background: colors.primary,
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              marginLeft: '8px',
              boxShadow: `0 4px 15px ${colors.shadow}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                colors.primaryLight
              e.currentTarget.style.transform =
                'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                colors.primary
              e.currentTarget.style.transform =
                'translateY(0)'
            }}
          >
            Get a Quote
          </NavLink>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          className={`navbar__toggle ${
            open ? 'is-open' : ''
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '30px',
            height: '22px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              width: '100%',
              height: '2.5px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: open
                ? 'rotate(45deg) translate(7px, 7px)'
                : 'none',
            }}
          />

          <span
            style={{
              display: 'block',
              width: '100%',
              height: '2.5px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: open ? 0 : 1,
            }}
          />

          <span
            style={{
              display: 'block',
              width: '100%',
              height: '2.5px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: open
                ? 'rotate(-45deg) translate(7px, -7px)'
                : 'none',
            }}
          />
        </button>

        {/* =====================================================
            MOBILE OVERLAY
        ====================================================== */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 999,
            display: open ? 'block' : 'none',
          }}
          onClick={() => setOpen(false)}
        />

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        <nav
          className="navbar__mobile"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '320px',
            maxWidth: '90vw',
            height: '100vh',
            background: colors.bg,
            padding: '80px 24px 32px',
            zIndex: 1000,
            transform: open
              ? 'translateX(0)'
              : 'translateX(100%)',
            transition:
              'transform 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow:
              '-10px 0 40px rgba(0,0,0,0.5)',
            overflowY: 'auto',
          }}
        >
          {/* Mobile Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <img
              src={logo}
              alt="BanorInc. Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '8px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Mobile Home */}
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '14px 20px',
              borderRadius: '12px',
              color: isActive
                ? colors.accent
                : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: 500,
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderLeft: isActive
                ? `3px solid ${colors.accent}`
                : '3px solid transparent',
            })}
          >
            Home
          </NavLink>

          {/* Mobile About */}
          <NavLink
            to="/about"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '14px 20px',
              borderRadius: '12px',
              color: isActive
                ? colors.accent
                : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: 500,
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderLeft: isActive
                ? `3px solid ${colors.accent}`
                : '3px solid transparent',
            })}
          >
            About
          </NavLink>

          {/* Mobile Our Solutions - Goes to /service */}
          <NavLink
            to="/service"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '14px 20px',
              borderRadius: '12px',
              color: isActive
                ? colors.accent
                : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: 500,
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderLeft: isActive
                ? `3px solid ${colors.accent}`
                : '3px solid transparent',
            })}
          >
            Our Solutions
          </NavLink>

          {/* Mobile Contact */}
          <NavLink
            to="/contact"
            onClick={closeMenus}
            style={({ isActive }) => ({
              padding: '14px 20px',
              borderRadius: '12px',
              color: isActive
                ? colors.accent
                : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: 500,
              background: isActive
                ? 'rgba(65, 105, 225, 0.12)'
                : 'transparent',
              borderLeft: isActive
                ? `3px solid ${colors.accent}`
                : '3px solid transparent',
            })}
          >
            Contact
          </NavLink>

          {/* Mobile CTA */}
          <NavLink
            to="/contact"
            onClick={closeMenus}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              background: colors.primary,
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '12px',
              boxShadow: `0 4px 15px ${colors.shadow}`,
            }}
          >
            Get a Quote
          </NavLink>
        </nav>
      </div>

      {/* =====================================================
          RESPONSIVE STYLES
      ====================================================== */}
      <style>{`
        @media (max-width: 900px) {
          .navbar__links {
            display: none !important;
          }

          .navbar__toggle {
            display: flex !important;
          }
        }

        @media (min-width: 901px) {
          .navbar__mobile {
            display: none !important;
          }

          .navbar__toggle {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 8px 0 !important;
          }

          .navbar__logo img {
            height: 70px !important;
          }

          .container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </header>
  )
}