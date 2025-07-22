// pages/privacy.js
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
          <div className="subtitle">How we handle your privacy at Auburn Pulse</div>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>🛡️ Privacy-First Design</h2>
            <p>
              Auburn Pulse was built with <strong>your privacy as a top priority</strong>. We believe great 
              local recommendations shouldn't come at the cost of your personal information. That's why 
              we've designed Auburn Pulse to work beautifully while collecting virtually no personal data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>🎯 What Makes Us Different</h2>
            <p>
              Unlike most websites, Auburn Pulse operates on a <strong>"privacy by design"</strong> principle:
            </p>
            <ul>
              <li><strong>No user accounts required</strong> - just visit and explore</li>
              <li><strong>No personal information collected by us</strong> - we don't need it to help you find great spots</li>
              <li><strong>No email lists from us</strong> - unless you specifically contact us</li>
              <li><strong>We don't sell or access your data</strong> - we're focused on Auburn recommendations, not data collection</li>
            </ul>
            <p>
              Our goal is simple: <strong>help you discover amazing Auburn experiences</strong> while keeping 
              Auburn Pulse itself privacy-focused.
            </p>
          </section>

          <section className="privacy-section">
            <h2>📊 The Minimal Data We Use</h2>
            <p>
              To keep Auburn Pulse running smoothly and improve your experience, we collect 
              <strong>basic, anonymous usage information</strong>:
            </p>
            <h3>Anonymous Site Analytics</h3>
            <ul>
              <li><strong>Popular pages:</strong> Which Auburn spots are most interesting to visitors</li>
              <li><strong>Site performance:</strong> How quickly pages load and where we can improve</li>
              <li><strong>Device optimization:</strong> Whether you're on mobile or desktop (for better design)</li>
              <li><strong>General location:</strong> Country/region only (helps us understand our audience)</li>
            </ul>
            <p>
              <strong>Here's the important part:</strong> This data is completely anonymous and aggregated. 
              We can't identify you personally, track your individual behavior, or connect this information 
              to any personal details.
            </p>
            <p>
              Think of it like counting visitors at a park - we know how many people enjoyed the trails, 
              but we don't know who you are or follow you home.
            </p>
          </section>

          <section className="privacy-section">
            <h2>✨ What Auburn Pulse Doesn't Do</h2>
            <p>
              Here's our promise - Auburn Pulse itself will <strong>never</strong>:
            </p>
            <ul>
              <li>Ask for your name, email, or personal information to use the site</li>
              <li>Track your location or follow you around the web</li>
              <li>Sell your data to third parties</li>
              <li>Require you to create accounts or remember passwords</li>
              <li>Spam you with emails or notifications</li>
              <li>Store your browsing history or personal preferences</li>
              <li>Access or use demographic data for our own purposes</li>
            </ul>
            <p>
              <strong>We're Auburn locals sharing great spots with other Auburn lovers.</strong> 
              That's our focus - not data collection or advertising.
            </p>
          </section>

          <section className="privacy-section">
            <h2>📢 Advertising & Third-Party Services</h2>
            <p>
              To keep Auburn Pulse free and support our local recommendations, we may display 
              advertisements from third-party advertising networks.
            </p>
            <h3>How Advertising Works</h3>
            <p>
              <strong>Auburn Pulse's role:</strong> We simply provide ad space on our site. 
              We don't collect, access, or use any personal data for advertising purposes.
            </p>
            <p>
              <strong>Ad networks' role:</strong> Advertising partners (like Google AdSense) may collect 
              their own data to show relevant ads. This could include:
            </p>
            <ul>
              <li>Browsing behavior and interests (managed by the ad network, not us)</li>
              <li>General location for local ads (handled by their systems)</li>
              <li>Device and browser information (standard web advertising)</li>
            </ul>
            <h3>Your Control</h3>
            <p>
              You can control advertising data collection through:
            </p>
            <ul>
              <li><strong>Browser settings:</strong> Disable cookies or use private browsing</li>
              <li><strong>Ad network preferences:</strong> Most networks offer opt-out options</li>
              <li><strong>Ad blockers:</strong> Browser extensions that block advertising</li>
            </ul>
            <p>
              <strong>Important:</strong> Auburn Pulse doesn't have access to or control over what 
              data ad networks collect. We recommend reviewing their privacy policies if you have concerns.
            </p>
          </section>

          <section className="privacy-section">
            <h2>🍪 Cookies & Tracking</h2>
            <h3>Auburn Pulse Cookies</h3>
            <p>
              We use <strong>Vercel Analytics</strong> which places minimal, anonymous cookies 
              to understand basic site usage (like which Auburn spots are most popular). These cookies:
            </p>
            <ul>
              <li>Do not contain personal information</li>
              <li>Cannot be used to identify you individually</li>
              <li>Help us improve the Auburn guide experience</li>
              <li>Are automatically deleted after a short period</li>
            </ul>
            <h3>Advertising Cookies</h3>
            <p>
              Third-party advertising networks may place their own cookies for ad targeting and measurement. 
              <strong>Auburn Pulse doesn't control or access these cookies</strong> - they're managed entirely 
              by the advertising partners according to their own privacy policies.
            </p>
            <p>
              You can disable cookies in your browser settings if you prefer not to receive them.
            </p>
          </section>

          <section className="privacy-section">
            <h2>📧 If You Reach Out to Us</h2>
            <p>
              If you email us at <a href="mailto:hello@auburnpulse.com" className="privacy-email">hello@auburnpulse.com</a> 
              with questions or Auburn recommendations, we'll temporarily store your message to respond helpfully.
            </p>
            <p>
              <strong>Our email promise:</strong>
            </p>
            <ul>
              <li>We only use your email to respond to your specific question</li>
              <li>We don't add you to lists or send marketing emails</li>
              <li>We don't share your contact info with anyone</li>
              <li>We delete contact information once the conversation is resolved</li>
            </ul>
            <p>
              Think of it like asking a local friend for recommendations - we'll help you out, 
              but we're not going to put you on a mailing list!
            </p>
          </section>

          <section className="privacy-section">
            <h2>🔗 External Links</h2>
            <p>
              Auburn Pulse links to external websites (restaurants, Google Maps, etc.). 
              <strong>We are not responsible for the privacy practices of external sites</strong>. 
              We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>🔒 Data Security</h2>
            <p>
              The minimal data we collect is stored securely through Vercel's infrastructure, 
              which uses industry-standard security measures. Since we don't collect personal 
              information, there is minimal risk to your privacy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>👶 Children's Privacy</h2>
            <p>
              Auburn Pulse does not knowingly collect information from children under 13. 
              Our site is designed for general audiences interested in Auburn activities 
              and dining recommendations.
            </p>
          </section>

          <section className="privacy-section">
            <h2>📍 Your Rights</h2>
            <p>
              Since we collect minimal anonymous data, there is little personal information 
              to manage. However, you can:
            </p>
            <ul>
              <li><strong>Disable cookies</strong> in your browser settings</li>
              <li><strong>Contact us</strong> with privacy questions or concerns</li>
              <li><strong>Stop using the site</strong> at any time</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>🔄 Policy Updates</h2>
            <p>
              We may update this privacy policy if our practices change or to comply with 
              legal requirements. Any significant changes will be reflected in the "Last updated" 
              date below.
            </p>
            <p>
              Continued use of Auburn Pulse after policy updates constitutes acceptance of the changes.
            </p>
            <p className="last-updated">
              <strong>Last updated:</strong> January 2025
            </p>
          </section>

          <section className="privacy-section">
            <h2>📞 Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle data, 
              please contact us at{' '}
              <a href="mailto:hello@auburnpulse.com" className="privacy-email">hello@auburnpulse.com</a>.
            </p>
            <p>
              We're committed to transparency and will respond to privacy inquiries promptly.
            </p>
          </section>
        </div>

        <div className="privacy-footer">
          <Link href="/legal" className="legal-link">
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

          .last-updated {
            font-style: italic;
            font-size: 0.9rem;
            color: #6b7280;
            margin-top: 16px;
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

          .legal-link {
            background: linear-gradient(135deg, #6b7280, #4b5563);
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

          .legal-link:hover {
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

            .privacy-section {
              margin-bottom: 24px;
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