import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import KayakingIcon from '@mui/icons-material/Kayaking';

export const SidebarIcons = [
    {
        id:0,
        icon: <HomeIcon />,
        label: "Home Page",
        route: "/",
    },
    {
        id:1,
        icon: <KayakingIcon />,
        label: "Page 1",
        route: "/Page1",
    },
    {
        id:2,
        icon: <SailingIcon />,
        label: "Page 2",
        route: "/Page2",
    },
]