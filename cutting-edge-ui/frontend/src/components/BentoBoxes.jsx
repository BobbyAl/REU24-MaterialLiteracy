import React from 'react';
import { Link } from 'react-router-dom';

const BentoBoxes = () => {
    return (
        <div className="text-black/50 grid grid-cols-6 grid-rows-2 gap-4 w-full" style={{height: 'calc(100vh - 3rem - 3rem - 3rem - 3rem - 3rem)'}}> 
            {/* Techniques, taking 1/3 space, full height */}
            <div className="col-span-2 row-span-2 flex flex-col justify-start items-start p-4 rounded-2xl shadow-md" style={{border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                <Link to="/techniques" className="text-xl font-bold decoration-0 text-white">Techniques</Link>
            </div>
            {/* Project History, wider, top half */}
            <div className="col-span-3 row-span-1 flex flex-col justify-start items-start p-4 rounded-2xl shadow-md" style={{border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                <Link to="/project-history" className="text-xl font-bold decoration-0 text-white">Project History</Link>
            </div>
            {/* Materials, top half, next to Project History */}
            <div className="col-span-1 row-span-1 flex flex-col justify-start items-start p-4 rounded-2xl shadow-md" style={{border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                <Link to="/materials" className="text-xl font-bold decoration-0 text-white">Materials</Link>
            </div>
            {/* Interest Board, bottom half, taking up remaining width */}
            <div className="col-span-4 row-span-1 flex flex-col justify-start items-start p-4 rounded-2xl shadow-md" style={{border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                <Link to="/interest-board" className="text-xl font-bold decoration-0 text-white">Interest Board</Link>
            </div>
        </div>
    );
};

export default BentoBoxes;