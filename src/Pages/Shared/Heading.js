import React from 'react';

const Heading = ({children}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold p-2 mt-4 text-[#33473c]">{children}</h2>
        </div>
    );
};

export default Heading; 