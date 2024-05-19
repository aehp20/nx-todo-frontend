export const todoKeys = {
  all: ['todos'],
  byId: (id: number) => [...todoKeys.all, id],
  byParams: (params?: Record<string, string>) => [
    ...todoKeys.all,
    JSON.stringify(params),
  ],
};
