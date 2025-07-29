import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center my-4 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded-md border text-sm font-medium ${
            currentPage === i + 1 ? 'bg-[#6b451a] text-white' : 'bg-white text-black'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;