export default function AdSensePlaceholder({ size = '728x90', className = '' }: { size?: string; className?: string }) {
  return (
    <div
      className={`ads bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-medium ${className}`}
      style={{
        width: size === '728x90' ? '100%' : size === '300x250' ? '300px' : '100%',
        maxWidth: size === '728x90' ? '728px' : size === '300x250' ? '300px' : '100%',
        height: size === '728x90' ? '90px' : size === '300x250' ? '250px' : '90px',
      }}
    >
      AdSense {size} - Paste your AdSense code here
    </div>
  );
}
