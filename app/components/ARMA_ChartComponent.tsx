'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Plotly without SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const ChartComponent = () => {
  const [figure, setFigure] = useState<{ data: any[]; layout: any } | null>(null);
  const [mape, setMape] = useState<string | null>(null);
  const [chartReady, setChartReady] = useState(false);
  const [mapeReady, setMapeReady] = useState(false);

  useEffect(() => {
    // Fetch chart data
    fetch('/ARMA/ARMA_data.json')
      .then((res) => res.ok ? res.json() : Promise.reject('Chart fetch failed'))
      .then((data) => setFigure(data))
      .catch((err) => console.error('Error loading chart:', err));

    // Fetch MAPE
    fetch('/ARMA/arma_mape.txt')
      .then((res) => res.ok ? res.text() : Promise.reject('MAPE fetch failed'))
      .then((text) => {
        setMape(text.trim());
        setMapeReady(true);
      })
      .catch((err) => console.error('Error loading MAPE:', err));
  }, []);

  const loading = !figure || !chartReady || !mapeReady;

  return (
    <div className="relative flex flex-col w-full min-h-[40vh] justify-center items-center">
      {figure && (
        <Plot
          data={figure.data}
          layout={figure.layout}
          config={{ responsive: true }}
          style={{ width: '100%', height: '100%' }}
          useResizeHandler
          onInitialized={() => setChartReady(true)}
          onUpdate={() => setChartReady(true)}
        />
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1f1f1f] bg-opacity-80 z-10">
          <div className="text-sm text-gray-400 whitespace-nowrap">
            Loading chart...
          </div>
        </div>
      )}

      {/* MAPE badge */}
      {!loading && mape && (
        <div className="absolute bottom-2 left-2 text-[11px] text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded pointer-events-none">
          <strong>MAPE:</strong> <span className="text-white">{mape}</span>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
