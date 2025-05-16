import { FaHome, FaEdit} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdCreate } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

 const sidebarItems = [
    {name:"Dashboard", logo: FaHome, link:"/owner"},
    {name:"Profile", logo: IoPerson, link:"/owner-profile"},
    {name:"Create Listings", logo: IoMdCreate, link:"/owner-portal-create-listings"},
    {name:"Show Listings", logo: FaEdit, link:"/owner-portal-Show-listings"},
    {name:"Settings", logo: IoSettingsOutline, link:"/owner-portal-settings"},
]

export default sidebarItems