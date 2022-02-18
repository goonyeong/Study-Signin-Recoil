import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const signInfoAtom = atom({
  key: 'isSignin',
  default: {
    isSign: false,
    userID: '',
    userPW: '',
  },
  effects_UNSTABLE: [persistAtom],
});
