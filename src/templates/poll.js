import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

import pollsters from "../images/national/pollster/pollsters.json"
import states from "../images/states/states.json"


export default ({ data }) => {
  let title = ""
  if (data.file.name in pollsters) {
    title = pollsters[data.file.name];
  } else if (data.file.name in states) {
    title = states[data.file.name];
  }

  return (
    <Layout>
      <SEO title="temp" />
      <div>
        <h1>{title}</h1>
        {data.file.childImageSharp &&
          <Img fluid={data.file.childImageSharp.fluid} />
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      name
      childImageSharp {
        fluid(quality: 100, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
