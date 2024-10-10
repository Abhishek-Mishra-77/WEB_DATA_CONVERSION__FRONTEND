import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages and Components
import Login from "./pages/Auth/Login";
import CreateUser from "./pages/Admin/CreateUser";
import { AllUser } from "./pages/Admin/AllUser";
import { PageNotFound } from "./pages/PageNotFound";
import CsvHomepage from "./pages/CSV Comparer/CsvHomepage";
import Correction from "./pages/CSV Comparer/Correction";
import ImageUploader from "./pages/ImageUploader/ImageUploader";
import ImageScanner from "./pages/ImageScanner/ImageScanner";
import CsvUploader from "./pages/CsvUploader/CsvUploader";
import TemplateMapping from "./pages/TemplateMapping/TemplateMapping";
import HomePageTest from "./pages/HomePageTest";
import TaskManager from "./pages/TaskManager/TaskManager";
import DataMatching from "./pages/DataMatching/DataMatching";
import Profile from "./pages/Auth/Profile";
import Assignee from "./pages/CSV Comparer/Assignee";
import DuplicityDetect from "./pages/DuplicityDetect/DuplicityDetect";
import UserDetail from "./pages/Admin/UserDetail";
import UpdatedDetails from "./pages/Admin/UpdatedDetails/UpdatedDetails";
import FieldDecision from "./pages/FieldDecision/FieldDecision";
import CsvTaskStatus from "./pages/CsvTaskStatus/CsvTaskStatus";

// Context and Services
import dataContext from "./Store/DataContext";
import ResultGenerationProvider from "./Store/ResultGenerationProvider";
import { onGetVerifiedUserHandler } from "./services/common";

// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isLogin } = useContext(dataContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await onGetVerifiedUserHandler();
        setUser(response);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    fetchUserData();
  }, []);

  const role = user?.user?.role;
  const permissions = user?.user?.permissions;

  // Helper functions for cleaner routing
  const isAdminOrModerator = role === "Admin" || role === "Moderator";
  const isOperator = role === "Operator";
  const hasPermission = (permission) => permissions?.[permission];

  return (
    <Router>
      {isLogin && <Navbar />}
      <Routes>
        {isLogin ? (
          <>
            {/* Admin and Moderator Routes */}
            {isAdminOrModerator && (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/all-user" element={<AllUser />} />
                <Route path="/user-detail/:id" element={<UserDetail />} />
                <Route path="/updated-details/:id" element={<UpdatedDetails />} />
              </>
            )}

            {/* CSV Comparison Routes */}
            {(isAdminOrModerator || isOperator) && hasPermission("comparecsv") && (
              <>
                <Route path="/comparecsv" element={<CsvHomepage />} />
                <Route path="/comparecsv/assign_operator" element={<Assignee />} />
              </>
            )}

            {/* Data Entry Routes */}
            {(isAdminOrModerator || isOperator) && hasPermission("dataEntry") && (
              <>
                <Route path="/datamatching" element={<DataMatching />} />
                <Route path="/datamatching/csvtaskstatus" element={<CsvTaskStatus />} />
                <Route path="/datamatching/correct_compare_csv" element={<Correction />} />
              </>
            )}

            {/* CSV Uploader Routes */}
            {(isAdminOrModerator || isOperator) && hasPermission("csvuploader") && (
              <>
                <Route path="/csvuploader" element={<CsvUploader />} />
                <Route path="/csvuploader/duplicatedetector/:id" element={<DuplicityDetect />} />
                <Route path="/csvuploader/templatemap/:id" element={<TemplateMapping />} />
                <Route path="/csvuploader/fieldDecision/:id" element={<FieldDecision />} />
                <Route path="/csvuploader/taskAssign/:id" element={<TaskManager />} />
              </>
            )}

            {/* Image Uploader and Template Routes */}
            {(isAdminOrModerator || isOperator) && hasPermission("createTemplate") && (
              <>
                <Route path="/imageuploader" element={<ImageUploader />} />
                <Route path="/imageuploader/scanner" element={<ImageScanner />} />
              </>
            )}

            {/* Result Generation Routes */}
            {(isAdminOrModerator || isOperator) && hasPermission("resultGenerator") && (
              <>
                <Route
                  path="/resultGeneration"
                  element={
                    <ResultGenerationProvider>
                      <HomePageTest />
                    </ResultGenerationProvider>
                  }
                />
              </>
            )}

            {/* Fallback for Non-Existing Routes */}
            <Route
              path="*"
              element={<PageNotFound errorMessage="Page Not Found" errorCode="404" />}
            />
          </>
        ) : (
          <>
            {/* Public Routes for Unauthenticated Users */}
            <Route path="/" element={<Login />} />
            <Route
              path="*"
              element={<PageNotFound errorMessage="User Not Authorised" errorCode="401" />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
