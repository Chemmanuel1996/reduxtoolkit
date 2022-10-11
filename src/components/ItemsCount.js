import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ItemsCount = () => {
  const todos = useSelector((state) =>
  state.todos.filter((todo) => todo.completed === true )
  )
  return (
    <Container>
      Total complete items: {todos.length}
    </Container>
  )
}

export default ItemsCount