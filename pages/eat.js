// pages/eat.js - COMPLETE WORKING VERSION
import Link from 'next/link'
import Layout from '../components/Layout'

const places = [
  {
    type: "Top Pick",
    title: "Cafe De Fleur",
    description: "Auburn's premier dining destination combining French elegance with Southern hospitality. Exceptional cuisine and intimate atmosphere make this the perfect choice for special occasions and memorable evenings.",
    mapQuery: "Cafe+De+Fleur+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Craft Beer & Comfort",
    title: "The Hound",
    description: "Cozy hunting lodge vibes meet serious comfort food. Famous for their bacon flight and massive burgers, plus 28 craft beers on tap. Perfect for game day crowds or casual date nights.",
    mapQuery: "The+Hound+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Farm-to-Table",
    title: "Acre",
    description: "Farm-to-table dining with seasonal Southern ingredients and craft cocktails. Think upscale comfort food in a sophisticated atmosphere—perfect for special date nights.",
    mapQuery: "Acre+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Fresh & Vibrant",
    title: "Lucy's",
    description: "Auburn's brunch destination with Instagram-worthy giant pancakes and fresh seasonal dishes. The bright atmosphere and killer gin & tonics make it perfect for weekend gatherings.",
    mapQuery: "Lucy%27s+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Coastal Elegance",
    title: "The Depot",
    description: "Former train station turned sophisticated brasserie serving Gulf oysters and coastal favorites. Industrial-chic atmosphere perfect for special occasions and wine lovers.",
    mapQuery: "The+Depot+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Sophisticated Comfort",
    title: "Amsterdam Cafe",
    description: "Upscale yet welcoming spot near Toomer's Corner. Known for their crab cake avocado sandwich and excellent wine selection. Ideal for refined brunches and intimate dinners.",
    mapQuery: "Amsterdam+Cafe+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Coffee & Vibes", 
    title: "Mama Mocha's Coffee",
    description: "Cozy coffee shop on College Street with rich espresso, homemade pastries, and local Auburn art. Perfect for study dates or catching up with friends.",
    mapQuery: "Mama+Mocha%27s+Coffee+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Game Day Classic",
    title: "Niffer's Place",
    description: "Auburn institution famous for cheese fries and game day atmosphere. A must-visit for the authentic Tiger experience—especially before football games.",
    mapQuery: "Niffer%27s+Place+Auburn+AL", 
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Pizza & Casual",
    title: "Mellow Mushroom",
    description: "Artisanal pizza with creative toppings and laid-back vibes. Great for casual dates or post-game celebrations with friends.",
    mapQuery: "Mellow+Mushroom+Auburn+AL",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Southern Comfort",
    title: "Hamilton's on Magnolia",
    description: "Upscale Southern cuisine in a beautiful historic home. Known for exceptional steaks, seafood, and an extensive wine list—Auburn's special occasion spot.",
    mapQuery: "Hamilton%27s+on+Magnolia+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Italian Escape",
    title: "Ariccia Cucina",
    description: "Authentic Italian experience with Alabama's award-winning porchetta. Open kitchen energy and relaxed patio dining transport you straight to Italy without leaving Auburn.",
    mapQuery: "Ariccia+Cucina+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Historic Landmark",
    title: "Toomer's Drugs",
    description: "More than a pharmacy—it's Auburn's heart. World-famous fresh-squeezed lemonade and classic diner fare create the ultimate Toomer's Corner experience for every Tiger.",
    mapQuery: "Toomer%27s+Drugs+Auburn+AL",
    rating: "⭐⭐⭐⭐⭐"
  }
]

export default function Eat() {
  return (
    <Layout title="Eat & Drink - Auburn Pulse">
      <div className="eat-container">
        <div className="header">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>🍽️ Eat & Drink</h1>
          <div className="subtitle">Auburn's finest flavors await</div>
        </div>

        <div className="quick-info">
          <h3>🎓 Alumni Tips</h3>
          <p>Most spots get packed during game weekends! Make reservations early or arrive before kickoff for the best Auburn dining experience.</p>
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
          .eat-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
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
            border-left: 4px solid var(--auburn-orange);
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
            background: linear-gradient(90deg, var(--auburn-orange), var(--auburn-orange-dark));
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
            background: linear-gradient(135deg, var(--auburn-orange), var(--auburn-orange-dark));
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
            color: var(--auburn-gold);
            font-size: 0.9rem;
            margin-left: auto;
          }

          @media (max-width: 768px) {
            .eat-container {
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