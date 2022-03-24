export interface ICommonStore {
  isButtonExpActive: boolean;
  isPictureExpActive: boolean;
  toggleButtonExpActive: Function;
  togglePictureExpActive: Function;
}

export const commonStore = (set: any, produce: Function) => ({
  isButtonExpActive: false,
  isPictureExpActive: false,
  toggleButtonExpActive: () =>
    set(
      produce((draft: ICommonStore) => {
        draft.isButtonExpActive = !draft.isButtonExpActive;
      })
    ),
  togglePictureExpActive: () =>
    set(
      produce((draft: ICommonStore) => {
        draft.isPictureExpActive = !draft.isPictureExpActive;
      })
    ),
});
