import { useState } from "react";
import { UIProvider } from "./context/UIContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CompletionScreen from "./pages/CompletionScreen";
import ResultsPage from "./pages/ResultsPage";
import AllTestsCompleted from "./components/Test/AllTestCompleted";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  setStoredUserDetails,
  removedStoredUserDetails,
  // checkUserLoggedIn,
} from "./utils/loginUtil";
import AuthenticatedPageContainer from "./layouts/AuthenticatedPageContainer";
import TestMaster from "./pages/TestMaster";
// import TestComponent from "./components/Test/TestComponent";
import SecureTestManagement from "./components/Test/SecureTestManagement";

function App() {
  // const isLoggedIn = checkUserLoggedIn();
  const [allTests, setAllTests] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Toggle this for testing

  const login = (userData) => {
    if (userData) {
      setStoredUserDetails(userData);
    }
    setIsAuthenticated(true);
  };
  const logout = () => {
    removedStoredUserDetails();
    setIsAuthenticated(false);
  };
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          {/* <Route path="/login" element={ isAuthenticated ? <Navigate to="/dashboard" replace  /> : <Login onLogin={login} />} /> */}

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <AuthenticatedPageContainer
                isAuthenticated={isAuthenticated}
                logout={logout}
                replace
              />
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="testAll" element={<TestMaster setAllTests={setAllTests}/>} />
            <Route path="test" element={<SecureTestManagement allTests={allTests} />} />
            <Route path="allTestCompleted" element={<AllTestsCompleted />} />
            <Route path="completionScreen" element={<CompletionScreen />} />
            <Route path="resultsPage" element={<ResultsPage />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <Navigate
                to={isAuthenticated ? "/dashboard" : "/login"}
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
