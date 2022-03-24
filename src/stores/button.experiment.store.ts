export interface IButtonExpStore {
  buttonCounter: number;
  increment: Function;
  decrement: Function;
}

export const buttonExpStore = (set: any, produce: Function) => ({
  buttonCounter: 0,
  increment: () =>
    set(
      produce((draft: IButtonExpStore) => {
        draft.buttonCounter += 1;
      })
    ),
  decrement: () =>
    set(
      produce((draft: IButtonExpStore) => {
        draft.buttonCounter -= 1;
      })
    ),
});
