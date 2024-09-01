import React from "react";

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img
      src={event.Image.data[0]?.attributes.url}
      alt={event.Title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{event.Title}</h3>
      <p className="text-gray-600 text-sm">
        {new Date(event.Date).toLocaleDateString()}
      </p>
    </div>
  </div>
);

export default EventCard;
