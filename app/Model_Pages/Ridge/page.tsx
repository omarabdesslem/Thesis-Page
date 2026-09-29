'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import ModelNavigation from '../../components/ModelNavigation';

const ChartComponent = dynamic(() => import('../../components/Ridge_ChartComponent'), {
  ssr: false,
  loading: () => <p className="text-sm text-gray-400">Loading chart...</p>,
});

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1f1f1f] text-white px-4">
      <main className="flex flex-col items-center justify-center pt-6 w-full max-w-5xl">
        <h1 className="text-xl font-semibold mb-1 sm:mb-2 md:mb-3 text-center">
          Power Grid Load Forecasting using ML
        </h1>

        <div className="flex justify-center text-sm mb-2 sm:mb-3 md:mb-4">
          <p className="text-sm text-center">
            Weekly rolling forecast based on SwissGrid data from my 2025 Bachelor Work.
          </p>
        </div>

        <ModelNavigation activeModel="Ridge" />

        {/* Chart */}
        <div className="w-full flex justify-center">
          <div className="transform-gpu origin-center transition-transform duration-300 ease-in-out
            scale-[0.3] sm:scale-[0.45] md:scale-[0.6] lg:scale-[0.8] xl:scale-[0.8]">
            <div className="min-h-[65vh] w-full flex items-center justify-center">
              <ChartComponent />
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2 sm:mt-4 mb-4 sm:mb-5 text-sm">
        <a
          href="/Code_Pages/I._Overview"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 py-1 px-2 sm:py-1.5 sm:px-3 rounded"
        >
          Code
        </a>

        <a
          href="/Bachelor_Project.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 py-1 px-2 sm:py-1.5 sm:px-3 rounded"
        >
          Full Time Series Analysis
        </a>
      </div>

      <footer className="text-xs text-gray-400 py-1.5 sm:py-3 text-center w-full border-t border-gray-700 -mt-1">
        <p>© 2025 Omar Abdesslem</p>
        <p className="mt-1">
          Powered by <a href="https://www.swissgrid.ch" target="_blank" className="underline hover:text-white">Swissgrid</a> Data, visualized with <a href="https://plotly.com/javascript/" target="_blank" className="underline hover:text-white">Plotly</a>, inspired by <a href="https://github.com/arthurgassner" target="_blank" className="underline hover:text-white">Arthur Gassner</a>.
        </p>
      </footer>
    </div>
  );
}
