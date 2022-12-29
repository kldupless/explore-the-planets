import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Explore the Planets">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Explore the Planets</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=League+Spartan:wght@400;700&display=swap" rel="stylesheet"/>
  </>
)

export default IndexPage