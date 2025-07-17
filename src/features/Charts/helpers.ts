import { THEME } from "../../constants";
import { Theme } from "../../types";

export const getUserActivityOptions = (theme: Theme) => ({
  title: {
    text: 'Weekly Activity',
    left: 'center',
    top: 10,
    textStyle: {
      color: theme === THEME.DARK ? '#fff' : '#1f2937',
    },
  },
  tooltip: {},
  grid: {
    top: 60, 
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: theme === THEME.DARK ? '#ccc' : '#4b5563',
    },
  },
  yAxis: {
    axisLabel: {
      color: theme === THEME.DARK ? '#ccc' : '#4b5563',
    },
  },
  series: [
    {
      name: 'Visited users',
      type: 'bar',
      data: [55, 20, 36, 72, 10, 20, 130],
      itemStyle: {
        color: theme === THEME.DARK ? '#60a5fa' : '#3b82f6',
      },
    },
  ],
  backgroundColor: 'transparent',
});

export const getUserTimeSplitPieOptions = (theme: Theme) => ({
  title: {
    text: 'User Activity by Time of Day',
    left: 'center',
    top: 10,
    textStyle: {
      color: theme === THEME.DARK ? '#fff' : '#1f2937',
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: '0%',
    left: 'center',
    textStyle: {
      color: theme === THEME.DARK ? '#ccc' : '#4b5563',
    },
  },
  series: [
    {
      name: 'Users',
      type: 'pie',
      radius: '65%',
      center: ['50%', '55%'], 
      data: [
        { value: 320, name: 'Morning' },
        { value: 210, name: 'Afternoon' },
        { value: 120, name: 'Evening' },
        { value: 50, name: 'Night' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor:
            theme === THEME.DARK ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      label: {
        color: theme === THEME.DARK ? '#fff' : '#1f2937',
      },
      itemStyle: {
        borderColor: theme === THEME.DARK ? '#1f2937' : '#fff',
        borderWidth: 2,
      },
    },
  ],
  backgroundColor: 'transparent',
});

export const getUserTypePieOptions = (theme: Theme) => ({
  title: {
    text: 'User Type Breakdown',
    left: 'center',
    top: 10,
    textStyle: {
      color: theme === THEME.DARK ? '#fff' : '#1f2937',
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: '0%',
    left: 'center',
    textStyle: {
      color: theme === THEME.DARK ? '#ccc' : '#4b5563',
    },
  },
  series: [
    {
      name: 'User Type',
      type: 'pie',
      radius: '65%',
      center: ['50%', '55%'], 
      data: [
        { value: 150, name: 'New Users' },
        { value: 300, name: 'Returning Users' },
        { value: 40, name: 'Admins' },
        { value: 60, name: 'Guests' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor:
            theme === THEME.DARK ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      label: {
        color: theme === THEME.DARK ? '#fff' : '#1f2937',
      },
      itemStyle: {
        borderColor: theme === THEME.DARK ? '#1f2937' : '#fff',
        borderWidth: 2,
      },
    },
  ],
  backgroundColor: 'transparent',
});
