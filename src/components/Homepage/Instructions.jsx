import React from 'react';

const Instructions = () => {
  return (
    <div>
      <section className='bg-black px-6 pt-10 pb-28 overflow-hidden'>
        <h1 className='text-2xl text-center text-white mb-10 lg:text-6xl font-extrabold'>
          Instructions
        </h1>

        <div className='mx-auto max-w-screen-sm'>
          
          <div class="mockup-code text-xl">
  <pre data-prefix="1"><code >LOREM IPSUM BLA BLA SOME ISNTRU</code></pre> 
  <pre data-prefix="2" class="text-warning"><code>LOREM IPSUM BLA BLA SOME ISNTRU</code></pre> 
  <pre data-prefix="3" class="text-success"><code>LOREM IPSUM BLA BLA SOME ISNTRU</code></pre>
</div>
        </div>
      </section>
    </div>
  );
};

export default Instructions;