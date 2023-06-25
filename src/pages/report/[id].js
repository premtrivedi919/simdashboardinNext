import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/actions/supportActions';
import { useRouter } from 'next/router';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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

  const { comments, loading, error } = useSelector((state) => state.support);
  const pdfRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);

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
      </Page>
    </Document>
  );

  const handleGeneratePDF = () => {
    if (pdfRef.current) {
      pdfRef.current.updateContainer();
      const blob = pdfRef.current.toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    }
  };

  return (
    <div>
      <div className="body">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
      {pdfUrl && (
        <div style={{ height: '100vh' }}>
          <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      <div style={{ display: 'none' }}>
        <MyDocument ref={pdfRef} />
      </div>
    </div>
  );
};

export default Report;
