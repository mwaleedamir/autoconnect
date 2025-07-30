// import React, { useState } from "react";
// import { BsFillGridFill } from "react-icons/bs";
// import { FaListUl } from "react-icons/fa6";
// import SaveButton from "./SaveButton";
// import { Gauge, Fuel, Car, Calendar } from 'lucide-react';
// import { useGetFilteredCarsQuery } from "../features/carsFiltersSlice";
// import { Link, useParams } from "react-router-dom";
// import Pagination from "./Pagination";
// import { useSelector } from "react-redux";

// const ShowroomsBody = () => {
//   const [grid, setGrid] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 6;
//   const { id } = useParams();

//   const filters = useSelector((state) => state.filters); // Redux-based filter state
//   const { data, isLoading, error } = useGetFilteredCarsQuery({ ...filters, page, limit });
//   const carsData = data?.cars || [];
//   const total = data?.total || 0;
//   const totalPages = Math.ceil(total / limit);

//   const formatDateTime = (timeString) => {
//     if (!timeString) return { date: "Invalid", time: "Invalid" };
//     const dateObj = new Date(timeString);
//     let date = "Invalid";
//     let time = "Invalid";
//     if (!isNaN(dateObj.getTime())) {
//       date = dateObj.toISOString().split("T")[0];
//       time = dateObj.toISOString().split("T")[1].split("Z")[0];
//     }
//     return { date, time };
//   };

//   if (isLoading) {
//     return <h1 className="min-h-screen flex justify-center items-center font-bold">Loading...</h1>;
//   }

//   const filteredCars = id ? carsData.filter(car => car.userId === id) : carsData;

//   return (
//     <div>
//       <div className="flex gap-1 justify-end items-center pb-2">
//         <button
//           onClick={() => setGrid(true)}
//           className={`flex items-center px-2 py-1 rounded-md border ${grid ? "bg-[#6b451a] hover:bg-[#47341d] text-white" : "text-gray-700 hover:bg-gray-300"}`}
//         >
//           <BsFillGridFill />
//         </button>
//         <button
//           onClick={() => setGrid(false)}
//           className={`flex items-center px-2 py-1 rounded-md border ${!grid ? "bg-[#6b451a] hover:bg-[#47341d] text-white" : "text-gray-700 border-gray-300 hover:bg-gray-300"}`}
//         >
//           <FaListUl />
//         </button>
//       </div>

//       <div className={`grid bg-white ${grid ? `grid-cols-3 gap-2 w-full max-sm:grid-cols-2` : `w-full grid-cols-1 gap-3 max-w-screen max-sm:px-0 lg:px-8`}`}>
//         {filteredCars.length > 0 ? (
//           filteredCars.map(car => {
//             const { date } = formatDateTime(car.time || car.createdAt || car.updatedAt);
//             return (
//               <div
//                 key={car._id}
//                 className={`group hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] bg-gradient-card shadow-card border border-gray-200 bg-white hover:border-2 shadow-xl hover:shadow-[#bc9a71] rounded-lg ${grid ? `bg-opacity-60 gap-2 flex-col` : `flex overflow-hidden h-52 items-center px-2 gap-3 flex-row`}`}
//               >
//                 <div className={`relative ${grid ? `w-full h-48` : `w-1/3 h-full flex-1`}`}>
//                   {car.images ? (
//                     <img
//                       className={`w-full h-full object-cover justify-self-center rounded-md ${grid ? `rounded-t-lg` : `rounded-l-lg`}`}
//                       src={car.images[0]}
//                       alt={`${car.carMake} ${car.carName}`}
//                     />
//                   ) : (
//                     <div className={`w-full h-full bg-muted flex items-center justify-center ${grid ? `rounded-t-lg` : `rounded-l-lg`}`}>
//                       <Car className="h-12 w-12 text-muted-foreground" />
//                     </div>
//                   )}
//                 </div>

//                 <div className={`p-4 ${grid ? `flex-1` : `flex-1 flex flex-col justify-between`}`}>
//                   <div className="space-y-3">
//                     <div className="flex items-start justify-between">
//                       <h3 className="font-bold text-lg text-foreground leading-tight">
//                         {car.carMake} {car.carName}
//                       </h3>
//                       <div>
//                         <SaveButton />
//                       </div>
//                     </div>

