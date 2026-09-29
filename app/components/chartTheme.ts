const actualColor = '#7dd3fc';

export function themedData(data: any[], forecastColor: string): any[] {
  return data.map((trace, index) => ({
    ...trace,
    line: {
      ...trace.line,
      color: index === 0 ? actualColor : forecastColor,
      width: index === 0 ? 2 : 2.5,
    },
    marker: {
      ...trace.marker,
      color: index === 0 ? actualColor : forecastColor,
      size: index === 0 ? 4 : 5,
    },
  }));
}

export function themedLayout(layout: any): any {
  return {
    ...layout,
    paper_bgcolor: '#1f1f1f',
    plot_bgcolor: '#1f1f1f',
    font: {
      ...layout?.font,
      color: '#ffffff',
    },
  };
}
