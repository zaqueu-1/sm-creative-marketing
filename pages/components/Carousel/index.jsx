import { useState, useEffect } from 'react';

const items = [
  { id: 1, title: 'Título 1', subtitle: 'Subtítulo 1' },
  { id: 2, title: 'Título 2', subtitle: 'Subtítulo 2' },
  { id: 3, title: 'Título 3', subtitle: 'Subtítulo 3' },
  // Adicione mais itens conforme necessário
];

const InfiniteSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % items.length);
    }, 5000); // Intervalo de 5 segundos para trocar os itens do slider

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  const prevItemIdx = (currentIdx - 1 + items.length) % items.length;
  const nextItemIdx = (currentIdx + 1) % items.length;

  return (
    <div className="slider">
    <div className="slide">
      <h2>Título 1</h2>
      <p>Subtítulo 1</p>
    </div>
    <div className="slide">
      <h2>Título 2</h2>
      <p>Subtítulo 2</p>
    </div>
    <div className="slide">
      <h2>Título 3</h2>
      <p>Subtítulo 3</p>
    </div>
  </div>
  );
};

export default InfiniteSlider;