//                     <div className={`grid gap-2 text-sm text-muted-foreground ${grid ? `grid-cols-2` : `grid-cols-2 lg:grid-cols-4`}`}>
//                       <div className="flex items-center gap-1">
//                         <Gauge className="h-3 w-3" />
//                         <span className="truncate">{car.mileage} km</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Fuel className="h-3 w-3" />
//                         <span className="truncate">{car.engineCapacity} CC</span>
//                       </div>
//                       {(!grid || window.innerWidth >= 1024) && (
//                         <>
//                           <div className="flex items-center gap-1">
//                             <div className="h-3 w-3 rounded-full border-2 border-current" />
//                             <span className="truncate">{car.color}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Car className="h-3 w-3" />
//                             <span className="truncate">{car.varients}</span>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                       <Calendar className="h-3 w-3" />
//                       <span>Updated {date}</span>
//                     </div>
//                   </div>

//                   <div className={`mt-4 ${grid ? `space-y-3` : `flex items-end justify-between`}`}>
//                     <div className="text-primary flex justify-start items-center gap-2">
//                       <h1 className="text-xl font-bold">{car.carPrice}</h1>
//                       <h2 className="text-sm">lacs pkr</h2>
//                     </div>
//                     <Link
//                       to={`/marketplace/cardetails/${car._id}`}
//                       className={`transition p-1 text-white bg-[#6b451a] duration-300 rounded-md justify-items-center ease-in-out transform hover:scale-110 ${grid ? `w-full` : ``}`}
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="col-span-full text-center py-12">
//             <Car className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
//             <p className="text-lg text-muted-foreground">No cars available</p>
//             <p className="text-sm text-muted-foreground">Check back later for new listings</p>
//           </div>
//         )}
//       </div>

//       <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
//     </div>
//   );
// };

// export default ShowroomsBody;

// import React, { useState, useEffect } from "react";
// import { BsFillGridFill } from "react-icons/bs";
// import { FaListUl } from "react-icons/fa6";
// import SaveButton from "./SaveButton";
// import { Gauge, Fuel, Car, Calendar } from 'lucide-react';
// import { useGetFilteredCarsQuery, useGetCarsByShowroomQuery } from "../features/carsFiltersSlice";
// import { Link, useParams } from "react-router-dom";
// import Pagination from "./Pagination";
// import { useSelector, useDispatch } from "react-redux";
// import { selectFilters, setCurrentPage, setResultsMetadata } from "../features/filterSlice";

// const ShowroomsBody = () => {
//   const [grid, setGrid] = useState(false);
//   const dispatch = useDispatch();
//   const { id } = useParams(); // Showroom ID from URL params

//   // Get filters and pagination from Redux store
//   const filters = useSelector(selectFilters);
//   const currentPage = useSelector((state) => state.filter.currentPage);
//   const resultsPerPage = useSelector((state) => state.filter.resultsPerPage);

//   // Determine which query to use based on whether we have a showroom ID
//   const shouldUseShowroomQuery = id && id !== 'all';
  
//   // Query for filtered cars (when no specific showroom)
//   const {
//     data: filteredData,
//     isLoading: filteredLoading,
//     error: filteredError,
//     refetch: refetchFiltered
//   } = useGetFilteredCarsQuery(
//     {
//       ...filters,
//       page: currentPage,
//       limit: resultsPerPage
//     },
//     {
//       skip: shouldUseShowroomQuery, // Skip this query if we're showing a specific showroom
//     }
//   );

//   // Query for showroom-specific cars
//   const {
//     data: showroomData,
//     isLoading: showroomLoading,
//     error: showroomError,
//     refetch: refetchShowroom
//   } = useGetCarsByShowroomQuery(id, {
//     skip: !shouldUseShowroomQuery, // Skip this query if we're not showing a specific showroom
//   });

//   // Determine which data to use
//   const isLoading = shouldUseShowroomQuery ? showroomLoading : filteredLoading;
//   const error = shouldUseShowroomQuery ? showroomError : filteredError;
//   const data = shouldUseShowroomQuery ? showroomData : filteredData;

//   const carsData = data?.cars || data?.data || data || [];
//   const total = data?.total || carsData.length || 0;
//   const totalPages = Math.ceil(total / resultsPerPage);

//   // Update Redux store when data changes
//   useEffect(() => {
//     if (data) {
//       dispatch(setResultsMetadata({
//         total: data.total || carsData.length,
//         page: data.page || currentPage,
//         limit: data.limit || resultsPerPage
//       }));
//     }
//   }, [data, carsData.length, currentPage, resultsPerPage, dispatch]);

