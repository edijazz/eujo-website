import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import importedImage from '../../content/images/history.jpg'

// Export Template for use in CMS preview
export const HistoryPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={importedImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const HistoryPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <HistoryPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default HistoryPage

export const pageQuery = graphql`
  query HistoryPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
