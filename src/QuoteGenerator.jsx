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
        display: "flex",         
        justifyContent: "center", 
        alignItems: "center",    
        overflow: "hidden",      
      }} className=''
    >
      <div 
        style={{
          backgroundColor: "grey", 
          width: "500px", 
          padding: "20px",   
          borderRadius: "10px", 
         boxShadow:"0 4px 8px grey"
        }}
        className="quote-container"
      >
        <h1 className="display mb-4">Random Quote Generator</h1>
        <div className="quote mb-4">
          <p className="blockquote text-center">
            <em>"{quote}"</em>
          </p>
          <footer className="blockquote-footer">{author}</footer>
        </div>
        <button className="btn btn-success btn-lg" onClick={fetchQuote}>
          Get Another Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
