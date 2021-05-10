import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import { connect } from 'react-redux';
import { fetchPhotos } from '../../../redux/globalRedux';

import styles from './Images.module.scss';

function Images(props) {


  const [pageNumber, setPageNumber] = useState(0);

  const displayImages = props.photos.map(image => {
    return (
      <div className={styles.root}>
        <img key={image.id} src={image.download_url} className={styles.image}></img>
      </div>
      )
  });

  const pageCount = 8;


  const changePage = ({selected}) => {
    setPageNumber(selected);
    props.photosFetching(pageNumber);
  };

  return (
  <div className={styles.root}>
    {displayImages}
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      onPageChange={changePage}
      pageCount={pageCount}
      containerClassName={styles.pagination_wrapper}
      previousLinkClassName={styles.previous}
      nextLinkClassName={styles.next}
      activeClassName={styles.active}
    />
  </div>
  )
}


Images.propTypes = {
  pageNumber: PropTypes.node,
};

const mapStateToProps = state => ({
  photos: state.photos,
});


const mapDispatchToProps = (dispatch) => ({
  photosFetching: (pageNumber) => dispatch(fetchPhotos(pageNumber)),
});

connect(mapStateToProps, mapDispatchToProps)(Images);

export default Images;
