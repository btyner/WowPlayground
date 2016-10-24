import Axios from 'axios';

const API_KEY = 'xsda7ts2g9mkrkakhe4w6n2hcm7d48wx';
const ROOT_URL = 'https://us.api.battle.net/wow';
const API_SETUP = `locale=en_US&apikey=${API_KEY}`;

export const CHARACTER_INFO = 'CHARACTER_INFO';
export const REALM_LIST = 'REALM_LIST';

export function characterInfo(realm, name) {
  const url = `${ROOT_URL}/character/${realm}/${name}?fields=items&${API_SETUP}`;
  const request = Axios.get(url);

  return {
    type: CHARACTER_INFO,
    payload: request
  }
}

export function realmList() {
  const url = `${ROOT_URL}/realm/status?${API_SETUP}`;
  const request = Axios.get(url);

  return {
    type: REALM_LIST,
    payload: request
  }
}
