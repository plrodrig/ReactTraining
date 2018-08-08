import React from 'react'
import styles from './Product.css';

class Product extends React.Component {
    render = () => {
        const { title, author, published, country, lang, pages,
            //image, 
            url, price } = this.props.product;

        return (<div style={styles.product}>

            {/* <img style={styles.thumbnail}
                src={image ? "images/images/" + image : "images/images/default.jpg"}
                alt={title} /> */}

            <h1><a href={url}>{title} </a></h1>
            <p>
                by: {author}<br />
                published by: {published}, {country}<br />
                language: {lang}<br />
                pages: {pages}<br />
                price: ${price}<br />
            </p>

            {this.props.isInCart 
                ? <button className="btn btn-danger"
                          name="removeFromCart"
                          onClick={this.handleClick}>Remove</button>
                : <button className="btn btn-primary"
                          name="addToCart"
                          onClick={this.handleClick}>Add</button>}

        </div>);
    }

    handleClick = (e) => {
        const handler = this.props[e.target.name];
        console.log("handleClick(e = %O); handler = %O; this.props = %O; id = %s", e, handler, this.props, this.props.id);
        handler(this.props.product.id);
    };

}



export default Product;