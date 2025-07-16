import type { StatCard } from '../../types';
import styles from './StatCard.module.scss';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import { ZERO } from '../../constants';

interface StatCardProps {
    card: StatCard
}

const StatCard = ({card}: StatCardProps) => {
  const {label, value, change} = card;

  const isPositive = change >= ZERO

  return (
  <div className={styles.card}>
    <div className={styles.left}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
    <div className={`${styles.right} ${isPositive ? styles.positive : styles.negative}`}>
      {isPositive ? <FiArrowUpRight /> : <FiArrowDownRight />}
      <span>{change}%</span>
    </div>
  </div>
);

};

export default StatCard;
