/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('Exercise 12.14', () => {
  const todo = {
    text: "Text",
    done: true
  }

  render(<Todo todo={todo} />)

  const soloTodo = screen.getByText('Text') //Haetaan tekstillä.
  expect(soloTodo).toBeDefined()
})