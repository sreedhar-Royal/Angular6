import { fireBaseKey } from 'src/private/firebase-key';
export const environment = {
  production: true,
  firebase: {
    ...fireBaseKey
  }
};
