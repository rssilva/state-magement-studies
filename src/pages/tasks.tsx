import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/users.ts'

function UserCard({ user, onClickRemove }) {
  return (
    <div>
      <span>{user.name}</span>
      <button onClick={() => onClickRemove(user.id)}>x</button>
    </div>
  )
}

export function TasksPage(): React.ReactElement {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const users = useSelector((state) => {
    return state.users.users
  })

  function onRemove(id) {
    dispatch(removeUser(id))
  }

  return (
    <div>
      <div>
        <input onKeyUp={(ev) => setValue(ev.target.value)} />
        <button onClick={() => dispatch(addUser(value))}>Add</button>
      </div>
      <div>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              onClickRemove={(id) => onRemove(id)}
            />
          )
        })}
        {/* <button onClick={() => dispatch(addUser())}>alow</button>
        <button onClick={() => dispatch(decrement())}>down</button> */}
      </div>
    </div>
  )
}
