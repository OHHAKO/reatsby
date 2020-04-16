import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import BoardList from "../components/BoardList"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = {
    boards: [
      {
        id: 0,
        title: "Board A",
        articles: [
          {
            id: 0,
            title: "Article A0",
            body: "Article A0 Body",
          },
          {
            id: 1,
            title: "Article A1",
            body: "Article A1 Body",
          },
        ],
      },
      {
        id: 1,
        title: "Board B",
        articles: [
          {
            id: 2,
            title: "Article B0",
            body: "Article B0 Body",
          },
          {
            id: 3,
            title: "Article B1",
            body: "Article B1 Body",
          },
        ],
      },
    ],
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <BoardList boards={data.boards} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
