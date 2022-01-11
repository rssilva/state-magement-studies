import { createMachine, assign } from 'xstate'

export const usersMachine = createMachine(
  {
    id: 'users',
    initial: 'idle',
    context: {
      users: [
        {
          name: 'Laudrup',
          id: 1,
        },
      ],
    },
    states: {
      idle: {
        on: {
          adding: {
            actions: 'addUser',
          },
          removing: {
            actions: 'removeUser',
          },
        },
      },
    },
  },
  {
    actions: {
      addUser: assign((ctx, ev) => {
        ctx.users.push(ev.user)

        return ctx
      }),
      removeUser: assign((ctx, ev) => {
        return {
          ...ctx,
          users: ctx.users.filter((user) => user.id !== ev.id),
        }
      }),
    },
  }
)