//   // Handle page changes
//   const handlePageChange = (newPage) => {
//     dispatch(setCurrentPage(newPage));
//     // Scroll to top when page changes
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Format date helper function
//   const formatDateTime = (timeString) => {
//     if (!timeString) return { date: "Invalid", time: "Invalid" };
    
//     try {
//       const dateObj = new Date(timeString);
//       if (isNaN(dateObj.getTime())) {
//         return { date: "Invalid", time: "Invalid" };
//       }
      
//       const date = dateObj.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
      
//       const time = dateObj.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//       });
      
//       return { date, time };
//     } catch (err) {
//       return { date: "Invalid", time: "Invalid" };
//     }
//   };

//   // Format price helper function
//   const formatPrice = (price) => {
//     if (!price) return "Price not available";
    
//     // If price is already a string with formatting, return as is
//     if (typeof price === 'string') return price;
    
//     // If price is a number, format it
//     if (typeof price === 'number') {
//       if (price >= 10000000) {
//         return `${(price / 10000000).toFixed(1)} Crore`;
//       } else if (price >= 100000) {
//         return `${(price / 100000).toFixed(1)} Lac`;
//       } else {
//         return `${price.toLocaleString()} PKR`;
//       }
//     }
    
//     return price.toString();
//   };

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6b451a] mx-auto mb-4"></div>
//           <h1 className="font-bold text-lg text-gray-700">Loading cars...</h1>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <div className="text-center">
//           <Car className="h-12 w-12 mx-auto text-red-500 mb-4" />
//           <h1 className="font-bold text-lg text-red-600 mb-2">Error loading cars</h1>
//           <p className="text-gray-600 mb-4">
//             {error.message || 'Something went wrong while fetching cars'}
//           </p>
//           <button
//             onClick={() => shouldUseShowroomQuery ? refetchShowroom() : refetchFiltered()}
//             className="bg-[#6b451a] text-white px-4 py-2 rounded-md hover:bg-[#5a3715] transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {/* Header with view toggle and results count */}
//       <div className="flex justify-between items-center pb-2">
//         <div className="text-sm text-gray-600">
//           {total > 0 && (
//             <span>
//               Showing {((currentPage - 1) * resultsPerPage) + 1} to {Math.min(currentPage * resultsPerPage, total)} of {total} cars
//               {shouldUseShowroomQuery && <span className="font-medium"> from this showroom</span>}
//             </span>
//           )}
//         </div>
        
//         <div className="flex gap-1 items-center">
//           <button
//             onClick={() => setGrid(true)}
//             className={`flex items-center px-3 py-2 rounded-md border transition-colors ${
//               grid 
//                 ? "bg-[#6b451a] hover:bg-[#47341d] text-white border-[#6b451a]" 
//                 : "text-gray-700 hover:bg-gray-100 border-gray-300"
//             }`}
//             title="Grid view"
//           >
//             <BsFillGridFill />
//           </button>
//           <button
//             onClick={() => setGrid(false)}
//             className={`flex items-center px-3 py-2 rounded-md border transition-colors ${
//               !grid 
//                 ? "bg-[#6b451a] hover:bg-[#47341d] text-white border-[#6b451a]" 
//                 : "text-gray-700 hover:bg-gray-100 border-gray-300"
//             }`}
//             title="List view"
//           >
//             <FaListUl />
//           </button>
//         </div>
//       </div>

//       {/* Cars grid/list */}
//       <div className={`grid bg-white ${
//         grid 
//           ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` 
//           : `grid-cols-1 gap-4`
//       }`}>
//         {carsData.length > 0 ? (
//           carsData.map(car => {
//             const { date } = formatDateTime(car.createdAt || car.updatedAt || car.time);
//             const formattedPrice = formatPrice(car.price || car.carPrice);
            
//             return (
//               <div
//                 key={car._id || car.id}
//                 className={`group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-[#bc9a71] ${
//                   grid 
//                     ? `flex flex-col` 
//                     : `flex flex-row overflow-hidden h-64`
//                 }`}
//               >
//                 {/* Image section */}
//                 <div className={`relative ${
//                   grid 
//                     ? `w-full h-48` 
//                     : `w-1/3 h-full`
//                 }`}>
//                   {car.images && car.images.length > 0 ? (
//                     <img
//                       className={`w-full h-full object-cover ${
//                         grid ? `rounded-t-lg` : `rounded-l-lg`
//                       }`}
//                       src={car.images[0]}
//                       alt={`${car.make || car.carMake} ${car.model || car.carName}`}
//                       loading="lazy"
//                     />
//                   ) : (
//                     <div className={`w-full h-full bg-gray-100 flex items-center justify-center ${
//                       grid ? `rounded-t-lg` : `rounded-l-lg`
//                     }`}>
//                       <Car className="h-12 w-12 text-gray-400" />
//                     </div>
//                   )}
                  
