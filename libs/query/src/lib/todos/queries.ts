export const todoKeys = {
  all: ['todos'],
  byId: (id: number) => [...todoKeys.all, id],
};
