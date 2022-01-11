import React, { useState } from 'react'
// import { addUser, removeUser } from '../store/users.ts'
// import { useMachine } from '@xstate/react'
// import { usersMachine } from '../machines/users.ts'
import { useStore } from '../store/zu-store.ts'

function UserCard({ user, onClickRemove }) {
  return (
    <div>
      <span>{user.name}</span>
      <button onClick={() => onClickRemove(user.id)}>x</button>
    </div>
  )
}

export function TasksPage(): React.ReactElement {
  const [value, setValue] = useState('')
  // const [current, send] = useMachine(usersMachine, { devTools: true })

  // const users = useStore((state) => state.users)
  const { users, removeUser, addUser } = useStore((state) => state)

  console.log(users.length)

  return (
    <div>
      <div>
        <input onKeyUp={(ev) => setValue(ev.target.value)} />
        <button
          onClick={() =>
            addUser({
              name: value,
              id: new Date().getTime(),
            })
          }
        >
          Add
        </button>
      </div>
      <div>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              onClickRemove={(id) => removeUser(id)}
            />
          )
        })}
      </div>
    </div>
  )
}
