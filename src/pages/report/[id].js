import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchCommentsclose, fetchCommentsopen } from '../../store/actions/supportActions';
import { useRouter } from 'next/router';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

const Report = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const { comments, commentso, commentsc, loading, error } = useSelector((state) => state.support);
  const pdfRef = useRef(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id)); // Fetch comments for the specific ID
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsclose(id)); // Fetch comments for the specific ID
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsopen(id)); // Fetch comments for the specific ID
    }
  }, [dispatch, id]);

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

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.section}>
              <Text style={styles.heading}>{comment.name}</Text>
              <Text style={styles.text}>{comment.body}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          {commentsc.map((comment) => (
            <View key={comment.id} style={styles.section}>
              <Text style={styles.heading}>{comment.name}</Text>
              <Text style={styles.text}>{comment.body}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          {commentso.map((comment) => (
            <View key={comment.id} style={styles.section}>
              <Text style={styles.heading}>{comment.name}</Text>
              <Text style={styles.text}>{comment.body}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  const handleGeneratePDF = () => {
    if (pdfRef.current) {
      pdfRef.current.updateContainer();
      pdfRef.current.save();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableRows = comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <div className="body">
        <div className="bodynew">
          <Image src="/favicon.png" alt="Logo" width={70} height={50} />
          <div>Markets</div>
          <div>Rejected</div>
          <div>Accounts</div>
        </div>


<div className="setname1">SETTING</div>
        <TableContainer>
          <Table className="tablerepo">
            <TableHead>
              <TableRow>
                <TableCell className="setname11">Initial Balance</TableCell>
                <TableCell className="setname11">Current balance</TableCell>
                <TableCell className="setname11">ROI</TableCell>
                <TableCell className="setname11">SL</TableCell>
                <TableCell className="setname11">TP</TableCell>
                <TableCell className="setname11">qty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                <TableRow >
                <TableCell className="setname12">345.44</TableCell>
                <TableCell className="setname12">123333</TableCell>
                <TableCell className="setname12">23%</TableCell>
                <TableCell className="setname12">-</TableCell>
                <TableCell className="setname12">-</TableCell>
                  <TableCell className="setname12">MANUAL</TableCell>
                </TableRow>
           
            </TableBody>
          </Table>
        </TableContainer>







        <div className="setname1">STATIC</div>
        <TableContainer>
          <Table className="tablerepo">
            <TableHead>
              <TableRow>
                <TableCell className="setname11">Net P&L</TableCell>
                <TableCell className="setname11">Max Drawdown</TableCell>
                <TableCell className="setname11">Buy and hold</TableCell>
                <TableCell className="setname11">Sharp ratio</TableCell>
                <TableCell className="setname11">Profit</TableCell>
                <TableCell className="setname11">Portfolio%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                <TableRow >
                <TableCell className="setname12">34888</TableCell>
                <TableCell className="setname12">123</TableCell>
                <TableCell className="setname12">123</TableCell>
                <TableCell className="setname12">-</TableCell>
                <TableCell className="setname12">-</TableCell>
                  <TableCell className="setname12">344</TableCell>
                </TableRow>
           
            </TableBody>
          </Table>
        </TableContainer>





        <div className="setname1">OPEN</div>
        <TableContainer>
          <Table className="tablerepo">
            <TableHead>
              <TableRow>
                <TableCell className="setname11">Direction</TableCell>
                <TableCell className="setname11">Quantity</TableCell>
                <TableCell className="setname11">Buy time</TableCell>
                <TableCell className="setname11">Buy price</TableCell>
                <TableCell className="setname11">Sell time</TableCell>
                <TableCell className="setname11">Sell price</TableCell>
                <TableCell className="setname11">SL</TableCell>
                <TableCell className="setname11">TP</TableCell>
                <TableCell className="setname11">P&L</TableCell>
                <TableCell className="setname11">Chg%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                <TableRow >
                <TableCell className="setname12">34888</TableCell>
                <TableCell className="setname12">123</TableCell>
                <TableCell className="setname12">123</TableCell>
                <TableCell className="setname12">-</TableCell>
                <TableCell className="setname12">-</TableCell>
                  <TableCell className="setname12">344</TableCell>
                  <TableCell className="setname12">123</TableCell>
                  <TableCell className="setname12">123</TableCell>
                  <TableCell className="setname12">123</TableCell>
                  <TableCell className="setname12">123</TableCell>
                </TableRow>
           
            </TableBody>
          </Table>
        </TableContainer>


        <div className="setname1">CLOSE</div>
        <TableContainer>
          <Table className="tablerepo">
            <TableHead>
              <TableRow>
              <TableCell className="setname11">Direction</TableCell>
                <TableCell className="setname11">Quantity</TableCell>
                <TableCell className="setname11">Buy time</TableCell>
                <TableCell className="setname11">Buy price</TableCell>
                <TableCell className="setname11">Sell time</TableCell>
                <TableCell className="setname11">Sell price</TableCell>
                <TableCell className="setname11">SL</TableCell>
                <TableCell className="setname11">TP</TableCell>
                <TableCell className="setname11">P&L</TableCell>
                <TableCell className="setname11">Chg%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell className="setname12">{comment.name}</TableCell>
                  <TableCell className="setname12">{comment.body}</TableCell>
                  <TableCell className="setname12">344</TableCell>
                  <TableCell className="setname12">123</TableCell>    <TableCell className="setname12">344</TableCell>
                  <TableCell className="setname12">123</TableCell>    <TableCell className="setname12">344</TableCell>
                  <TableCell className="setname12">123</TableCell>    <TableCell className="setname12">344</TableCell>
                  <TableCell className="setname12">123</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          count={comments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <PDFDownloadLink document={<MyDocument />} fileName="report.pdf">
          {({ loading }) => (loading ? 'Generating PDF...' : <button onClick={handleGeneratePDF}>Generate PDF</button>)}
        </PDFDownloadLink>

        <div style={{ visibility: 'hidden' }}>
          <MyDocument ref={pdfRef} />
        </div>
      </div>
    </div>
  );
};

export default Report;
