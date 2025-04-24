import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Assessment';
import AuditIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const MenuIconMap =   [
    {
      "menuName": "Dashboard",
      "id": 1,
      "icon": <DashboardIcon />
    },
    {
      "menuName": "Branch Setup",
      "id": 2,
      "icon": <AccountTreeIcon />
    },
    {
      "menuName": "Program Setup",
      "id": 3,
      "icon": <Inventory2Icon />
    },
    {
      "menuName": "Reports",
      "id": 4,
      "icon": <ReportIcon />
    },
    {
      "menuName": "Audits",
      "id": 5,
      "icon": <AuditIcon />
    },
    {
      "menuName": "Settings",
      "id": 6,
      "icon": <SettingsIcon />
    },
    {
      "menuName": "System Administration",
      "id": 7,
      "icon": <ManageAccountsIcon />
    }
  ]
  

export  const subMenuRouteConfig = [
    {
      "menuName": "Branch Setup",
      "submenuName": "State",
      "id": 21,
      "route": "/bs/state"
    },
    {
      "menuName": "Branch Setup",
      "submenuName": "District",
      "id": 22,
      "route": "/bs/district"
    },
    {
      "menuName": "Branch Setup",
      "submenuName": "Zone",
      "id": 23,
      "route": "/bs/zone"
    },
    {
      "menuName": "Branch Setup",
      "submenuName": "Branch",
      "id": 24,
      "route": "/bs/branch"
    },
    {
      "menuName": "Branch Setup",
      "submenuName": "Audit",
      "id": 25,
      "route": "/bs/audit"
    },
    {
      "menuName": "Branch Setup",
      "submenuName": "Audit Branch Map",
      "id": 26,
      "route": "/bs/audit-branch-map"
    },
    {
      "menuName": "Program Setup",
      "submenuName": "Donor",
      "id": 31,
      "route": "/ps/donor"
    },
    {
      "menuName": "Program Setup",
      "submenuName": "Program",
      "id": 32,
      "route": "/ps/program"
    },
    {
      "menuName": "Program Setup",
      "submenuName": "Project",
      "id": 33,
      "route": "/ps/project"
    },
   
    {
      "menuName": "Reports",
      "submenuName": "Audit Summary",
      "id": 41,
      "route": "/reports/audit-summary"
    },
    {
      "menuName": "Reports",
      "submenuName": "Detailed Reports",
      "id": 42,
      "route": "/reports/detailed"
    },
    {
      "menuName": "Audits",
      "submenuName": "Active Audits",
      "id": 51,
      "route": "/audits/active"
    },
    {
      "menuName": "Audits",
      "submenuName": "Completed Audits",
      "id": 52,
      "route": "/audits/completed"
    },
    {
      "menuName": "Audits",
      "submenuName": "Schedule Audit",
      "id": 53,
      "route": "/audits/schedule"
    },
    {
      "menuName": "Settings",
      "submenuName": "Change Password",
      "id": 61,
      "route": "/changepassword"
    },
    {
      "menuName": "System Administration",
      "submenuName": "User",
      "id": 71,
      "route": "/user"
    },
    {
      "menuName": "System Administration",
      "submenuName": "App Version",
      "id": 72,
      "route": "/appversion"
    },
    {
      "menuName": "System Administration",
      "submenuName": "User Role Map",
      "id": 73,
      "route": "/userrolemap"
    }
  ]
  