import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../store/actions/supportActions';
import { useRouter } from 'next/router';
const Report = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const { comments, loading, error } = useSelector((state) => state.support);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id)); // Fetch comments for the specific ID
    }
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="body">
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
