import React from 'react';

const UserTaskDetails = ({ setIsDetailsView }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative transition-transform transform scale-100">
                {/* Close Button */}
                <button
                    onClick={() => setIsDetailsView(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 focus:outline-none transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Task Details</h2>

                {/* Task Table */}
                <div className="overflow-auto max-h-96 border-t border-b border-gray-200">
                    <table className="min-w-full text-left table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 font-semibold text-gray-600">Action</th>
                                <th className="px-4 py-3 font-semibold text-gray-600">Data</th>
                                <th className="px-4 py-3 font-semibold text-gray-600">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* Static Data */}
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Login</td>
                                <td className="px-4 py-3">User logged in</td>
                                <td className="px-4 py-3">10:00 AM</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Edit Profile</td>
                                <td className="px-4 py-3">Updated email address</td>
                                <td className="px-4 py-3">10:15 AM</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Logout</td>
                                <td className="px-4 py-3">User logged out</td>
                                <td className="px-4 py-3">10:30 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTaskDetails;
