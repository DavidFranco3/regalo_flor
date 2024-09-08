import { useEffect, useState } from 'react';
import './BirthdayComponent.css'; // Asegúrate de mover el CSS aquí

const BirthdayComponent = () => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const numStars = 100;
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 2 + 3}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      body.appendChild(star);
    }

    return () => {
      // Limpiar estrellas al desmontar el componente
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);

  const playVideo = () => {
    console.log("Luna clickeada");
    setShowLetter(true);
    console.log(showLetter)
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/ZkCk1PAMU7I?autoplay=1&controls=0&loop=1&playlist=ZkCk1PAMU7I";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.className = "hidden-iframe";
    document.body.appendChild(iframe);
  };

  console.log(showLetter)

  return (
    <div>
      {/* Mensaje de cumpleaños con globos */}
      <div className="balloon-container" id="birthday-message" style={{ display: showLetter ? 'none' : 'flex' }}>
        <div className="balloon-row">
          <div className="balloon">F<div className="string"></div></div>
          <div className="balloon">E<div className="string"></div></div>
          <div className="balloon">L<div className="string"></div></div>
          <div className="balloon">I<div className="string"></div></div>
          <div className="balloon">Z<div className="string"></div></div>
        </div>
        <div className="balloon-row">
          <div className="balloon">C<div className="string"></div></div>
          <div className="balloon">U<div className="string"></div></div>
          <div className="balloon">M<div className="string"></div></div>
          <div className="balloon">P<div className="string"></div></div>
          <div className="balloon">L<div className="string"></div></div>
          <div className="balloon">E<div className="string"></div></div>
          <div className="balloon">A<div className="string"></div></div>
          <div className="balloon">Ñ<div className="string"></div></div>
          <div className="balloon">O<div className="string"></div></div>
          <div className="balloon">S<div className="string"></div></div>
        </div>
      </div>

      {/* Luna en la esquina superior derecha */}
      <div className="moon" id="moon" onClick={playVideo}></div>

      {/* Carta Romántica */}
      {showLetter && (
        <>
        <div className="letter" id="letter">
          <div className="panda top-left">🐼</div>
          <div className="panda top-right">🐼</div>
          <div className="panda bottom-left">🐼</div>
          <div className="panda bottom-right">🐼</div>
          <h1>Querida [Nombre],</h1>
          <p>
            En este día tan especial, quiero expresarte cuánto significas para mí. Tu presencia en mi vida es un regalo precioso, y cada momento a tu lado es una bendición.
          </p>
          <p>
            Tu sonrisa ilumina mis días y tu amor me da fuerza para enfrentar cualquier desafío. Eres mi apoyo incondicional y mi mayor inspiración.
          </p>
          <p>
            Gracias por ser la persona maravillosa que eres y por hacer que cada día sea más brillante. Te amo con todo mi corazón.
          </p>
          <p>
            Con todo mi amor,<br />
            [Tu Nombre]
          </p>
        </div>
        </>
      )}
    </div>
  );
};

export default BirthdayComponent;
