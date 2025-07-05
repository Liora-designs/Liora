export default function SectionDivider({ flip = false, color = '#A9A9A9' }) {
  return (
    <svg
      className={`section-divider ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Main organic wave */}
      <path
        d="M0,40 C360,120 1080,0 1440,80 L1440,100 L0,100 Z"
        fill={color}
      />
      {/* Lighter secondary wave for depth */}
      <path
        d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z"
        fill={color}
        fillOpacity="0.4"
      />
    </svg>
  );
} 