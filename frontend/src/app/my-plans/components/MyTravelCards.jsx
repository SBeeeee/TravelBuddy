"use client";
import React, { useState } from "react";
import { getinfo, formatDate } from "@/app/AllRides/components/helper";
import { MapPin, Calendar, Clock, Users, ArrowRight, Pencil, Trash } from "lucide-react";
import DeleteModal from "./DeleteModal"; 
import EditModal from "./EditModal";
import { useDispatch,useSelector } from "react-redux";
import { setMyRides } from "@/store/Rides/slice";
import { deleteride } from "./api/myride.api";

export default function MyTravelCard({ plan }) {
  const { icon, color } = getinfo(plan.transport);
  const [showModal, setShowModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const {myrides} = useSelector((state) => state.ride);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try{
      const res=await deleteride(plan._id);
      console.log(res)
      if(res.success){
        const updatedRides = myrides.filter((ride) => ride._id !== plan._id);
        dispatch(setMyRides(updatedRides)); 
        
        setShowModal(false);
        alert("ride deleted successfully");
      }
      }
    catch(error){
      console.error("Failed to delete ride:", error);
      alert("Failed to delete the ride. Please try again.");
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-300 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mx-2">
        {/* Gradient Header */}
        <div className={`bg-gradient-to-r ${color} p-6 text-white relative`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="text-xs bg-white/30 px-3 py-1 rounded-full inline-block mb-3 font-medium backdrop-blur-sm border border-white/40">
              You posted this plan
            </div>

            <div className="flex justify-between items-start mb-4">
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30 backdrop-blur-sm">
                {icon} {plan.transport}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">₹{plan.price}</div>
                <div className="text-sm text-white/80">per person</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-white/80" />
                  <span className="text-sm font-medium">{plan.origin}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-white/60"></div>
                  <ArrowRight className="mx-2 h-4 w-4 text-white/80" />
                  <div className="w-8 h-0.5 bg-white/60"></div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPin className="h-4 w-4 text-white/80" />
                  <span className="text-sm font-medium">{plan.destination}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Calendar className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium">{formatDate(plan.date)}</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-medium">{plan.time}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {plan.seats} seats
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between">
          <button 
           onClick={() => setEditModalOpen(true)}
           className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 text-sm font-medium text-red-600 hover:underline"
          >
            <Trash className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <DeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
      <EditModal
  isOpen={editModalOpen}
  onClose={() => setEditModalOpen(false)}
  ride={plan}
  onUpdate={(updatedRide) => {
    const updatedRides = myrides.map((r) =>
      r._id === updatedRide._id ? updatedRide : r
    );
    dispatch(setMyRides(updatedRides));
  }}
/>
    </>
  );
}
