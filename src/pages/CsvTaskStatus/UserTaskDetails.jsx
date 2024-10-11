import React from 'react';

const UserTaskDetails = ({ setIsUserTaskView }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 relative transition-transform transform scale-100">
                <button
                    onClick={() => setIsUserTaskView(false)}
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
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="px-4 py-3 font-semibold">Templates</th>
                                <th className="px-4 py-3 font-semibold">Min</th>
                                <th className="px-4 py-3 font-semibold">Max</th>
                                <th className="px-4 py-3 font-semibold">Module</th>
                                <th className="px-4 py-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* Static Data */}
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Template A</td>
                                <td className="px-4 py-3">10</td>
                                <td className="px-4 py-3">50</td>
                                <td className="px-4 py-3">Module 1</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-600 rounded-full">
                                        Active
                                    </span>
                                </td>
                              
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Template B</td>
                                <td className="px-4 py-3">20</td>
                                <td className="px-4 py-3">100</td>
                                <td className="px-4 py-3">Module 2</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-100 text-yellow-600 rounded-full">
                                        Pending
                                    </span>
                                </td>
                               
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">Template C</td>
                                <td className="px-4 py-3">15</td>
                                <td className="px-4 py-3">80</td>
                                <td className="px-4 py-3">Module 3</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-red-100 text-red-600 rounded-full">
                                        Inactive
                                    </span>
                                </td>
                                
                            </tr>
                            {/* Add more static rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTaskDetails;
