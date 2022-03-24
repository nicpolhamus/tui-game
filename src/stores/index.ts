import { produce } from "immer";
import create from "zustand";

import { buttonExpStore } from "./button.experiment.store";
import { commonStore } from "./common.store";

export const useStore = create((set) => ({
  ...commonStore(set, produce),
  ...buttonExpStore(set, produce),
}));
