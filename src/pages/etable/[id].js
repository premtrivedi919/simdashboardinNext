import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSetting } from '../../store/actions/settingActions';
import { useRouter } from 'next/router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { fetchComments } from '../../store/actions/supportActions';

const EtablePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const setting = useSelector((state) => state.setting);
  const { data, loading, error } = setting || {};

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (id) {
      dispatch(fetchSetting(id));
      dispatch(fetchComments(id)); // Fetch comments for the specific ID
    }
  }, [dispatch, id]);

  const handleClick = (id) => {
    router.push(`../report/${id}`); // Navigate to the report page with the specific ID
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let renderedData = [];

  if (Array.isArray(data)) {
    renderedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  } else if (data) {
    renderedData = [data];
  }

  return (
    <div className="body">
      <div className="bodynew">
        <div>Markets</div>
        <div>Rejected</div>
        <div>Accounts</div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Initial Balance</TableCell>
              <TableCell>Current Balance</TableCell>
              <TableCell>ROI</TableCell>
              <TableCell>SL</TableCell>
              <TableCell>TP</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Inverse</TableCell>
              <TableCell>Pyramiding</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.body}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <button onClick={() => handleClick(item.id)}>View</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={Array.isArray(data) ? data.length : data ? 1 : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default EtablePage;
