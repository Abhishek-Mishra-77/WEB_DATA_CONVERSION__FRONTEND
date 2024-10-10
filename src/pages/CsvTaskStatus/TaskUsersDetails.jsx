import React from 'react'

const TaskUsersDetails = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 templatemapping ">
        <div className="w-full max-w-6xl px-8 py-10 bg-white rounded-xl">
            {/* MAIN SECTION */}
            <section className="mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">User Task Details</h2>

                <div>
                    {/* First Dropdown for Template Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Template</label>
                        <div className="relative">
                            <select className="block w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option>Select Template</option>
                                <option>Template 1</option>
                                <option>Template 2</option>
                                <option>Template 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Second Dropdown for CSV Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select CSV</label>
                        <div className="relative">
                            <select className="block w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option>Select CSV File</option>
                                <option>File 1</option>
                                <option>File 2</option>
                                <option>File 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Third Dropdown */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Other Options</label>
                        <div className="relative">
                            <select className="block w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option>Select Option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
    )
}

export default TaskUsersDetails