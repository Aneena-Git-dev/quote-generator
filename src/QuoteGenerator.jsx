import React, { useState, useEffect } from 'react';
import instance from './instance';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await instance.get('quotes');
      console.log(response.data); 
      const randomQuote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div 
      style={{
        backgroundColor: "black",
        height: "100vh",         
          
        overflow: "hidden",      
      }} className='d-flex justify-content-center align-items-center'
    >
      <div 
        style={{
          backgroundColor: "smokgrey", 
          width: "500px", 
          padding: "20px",   
          borderRadius: "10px", 
         boxShadow:"0 4px 8px grey"
        }}
        className="quote-container"
      >
        <h1
         className="display d-flex justify-content-center mb-4" style={{color:"white",fontSize:'900'}}>Random Quote Generator
        </h1>
        <div className="quote mb-4 " style={{color:"white",fontSize:'600'}}>
          <p className="blockquote d-flex justify-content-center ">
            <em>"{quote}"</em>
          </p>
          <footer className="blockquote-footer d-flex justify-content-center" style={{color:'black'}} >{author}</footer>
        </div>
        <div className="d-flex justify-content-center">
    <button 
   
    className="btn btn-outline-light btn-lg" onClick={fetchQuote}>
      Get Another Quote
    </button>
  </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
