import React from 'react';
import './Index.css'; // Assuming there's a CSS file to handle the styles

const Index = () => {
  return (
    <div className="index-container">
      <h1>Mengapa Memilih Kami</h1>
      <div className="section">
        <div className="icon-container">
          <img src="/path/to/icon1.png" alt="Quality" />
          <h2>Quality</h2>
          <p>Kami menjamin kualitas terbaik di setiap produk yang kami tawarkan.</p>
        </div>
        <div className="icon-container">
          <img src="/path/to/icon2.png" alt="Support" />
          <h2>Dukungan Pelanggan</h2>
          <p>Tim kami siap membantu anda 24/7.</p>
        </div>
        <div className="icon-container">
          <img src="/path/to/icon3.png" alt="Price" />
          <h2>Harga Terjangkau</h2>
          <p>Kami menawarkan produk berkualitas dengan harga yang bersaing.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;