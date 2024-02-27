
const Tracker = () => {
  return (
    <div>
      <h1 className="flex justify-center mt-10 font-bold text-3xl">Tracker</h1>
      <div className="flex justify-around mt-10 font-bold text-xl">
        <div className="border p-10 rounded-lg shadow-lg">
          <h1>Order Placed</h1>

        </div>
        <div className="border p-10 rounded-lg shadow-lg">
          <h1>Order in Making</h1>
        </div>
        <div className="border p-10 rounded-lg shadow-lg">
          <h1>Order Ready</h1>
        </div>
        <div className="border p-10 rounded-lg shadow-lg">
          <h1>Order Picked</h1>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
