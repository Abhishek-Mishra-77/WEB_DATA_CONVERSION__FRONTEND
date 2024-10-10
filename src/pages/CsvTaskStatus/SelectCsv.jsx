import React from 'react'

const SelectCsv = ({ templates, onGetAllCsvHandler, loadingTemplates, getCsvHeadersHandler, loadingCsv, allSelectedCsv }) => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 templatemapping ">
            <div className="w-full max-w-6xl px-8 py-10 bg-white rounded-xl">
                {/* MAIN SECTION */}
                <section className="mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Find Task Status</h2>
                    <div>
                        {/* First Dropdown for Template Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Template</label>
                            <div className="relative">
                                <select
                                    onChange={(e) => {
                                        const selectedValue = e.target.value;
                                        if (selectedValue !== "Select Template") {
                                            onGetAllCsvHandler(selectedValue);
                                        }
                                    }}
                                    className="block w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={loadingTemplates}  // Disable select when loading is true
                                >
                                    <option value="Select Template">Select Template</option>
                                    {templates.map((template) => (
                                        <option key={template.id} value={template.id}>
                                            {template.name}
                                        </option>
                                    ))}
                                </select>

                                {/* Loader next to the select */}
                                <div className="absolute inset-y-0 right-0 flex items-center px-8">
                                    {loadingTemplates ? (
                                        <svg
                                            className="animate-spin h-8 w-8 text-blue-500" // Larger size (h-8 w-8)
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* Default icon can go here */}
                                        </svg>
                                    )}
                                </div>
                            </div>


                        </div>

                        {/* Second Dropdown for CSV Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select CSV</label>
                            <div className="relative">
                                <select
                                    onChange={(e) => {
                                        const selectedValue = e.target.value;
                                        if (selectedValue !== "Select CSV File") {
                                            getCsvHeadersHandler(selectedValue);
                                        }
                                    }}
                                    className="block w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={loadingCsv}
                                >
                                    <option value="Select CSV File">Select CSV File</option>
                                    {allSelectedCsv.map((csv) => (
                                        <option key={csv.id} value={csv.id}>
                                            {csv.csvFile}
                                        </option>
                                    ))}
                                </select>

                                {/* Loader next to the select */}
                                <div className="absolute inset-y-0 right-0 flex items-center px-8">
                                    {loadingCsv ? (
                                        <svg
                                            className="animate-spin h-8 w-8 text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* Default icon can go here */}
                                        </svg>
                                    )}
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

export default SelectCsv
