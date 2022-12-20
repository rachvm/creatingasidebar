import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from "@mui/material";
import { SidebarIcons } from '../../icons/sidebarIcon';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 200;

export default function Sidebar () {
    const navigate = useNavigate();
    return(
        <Drawer position="static"
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: '#00648F',
                position: "fixed",
                zIndex: 1,
                },
            }}
            variant="permanent"
            anchor="left"
            >
            <Toolbar />
            <Divider />
            <List>
                {SidebarIcons.map((element) => (
                    <ListItem key={element.id}>
                        <Button onClick={() => navigate(element.route)} sx={{color: "whitesmoke"}} startIcon={<ListItemIcon sx={{color: "whitesmoke"}}>{element.icon}</ListItemIcon>}>{element.label}</Button>
                    </ListItem>
                ) )}
            </List>
            <Divider />
        </Drawer>
    )
}