import axios from 'axios';


/* selectors */

    
  /* action name creator */
  const reducerName = 'singlepage';
  const createActionName = name => `app/${reducerName}/${name}`;
  
  /* action types */
  
  const FETCH_PHOTOS = createActionName('FETCH_PHOTOS');
  
  /* action creators */
  
  export const fetchImages = payload => ({payload, type: FETCH_PHOTOS});
  
  
  /* thunk creators */
  export const fetchPhotos = (pageNumber) => {
    return (dispatch, getState) => {

      const imagesPerPage = 25;
      const pagesVisited = pageNumber * imagesPerPage;
      
  
      axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      .then(res => {
        const current = res.data.slice(pagesVisited, pagesVisited + imagesPerPage)
        fetchImages(current);
      })
      .catch(err => {
        console.log(err)
      })

    };
  };
  
  /* reducer */
  export const reducer = (statePart = [], action = {}) => {
    switch (action.type) {      
      case FETCH_PHOTOS: {
        return action.payload;
      }
      default:
        return statePart;
    }
  };
    