import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  const navigationItems = [
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/dashboard',
    },
    {
      title: 'Account Settings',
      icon: <SettingsIcon />,
      path: '/account-settings',
    },
    // ... other menu items
  ];

  return (
    <div>
      {navigationItems.map((item, index) => (
        <div key={index}>
          {item.title && (
            <div>
              <p>{item.title}</p>
              {item.icon}
              {item.path && <p>{item.path}</p>}
            </div>
          )}
          {item.sectionTitle && <p>{item.sectionTitle}</p>}
        </div>
      ))}
    </div>
  );
};

export default Navigation;

