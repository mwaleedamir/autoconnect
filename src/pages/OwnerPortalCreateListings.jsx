import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createListing } from '../features/createListingsSlice';
import toast from 'react-hot-toast';

const OwnerPortalCreateListings = () => {
  const dispatch = useDispatch();
  const { owner } = useSelector((state) => state.ownerAuth);

  const [inputData, setInputData] = useState({
    userId: '',
    carName: '',
    carMake: '',
    engineCapacity: '',
    carPrice: '',
    color: '',
    mileage: '',
    model: '',
    importedFrom: '',
    registeredIn: '',
    varients: '',
    description: '',
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (owner?.owners?._id) {
      setInputData((prev) => ({ ...prev, userId: owner.owners._id }));
    }
  }, [owner]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    Object.entries(inputData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    images.forEach((img) => payload.append('images', img));
    // console.log the entries  
    // for (let pair of payload.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      const result = await dispatch(createListing(payload));
      if (createListing.fulfilled.match(result)) {
        toast.success(result.payload?.message || 'Car listing created successfully!');
      } else {
        toast.error('Failed to create listing');
      }
    } catch (err) {
      toast.error('Error while submitting');
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Car Listing</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Car Name', name: 'carName' },
          { label: 'Car Make', name: 'carMake' },
          { label: 'Engine Capacity (cc)', name: 'engineCapacity', type: 'number' },
          { label: 'Car Price', name: 'carPrice' },
          { label: 'Color', name: 'color' },
          { label: 'Mileage (km)', name: 'mileage', type: 'number' },
          { label: 'Model Year', name: 'model', type: 'number' },
          { label: 'Imported From', name: 'importedFrom' },
          { label: 'Registered In', name: 'registeredIn' },
          { label: 'Variants', name: 'varients' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={inputData[name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        ))}

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Car Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            value={inputData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnerPortalCreateListings;