//                   {/* Save button overlay */}
//                   <div className="absolute top-3 right-3">
//                     <SaveButton carId={car._id || car.id} />
//                   </div>
//                 </div>

//                 {/* Content section */}
//                 <div className={`p-4 ${
//                   grid 
//                     ? `flex-1 flex flex-col` 
//                     : `flex-1 flex flex-col justify-between`
//                 }`}>
//                   <div className="space-y-3 flex-1">
//                     {/* Title */}
//                     <div className="flex items-start justify-between">
//                       <h3 className="font-bold text-lg text-gray-900 leading-tight">
//                         {car.make || car.carMake} {car.model || car.carName}
//                         {car.year && <span className="text-gray-600 font-normal ml-1">({car.year})</span>}
//                       </h3>
//                     </div>

//                     {/* Car specs */}
//                     <div className={`grid gap-2 text-sm text-gray-600 ${
//                       grid 
//                         ? `grid-cols-2` 
//                         : `grid-cols-2 lg:grid-cols-4`
//                     }`}>
//                       <div className="flex items-center gap-1">
//                         <Gauge className="h-3 w-3 flex-shrink-0" />
//                         <span className="truncate">
//                           {car.mileage ? `${car.mileage} km` : 'N/A'}
//                         </span>
//                       </div>
                      
//                       <div className="flex items-center gap-1">
//                         <Fuel className="h-3 w-3 flex-shrink-0" />
//                         <span className="truncate">
//                           {car.engineCapacity ? `${car.engineCapacity}` : 'N/A'}
//                         </span>
//                       </div>
                      
//                       {(!grid || window.innerWidth >= 1024) && (
//                         <>
//                           <div className="flex items-center gap-1">
//                             <div className="h-3 w-3 rounded-full border-2 border-current flex-shrink-0" />
//                             <span className="truncate">
//                               {car.color || 'N/A'}
//                             </span>
//                           </div>
                          
//                           <div className="flex items-center gap-1">
//                             <Car className="h-3 w-3 flex-shrink-0" />
//                             <span className="truncate">
//                               {car.variant || car.varients || car.category || 'N/A'}
//                             </span>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     {/* Date */}
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <Calendar className="h-3 w-3" />
//                       <span>Updated {date}</span>
//                     </div>
//                   </div>

//                   {/* Price and action */}
//                   <div className={`mt-4 ${
//                     grid 
//                       ? `space-y-3` 
//                       : `flex items-end justify-between`
//                   }`}>
//                     <div className="text-[#6b451a]">
//                       <h1 className="text-xl font-bold">{formattedPrice}</h1>
//                     </div>
                    
//                     <Link
//                       to={`/marketplace/cardetails/${car._id || car.id}`}
//                       className={`inline-block text-center transition-all duration-300 p-2 text-white bg-[#6b451a] rounded-md hover:bg-[#5a3715] hover:scale-105 ${
//                         grid ? `w-full` : `px-4`
//                       }`}
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           // No cars found state
//           <div className="col-span-full text-center py-12">
//             <Car className="h-16 w-16 mx-auto text-gray-400 mb-4" />
//             <p className="text-xl text-gray-600 mb-2">No cars available</p>
//             <p className="text-sm text-gray-500 mb-4">
//               {shouldUseShowroomQuery 
//                 ? "This showroom doesn't have any cars listed yet" 
//                 : "Try adjusting your filters or check back later for new listings"
//               }
//             </p>
//             {!shouldUseShowroomQuery && (
//               <button
//                 onClick={() => window.location.reload()}
//                 className="bg-[#6b451a] text-white px-4 py-2 rounded-md hover:bg-[#5a3715] transition-colors"
//               >
//                 Refresh
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="mt-8">
//           <Pagination 
//             currentPage={currentPage} 
//             totalPages={totalPages} 
//             onPageChange={handlePageChange}
//             totalItems={total}
//             itemsPerPage={resultsPerPage}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowroomsBody;
import React, { useState, useEffect } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import SaveButton from "./SaveButton";
import { Gauge, Fuel, Car, Calendar } from 'lucide-react';
import { useGetFilteredCarsQuery, useGetCarsByShowroomQuery } from "../features/carsFiltersSlice";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters, setCurrentPage, setResultsMetadata } from "../features/filterSlice";

