// pages/featured.js
import Link from 'next/link'
import Layout from '../components/Layout'

const places = [
  {
    type: "Must-Do This Week",
    title: "City Market at Town Creek Park",
    description: "This week's must-do: Saturday farmers market featuring local vendors, fresh produce, artisan crafts, and live music. Perfect way to start your weekend with Auburn's vibrant community spirit!",
    mapQuery: "Town+Creek+Park+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Weekend Special", 
    title: "Downtown Auburn Art Walk",
    description: "Perfect weekend activity: Explore Auburn's vibrant arts scene with a self-guided walking tour through downtown galleries, murals, and public art installations. Great for couples or groups!",
    mapQuery: "Downtown+Auburn+AL+Art+Walk",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Seasonal Highlight",
    title: "East Alabama Botanical Gardens",
    description: "Summer blooms are in full swing! Visit the themed gardens featuring spectacular roses, herb gardens, and butterfly gardens. Free admission and perfect for morning strolls or afternoon picnics.",
    mapQuery: "East+Alabama+Botanical+Gardens+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  }
]

export default function Featured() {
  return (
    <Layout title="Featured Picks - Auburn Pulse">
      <div className="featured-container">
        <div className="header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>⭐ Featured Picks</h1>
          <div className="subtitle">This week's handpicked Auburn highlights</div>
        </div>

        <div className="featured-badge">
          🔥 Hot This Weekend
        </div>

        <div className="quick-info">
          <h3>🎯 Weekend Special</h3>
          <p>These are our top recommendations for this weekend! Perfect summer weather and special weekend hours make these Auburn spots extra appealing right now.</p>
        </div>

        <div className="places-grid">
          {places.map((place, index) => (
            <div key={index} className="place-card" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
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
                    📍 Start Adventure
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
          .featured-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--warm-copper), var(--warm-copper-dark));
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

          .back-button {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 12px 24px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 0.3);
            color: white;
            text-decoration: none;
            transform: translateY(-2px);
          }

          .featured-badge {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 30px;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 8px 16px rgba(255, 107, 107, 0.3);
          }

          .quick-info {
            background: linear-gradient(135deg, #fff5e6, #fef3c7);
            border-radius: 20px;
            padding: 24px;
            margin-bottom: 40px;
            border-left: 6px solid var(--warm-copper);
            position: relative;
            overflow: hidden;
          }

          .quick-info::before {
            content: '⭐';
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            opacity: 0.3;
          }

          .quick-info h3 {
            color: var(--text-dark);
            margin-bottom: 16px;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .quick-info p {
            color: var(--text-light);
            margin: 0;
            font-size: 1.05rem;
            line-height: 1.6;
          }

          .places-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
            margin-bottom: 40px;
          }

          .place-card {
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 12px 35px var(--shadow);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            border: 2px solid transparent;
            animation: fadeInUp 0.8s ease forwards;
            opacity: 0;
          }

          .place-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px var(--shadow-lg);
            border-color: var(--warm-copper);
          }

          .place-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, var(--warm-copper), var(--warm-copper-dark));
            transform: scaleX(0);
            transition: transform 0.4s ease;
            z-index: 1;
          }

          .place-card:hover::before {
            transform: scaleX(1);
          }

          .place-header {
            padding: 32px 32px 0;
            position: relative;
          }

          .place-type {
            display: inline-block;
            background: linear-gradient(135deg, var(--warm-copper), var(--warm-copper-dark));
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 20px;
            letter-spacing: 0.3px;
          }

          .place-title {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--text-dark);
            line-height: 1.3;
          }

          .place-content {
            padding: 0 32px 32px;
          }

          .place-description {
            color: var(--text-light);
            line-height: 1.7;
            margin-bottom: 28px;
            font-size: 1.05rem;
          }

          .place-actions {
            display: flex;
            gap: 16px;
            align-items: center;
          }

          .map-button {
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
            color: white;
            border: none;
            padding: 14px 24px;
            border-radius: 14px;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            letter-spacing: 0.2px;
          }

          .map-button:hover {
            color: white;
            text-decoration: none;
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(255, 140, 0, 0.4);
          }

          .rating {
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--warm-copper);
            font-size: 1rem;
            margin-left: auto;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .featured-container {
              padding: 16px;
            }
            
            .header {
              margin: -16px -16px 24px -16px;
              padding: 30px 0;
            }
            
            .places-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            
            .place-header,
            .place-content {
              padding-left: 24px;
              padding-right: 24px;
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
              transform: translateY(40px);
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