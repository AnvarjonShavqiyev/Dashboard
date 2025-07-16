import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { TbActivity } from "react-icons/tb";
import { IoMdLogIn } from "react-icons/io";
import { IoMdCloudUpload } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineEditNote } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";

export const routes = [
    {
        title: "Stats",
        route: '/stats',
        icon: <IoStatsChart />
    },
    {
        title: "Charts",
        route: '/charts',
        icon: <FaChartPie />
    },
    {
        title: "Recent Activity",
        route: '/recentActivity',
        icon: <TbActivity />
    }
]

export const statCards = [
  { label: "Total Users", value: 12450, change: 5.2 },
  { label: "New Signups", value: 342, change: 2.8 },
  { label: "Active Sessions", value: 1203, change: -1.4 },
  { label: "Revenue (USD)", value: 45780, change: 3.1 },
  { label: "Page Views", value: 98321, change: 4.5 },
  { label: "Bounce Rate (%)", value: 38.7, change: -0.9 },
  { label: "Conversions", value: 792, change: 1.7 },
  { label: "Support Tickets", value: 113, change: -3.2 },
  { label: "Refund Requests", value: 27, change: -0.5 },
  { label: "Avg. Session Time (s)", value: 287, change: 0.6 },
];

export const recentActivities = [
  {
    icon: <IoMdLogIn />,
    description: 'User Anvarjon logged in',
    timestamp: '2025-07-14 08:23',
  },
  {
    icon: <IoMdCloudUpload />,
    description: 'Uploaded file: resume.pdf',
    timestamp: '2025-07-14 09:01',
  },
  {
    icon: <GiShoppingBag />,
    description: 'Purchased Basic Plan',
    timestamp: '2025-07-14 09:45',
  },
  {
    icon: <IoMdLogIn />,
    description: 'User Zafarjon logged in',
    timestamp: '2025-07-14 10:12',
  },
  {
    icon: <MdOutlineEditNote />,
    description: 'Edited report: Sales Q2',
    timestamp: '2025-07-14 10:58',
  },
  {
    icon: <GiShoppingBag />,
    description: 'Added item to cart: iPad Pro',
    timestamp: '2025-07-14 11:23',
  },
  {
    icon: <IoMdLogIn />,
    description: 'User Nodirbek logged out',
    timestamp: '2025-07-14 12:00',
  },
  {
    icon: <MdOutlineCloudDownload />,
    description: 'Downloaded invoice #4569',
    timestamp: '2025-07-14 12:45',
  },
  {
    icon: <MdCancel />,
    description: 'Canceled subscription',
    timestamp: '2025-07-14 13:30',
  },
  {
    icon: <MdOutlineCreateNewFolder />,
    description: 'Created task: Fix login bug',
    timestamp: '2025-07-14 14:10',
  },
];

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const EMPTY_STRING = ''
export const ZERO = 0
export const MOBILE_SCREEN_SIZE = 767