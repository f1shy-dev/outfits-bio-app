import React from 'react';

const HomeContent = () => {
  return (

    <div className="max-w-screen-md py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Something drippy is cooking</h1>
      <p className="mb-4">
        I'm building a virtual wardrobe where people can add photos of clothes to their profile and share them with a link like{' '}
        <a className="text-blue-500 underline" href="https://beta.outfits.bio/ogimage.png">
          outfits.bio/jecta
        </a>
        .
      </p>
      <p className="mb-4">
        To stay on top of the latest updates, follow my{' '}
        <a className="text-blue-500 underline" href="https://twitter.com/jecta2">
          Twitter
        </a>{' '}
        or join the{' '}
        <a className="text-blue-500 underline" href="https://discord.gg/aQZs9qVna3">
          Discord
        </a>
        .
      </p>
      <p>- Jeremy</p>

      <p className="text-sm text-gray-500 mt-6">You are on the beta route:</p>

      <div className="flex mt-8">
        <a
          href="/login"
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Login
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-white text-black flex items-center justify-center h-screen">
      <HomeContent />
    </div>
  );
};

export default Home;