'use client';

export default function SvgTest() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">SVG Test</h2>
      <div className="border border-gray-300 p-2 mb-4">
        <p className="mb-2">Direct img tag:</p>
        <img 
          src="/raising-graph.svg" 
          alt="Raising graph" 
          width={400} 
          height={300}
          className="border border-red-500"
        />
      </div>
      
      <div className="border border-gray-300 p-2 mb-4">
        <p className="mb-2">Background image:</p>
        <div 
          className="w-[400px] h-[300px] border border-blue-500"
          style={{
            backgroundImage: 'url(/raising-graph.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      
      <div className="border border-gray-300 p-2">
        <p className="mb-2">Inline SVG:</p>
        <svg width="400" height="300" viewBox="0 0 1440 900" className="border border-green-500">
          <use href="/raising-graph.svg#svg-content" />
        </svg>
      </div>
    </div>
  );
} 