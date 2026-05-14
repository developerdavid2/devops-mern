const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-14 w-14 border-b-2 border-blue-700 mb-4"></div>
        <p className="text-gray-600">Loading tasks...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
