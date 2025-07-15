import StatCard from "../../components/StatCard";
import { statCards } from "../../constants/intdex";
import styles from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.container}>
      {statCards.map((card, index) => (
        <div key={index} className={styles.cardWrapper}>
          <StatCard card={card} />
        </div>
      ))}
    </div>
  );
};

export default Stats;
