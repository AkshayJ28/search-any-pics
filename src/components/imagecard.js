import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imagesref = React.createRef();
    }

    componentDidMount() {
        this.imagesref.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imagesref.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };
    render() {
        const { description, urls } = this.props.images;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imagesref} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;
