// 1. UPDATED LAYOUT.JS - Enhanced SEO Foundation
import Head from 'next/head'

export default function Layout({ 
  children, 
  title = "The Auburn Pulse - Best Things to Do in Auburn Alabama 2025", 
  description = "Discover Auburn Alabama's best restaurants, attractions, and date ideas. Your complete local guide to dining, exploring, and weekend fun in Auburn AL and Opelika.",
  keywords = "Auburn Alabama, things to do Auburn, Auburn restaurants, Auburn attractions, Auburn date ideas, Auburn activities, Opelika Alabama, Auburn University area",
  canonical = "https://theauburnpulse.com"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Auburn Pulse",
    "description": "Your complete guide to Auburn Alabama restaurants, attractions, and activities",
    "url": "https://theauburnpulse.com",
    "areaServed": {
      "@type": "City",
      "name": "Auburn",
      "addressRegion": "AL",
      "addressCountry": "US"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://theauburnpulse.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="The Auburn Pulse" />
        
        {/* Geographic targeting */}
        <meta name="geo.region" content="US-AL" />
        <meta name="geo.placename" content="Auburn, Alabama" />
        <meta name="geo.position" content="32.6099;-85.4808" />
        <meta name="ICBM" content="32.6099, -85.4808" />
        
        {/* Open Graph for social media */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://theauburnpulse.com/auburn-pulse-social.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="The Auburn Pulse" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://theauburnpulse.com/auburn-pulse-social.jpg" />
        <meta name="twitter:site" content="@theauburnpulse" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <div className="container">
        {children}
      </div>
    </>
  )
}

// 2. UPDATED HOME PAGE - Optimized for "Things to Do in Auburn Alabama"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import Footer from '../components/Footer'

const categories = [
  {
    href: '/eat',
    icon: '🍽️',
    title: 'Best Auburn Restaurants',
    description: "From Toomer's Corner classics to farm-to-table dining, discover Auburn Alabama's top restaurants and local food favorites.",
    buttonText: 'Explore Auburn Dining'
  },
  {
    href: '/explore',
    icon: '🏛️',
    title: 'Auburn Attractions & Sights',
    description: "Explore Auburn University campus, Chewacla State Park, museums, and hidden gems throughout Auburn and Opelika Alabama.",
    buttonText: 'Discover Auburn'
  },
  {
    href: '/fun',
    icon: '🏈',
    title: 'Auburn Date Ideas & Activities',
    description: 'Perfect date spots, game day fun, and group activities. Your guide to romantic and exciting things to do in Auburn AL.',
    buttonText: 'Find Auburn Fun'
  },
  {
    href: '/featured',
    icon: '⭐',
    title: 'This Week in Auburn',
    description: 'Current Auburn events, seasonal activities, and weekend highlights happening right now in Auburn Alabama.',
    buttonText: 'See What\'s Happening'
  }
]

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Things to Do in Auburn Alabama",
    "description": "Complete guide to Auburn Alabama attractions, restaurants, and activities",
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": category.title,
      "description": category.description,
      "url": `https://theauburnpulse.com${category.href}`
    }))
  }

  return (
    <Layout 
      title="The Auburn Pulse - Best Things to Do in Auburn Alabama 2025"
      description="Discover Auburn Alabama's best restaurants, attractions, date ideas, and activities. Your complete local guide to Auburn AL and Opelika area with insider recommendations."
      keywords="Auburn Alabama, things to do Auburn, Auburn restaurants, Auburn University, Auburn attractions, Auburn Alabama guide, Opelika Alabama, Auburn dating, Auburn activities"
      canonical="https://theauburnpulse.com"
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <Hero 
        title="The Auburn Pulse"
        subtitle="Your Auburn Alabama Adventure Starts Here"
        location="🐅 Auburn, Alabama - War Eagle!"
      />
      
      <main>
        <section className="categories" aria-label="Auburn Alabama Activity Categories">
          <h2 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'white'}}>
            Explore the Best of Auburn Alabama
          </h2>
          {categories.map((category, index) => (
            <CategoryCard key={category.href} {...category} index={index} />
          ))}
        </section>
      </main>
      
      <Footer />
    </Layout>
  )
}

// 3. UPDATED EXPLORE PAGE - Target "Auburn Alabama Attractions"
export default function Explore() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Attractions and Things to Explore in Auburn Alabama",
    "description": "Top Auburn Alabama attractions including parks, museums, campus landmarks, and outdoor activities",
    "itemListElement": places.map((place, index) => ({
      "@type": "TouristAttraction",
      "position": index + 1,
      "name": place.title,
      "description": place.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": place.title.includes("Opelika") ? "Opelika" : "Auburn",
        "addressRegion": "AL",
        "addressCountry": "US"
      }
    }))
  }

  return (
    <Layout 
      title="15 Best Auburn Alabama Attractions & Things to Explore - The Auburn Pulse"
      description="Discover Auburn's top attractions: Chewacla State Park, Auburn University campus, museums, botanical gardens, and hidden gems in Auburn and Opelika Alabama."
      keywords="Auburn Alabama attractions, things to do Auburn, Auburn University campus, Chewacla State Park, Auburn museums, Auburn outdoor activities, Opelika attractions"
      canonical="https://theauburnpulse.com/explore"
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Your existing explore page content */}
    </Layout>
  )
}

// 4. UPDATED EAT PAGE - Target "Auburn Alabama Restaurants"
export default function Eat() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Restaurants in Auburn Alabama",
    "description": "Top Auburn Alabama restaurants from fine dining to game day favorites",
    "itemListElement": places.map((place, index) => ({
      "@type": "Restaurant",
      "position": index + 1,
      "name": place.title,
      "description": place.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Auburn",
        "addressRegion": "AL",
        "addressCountry": "US"
      },
      "servesCuisine": place.type
    }))
  }

  return (
    <Layout 
      title="Best Auburn Alabama Restaurants 2025 - The Auburn Pulse"
      description="Auburn's top restaurants and dining spots. From Acre fine dining to Niffer's game day classics, discover the best food and drinks in Auburn Alabama."
      keywords="Auburn Alabama restaurants, Auburn dining, Auburn University restaurants, best food Auburn, Auburn Alabama food, Auburn restaurant guide"
      canonical="https://theauburnpulse.com/eat"
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Your existing eat page content */}
    </Layout>
  )
}

// 5. UPDATED FUN PAGE - Target "Auburn Alabama Date Ideas"
export default function Fun() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Date Ideas and Fun Activities in Auburn Alabama",
    "description": "Auburn Alabama date ideas, group activities, and entertainment options",
    "itemListElement": places.map((place, index) => ({
      "@type": "TouristAttraction",
      "position": index + 1,
      "name": place.title,
      "description": place.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": place.title.includes("Opelika") ? "Opelika" : "Auburn",
        "addressRegion": "AL",
        "addressCountry": "US"
      }
    }))
  }

  return (
    <Layout 
      title="Best Auburn Alabama Date Ideas & Fun Activities - The Auburn Pulse"
      description="12 amazing Auburn Alabama date ideas and activities. From escape rooms to paint & sip, discover perfect spots for dates, groups, and game day fun."
      keywords="Auburn Alabama date ideas, Auburn activities, things to do Auburn couples, Auburn entertainment, Auburn Alabama fun, Auburn group activities"
      canonical="https://theauburnpulse.com/fun"
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Your existing fun page content */}
    </Layout>
  )
}