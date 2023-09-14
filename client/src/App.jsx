import React from "react";
import { Routes, Route } from "react-router-dom";
/* Logins */
import { UserStore } from "./Logins/UserStore.jsx";
import Login from "./Logins/Login.jsx";
import InputField from "./Logins/InputField.jsx";
import SubmitButton from "./Logins/SubmitButton.jsx";
import { observer } from "mobx-react";
/* End Logins */
import CoursesPage from "./Pages/CoursesPage";
import CourseForm from "./Pages/CourseForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { CourseContextProvider } from "./context/CourseProvider";
import "./index.css";

class App extends React.Component {
  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.user_name = result.user_name;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (error) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.user_name = "";
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (UserStore.loading) {
      return <div>Loading, please wait ...</div>;
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div>
            Welcome {UserStore.user_name}
            <div className=" bg-Abysm text-White h-screen">
              <Navbar />
              <div className="container mx-auto py-4 px-10">
                <CourseContextProvider>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<CoursesPage />} />
                    <Route path="/new-course" element={<CourseForm />} />
                    <Route path="/edit-course/:code" element={<CourseForm />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </CourseContextProvider>
              </div>
            </div>
            <SubmitButton
              text={"Log out"}
              disabled={false}
              onClick={() => this.doLogout()}
            />
          </div>
        );
      }
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
}
export default observer(App);
/*export default function App() {
  return (
    
  );
}*/
