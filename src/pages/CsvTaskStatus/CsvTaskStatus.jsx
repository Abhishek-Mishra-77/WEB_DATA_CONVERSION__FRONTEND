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

    const getCsvHeadersHandler = (id) => {
        console.log(id);
        setLoadingCsv(true);
        setTimeout(() => setLoadingCsv(false), 5000);
    }

    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-[100vh]">
            {openDetails ?
                <TaskUsersDetails />
                :
                <SelectCsv
                    loadingTemplates={loadingTemplates}
                    templates={templates}
                    loadingCsv={loadingCsv}
                    onGetAllCsvHandler={onGetAllCsvHandler}
                    getCsvHeadersHandler={getCsvHeadersHandler}
                    allSelectedCsv={allSelectedCsv}
                />}
        </div>

    )
}

export default CsvTaskStatus
