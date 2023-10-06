import React from 'react';

const ClueCards = () => {
    const clueCardsData = [
        { title: 'CLUE 1', value: 'Click to grab it' },
        { title: 'CLUE 2', value: 'Click to grab it' },
        { title: 'CLUE 3', value: 'Click to grab it' },
        { title: 'CLUE 4', value: 'Click to grab it' },
        { title: 'CLUE 5', value: 'Click to grab it' },
        { title: 'CLUE 6', value: 'Click to grab it' },
    ];

    return (
        <div>
            <section className='bg-black pt-20 lg:pt-4 pb-40 overflow-hidden'>
                <div className='px-4 lg:px-0 mx-auto max-w-screen-2xl pt-6 lg:pt-28 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center'>
                    {clueCardsData.map((card, index) => (
                        <div
                            key={index}
                            className='bg-black flex justify-center rounded-2xl shadow-xl shadow-sky-500'
                        >
                            <div className='group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8'
                            >
                                <div className='z-10 flex flex-col items-center gap-2'>
                                    <span className='text-slate-400 text-5xl font-bold'>{card.title}</span>
                                    <p className='text-gray-50 font-bold text-xl mt-10'>{card.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClueCards;
