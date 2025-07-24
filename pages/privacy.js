// pages/privacy.js (UPDATED)
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="Privacy Policy - Auburn Pulse">
      <div className="privacy-container">
        <div className="privacy-header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>Privacy Policy</h1>
          <div className="subtitle">How we protect your privacy at Auburn Pulse</div>
        </div>

        <div className="privacy-content">
          <p className="last-updated">
            <strong>This page last updated 01/01/2025.</strong>
          </p>

          <section className="privacy-section">
            <h2>Our Privacy-First Approach</h2>
            <p>
              Auburn Pulse was designed with <strong>your privacy as our top priority</strong>. 
              We believe great Auburn recommendations shouldn't require sacrificing your personal information. 
              That's why Auburn Pulse operates on minimal data collection principles.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            
            <h3>Analytics Data (Anonymous)</h3>
            <p>
              For your information, the following are examples of the anonymous information 
              collected during a typical visit to Auburn Pulse:
            </p>
            <ul>
              <li>Browser Type / Resolution</li>
              <li>Operating System</li>
              <li>General Geographic Region</li>
              <li>Entry Page, Pages Visited</li>
              <li>Time Spent on Site</li>
              <li>Referring Website</li>
            </ul>
            <p>
              <strong>This data is completely anonymous and aggregated.</strong> We cannot identify 
              individual users or connect this information to personal details.
            </p>

            <h3>Contact Information</h3>
            <p>
              If you email us at <a href="mailto:hello@auburnpulse.com" className="privacy-email">hello@auburnpulse.com</a>, 
              we temporarily store your message to respond helpfully. We delete contact information 
              once our conversation is complete.
            </p>
          </section>

          <section className="privacy-section">
            <h2>What We Don't Collect</h2>
            <p>
              Auburn Pulse <strong>does not collect</strong>:
            </p>
            <ul>
              <li>Personal identifying information (names, addresses, phone numbers)</li>
              <li>User accounts or login credentials</li>
              <li>Payment or financial information</li>
              <li>Precise location tracking</li>
              <li>Social media profiles or connections</li>
              <li>Browsing history from other websites</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Services</h2>
            
            <h3>Google Analytics</h3>
            <p>
              We use Google Analytics to understand how Auburn Pulse is being used. 
              Google Analytics collects anonymous data about site usage to help us 
              improve the Auburn guide experience.
            </p>

            <h3>Google AdSense</h3>
            <p>
              To keep Auburn Pulse free, we display advertisements through Google AdSense. 
              <strong>Auburn Pulse does not have access to or control over advertising data collection.</strong> 
              Google handles advertising cookies and targeting according to their own privacy practices.
            </p>
            <p>
              For detailed information about Google's data practices, visit: 
              <a href="https://policies.google.com/privacy" className="privacy-email" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </p>

            <h3>External Links</h3>
            <p>
              Auburn Pulse links to external websites (restaurants, Google Maps, etc.). 
              <strong>We are not responsible for the privacy practices of external sites.</strong> 
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Privacy Controls</h2>
            <p>
              You can control your privacy through:
            </p>
            <ul>
              <li><strong>Browser settings:</strong> Disable cookies or use private browsing</li>
              <li><strong>Google Ad Settings:</strong> Control ad personalization preferences</li>
              <li><strong>Analytics opt-out:</strong> Use Google's analytics opt-out tools</li>
              <li><strong>Email preferences:</strong> Contact us to manage any stored communications</li>
            </ul>
            <p>
              For detailed cookie management: <Link href="/cookies" className="privacy-email">View our Cookie Policy</Link>
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              The minimal data we collect is stored securely through industry-standard practices. 
              Since Auburn Pulse doesn't collect personal information, there is minimal risk to your privacy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Auburn Pulse does not knowingly collect information from children under 13. 
              Our site is designed for general audiences interested in Auburn dining and activities.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Policy Updates</h2>
            <p>
              We may update this privacy policy to reflect changes in our practices or legal requirements. 
              Significant changes will be reflected in the "Last updated" date above.
            </p>
            <p>
              Continued use of Auburn Pulse after policy updates constitutes acceptance of the changes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              Questions about this privacy policy? Contact us at{' '}
              <a href="mailto:hello@auburnpulse.com" className="privacy-email">hello@auburnpulse.com</a>.
            </p>
            <p>
              We're committed to transparency and will respond to privacy inquiries promptly.
            </p>
          </section>
        </div>

        <div className="privacy-footer">
          <Link href="/cookies" className="policy-link">
            View Cookie Policy
          </Link>
          <Link href="/legal" className="policy-link">
            View Legal & Disclaimers
          </Link>
          <Link href="/" className="home-link">
            ← Return to Auburn Pulse
          </Link>
        </div>

        <style jsx>{`
          .privacy-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            min-height: 100vh;
          }

          .privacy-header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, #8b5cf6, #7c3aed);
            margin: -20px -20px 40px -20px;
            border-radius: 0 0 24px 24px;
            color: white;
          }

          .privacy-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .privacy-header .subtitle {
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

          .privacy-content {
            line-height: 1.7;
            color: #374151;
          }

          .last-updated {
            font-style: italic;
            color: #6b7280;
            margin-bottom: 24px;
            font-size: 0.95rem;
          }

          .privacy-section {
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
          }

          .privacy-section:last-child {
            border-bottom: none;
          }

          .privacy-section h2 {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: #1f2937;
          }

          .privacy-section h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 20px 0 12px 0;
            color: #374151;
          }

          .privacy-section p {
            margin-bottom: 12px;
          }

          .privacy-section ul {
            margin: 12px 0 12px 24px;
          }

          .privacy-section li {
            margin-bottom: 6px;
          }

          .privacy-email {
            color: var(--auburn-orange);
            text-decoration: none;
            font-weight: 500;
          }

          .privacy-email:hover {
            text-decoration: underline;
          }

          .privacy-footer {
            text-align: center;
            padding: 32px 0;
            border-top: 1px solid #e5e7eb;
            margin-top: 40px;
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .policy-link {
            background: linear-gradient(135deg, #6b7280, #4b5563);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .policy-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
            color: white;
            text-decoration: none;
          }

          .home-link {
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .home-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
            color: white;
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .privacy-container {
              padding: 16px;
            }

            .privacy-header {
              margin: -16px -16px 24px -16px;
              padding: 30px 0;
            }

            .privacy-header h1 {
              font-size: 2rem;
            }

            .privacy-footer {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}