import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import Footer from '../components/Footer'

const categories = [
  {
    href: '/eat',
    icon: '🍽️',
    title: 'Eat & Drink',
    description: "From Toomer's Corner to craft breweries, discover Auburn's best flavors and Tiger hangout spots.",
    buttonText: 'Explore Dining'
  },
  {
    href: '/explore',
    icon: '🏛️',
    title: 'Explore & Discover',
    description: "Uncover campus gems, historic downtown, and Alabama's natural beauty in the Auburn area.",
    buttonText: 'Start Exploring'
  },
  {
    href: '/fun',
    icon: '🏈',
    title: 'Date & Game Day Fun',
    description: 'Perfect activities for romantic dates, game day celebrations, and memorable times with friends.',
    buttonText: 'Find Fun'
  },
  {
    href: '/featured',
    icon: '⭐',
    title: 'Featured Picks',
    description: 'Hand-selected weekend highlights, seasonal events, and Auburn traditions happening right now.',
    buttonText: 'See Features'
  }
]

export default function Home() {
  return (
    <Layout title="Auburn Pulse - Your Auburn Adventure Guide">
      <Hero 
        title="Auburn Pulse"
        subtitle="Your Auburn Weekend Starts Here"
        location="🐅 Auburn, Alabama"
      />
      
      <div className="categories">
        {categories.map((category, index) => (
          <CategoryCard key={category.href} {...category} index={index} />
        ))}
      </div>
      
      <Footer />
    </Layout>
  )
}