import { produce } from 'immer';
import set from 'zustand';

type CommonStore = {
  focus: number,
  setFocus: Function
};

export const commonStore: CommonStore = {
  focus: undefined as number,
  setFocus: (elementIndex: number) => set(
    produce((draft: CommonStore) => {
      draft.focus = elementIndex;
    })
  ),
}