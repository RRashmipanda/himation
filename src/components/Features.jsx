import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.3s ease-out' }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-pink-900/30 to-rose-800/40"></div>
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-rose-50">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-rose-200 via-pink-200 to-rose-300 bg-clip-text text-transparent">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-rose-100/80">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-gradient-to-r from-rose-800/80 to-pink-800/80 border border-rose-400/30 px-5 py-2 text-xs uppercase text-rose-200/70 backdrop-blur-sm"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(244, 63, 94, 0.3), rgba(236, 72, 153, 0.1))`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="text-lg bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-semibold">
          Into the ARVR Tech
        </p>
        <p className="max-w-md text-lg text-gray-600 opacity-80 mt-4">
          
First of Its Kind Platform for AR/VR/MR Content, Using by 265 Builders and Developers, 2050 Real Estate Agents, 964 Interior Designers and 21 Corporate Houses. Appriciated in 10+ Countries.
        </p>
      </div>

      <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-2xl md:h-[65vh] border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
        <BentoCard
          src="videos/hero-2.mp4"
          title={
            <>
              360°<b> Virtual</b> Tour
            </>
          }
          description="Teleport your customer/ visitors to any corner of your premises by implementing Hi'Ds 360° virtual tour and showcase your facility/services on the internet in a most realistic manner."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="row-span-1 md:col-span-1 md:row-span-2 overflow-hidden rounded-2xl border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Tethered <b>V</b>R
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="row-span-1 ms-32 md:col-span-1 md:ms-0 overflow-hidden rounded-2xl border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                3<b>D</b>oF
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="me-14 md:col-span-1 md:me-0 overflow-hidden rounded-2xl border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                6<b>D</b>oF
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="overflow-hidden rounded-2xl border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex size-full flex-col justify-between bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 p-5">
            <h1 className="text-2xl md:text-4xl font-bold max-w-64 text-gray-800">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end text-rose-600" />
          </div>
        </BentoTilt>

        <BentoTilt className="overflow-hidden rounded-2xl border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 via-pink-900/20 to-rose-800/30"></div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;