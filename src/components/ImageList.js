import './imagelist.css';
import ImageCard from './imagecard';
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((images) => {
        return <ImageCard key={images.id} images={images} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
