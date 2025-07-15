import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import styles from "./Dashboard.module.scss";
import { useScreenSize } from "../../hooks/useScreenSize";
import { MOBILE_SCREEN_SIZE } from "../../constants/intdex";

const Dashboard = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < MOBILE_SCREEN_SIZE;

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
