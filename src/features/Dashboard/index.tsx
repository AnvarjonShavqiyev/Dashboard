import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import styles from "./Dashboard.module.scss";
import { useScreenData } from "../../hooks/useScreenSize";

const Dashboard = () => {
  const { isMobile } = useScreenData();

  return (
    <div className={styles.layout}>
      {!isMobile && <Sidebar />} 

      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>
          <Outlet />
        </div>
        {isMobile && <Sidebar />} 
      </div>
    </div>
  );
};

export default Dashboard;
