import React from 'react';
import products from './products.json'; // adjust the path as needed
import './Table.css'; // optional if you want to add external styles

const Table = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Reviews</th>
            <th style={thStyle}>Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={tdStyle}>
                {product.image_url ? (
                  <img src={product.image_url} alt="product" width="80" />
                ) : (
                  'No Image'
                )}
              </td>
              <td style={tdStyle}>{product.title || 'N/A'}</td>
              <td style={tdStyle}>{product.price}</td>
              <td style={tdStyle}>{product.total_reviews || 'N/A'}</td>
              <td style={tdStyle}>
                <a href={product.product_url} target="_blank" rel="noreferrer">
                  View Product
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '12px',
  background: '#f4f4f4',
  textAlign: 'left',
  fontWeight: 'bold',
};

const tdStyle = {
  padding: '10px',
};

export default Table;
