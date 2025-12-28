/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type Highcharts from 'highcharts';

import { type ISankeyChartDataAxis, SankeyChart } from './SankeyChart';

// Store the last options passed to HighchartsReact
let lastHighchartsOptions: Highcharts.Options | null = null;

// Mock HighchartsReact
vi.mock('highcharts-react-official', () => ({
  default: vi.fn(({ options, containerProps, callback }) => {
    // Store options for assertions
    lastHighchartsOptions = options;

    // Simulate callback if provided
    if (callback) {
      callback({} as Highcharts.Chart);
    }

    return (
      <div data-testid="highcharts-react" {...containerProps}>
        {options?.series?.length > 0 && <div data-testid="chart-series">{options.series.length} series</div>}
      </div>
    );
  }),
}));

const mockData: ISankeyChartDataAxis[] = [
  {
    values: [
      ['Element 1', 'Element 2', 4],
      ['Element 2', 'Element 3', 3],
      ['Element 3', 'Element 4', 2],
    ],
  },
];

const mockDataWithNodes: ISankeyChartDataAxis[] = [
  {
    values: [
      ['A', 'B', 10],
      ['B', 'C', 8],
    ],
    nodes: [
      { id: 'A', color: '#FF0000' },
      { id: 'B', color: '#00FF00' },
      { id: 'C', color: '#0000FF' },
    ],
    keys: ['from', 'to', 'weight'],
    color: '#CCCCCC',
    name: 'Custom Flow',
    nodeAlign: 'top',
  },
];

