import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CarDetails = () => {
    const [carData, setCarData] = useState([])
    const {id} = useParams()
    const fetchCarData = async () =>{
        try {
            const getCarData = await get(`/api/create/${id}`)
            setCarData(getCarData.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchCarData()
    },[])
    return (
    <div>
        <h1>Car Details</h1>
    </div>
    )
}
export default CarDetails