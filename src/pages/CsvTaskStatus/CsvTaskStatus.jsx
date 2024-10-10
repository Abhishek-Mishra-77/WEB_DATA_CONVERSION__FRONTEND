import React, { useEffect, useState } from 'react'
import SelectCsv from './SelectCsv'
import TaskUsersDetails from './TaskUsersDetails';
import { onGetTemplateHandler } from '../../services/common';
import { toast } from 'react-toastify';
import axios from 'axios';


const CsvTaskStatus = () => {
    const [templates, setTemplates] = useState([]);
    const [openDetails, setOpenDetails] = useState(false);
    const [loadingTemplates, setLoadingTemplates] = useState(false);
    const [loadingCsv, setLoadingCsv] = useState(false);
    const [allSelectedCsv, setAllSelectedCsv] = useState([]);
    const [csvHeaders, setCsvHeaders] = useState([]);
    const [selectedHeader, setSelectedHeader] = useState("");
    const [selectedCsvId, setSelectedCsvId] = useState("");
    const [headerValue, setHeaderValue] = useState("");
    const [csvDetails, setCsvDetails] = useState([]);
    const [loadingData, setLoadingData] = useState(false)
    const token = JSON.parse(localStorage.getItem("userData"));



    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await onGetTemplateHandler();
                setTemplates(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchTemplates();
    }, [])

    const onGetAllCsvHandler = async (id) => {
        setLoadingTemplates(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/getcsvinfo/${id}`,
                {
                    headers: {
                        token: token,
                    },
                }
            );
            setAllSelectedCsv(response?.data)
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoadingTemplates(false)
        }
    }

    const getCsvHeadersHandler = async (fileId) => {
        setLoadingCsv(true)
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_IP}/get/headerdata/${fileId}`,
                {
                    headers: {
                        token: token,
                    },
                }
            );
            setSelectedCsvId(fileId)
            setCsvHeaders(response.data.headers);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoadingCsv(false)
        }
    };


    const onGetAllTaskStatusHandler = async () => {
        setLoadingData(true);
        if (headerValue === "") {
            toast.warning("Please enter the value");
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_IP}/gettaskstatusdetails/${selectedCsvId}`,
                {
                    selectedHeader: selectedHeader,
                    headerValue: headerValue
                },
                {
                    headers: {
                        token: token
                    }
                })
            console.log(response?.data)
            if (response?.data === 0) {
                toast.warning("No data found")
                return;
            }
            setCsvDetails(response?.data)
            setOpenDetails(true);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoadingData(false);
        }
    }


    console.log(csvDetails)

    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-[100vh]">
            {openDetails ?
                <TaskUsersDetails
                    csvDetails={csvDetails}
                    setOpenDetails={setOpenDetails}
                    selectedHeader={selectedHeader}
                    headerValue={headerValue}
                />
                :
                <SelectCsv
                    loadingTemplates={loadingTemplates}
                    templates={templates}
                    loadingCsv={loadingCsv}
                    onGetAllCsvHandler={onGetAllCsvHandler}
                    getCsvHeadersHandler={getCsvHeadersHandler}
                    allSelectedCsv={allSelectedCsv}
                    csvHeaders={csvHeaders}
                    setSelectedHeader={setSelectedHeader}
                    selectedHeader={selectedHeader}
                    onGetAllTaskStatusHandler={onGetAllTaskStatusHandler}
                    loadingData={loadingData}
                    headerValue={headerValue}
                    setHeaderValue={setHeaderValue}
                />}
        </div>
    )
}

export default CsvTaskStatus
