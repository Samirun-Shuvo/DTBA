import React from "react";

const PaginationSection = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="my-2">
          <p>Showing 1 to 10 of 735 entries</p>
        </div>
        <div className="btn-group my-2">
          <button className="btn">«</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
          <button className="btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default PaginationSection;
