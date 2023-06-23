import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../store/actions/commentsActions';

const table = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.comments);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchComments());
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return null; // Don't render the table if not logged in
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
