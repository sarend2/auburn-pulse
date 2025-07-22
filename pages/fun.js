// pages/fun.js
import Link from 'next/link'
import Layout from '../components/Layout'

const places = [
  {
    type: "Game Day Central",
    title: "Jordan-Hare Stadium",
    description: "Experience the magic of Auburn football in one of college football's most iconic stadiums. The atmosphere on game days is electric—a must-do Auburn tradition.",
    mapQuery: "Jordan-Hare+Stadium+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Scenic Adventure", 
    title: "Chewacla Falls Trail",
    description: "Perfect hiking date spot with beautiful waterfalls and swimming holes. The moderate trail offers stunning views and plenty of photo opportunities for couples.",
    mapQuery: "Chewacla+Falls+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Entertainment",
    title: "Auburn Bowling Center",
    description: "Classic bowling fun right near campus. Great for casual dates, group hangouts, or rainy day activities. The retro atmosphere adds to the charm.",
    mapQuery: "Auburn+Bowling+Center+Auburn+AL", 
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Arts & Culture",
    title: "Auburn Arena Events",
    description: "From Auburn basketball games to concerts and shows, Auburn Arena hosts exciting events year-round. Check the schedule for live entertainment and sporting events.",
    mapQuery: "Auburn+Arena+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Outdoor Fun",
    title: "Kiesel Park",
    description: "Auburn's premier park with disc golf, walking trails, and open spaces perfect for picnics or frisbee. Great for active dates and group activities in beautiful natural settings.",
    mapQuery: "Kiesel+Park+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  }
]

export default function Fun() {
  return (
    <Layout title="Date & Game Day Fun - Auburn Pulse">
      <div className="fun-container fun-page">
        <div className="header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>🏈 Date & Game Day Fun</h1>
          <div className="subtitle">Perfect spots for creating Auburn memories</div>
        </div>

        <div className="quick-info">
          <h3>🐅 Alumni Tip</h3>
          <p>Most activities here are perfect for groups! Consider making it a double date or bringing the whole crew for maximum Auburn fun and shared memories.</p>
        </div>

        <div className="places-grid">
          {places.map((place, index) => (
            <div key={index} className="place-card" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <div className="place-header">
                <div className="place-type">{place.type}</div>
                <h3 className="place-title">{place.title}</h3>
              </div>
              <div className="place-content">
                <p className="place-description">{place.description}</p>
                <div className="place-actions">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${place.mapQuery}`}
                    className="map-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 Get Directions
                  </a>
                  <div className="rating">
                    {place.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .fun-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            margin: -20px -20px 40px -20px;
            border-radius: 0 0 32px 32px;
            color: white;
            position: relative;
            overflow: hidden;
          }

          .header h1 {
            font-size: clamp(2rem, 6vw, 3rem);
            font-weight: 700;
            margin-bottom: 12px;
            position: relative;
            z-index: 1;
          }

          .header .subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            position: relative;
            z-index: 1;
          }

          .quick-info {
            background: var(--secondary);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 40px;
            border-left: 4px solid #22c55e;
          }

          .quick-info h3 {
            color: var(--text-dark);
            margin-bottom: 12px;
            font-size: 1.1rem;
          }

          .quick-info p {
            color: var(--text-light);
            margin: 0;
          }

          .places-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
          }

          .place-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 25px var(--shadow);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
          }

          .place-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px var(--shadow-lg);
          }

          .place-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #22c55e, #16a34a);
            transform: scaleX(0);
            transition: transform 0.3s ease;
            z-index: 1;
          }

          .place-card:hover::before {
            transform: scaleX(1);
          }

          .place-header {
            padding: 24px 24px 0;
            position: relative;
          }

          .place-type {
            display: inline-block;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 16px;
          }

          .place-title {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--text-dark);
          }

          .place-content {
            padding: 0 24px 24px;
          }

          .place-description {
            color: var(--text-light);
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .place-actions {
            display: flex;
            gap: 12px;
            align-items: center;
          }

          .map-button {
            background: linear-gradient(135deg, var(--auburn-navy), var(--auburn-navy-dark));
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
            font-size: 0.9rem;
          }

          .map-button:hover {
            color: white;
            text-decoration: none;
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(30, 58, 138, 0.4);
          }

          .rating {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #22c55e;
            font-size: 0.9rem;
            margin-left: auto;
          }

          @media (max-width: 768px) {
            .fun-container {
              padding: 16px;
            }
            
            .header {
              margin: -16px -16px 24px -16px;
              padding: 30px 0;
            }
            
            .places-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .place-header,
            .place-content {
              padding-left: 20px;
              padding-right: 20px;
            }
            
            .place-actions {
              flex-direction: column;
              align-items: stretch;
            }
            
            .rating {
              margin-left: 0;
              justify-content: center;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}