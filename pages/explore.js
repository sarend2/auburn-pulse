// pages/explore.js
import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const places = [
  {
    type: "Natural Beauty",
    title: "Chewacla State Park",
    description: "Alabama's stunning state park just minutes from campus. Features hiking trails, beautiful waterfalls, and perfect spots for picnics and outdoor photography.",
    mapQuery: "Chewacla+State+Park+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Campus Landmark",
    title: "Auburn University Campus",
    description: "Walk through one of America's most beautiful campuses. Don't miss Samford Hall, the War Eagle statue, and the stunning oak-lined pathways.",
    mapQuery: "Auburn+University+Campus+Auburn+AL", 
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Cultural Hub",
    title: "Jule Collins Smith Museum",
    description: "Auburn's premier art museum featuring rotating exhibitions, permanent collections, and beautiful sculpture gardens. Free admission and perfect for a cultured afternoon.",
    mapQuery: "Jule+Collins+Smith+Museum+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Nature Preserve",
    title: "Kreher Preserve & Nature Center",
    description: "120-acre nature preserve with trails through forests, wetlands, and open fields. Perfect for wildlife watching and educational programs.",
    mapQuery: "Kreher+Preserve+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Botanical Beauty",
    title: "East Alabama Botanical Gardens",
    description: "6.5-acre themed gardens featuring roses, herbs, and butterfly gardens. Free admission with peaceful spots for picnics and photography.",
    mapQuery: "East+Alabama+Botanical+Gardens+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Local Market",
    title: "City Market at Town Creek Park",
    description: "Saturday farmers market featuring local vendors, fresh produce, handmade crafts, and live music. Perfect for weekend mornings (April-October).",
    mapQuery: "Town+Creek+Park+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Wildlife Education",
    title: "Auburn University Raptor Center",
    description: "Educational center featuring birds of prey including owls, hawks, and eagles. Offers fascinating tours and conservation programs.",
    mapQuery: "Auburn+University+Raptor+Center+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Historic Downtown",
    title: "Historic Downtown Opelika",
    description: "Just minutes from Auburn, explore this charming historic downtown with antique shops, local boutiques, and beautiful 19th-century architecture.",
    mapQuery: "Historic+Downtown+Opelika+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Historic District",
    title: "Opelika Northside Historic District",
    description: "Walk through this beautifully preserved neighborhood featuring Victorian and Craftsman-style homes on the National Register of Historic Places.",
    mapQuery: "Northside+Historic+District+Opelika+AL",
    rating: "⭐⭐⭐⭐"
  }
]

export default function Explore() {
  return (
    <Layout title="Explore & Discover - Auburn Pulse">
      <div className="explore-container">
        <div className="header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>🏛️ Explore & Discover</h1>
          <div className="subtitle">Uncover Auburn's hidden gems</div>
        </div>

        <div className="quick-info">
          <h3>🌲 Alumni Tip</h3>
          <p>Spring and fall offer the best weather for outdoor exploration in Alabama. Many Auburn attractions are free and perfect for a peaceful weekend adventure!</p>
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
          .explore-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--auburn-navy), var(--auburn-navy-dark));
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

          .quick-info {
            background: var(--secondary);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 40px;
            border-left: 4px solid var(--auburn-navy);
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
            background: linear-gradient(90deg, var(--auburn-navy), var(--auburn-navy-dark));
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
            background: linear-gradient(135deg, var(--auburn-navy), var(--auburn-navy-dark));
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
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
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
            box-shadow: 0 8px 16px rgba(255, 140, 0, 0.4);
          }

          .rating {
            display: flex;
            align-items: center;
            gap: 4px;
            color: var(--auburn-gold);
            font-size: 0.9rem;
            margin-left: auto;
          }

          @media (max-width: 768px) {
            .explore-container {
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