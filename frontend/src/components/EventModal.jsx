const EventModal = ({ event, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex < event.Image.data.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : event.Image.data.length - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{event.Title}</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="relative">
          <img
            src={event.Image.data[activeImageIndex]?.attributes.url}
            alt={event.Title}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          {event.Image.data.length > 1 && (
            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={handlePreviousImage}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              >
                &larr;
              </button>
              <button
                onClick={handleNextImage}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
        <p className="text-gray-600 mb-4">
          {new Date(event.Date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default EventModal;
