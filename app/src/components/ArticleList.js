import React from "react"
import PropTypes from "prop-types"
import ArticleRow from "./ArticleRow"

const ArticleList = props => {
  const articles = props.articles

  return (
    <ol>
      {articles.map(a => (
        <ArticleRow key={a.id} article={a} />
      ))}
    </ol>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array,
}

export default ArticleList