const ShowroomsBody = () => {
  const [grid, setGrid] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams(); // Showroom ID from URL params

  // Get filters and pagination from Redux store
  const filters = useSelector(selectFilters);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const resultsPerPage = useSelector((state) => state.filter.resultsPerPage);

  // Determine which query to use based on whether we have a showroom ID
  const shouldUseShowroomQuery = id && id !== 'all';
  
  // Query for filtered cars (when no specific showroom)
  const {
    data: filteredData,
    isLoading: filteredLoading,
    error: filteredError,
    refetch: refetchFiltered
  } = useGetFilteredCarsQuery(
    {
      ...filters,
      page: currentPage,
      limit: resultsPerPage
    },
    {
      skip: shouldUseShowroomQuery, // Skip this query if we're showing a specific showroom
    }
  );

  // Query for showroom-specific cars with proper parameters
  const {
    data: showroomData,
    isLoading: showroomLoading,
    error: showroomError,
    refetch: refetchShowroom
  } = useGetCarsByShowroomQuery(
    {
      showroomId: id,
      page: currentPage,
      limit: resultsPerPage,
      sort: 'createdAt',
      order: 'desc'
    },
    {
      skip: !shouldUseShowroomQuery, // Skip this query if we're not showing a specific showroom
    }
  );

  // Determine which data to use
  const isLoading = shouldUseShowroomQuery ? showroomLoading : filteredLoading;
  const error = shouldUseShowroomQuery ? showroomError : filteredError;
  const data = shouldUseShowroomQuery ? showroomData : filteredData;

  const carsData = data?.cars || data?.data || data || [];
  const total = data?.total || carsData.length || 0;
  const totalPages = Math.ceil(total / resultsPerPage);

  // Update Redux store when data changes
  useEffect(() => {
    if (data) {
      dispatch(setResultsMetadata({
        total: data.total || carsData.length,
        page: data.page || currentPage,
        limit: data.limit || resultsPerPage
      }));
    }
  }, [data, carsData.length, currentPage, resultsPerPage, dispatch]);

  // Handle page changes
  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format date helper function
  const formatDateTime = (timeString) => {
    if (!timeString) return { date: "Invalid", time: "Invalid" };
    
    try {
      const dateObj = new Date(timeString);
      if (isNaN(dateObj.getTime())) {
        return { date: "Invalid", time: "Invalid" };
      }
      
      const date = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      const time = dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
      
      return { date, time };
    } catch (err) {
      return { date: "Invalid", time: "Invalid" };
    }
  };

  // Format price helper function
  const formatPrice = (price) => {
    if (!price) return "Price not available";
    
    // If price is already a string with formatting, return as is
    if (typeof price === 'string') return price;
    
    // If price is a number, format it
    if (typeof price === 'number') {
      if (price >= 10000000) {
        return `${(price / 10000000).toFixed(1)} Crore`;
      } else if (price >= 100000) {
        return `${(price / 100000).toFixed(1)} Lac`;
      } else {
        return `${price.toLocaleString()} PKR`;
      }
    }
    
    return price.toString();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6b451a] mx-auto mb-4"></div>
          <h1 className="font-bold text-lg text-gray-700">Loading cars...</h1>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <Car className="h-12 w-12 mx-auto text-red-500 mb-4" />
          <h1 className="font-bold text-lg text-red-600 mb-2">Error loading cars</h1>
          <p className="text-gray-600 mb-4">
            {error.message || 'Something went wrong while fetching cars'}
          </p>
          <button
            onClick={() => shouldUseShowroomQuery ? refetchShowroom() : refetchFiltered()}
            className="bg-[#6b451a] text-white px-4 py-2 rounded-md hover:bg-[#5a3715] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header with view toggle and results count */}
      <div className="flex justify-between items-center pb-2">
        <div className="text-sm text-gray-600">
          {total > 0 && (
            <span>
              Showing {((currentPage - 1) * resultsPerPage) + 1} to {Math.min(currentPage * resultsPerPage, total)} of {total} cars
              {shouldUseShowroomQuery && showroomData?.showroom && (
                <span className="font-medium"> from {showroomData.showroom.showroomName || showroomData.showroom.name}</span>
              )}
            </span>
          )}
        </div>
        
        <div className="flex gap-1 items-center">
          <button
            onClick={() => setGrid(true)}
            className={`flex items-center px-3 py-2 rounded-md border transition-colors ${
              grid 
                ? "bg-[#6b451a] hover:bg-[#47341d] text-white border-[#6b451a]" 
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
            title="Grid view"
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setGrid(false)}
            className={`flex items-center px-3 py-2 rounded-md border transition-colors ${
              !grid 
                ? "bg-[#6b451a] hover:bg-[#47341d] text-white border-[#6b451a]" 
                : "text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
            title="List view"
          >
            <FaListUl />
          </button>
        </div>
      </div>

      {/* Cars grid/list */}
      <div className={`grid bg-white ${
        grid 
          ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` 
          : `grid-cols-1 gap-4`
      }`}>
        {carsData.length > 0 ? (
          carsData.map(car => {
            const { date } = formatDateTime(car.createdAt || car.updatedAt || car.time);
            const formattedPrice = formatPrice(car.price || car.carPrice);
            
            return (
              <div
                key={car._id || car.id}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-[#bc9a71] ${
                  grid 
                    ? `flex flex-col` 
                    : `flex flex-row overflow-hidden h-64`
                }`}
              >
                {/* Image section */}
                <div className={`relative ${
                  grid 
                    ? `w-full h-48` 
                    : `w-1/3 h-full`
                }`}>
                  {car.images && car.images.length > 0 ? (
                    <img
                      className={`w-full h-full object-cover ${
                        grid ? `rounded-t-lg` : `rounded-l-lg`
                      }`}
                      src={car.images[0]}
                      alt={`${car.make || car.carMake} ${car.model || car.carName}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gray-100 flex items-center justify-center ${
                      grid ? `rounded-t-lg` : `rounded-l-lg`
                    }`}>
                      <Car className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Save button overlay */}
                  <div className="absolute top-3 right-3">
                    <SaveButton carId={car._id || car.id} />
                  </div>
                </div>

                {/* Content section */}
                <div className={`p-4 ${
                  grid 
                    ? `flex-1 flex flex-col` 
                    : `flex-1 flex flex-col justify-between`
                }`}>
                  <div className="space-y-3 flex-1">
                    {/* Title */}
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">
                        {car.make || car.carMake} {car.model || car.carName}
                        {car.year && <span className="text-gray-600 font-normal ml-1">({car.year})</span>}
                      </h3>
                    </div>

                    {/* Car specs */}
                    <div className={`grid gap-2 text-sm text-gray-600 ${
                      grid 
                        ? `grid-cols-2` 
                        : `grid-cols-2 lg:grid-cols-4`
                    }`}>
                      <div className="flex items-center gap-1">
                        <Gauge className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">
                          {car.mileage ? `${car.mileage} km` : 'N/A'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Fuel className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">
                          {car.engineCapacity ? `${car.engineCapacity}` : 'N/A'}
                        </span>
                      </div>
                      
                      {(!grid || window.innerWidth >= 1024) && (
                        <>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full border-2 border-current flex-shrink-0" />
                            <span className="truncate">
                              {car.color || 'N/A'}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Car className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">
                              {car.variant || car.varients || car.category || 'N/A'}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Updated {date}</span>
                    </div>
                  </div>

                  {/* Price and action */}
                  <div className={`mt-4 ${
                    grid 
                      ? `space-y-3` 
                      : `flex items-end justify-between`
                  }`}>
                    <div className="text-[#6b451a]">
                      <h1 className="text-xl font-bold">{formattedPrice}</h1>
                    </div>
                    
                    <Link
                      to={`/marketplace/cardetails/${car._id || car.id}`}
                      className={`inline-block text-center transition-all duration-300 p-2 text-white bg-[#6b451a] rounded-md hover:bg-[#5a3715] hover:scale-105 ${
                        grid ? `w-full` : `px-4`
                      }`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // No cars found state
          <div className="col-span-full text-center py-12">
            <Car className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600 mb-2">No cars available</p>
            <p className="text-sm text-gray-500 mb-4">
              {shouldUseShowroomQuery 
                ? "This showroom doesn't have any cars listed yet" 
                : "Try adjusting your filters or check back later for new listings"
              }
            </p>
            {!shouldUseShowroomQuery && (
              <button
                onClick={() => window.location.reload()}
                className="bg-[#6b451a] text-white px-4 py-2 rounded-md hover:bg-[#5a3715] transition-colors"
              >
                Refresh
              </button>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange}
            totalItems={total}
            itemsPerPage={resultsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default ShowroomsBody;