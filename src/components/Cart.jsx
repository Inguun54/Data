import React from 'react';

const Cart = ({ title, thumbnail, price }) => {
  return (
    <div style={styles.cartContainer}>
      <img 
        style={styles.thumbnail} 
        src={thumbnail} 
        alt={title} 
      />
      <div style={styles.title}>{title}</div>
      <div style={styles.price}>${price}</div>
      <button style={styles.button}>Buy Now!</button>
    </div>
  );
};

const styles = {
  cartContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  title: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    padding: '10px',
    fontSize: '14px',
    color: 'green',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Cart;
