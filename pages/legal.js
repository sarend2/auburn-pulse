// pages/legal.js
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Legal() {
  return (
    <Layout title="Legal & Disclaimers - Auburn Pulse">
      <div className="legal-container">
        <div className="legal-header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>Legal & Disclaimers</h1>
          <div className="subtitle">Important information about Auburn Pulse</div>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>🏛️ University Affiliation</h2>
            <p>
              Auburn Pulse is an <strong>independent local guide</strong> created by Auburn community members. 
              We are <strong>not affiliated with, endorsed by, or officially connected to Auburn University</strong> 
              in any way. All Auburn University trademarks, logos, and references belong to their respective owners.
            </p>
          </section>

          <section className="legal-section">
            <h2>📍 Business Information Disclaimer</h2>
            <p>
              All information provided on Auburn Pulse is <strong>for entertainment and informational purposes only</strong>. 
              Business hours, prices, menu items, availability, and services are <strong>subject to change without notice</strong>. 
            </p>
            <p>
              We strongly recommend <strong>verifying details directly with businesses</strong> before visiting, especially:
            </p>
            <ul>
              <li>Operating hours and seasonal schedules</li>
              <li>Current prices and menu availability</li>
              <li>Reservation requirements</li>
              <li>Special events and closures</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>⚖️ Liability Limitations</h2>
            <p>
              Auburn Pulse and its creators are <strong>not responsible for</strong>:
            </p>
            <ul>
              <li>Business closures, relocations, or service changes</li>
              <li>Pricing discrepancies or promotional changes</li>
              <li>Quality of experiences, food, or services</li>
              <li>Accuracy of third-party business information</li>
              <li>Any damages, losses, or inconveniences resulting from use of this site</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>🔗 External Links</h2>
            <p>
              Auburn Pulse contains links to external websites and Google Maps locations. 
              We are <strong>not responsible for the content, privacy practices, or availability</strong> 
              of external sites. These links are provided for convenience only.
            </p>
          </section>

          <section className="legal-section">
            <h2>📊 Analytics & Privacy</h2>
            <p>
              This site uses <strong>anonymous analytics</strong> (Vercel Analytics) to understand usage patterns 
              and improve user experience. <strong>No personal information is collected, stored, or shared</strong>. 
              We do not use cookies for tracking or advertising purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>📧 Contact & Feedback</h2>
            <p>
              For questions, concerns, or suggestions about Auburn Pulse, please contact us at{' '}
              <a href="mailto:hello@auburnpulse.com" className="legal-email">hello@auburnpulse.com</a>.
              We welcome feedback from the Auburn community!
            </p>
          </section>

          <section className="legal-section">
            <h2>📜 Copyright & Content</h2>
            <p>
              The original content, design, and compilation of information on Auburn Pulse is 
              © 2025 Auburn Pulse. Business names, locations, and factual information remain 
              the property of their respective owners.
            </p>
          </section>

          <section className="legal-section">
            <h2>🔄 Updates to Terms</h2>
            <p>
              These disclaimers may be updated periodically to reflect changes in our practices 
              or legal requirements. Continued use of Auburn Pulse constitutes acceptance of any updates.
            </p>
            <p className="last-updated">
              <strong>Last updated:</strong> January 2025
            </p>
          </section>
        </div>

        <div className="legal-footer">
          <Link href="/" className="home-link">
            ← Return to Auburn Pulse
          </Link>
        </div>

        <style jsx>{`
          .legal-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            min-height: 100vh;
          }

          .legal-header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, #6b7280, #4b5563);
            margin: -20px -20px 40px -20px;
            border-radius: 0 0 24px 24px;
            color: white;
          }

          .legal-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .legal-header .subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
          }

          .back-button {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
            transition: all 0.2s ease;
            font-size: 0.9rem;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 0.3);
            color: white;
            text-decoration: none;
            transform: translateY(-1px);
          }

          .legal-content {
            line-height: 1.7;
            color: #374151;
          }

          .legal-section {
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
          }

          .legal-section:last-child {
            border-bottom: none;
          }

          .legal-section h2 {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: #1f2937;
          }

          .legal-section p {
            margin-bottom: 12px;
          }

          .legal-section ul {
            margin: 12px 0 12px 24px;
          }

          .legal-section li {
            margin-bottom: 6px;
          }

          .legal-email {
            color: var(--auburn-orange);
            text-decoration: none;
            font-weight: 500;
          }

          .legal-email:hover {
            text-decoration: underline;
          }

          .last-updated {
            font-style: italic;
            font-size: 0.9rem;
            color: #6b7280;
            margin-top: 16px;
          }

          .legal-footer {
            text-align: center;
            padding: 32px 0;
            border-top: 1px solid #e5e7eb;
            margin-top: 40px;
          }

          .home-link {
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
          }

          .home-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
            color: white;
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .legal-container {
              padding: 16px;
            }

            .legal-header {
              margin: -16px -16px 24px -16px;
              padding: 30px 0;
            }

            .legal-header h1 {
              font-size: 2rem;
            }

            .legal-section {
              margin-bottom: 24px;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}