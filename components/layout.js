import Head from 'next/head'

export default function Layout({ children, title = "Auburn Pulse", description = "Your Auburn Adventure Guide" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {children}
      </div>
    </>
  )
}