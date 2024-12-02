import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      {/* Texte principal */}
      <p style={footerTextStyle}>Ines Debroise Fan</p>

      {/* Section des icônes de réseaux sociaux */}
      <div style={socialIconsStyle}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle} // Ajoute un style pour supprimer la décoration des liens
        >
          <FaInstagram
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#eaeaea')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaTwitter
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#eaeaea')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaYoutube
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#eaeaea')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          />
        </a>
      </div>

      {/* Copyright ou autres informations supplémentaires */}
      <p style={copyRightStyle}>© 2024 Ines Debroise Fan. All Rights Reserved.</p>
    </footer>
  );
};

// Styles en JavaScript
const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const footerTextStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '20px',
};

const iconStyle = {
  fontSize: '2.5rem',
  color: '#fff',
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const linkStyle = {
  textDecoration: 'none',
};

const copyRightStyle = {
  fontSize: '1rem',
  color: '#aaa',
};

export default Footer;
