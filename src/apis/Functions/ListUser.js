import {GetData} from '../helpers';

import url from '../url';

export const getListUser = async params =>
  GetData(url.getListUser, params)
    .then(res => res)
    .catch(err => err);
