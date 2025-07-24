// pages/cookies.js
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Cookies() {
  return (
    <Layout title="Cookie Policy - Auburn Pulse">
      <div className="cookies-container">
        <div className="cookies-header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>Cookie Policy</h1>
          <div className="subtitle">How Auburn Pulse uses cookies</div>
        </div>

        <div className="cookies-content">
          <p className="last-updated">
            <strong>This page last updated 01/01/2025.</strong>
          </p>

          <section className="cookies-section">
            <p>
              This site makes use of cookies. These include both first-party cookies set by Auburn Pulse 
              and third-party cookies set by external partners. Cookies are used to deliver a personalized 
              experience and to understand how our site is being used to improve the Auburn guide experience.
            </p>
          </section>

          <section className="cookies-section">
            <h2>Cookies Used by Auburn Pulse</h2>
            
            <h3>Analytics Cookies - Google Analytics</h3>
            <p>
              We use Google Analytics to understand how visitors use our Auburn guide. 
              These cookies collect anonymous information such as:
            </p>
            <ul>
              <li>Number of visitors to Auburn Pulse</li>
              <li>Which Auburn restaurant and activity pages are most popular</li>
              <li>How long visitors spend reading our recommendations</li>
              <li>General geographic region (for understanding our Auburn community reach)</li>
              <li>Device type (mobile vs desktop) to optimize the experience</li>
            </ul>
            <p>
              <strong>Data collected is anonymous and aggregated.</strong> We cannot identify individual 
              users or track personal information through these cookies.
            </p>

            <h3>Essential Site Cookies</h3>
            <p>
              Auburn Pulse may use essential cookies necessary for the website to function properly. 
              These cookies do not collect personal information and cannot be disabled without 
              affecting site functionality.
            </p>
          </section>

          <section className="cookies-section">
            <h2>Third-Party Advertising Cookies</h2>
            
            <h3>Google AdSense</h3>
            <p>
              To keep Auburn Pulse free, we display advertisements through Google AdSense. 
              Google may use cookies to:
            </p>
            <ul>
              <li>Show relevant ads based on your interests</li>
              <li>Measure ad effectiveness and performance</li>
              <li>Prevent the same ad from being shown too many times</li>
              <li>Collect anonymous data for targeted advertising</li>
            </ul>
            
            <p>
              <strong>Important:</strong> Auburn Pulse does not have access to or control over 
              Google's advertising cookies. Google handles this data according to their own privacy policies.
            </p>

            <p>
              For more information about Google's advertising practices: 
              <a href="https://policies.google.com/privacy" className="cookies-link" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section className="cookies-section">
            <h2>Managing Your Cookie Preferences</h2>
            
            <h3>Browser Settings</h3>
            <p>
              You can control cookies through your browser settings:
            </p>
            <ul>
              <li><strong>Block all cookies:</strong> This may affect Auburn Pulse's functionality</li>
              <li><strong>Block third-party cookies:</strong> This will disable advertising cookies but keep analytics</li>
              <li><strong>Delete existing cookies:</strong> Clear previously stored cookies</li>
              <li><strong>Private/Incognito browsing:</strong> Prevents most cookie storage</li>
            </ul>

            <h3>Google Analytics Opt-Out</h3>
            <p>
              To opt out of Google Analytics tracking across all websites:
              <a href="https://tools.google.com/dlpage/gaoptout" className="cookies-link" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-Out Browser Add-on
              </a>
            </p>

            <h3>Google Ads Personalization</h3>
            <p>
              To control Google's ad personalization:
              <a href="https://adssettings.google.com" className="cookies-link" target="_blank" rel="noopener noreferrer">
                Google Ad Settings
              </a>
            </p>
          </section>

          <section className="cookies-section">
            <h2>External Links</h2>
            <p>
              Auburn Pulse links to external websites (restaurant websites, Google Maps, etc.). 
              <strong>We are not responsible for the cookie practices of external sites.</strong> 
              We recommend reviewing their cookie policies before providing any information.
            </p>
          </section>

          <section className="cookies-section">
            <h2>Updates to This Policy</h2>
            <p>
              We may update this cookie policy to reflect changes in our practices or legal requirements. 
              Any significant changes will be reflected in the "Last updated" date above.
            </p>
            <p>
              Continued use of Auburn Pulse after policy updates constitutes acceptance of the changes.
            </p>
          </section>
        </div>

        <div className="cookies-footer">
          <Link href="/privacy" className="policy-link">
            View Privacy Policy
          </Link>
          <Link href="/legal" className="policy-link">
            View Legal & Disclaimers
          </Link>
          <Link href="/" className="home-link">
            ← Return to Auburn Pulse
          </Link>
        </div>

        <style jsx>{`
          .cookies-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            min-height: 100vh;
          }

          .cookies-header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            margin: -20px -20px 40px -20px;
            border-radius: 0 0 24px 24px;
            color: white;
          }

          .cookies-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .cookies-header .subtitle {
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

          .cookies-content {
            line-height: 1.7;
            color: #374151;
          }

          .last-updated {
            font-style: italic;
            color: #6b7280;
            margin-bottom: 24px;
            font-size: 0.95rem;
          }

          .cookies-section {
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
          }

          .cookies-section:last-child {
            border-bottom: none;
          }

          .cookies-section h2 {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: #1f2937;
          }

          .cookies-section h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 20px 0 12px 0;
            color: #374151;
          }

          .cookies-section p {
            margin-bottom: 12px;
          }

          .cookies-section ul {
            margin: 12px 0 12px 24px;
          }

          .cookies-section li {
            margin-bottom: 6px;
          }

          .cookies-link {
            color: var(--auburn-orange);
            text-decoration: none;
            font-weight: 500;
          }

          .cookies-link:hover {
            text-decoration: underline;
          }

          .cookies-footer {
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
            .cookies-container {
              padding: 16px;
            }

            .cookies-header {
              margin: -16px -16px 24px -16px;
              padding: 30px 0;
            }

            .cookies-header h1 {
              font-size: 2rem;
            }

            .cookies-footer {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}