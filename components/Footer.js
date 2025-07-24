// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <p className="footer-tagline">Made with 🧡 by Auburn locals</p>
        </div>
        
        <div className="footer-links">
          <Link href="/legal" className="footer-link">Legal & Disclaimers</Link>
          <span className="footer-divider">•</span>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-divider">•</span>
          <Link href="/cookies" className="footer-link">Cookie Policy</Link>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Auburn Pulse</p>
          <p className="footer-main-disclaimer">
            Information provided for entertainment purposes. Hours, prices, and availability subject to change. 
            Please verify details with businesses directly.
          </p>
          <p className="footer-disclaimer">
            Not affiliated with Auburn University.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          text-align: center;
          padding: 40px 20px 20px;
          color: white;
          opacity: 0.9;
          background: rgba(0, 0, 0, 0.1);
          margin-top: 40px;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .footer-main {
          margin-bottom: 20px;
        }

        .footer-tagline {
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .footer-contact {
          font-size: 0.95rem;
          opacity: 0.8;
        }

        .footer-email {
          color: var(--auburn-orange);
          text-decoration: none;
          font-weight: 500;
        }

        .footer-email:hover {
          text-decoration: underline;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .footer-link:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .footer-divider {
          opacity: 0.6;
          font-size: 0.8rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 16px;
        }

        .footer-copyright {
          font-size: 0.9rem;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .footer-main-disclaimer {
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .footer-disclaimer {
          font-size: 0.8rem;
          opacity: 0.7;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 30px 16px 16px;
          }

          .footer-links {
            flex-direction: column;
            gap: 8px;
          }

          .footer-divider {
            display: none;
          }

          .footer-contact {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}