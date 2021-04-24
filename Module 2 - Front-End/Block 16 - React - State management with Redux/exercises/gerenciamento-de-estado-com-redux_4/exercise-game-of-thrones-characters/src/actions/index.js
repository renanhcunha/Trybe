import charAPI from "../services/charAPI";

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';
export const FAILED_REQUEST = 'FAILED_REQUEST'

const requestInfo = () => ({ type: REQUEST_INFO })

const receiveInfo = (info) => ({
  type: RECEIVE_INFO,
  info });

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error
})

export default function fetchCharacterInfo(char) {
  return async (dispatch) => {
    dispatch(requestInfo());
    try {
      const data = await charAPI(char);
      dispatch(receiveInfo(data));
    }
    catch (error) {
      dispatch(failedRequest(error));
    }
  }
}