import { ActivityItem } from '../../types'
import styles from './ActivityCard.module.scss'

interface ActivityCardProps {
    activity: ActivityItem;
}

const ActivityCard = ({activity}: ActivityCardProps) => {
    const {icon, description, timestamp} = activity;

    return (
       <div className={styles.item}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.content}>
            <p className={styles.description}>{description}</p>
            <span className={styles.timestamp}>{timestamp}</span>
          </div>
        </div>
  )
}

export default ActivityCard