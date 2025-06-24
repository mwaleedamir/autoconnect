import { useDispatch } from "react-redux"
import { ownerLogout, userLogout } from "../features/userLoginSlice"

const LogoutButton = ({ type, className }) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        if (type === "owner") {
            dispatch(ownerLogout())
        } else if (type === "user") {
            dispatch(userLogout())
        }
    }
    return (
        <button className={className} onClick={handleLogout}>
            Logout
        </button>
    )
}

export default LogoutButton