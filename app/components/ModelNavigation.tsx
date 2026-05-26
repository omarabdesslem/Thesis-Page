'use client';

import React from 'react';

type ModelNavigationProps = {
  activeModel: string;
};

const models = [
  { label: 'Seasonal Naive Baseline', path: 'SeasonalNaive', color: 'text-sky-200/75' },
  { label: 'AR', path: 'AR', color: 'text-cyan-200/75' },
  { label: 'ARIMA', path: 'ARIMA', color: 'text-emerald-200/75' },
  { label: 'SARIMA', path: 'SARIMA', color: 'text-lime-200/75' },
  { label: 'SARIMAX', path: 'SARIMAX', color: 'text-amber-200/75' },
  { label: 'Random Forest', path: 'RandomForest', color: 'text-rose-200/75' },
  { label: 'Ridge', path: 'Ridge', color: 'text-fuchsia-200/75' },
  { label: 'XGBoost', path: 'XGBoost', color: 'text-violet-200/75' },
];

export default function ModelNavigation({ activeModel }: ModelNavigationProps): JSX.Element {
  return (
    <nav className="text-sm mb-2 sm:mb-3 md:mb-4">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {models.map((model) => (
          <li key={model.path}>
            <a
              href={`/Model_Pages/${model.path}`}
              className={`${model.path === activeModel ? 'text-amber-300' : model.color} hover:text-white hover:underline transition-colors`}
            >
              {model.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
