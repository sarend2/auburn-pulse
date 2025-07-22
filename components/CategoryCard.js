import Link from 'next/link'

export default function CategoryCard({ href, icon, title, description, buttonText, index }) {
  return (
    <Link href={href} className="category-card">
      <div className="category-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="category-button">{buttonText}</button>
    </Link>
  )
}