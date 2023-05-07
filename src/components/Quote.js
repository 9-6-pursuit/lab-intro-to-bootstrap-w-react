import React from 'react';

const Quote = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <blockquote className="blockquote text-center">
            <p className="mb-0 script-font">Travel is the only thing you buy that makes you richer...</p>
            <footer className="blockquote-footer">
              {/* An <cite title="Source Title">Unknown Traveller</cite> */}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quote;
