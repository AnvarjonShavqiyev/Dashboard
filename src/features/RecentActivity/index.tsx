import ActivityCard from "../../components/ActivityCard"
import { recentActivities } from "../../constants/intdex"

const RecentActivity = () => {
  return (
    <div>
      <h2>Recent Activity</h2>
      {
        recentActivities.map((activity) => (
          <ActivityCard activity={activity} />
        ))
      }
    </div>
  )
}

export default RecentActivity