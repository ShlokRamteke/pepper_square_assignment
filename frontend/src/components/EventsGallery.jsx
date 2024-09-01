import React, { useState, useEffect } from "react";
import axios from "axios";

import EventCard from "./EventCard";
import EventModal from "./EventModal";

const EventsGallery = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_STRAPI_DEPLOY_URL + "?populate=*")
      .then((response) => {
        const fetchedEvents = response.data.data;

        setEvents(fetchedEvents);
        setFilteredEvents(fetchedEvents);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const expandEvents = (events) => {
    // Expand events based on the number of images
    return events.flatMap((event) =>
      event.attributes.Image.data.map((image) => ({
        ...event,
        imageUrl: image.attributes.url,
      }))
    );
  };

  const filterEvents = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      // When 'All' is selected, display each event with a single image

      setFilteredEvents(events);
    } else {
      // For other categories, expand the events based on the number of images
      const filtered = events.filter(
        (event) => event.attributes.Category === category
      );
      setFilteredEvents(expandEvents(filtered));
    }
  };

  const categories = [
    "All",
    "Plantation day",
    "Annual day",
    "Sports day",
    "NCC(National Cadet Corps)",
    "Science exhibition",
    "Alumni association",
    "Cleanliness drive",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our events gallery</h1>
        <p className="text-xl text-gray-600">
          Events at DBTR are filled with joyous occasions, cultural gatherings,
          and learning opportunities that bring us all together.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterEvents(category)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <div
            key={`${event.id}-${index}`}
            onClick={() => setSelectedEvent(event.attributes)}
          >
            <EventCard
              event={event.attributes}
              imageUrl={
                event.imageUrl || event.attributes.Image.data[0]?.attributes.url
              } // Use first image for 'All'
            />
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No events found for this category.
        </p>
      )}

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {filteredEvents.length >= 6 && (
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsGallery;
