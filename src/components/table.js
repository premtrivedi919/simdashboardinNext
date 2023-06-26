import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../store/actions/commentsActions';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel
} from '@mui/material';
import { useRouter } from 'next/router';
import { fetchSetting } from '../store/actions/settingActions';
import Etable from '../components/Etable';

const TablePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.comments);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('asc');
  const [selectedId, setSelectedId] = useState(null); // Track the selected ID

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  // const router = useRouter();

  // const handleClick = (id) => {
  //   setSelectedId(id); // Set the selected ID
  //   console.log(id)
  //   dispatch(fetchSetting(id)); // Fetch the setting data
  // };

  const router = useRouter();

  // const handleClick = (id) => {
  //   setSelectedId(id);
  //   router.push('/etable'); // Navigate to the EtablePage
  //   dispatch(fetchSetting(id));
  // };
  const handleClick = (id) => {
    // Navigate to the Etable page with the specific ID
    router.push(`/etable/${id}`);
  };
  // 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedData = data.slice().sort((a, b) => {
    const compare = (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    };

    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (order === 'asc') {
      return compare(aValue, bValue);
    } else {
      return compare(bValue, aValue);
    }
  });

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="setname1"> Equity/Option/Spot</div>
      <TableContainer component={Paper}>
        <Table className="tablerepo">
          <TableHead>
            <TableRow>
             
             
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >
                 Strategy Name
                </TableSortLabel>
              </TableCell>


              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Instrument
                </TableSortLabel>
              </TableCell>



              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={orderBy === 'email' ? order : 'asc'}
                  onClick={() => handleSort('email')}
                >
                 ROI
                </TableSortLabel>
              </TableCell>

              <TableCell> <TableSortLabel
              active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                
               >  Drawdown     </TableSortLabel></TableCell>
              <TableCell><TableSortLabel
              active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                
               >  Users-following     </TableSortLabel></TableCell>
              <TableCell><TableSortLabel
              active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                
               > Action    </TableSortLabel></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="setname12">{item.id}</TableCell>
                  <TableCell className="setname12">{item.title}</TableCell>
                  <TableCell className="setname12">{item.id}</TableCell>
                  <TableCell className="setname12">{item.id}</TableCell>
                  <TableCell className="setname12">{item.id}</TableCell>
                  <TableCell className="setname12">
                    <button onClick={() => handleClick(item.id)}>View</button>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell  colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Render Etable component with the selected ID */}
      {selectedId && <Etable id={selectedId} />}
    </div>
  );
};

export default TablePage;
