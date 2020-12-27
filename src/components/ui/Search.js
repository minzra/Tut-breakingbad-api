import React, { useState } from 'react';
// Usually every input in a form has it's own state

const Search = () => {
  const [text, setText] = useState('');

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;