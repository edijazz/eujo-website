import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import importedImage from '../../content/images/contact-1.jpg'

// Export Template for use in CMS preview
export const ContactPage2Template = ({
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

const ContactPage2 = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPage2Template {...page.frontmatter} body={page.html} />
  </Layout>
)
export default ContactPage2

export const pageQuery = graphql`
  query ContactPage2($id: String!) {
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
