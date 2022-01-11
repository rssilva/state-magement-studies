import create from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  users: [
    {
      name: 'Laudrup',
      id: 1,
    },
  ],
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),
  addUser: (user) =>
    set((state) => {
      console.log(state.users)
      state.users.push(user)
      return [...state.users]
    }),
}))
