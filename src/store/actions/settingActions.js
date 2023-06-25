import axios from 'axios';

export const fetchSettingRequest = () => {
  return { type: 'FETCH_SETTING_REQUEST' };
};

export const fetchSettingSuccess = (data) => {
  return { type: 'FETCH_SETTING_SUCCESS', payload: data };
};

export const fetchSettingFailure = (error) => {
  return { type: 'FETCH_SETTING_FAILURE', payload: error.message };
};

export const fetchSetting = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSettingRequest());

      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = response.data;

      console.log('Fetched Setting:', data); // Add this line to check the fetched data

      dispatch(fetchSettingSuccess(data));
    } catch (error) {
      dispatch(fetchSettingFailure(error));
    }
  };
};

