'use client';

import { useState } from 'react';

export default function DebugPage() {
  const [opacity, setOpacity] = useState(50);
  const [method, setMethod] = useState('object');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">SVG Debug Page</h1>
      
      <div className="mb-6">
        <label className="block mb-2">
          Display Method:
          <select 
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
            className="ml-2 border border-gray-300 rounded px-2 py-1"
          >
            <option value="img">Image Tag</option>
            <option value="background">Background Image</option>
            <option value="object">Object Tag</option>
            <option value="embed">Embed Tag</option>
            <option value="iframe">iFrame</option>
          </select>
        </label>
        
        <label className="block">
          Opacity: {opacity}%
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={opacity} 
            onChange={(e) => setOpacity(parseInt(e.target.value))}
            className="ml-2"
          />
        </label>
      </div>
      
      <div className="relative border border-gray-300 h-[600px] mb-6">
        {method === 'img' && (
          <img 
            src="/raising-graph.svg" 
            alt="Graph" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ opacity: opacity / 100 }}
          />
        )}
        
        {method === 'background' && (
          <div 
            className="absolute inset-0 w-full h-full" 
            style={{ 
              backgroundImage: 'url(/raising-graph.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: opacity / 100
            }}
          ></div>
        )}
        
        {method === 'object' && (
          <object 
            type="image/svg+xml"
            data="/raising-graph.svg" 
            className="absolute inset-0 w-full h-full" 
            style={{ opacity: opacity / 100 }}
          ></object>
        )}
        
        {method === 'embed' && (
          <embed 
            src="/raising-graph.svg" 
            type="image/svg+xml"
            className="absolute inset-0 w-full h-full" 
            style={{ opacity: opacity / 100 }}
          />
        )}
        
        {method === 'iframe' && (
          <iframe 
            src="/raising-graph.svg" 
            className="absolute inset-0 w-full h-full border-0" 
            style={{ opacity: opacity / 100 }}
          ></iframe>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="bg-white p-2 rounded shadow">Content on top of SVG</p>
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Direct SVG View</h2>
        <p>Verify the SVG by opening it directly: <a href="/raising-graph.svg" target="_blank" className="text-blue-600 underline">Open SVG in new tab</a></p>
      </div>
    </div>
  );
} 