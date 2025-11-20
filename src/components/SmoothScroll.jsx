import { ReactLenis } from 'lenis/react';

function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,         // Smoothness (0.1 is standard, 0.05 is heavier/slower)
        duration: 1.5,     // How long the scroll slide lasts
        smoothTouch: true, // Keeps it smooth on mobile touch
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;