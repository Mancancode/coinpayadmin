import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
    useGmailTabsStyles,
  useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs';
import Inbox from '@material-ui/icons/Inbox';
import LocalOffer from '@material-ui/icons/LocalOffer';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';

const indicatorColors = ['#d93025', '#1a73e8', '#188038', '#e37400'];

const Orders = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = useGmailTabsStyles({ indicatorColors });
  const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] });
  const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] });
  const tabItem3Styles = useGmailTabItemStyles({ color: indicatorColors[2] });
  const tabItem4Styles = useGmailTabItemStyles({ color: indicatorColors[3] });
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      TabIndicatorProps={{
        children: <div className={`MuiIndicator-${tabIndex}`} />,
      }}
    >
    <Tab
        classes={tabItem1Styles}
        disableTouchRipple
        label={
          <div className={'MuiTabItem-labelGroup'}>
            <div className={'MuiTabItem-label'}>
            </div>
              BUY
            <div>
            <span className={'MuiTabItem'}>28,000</span>      <span className={'MuiTabItem-tag'}>-180</span>
            </div>
            <div className={'MuiTabItem-subLabel'}>Compared to last 24hrs</div>
          </div>
        }
        icon={<Inbox />}
      />
      <Tab
        classes={tabItem2Styles}
        disableTouchRipple
        label={
          <div className={'MuiTabItem-labelGroup'}>
            <div className={'MuiTabItem-label'}>
            </div>
              SWAP    
            <div>
            <span className={'MuiTabItem'}>18,000</span>      <span className={'MuiTabItem-tag'}>+180</span>
            </div>
            <div className={'MuiTabItem-subLabel'}>Compared to last 24hrs</div>
          </div>
        }
        icon={<People />}
      />
<Tab
        classes={tabItem3Styles}
        disableTouchRipple
        label={
          <div className={'MuiTabItem-labelGroup'}>
            <div className={'MuiTabItem-label'}>
            </div>
              SELL 
            <div>
            <span className={'MuiTabItem'}>61,000</span>      <span className={'MuiTabItem-tag'}>+190</span>
            </div>
            <div className={'MuiTabItem-subLabel'}>Compared to last 24hrs</div>
          </div>
        }
        icon={<LocalOffer />}
      />
     <Tab
        classes={tabItem4Styles}
        disableTouchRipple
        label={
          <div className={'MuiTabItem-labelGroup'}>
            <div className={'MuiTabItem-label'}>
            </div>
              SEND
            <div>
            <span className={'MuiTabItem'}>8,000</span>      <span className={'MuiTabItem-tag'}>-80</span>
            </div>
            <div  className={'MuiTabItem-subLabel'}>Compared to last 24hrs</div>
          </div>
        }
        icon={<Info />}
      />
    </Tabs>
  );
};

export default Orders;
