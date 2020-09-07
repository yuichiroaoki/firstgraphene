import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExploreIcon from '@material-ui/icons/Explore';
import HelpIcon from '@material-ui/icons/Help';
import TableChartIcon from '@material-ui/icons/TableChart';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/big">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="大規模グラフ" />
    </ListItem>
    <ListItem button component="a" href="/small">
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="小規模グラフ" />
    </ListItem>
    <ListItem button component="a" href="/nodes">
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="ノード情報" />
    </ListItem>
    <ListItem button component="a" target="blank" href="https://github.com/yuichiroaoki/firstgraphene">
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Source Code" />
    </ListItem>
    <ListItem button component="a" href="/help">
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="ヘルプ" />
    </ListItem>
  </div>
);
