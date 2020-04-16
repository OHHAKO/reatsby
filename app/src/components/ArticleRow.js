import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "react-bootstrap"

const ArticleRow = props => {
  const article = props.article

  return (
    <Row>
      <Col>{article.title}</Col>
    </Row>
  )
}

ArticleRow.propTypes = {
  article: PropTypes.array,
}

export default ArticleRow
