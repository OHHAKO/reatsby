import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import BoardRow from "./BoardRow"

const BoardList = props => {
  const boards = props.boards

  return (
    <Container fluid>
      {boards.map(b => (
        <BoardRow key={b.id} board={b} />
      ))}
    </Container>
  )
}

BoardList.propTypes = {
  boards: PropTypes.array,
}

export default BoardList
