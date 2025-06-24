"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setRides } from "@/store/Rides/slice";
import { setLoading } from "@/store/auth/slice";
import { getAllRides } from "../api/rides.api";

export default function Pagination() {
const dispatch = useDispatch();
const { totalPages,Query } = useSelector((state) => state.ride);
const { page, limit } = Query;

const fetchPage = async (updatedQuery) => {
    dispatch(setLoading(true));
    try {
      dispatch(setQuery(updatedQuery));
      const data = await getAllRides(updatedQuery);
      dispatch(setRides({rides:data.rides,totalPages}));
    } catch (err) {
        console.error("Error changing page:", err);
      } finally {
        dispatch(setLoading(false));
      }
    };
    const handlePageClick = (newPage) => {
        if (newPage !== page && newPage >= 1 && newPage <= totalPages) {
          fetchPage({ ...Query, page: newPage });
        }
      };
      const handleLimitChange = (e) => {
        const newLimit = parseInt(e.target.value);
        fetchPage({ ...Query, limit: newLimit, page: 1 }); // Reset to page 1 on limit change
      };
      
      return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          {/* Limit Selector */}
          <div className="flex items-center gap-2 text-sm">
            <label className="text-gray-600 font-medium">Rides per page:</label>
            <select
              value={limit}
              onChange={handleLimitChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
    
          {/* Page Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageClick(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50 hover:bg-gray-100"
            >
              Prev
            </button>
    
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`px-3 py-1 rounded border text-sm ${
                    pageNumber === page
                      ? "bg-purple-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
    
            <button
              onClick={() => handlePageClick(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      );
    }