describe('Sankey Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    lastHighchartsOptions = null;
  });

  it('should render with default props', () => {
    const { getByTestId } = render(<SankeyChart data={mockData} />);
    const chartContainer = getByTestId('highcharts-react');

    expect(chartContainer).toBeInTheDocument();
  });

  it('should apply className to container', () => {
    const className = 'custom-sankey-chart';
    const { getByTestId } = render(<SankeyChart data={mockData} className={className} />);
    const chartContainer = getByTestId('highcharts-react');

    expect(chartContainer).toHaveClass(className);
  });

  it('should apply custom containerProps', () => {
    const containerProps = {
      'data-custom': 'test-value',
      id: 'custom-sankey-id',
    };
    const { getByTestId } = render(<SankeyChart data={mockData} containerProps={containerProps} />);
    const chartContainer = getByTestId('highcharts-react');

    expect(chartContainer).toHaveAttribute('data-custom', 'test-value');
    expect(chartContainer).toHaveAttribute('id', 'custom-sankey-id');
  });

  it('should disable animation by default', () => {
    render(<SankeyChart data={mockData} />);

    expect(lastHighchartsOptions?.chart?.animation).toBe(false);
  });

  it('should set empty title by default', () => {
    render(<SankeyChart data={mockData} />);

    expect(lastHighchartsOptions?.title?.text).toBe('');
  });

  it('should configure tooltip with hideDelay 0', () => {
    render(<SankeyChart data={mockData} />);

    expect(lastHighchartsOptions?.tooltip?.hideDelay).toBe(0);
  });

  it('should configure plotOptions with nodeWidth 6', () => {
    render(<SankeyChart data={mockData} />);

    expect((lastHighchartsOptions?.plotOptions as any)?.sankey?.nodeWidth).toBe(6);
  });

  it('should create series from data with default name "Flow"', () => {
    render(<SankeyChart data={mockData} />);

    expect(lastHighchartsOptions?.series).toBeDefined();
    expect(lastHighchartsOptions?.series?.length).toBe(1);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.type).toBe('sankey');
    expect(series.name).toBe('Flow');
    expect(series.data).toEqual(mockData[0].values);
    expect(series.nodeAlign).toBe('center');
  });

  it('should create series with custom properties', () => {
    render(<SankeyChart data={mockDataWithNodes} />);

    expect(lastHighchartsOptions?.series).toBeDefined();
    expect(lastHighchartsOptions?.series?.length).toBe(1);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.type).toBe('sankey');
    expect(series.name).toBe('Custom Flow');
    expect(series.keys).toEqual(['from', 'to', 'weight']);
    expect(series.color).toBe('#CCCCCC');
    expect(series.nodes).toEqual(mockDataWithNodes[0].nodes);
    expect(series.data).toEqual(mockDataWithNodes[0].values);
    expect(series.nodeAlign).toBe('top');
  });

  it('should create multiple series when multiple data axes provided', () => {
    const multipleData: ISankeyChartDataAxis[] = [
      {
        values: [
          ['A', 'B', 5],
          ['B', 'C', 3],
        ],
        name: 'Flow 1',
      },
      {
        values: [
          ['X', 'Y', 7],
          ['Y', 'Z', 4],
        ],
        name: 'Flow 2',
      },
    ];

    render(<SankeyChart data={multipleData} />);

    expect(lastHighchartsOptions?.series).toBeDefined();
    expect(lastHighchartsOptions?.series?.length).toBe(2);

    const series1 = (lastHighchartsOptions?.series as any)[0];
    const series2 = (lastHighchartsOptions?.series as any)[1];

    expect(series1.name).toBe('Flow 1');
    expect(series1.data).toEqual(multipleData[0].values);

    expect(series2.name).toBe('Flow 2');
    expect(series2.data).toEqual(multipleData[1].values);
  });

  it('should merge custom options with default options', () => {
    const customOptions: Highcharts.Options = {
      chart: {
        backgroundColor: '#F0F0F0',
      },
      title: {
        text: 'Custom Title',
      },
    };

    render(<SankeyChart data={mockData} options={customOptions} />);

    expect(lastHighchartsOptions?.chart?.animation).toBe(false);
    expect(lastHighchartsOptions?.chart?.backgroundColor).toBe('#F0F0F0');
    expect(lastHighchartsOptions?.title?.text).toBe('Custom Title');
  });

  it('should call callback with chart instance', () => {
    const callback = vi.fn();
    render(<SankeyChart data={mockData} callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({});
  });

  it('should handle empty data array', () => {
    render(<SankeyChart data={[]} />);

    expect(lastHighchartsOptions?.series).toBeDefined();
    expect(lastHighchartsOptions?.series?.length).toBe(0);
  });

  it('should handle data without optional properties', () => {
    const minimalData: ISankeyChartDataAxis[] = [
      {
        values: [['Source', 'Target', 100]],
      },
    ];

    render(<SankeyChart data={minimalData} />);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.type).toBe('sankey');
    expect(series.name).toBe('Flow');
    expect(series.nodeAlign).toBe('center');
    expect(series.keys).toBeUndefined();
    expect(series.nodes).toBeUndefined();
    expect(series.color).toBeUndefined();
  });

  it('should update when data changes', () => {
    const { rerender } = render(<SankeyChart data={mockData} />);

    const firstSeriesData = (lastHighchartsOptions?.series as any)[0].data;
    expect(firstSeriesData).toEqual(mockData[0].values);

    const newData: ISankeyChartDataAxis[] = [
      {
        values: [
          ['New1', 'New2', 10],
          ['New2', 'New3', 5],
        ],
      },
    ];

    rerender(<SankeyChart data={newData} />);

    const updatedSeriesData = (lastHighchartsOptions?.series as any)[0].data;
    expect(updatedSeriesData).toEqual(newData[0].values);
  });

  it('should update when options change', () => {
    const { rerender } = render(<SankeyChart data={mockData} options={{ chart: { height: 300 } }} />);

    expect(lastHighchartsOptions?.chart?.height).toBe(300);

    rerender(<SankeyChart data={mockData} options={{ chart: { height: 500 } }} />);

    expect(lastHighchartsOptions?.chart?.height).toBe(500);
  });

  it('should memoize containerProps correctly', () => {
    const containerProps = { 'data-test': 'value' };
    const { rerender, getByTestId } = render(
      <SankeyChart data={mockData} className="test-class" containerProps={containerProps} />,
    );

    let chartContainer = getByTestId('highcharts-react');
    expect(chartContainer).toHaveClass('test-class');
    expect(chartContainer).toHaveAttribute('data-test', 'value');

    // Rerender with same props
    rerender(<SankeyChart data={mockData} className="test-class" containerProps={containerProps} />);

    chartContainer = getByTestId('highcharts-react');
    expect(chartContainer).toHaveClass('test-class');
    expect(chartContainer).toHaveAttribute('data-test', 'value');
  });

  it('should handle different nodeAlign values', () => {
    const dataWithButtonAlign: ISankeyChartDataAxis[] = [
      {
        values: [['A', 'B', 5]],
        nodeAlign: 'button',
      },
    ];

    render(<SankeyChart data={dataWithButtonAlign} />);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.nodeAlign).toBe('button');
  });

  it('should preserve all node properties', () => {
    const dataWithMultipleNodes: ISankeyChartDataAxis[] = [
      {
        values: [
          ['Node1', 'Node2', 10],
          ['Node2', 'Node3', 8],
        ],
        nodes: [
          { id: 'Node1', color: '#FF0000' },
          { id: 'Node2', color: '#00FF00' },
          { id: 'Node3', color: '#0000FF' },
        ],
      },
    ];

    render(<SankeyChart data={dataWithMultipleNodes} />);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.nodes).toHaveLength(3);
    expect(series.nodes[0]).toEqual({ id: 'Node1', color: '#FF0000' });
    expect(series.nodes[1]).toEqual({ id: 'Node2', color: '#00FF00' });
    expect(series.nodes[2]).toEqual({ id: 'Node3', color: '#0000FF' });
  });

  it('should handle keys property correctly', () => {
    const dataWithKeys: ISankeyChartDataAxis[] = [
      {
        values: [
          ['Source', 'Destination', 50],
          ['Destination', 'End', 30],
        ],
        keys: ['from', 'to', 'weight'],
      },
    ];

    render(<SankeyChart data={dataWithKeys} />);

    const series = (lastHighchartsOptions?.series as any)[0];
    expect(series.keys).toEqual(['from', 'to', 'weight']);
  });
});
