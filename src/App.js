import React, { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = () => {
    const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
      setResult(`${word} is a palindrome`);
    } else {
      setResult(`${word} is not a palindrome`);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="container p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Palindrome Checker</h1>
        <input 
          type="text" 
          className="w-full p-2 mb-4" 
          placeholder="Enter a word" 
          value={word} 
          onChange={e => setWord(e.target.value)}
        />
        <button 
          className="w-full p-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded" 
          onClick={checkPalindrome}
        >
          Check
        </button>
        <p className="mt-4 text-center">{result}</p>
      </div>
    </div>
  );
}

export default App;