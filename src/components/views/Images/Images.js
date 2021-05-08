import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Images.module.scss';

function Images() {

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      .then(res => {
        console.log(res);
        setImages(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const imagesPerPage = 25;
  const pagesVisited = pageNumber * imagesPerPage;

  const current = images.slice(pagesVisited, pagesVisited + imagesPerPage);

  console.log('ssssssss', current);

  const displayImages = current.map(image => {
    return (
      <div className={styles.root}>
        <img key={image.id} src={image.download_url} className={styles.image}></img>
      </div>
      )
  });

  const pageCount = Math.ceil(images.length/ imagesPerPage);
  console.log('page count',pageCount);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

  return (
  <div className={styles.root}>
    {displayImages}
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={styles.pagination_wrapper}
      previousLinkClassName={styles.previous}
      nextLinkClassName={styles.next}
      activeClassName={styles.active}
    />
  </div>
  )
}


Images.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Images;
