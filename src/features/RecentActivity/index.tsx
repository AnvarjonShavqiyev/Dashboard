import ActivityCard from "../../components/ActivityCard"
import { recentActivities } from "../../constants"

import styles from './RecentActivity.module.scss';

const RecentActivity = () => {
  return (
    <div>
      <h2 className={styles.title}>Recent Activity</h2>
      {
        recentActivities.map((activity) => (
          <ActivityCard activity={activity} />
        ))
      }
    </div>
  )
}

export default RecentActivity