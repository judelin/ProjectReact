import React from 'react';


import './styles.css';

function reducer(currentSrc, action) {
  if (action.type === 'main image loaded') {
    return action.src;
  }
  if (!currentSrc) {
    return action.src;
  }
  return currentSrc;
}

function useProgressiveImage({ src, fallbackSrc }) {
  const [currentSrc, dispatch] = React.useReducer(reducer);
  React.useEffect(() => {
    const mainImage = new Image();
    const fallbackImage = new Image();

    mainImage.onload = () => {
      dispatch({ type: 'main image loaded', src });
    };
    fallbackImage.onload = () => {
      dispatch({ type: 'fallback image loaded', src: fallbackSrc });
    };

    mainImage.src = src;
    fallbackImage.src = fallbackSrc;
  }, [src, fallbackSrc]);

  return currentSrc;
}

function Appi() {
  const src = useProgressiveImage({
    src:
      'https://images.unsplash.com/photo-1557287500-9abe7134457f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    fallbackSrc:
      'https://images.unsplash.com/photo-1557287500-9abe7134457f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=20',
  });
  console.log("goood");
  return (
    <div className="App">
      <img src={src} alt="" style={{ width: '100%' }} />
    </div>
  );
}


export default Appi;