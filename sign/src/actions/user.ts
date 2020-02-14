import {login} from '../services/index'

export function LOGIN(code){
  return dispatch => {
    let res = login(code);
    console.log('res...', res);
    dispatch({
      type: 'LOGIN',
      payload: res
    })
  }
}
