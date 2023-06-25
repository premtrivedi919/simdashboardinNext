import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSetting } from '../store/actions/settingActions';

const Etable = ({ id }) => {
  const dispatch = useDispatch();
  const setting = useSelector((state) => state.setting);
  const { data, loading, error } = setting || {};

  useEffect(() => {
    dispatch(fetchSetting(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data && (
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Etable;
