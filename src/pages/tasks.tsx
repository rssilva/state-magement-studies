import React, { useState } from 'react'
import { useMachine } from '@xstate/react'
import { usersMachine } from '../machines/users.ts'

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
  const [current, send] = useMachine(usersMachine, { devTools: true })

  function onRemove(id) {
    send('removing', {
      id,
    })
  }

  return (
    <div>
      <div>
        <input onKeyUp={(ev) => setValue(ev.target.value)} />
        <button
          onClick={() =>
            send('adding', {
              user: {
                name: value,
                id: new Date().getTime(),
              },
            })
          }
        >
          Add
        </button>
      </div>
      <div>
        {current.context.users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              onClickRemove={(id) => onRemove(id)}
            />
          )
        })}
      </div>
    </div>
  )
}
