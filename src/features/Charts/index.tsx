import ReactECharts from 'echarts-for-react';

import styles from './Charts.module.scss';
import { getUserActivityOptions, getUserTimeSplitPieOptions, getUserTypePieOptions } from './helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Charts = () => {
  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <div className={styles.container}>
      <div className={styles.pieChartWrapper}>
        <ReactECharts
          option={getUserTimeSplitPieOptions(theme)}
          theme={theme}
          className={styles.chart}
        />
        <ReactECharts
          option={getUserTypePieOptions(theme)}
          theme={theme}
          className={styles.chart}
        />
      </div>
      <div className={styles.chartFullWrapper}>
        <ReactECharts
          option={getUserActivityOptions(theme)}
          theme={theme}
          className={styles.chartFull}
        />
      </div>
    </div>
  );
};

export default Charts;
