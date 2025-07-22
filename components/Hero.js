export default function Hero({ title, subtitle, location }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <div className="subtitle">{subtitle}</div>
      <div className="location">{location}</div>
    </div>
  )
}