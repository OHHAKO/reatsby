import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "react-bootstrap"
import ArticleList from "./ArticleList"

const BoardRow = props => {
  const board = props.board

  return (
    <>
      <Row>
        <Col>
          <h2>{board.title}</h2>
        </Col>
      </Row>
      <ArticleList articles={board.articles} />
    </>
  )
}

BoardRow.propTypes = {
  board: PropTypes.object,
}

export default BoardRow
