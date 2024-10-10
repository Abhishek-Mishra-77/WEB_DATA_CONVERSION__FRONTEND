import React from 'react'

const TaskUsersDetails = ({
    csvDetails,
    setOpenDetails,
    selectedHeader,
    headerValue
}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 templatemapping min-h-[100vh]">
            <div className="w-full max-w-6xl px-8 py-10 bg-white rounded-xl shadow-lg">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                            CSV Data Overview
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            Showing data for <span className="font-semibold text-blue-600">{selectedHeader}</span> with value <span className="font-semibold text-blue-600">{headerValue}</span>
                        </p>
                    </div>

                    <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-6 text-center shadow-md">
                            <dt className="text-base font-medium text-gray-500">Header</dt>
                            <dd className="text-3xl font-bold text-blue-600 mt-1">{selectedHeader}</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-6 text-center shadow-md">
                            <dt className="text-base font-medium text-gray-500">Header Value</dt>
                            <dd className="text-3xl font-bold text-blue-600 mt-1">{headerValue}</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-6 text-center shadow-md">
                            <dt className="text-base font-medium text-gray-500">Total Records</dt>
                            <dd className="text-3xl font-bold text-blue-600 mt-1">{csvDetails?.length}</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-6 py-6 text-center shadow-md">
                            <dt className="text-base font-medium text-gray-500">Completed Data</dt>
                            <dd className="text-3xl font-bold text-blue-600 mt-1">86</dd>
                        </div>
                    </dl>

                    {/* Displaying CSV Details */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">CSV Data Details</h3>
                        <div className="overflow-x-auto">
                            <div className="max-h-[300px] overflow-y-auto">
                                <table className="w-full text-left table-auto border-collapse">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-700">
                                            {csvDetails && Object.keys(csvDetails[0]).map((key) => (
                                                <th key={key} className="px-4 py-2 border-b border-gray-200 text-sm font-semibold">{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {csvDetails && csvDetails.map((row, index) => (
                                            <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                                {Object.values(row).map((value, idx) => (
                                                    <td key={idx} className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">
                                                        {value}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskUsersDetails
