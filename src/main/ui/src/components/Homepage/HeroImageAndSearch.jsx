import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function HeroImageAndSearch() {
  return (
    <div
      className="bg-image "
      style={{
        backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')",
        height: 500
      }}
    >
      <div
        className="mask bg-gradient"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 500 }}
      >
        <div className="d-flex justify-content-center align-items-center bg-image h-100">
          <div className="text-white">
            <h1 className="mb-3">Find Your Park</h1>
            {/* <SearchBar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
