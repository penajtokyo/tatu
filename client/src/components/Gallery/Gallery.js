import React from 'react';
import DisplayCard from '../../components/DisplayCard';
import { Row } from 'react-materialize';

//for each syle in the DB return a swiper showing all images in that category
//at start there would be no additional details
//make the category header a link/query that calls the api query to search by that style

const Gallery = (props) => {
  return (
    <div>
      <Row>
        <DisplayCard
          data={props.images}
          savedImgIDs={props.saved}
          handleRemoveImage={props.handleRemoveImage}
        />
      </Row>
    </div>
  );
};

export default Gallery;