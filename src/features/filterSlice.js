// ../features/filterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    make: [],
    categories: [],
    colors: [],
    location: [],
    engineCapacity: [],
    year: [],
    price: {
      min: null,
      max: null
    },
    mileage: null,
    showroom: null,
    searchQuery: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  },
  appliedFilters: {},
  isFilterOpen: false,
  totalResults: 0,
  currentPage: 1,
  resultsPerPage: 20
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Set all filters at once
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    // Set a specific filter
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },

    // Add item to array filter
    addToArrayFilter: (state, action) => {
      const { key, value } = action.payload;
      if (!state.filters[key]) {
        state.filters[key] = [];
      }
      if (!state.filters[key].includes(value)) {
        state.filters[key].push(value);
      }
    },

    // Remove item from array filter
    removeFromArrayFilter: (state, action) => {
      const { key, value } = action.payload;
      if (state.filters[key]) {
        state.filters[key] = state.filters[key].filter(item => item !== value);
      }
    },

    // Toggle array filter item
    toggleArrayFilter: (state, action) => {
      const { key, value } = action.payload;
      if (!state.filters[key]) {
        state.filters[key] = [];
      }
      
      const index = state.filters[key].indexOf(value);
      if (index > -1) {
        state.filters[key].splice(index, 1);
      } else {
        state.filters[key].push(value);
      }
    },

    // Set price range
    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.filters.price = { min, max };
    },

    // Set mileage
    setMileage: (state, action) => {
      state.filters.mileage = action.payload;
    },

    // Set search query
    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
    },

    // Set sorting
    setSorting: (state, action) => {
      const { sortBy, sortOrder } = action.payload;
      state.filters.sortBy = sortBy;
      state.filters.sortOrder = sortOrder;
    },

    // Apply filters (copy current filters to applied filters)
    applyFilters: (state) => {
      state.appliedFilters = { ...state.filters };
    },

    // Clear all filters
    clearAllFilters: (state) => {
      state.filters = {
        make: [],
        categories: [],
        colors: [],
        location: [],
        engineCapacity: [],
        year: [],
        price: {
          min: null,
          max: null
        },
        mileage: null,
        showroom: null,
        searchQuery: '',
        sortBy: 'createdAt',
        sortOrder: 'desc'
      };
    },

    // Clear specific filter
    clearFilter: (state, action) => {
      const key = action.payload;
      if (Array.isArray(state.filters[key])) {
        state.filters[key] = [];
      } else if (typeof state.filters[key] === 'object') {
        state.filters[key] = key === 'price' ? { min: null, max: null } : null;
      } else {
        state.filters[key] = key === 'searchQuery' ? '' : null;
      }
    },

    // Toggle filter panel
    toggleFilterPanel: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },

    // Set filter panel state
    setFilterPanelOpen: (state, action) => {
      state.isFilterOpen = action.payload;
    },

    // Set results metadata
    setResultsMetadata: (state, action) => {
      const { total, page, limit } = action.payload;
      state.totalResults = total || 0;
      state.currentPage = page || 1;
      state.resultsPerPage = limit || 20;
    },

    // Set current page
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    // Reset filters to applied state
    resetToAppliedFilters: (state) => {
      state.filters = { ...state.appliedFilters };
    },
  },
});

// Selectors
export const selectFilters = (state) => state.filter.filters;
export const selectAppliedFilters = (state) => state.filter.appliedFilters;
export const selectIsFilterOpen = (state) => state.filter.isFilterOpen;
export const selectTotalResults = (state) => state.filter.totalResults;
export const selectCurrentPage = (state) => state.filter.currentPage;
export const selectResultsPerPage = (state) => state.filter.resultsPerPage;

// Selector for active filters count
export const selectActiveFiltersCount = (state) => {
  const filters = state.filter.filters;
  let count = 0;
  
  // Count array filters
  ['make', 'categories', 'colors', 'location', 'engineCapacity', 'year'].forEach(key => {
    if (filters[key] && filters[key].length > 0) {
      count += filters[key].length;
    }
  });

  // Count price filter
  if (filters.price && (filters.price.min !== null || filters.price.max !== null)) {
    count += 1;
  }

  // Count mileage filter
  if (filters.mileage !== null && filters.mileage !== undefined) {
    count += 1;
  }

  // Count search query
  if (filters.searchQuery && filters.searchQuery.trim() !== '') {
    count += 1;
  }

  // Count showroom filter
  if (filters.showroom) {
    count += 1;
  }

  return count;
};

// Selector for checking if specific filter is active
export const selectIsFilterActive = (state, filterKey) => {
  const filter = state.filter.filters[filterKey];
  
  if (Array.isArray(filter)) {
    return filter.length > 0;
  }
  
  if (typeof filter === 'object' && filter !== null) {
    if (filterKey === 'price') {
      return filter.min !== null || filter.max !== null;
    }
    return Object.values(filter).some(value => value !== null && value !== undefined);
  }
  
  if (filterKey === 'searchQuery') {
    return filter && filter.trim() !== '';
  }
  
  return filter !== null && filter !== undefined;
};

// Action creators
export const {
  setFilters,
  setFilter,
  addToArrayFilter,
  removeFromArrayFilter,
  toggleArrayFilter,
  setPriceRange,
  setMileage,
  setSearchQuery,
  setSorting,
  applyFilters,
  clearAllFilters,
  clearFilter,
  toggleFilterPanel,
  setFilterPanelOpen,
  setResultsMetadata,
  setCurrentPage,
  resetToAppliedFilters,
} = filterSlice.actions;

export default filterSlice.reducer;