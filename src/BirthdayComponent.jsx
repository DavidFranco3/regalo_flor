import React, { useState, useEffect } from 'react';
import backgroundImage from './imagenes/fondo.jpg'; // Ruta de la imagen de fondo

const BirthdayComponent = () => {
  const [letterColors, setLetterColors] = useState([]);

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  useEffect(() => {
    const initialColors = Array.from("¡Feliz Cumpleaños!").map(
      () => colors[Math.floor(Math.random() * colors.length)]
    );
    setLetterColors(initialColors);

    const interval = setInterval(() => {
      setLetterColors((prevColors) =>
        prevColors.map(() => colors[Math.floor(Math.random() * colors.length)])
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Globos flotando */}
      <div style={styles.balloons}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="balloon" style={styles[`balloon${i % 3}`]}></div>
        ))}
      </div>

      {/* Corazón palpitante */}
      <div style={styles.heart}>
        <div style={styles.heartBefore}></div>
        <div style={styles.heartAfter}></div>
      </div>

      {/* Texto animado */}
      <h1 style={styles.birthdayText}>
        {Array.from("¡Feliz Cumpleaños!").map((char, index) => (
          <span key={index} style={{ color: letterColors[index] }}>
            {char}
          </span>
        ))}
      </h1>

      {/* Confeti */}
      {[...Array(100)].map((_, i) => (
        <div key={i} className="confetti" style={styles.confetti(i)}></div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    position: 'relative',
  },
  balloons: {
    position: 'absolute',
    bottom: '-150px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    zIndex: 1,
  },
  balloon0: { backgroundColor: 'red' },
  balloon1: { backgroundColor: 'blue' },
  balloon2: { backgroundColor: 'yellow' },
  heart: {
    width: '150px', // Reducido
    height: '150px', // Reducido
    backgroundColor: 'red',
    position: 'relative',
    transform: 'rotate(-45deg)',
    animation: 'heartbeat 1s infinite',
    zIndex: 2,
  },
  heartBefore: {
    content: '""',
    width: '150px', // Reducido
    height: '150px', // Reducido
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    top: '-75px', // Ajustado para tamaño reducido
    left: '0',
  },
  heartAfter: {
    content: '""',
    width: '150px', // Reducido
    height: '150px', // Reducido
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '75px', // Ajustado para tamaño reducido
  },
  birthdayText: {
    marginTop: '30px',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 3,
  },
  confetti: (index) => ({
    position: 'absolute',
    width: '10px',
    height: '20px',
    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // Colores aleatorios
    opacity: Math.random(),
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    transform: `rotate(${Math.random() * 360}deg)`,
    animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
    animationDelay: `${index * 0.1}s`, // Retardo de animación para variación
  }),
};

// Animaciones globales
const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(1.3) rotate(-45deg);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}

.balloon {
  width: 70px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  position: relative;
  animation: float 4s infinite ease-in-out;
}
.balloon:before {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 2px;
  height: 40px;
  background-color: black;
  transform: translateX(-50%);
}
`;
document.head.appendChild(globalStyles);

export default BirthdayComponent;
