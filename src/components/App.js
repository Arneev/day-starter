import { Route, Switch } from "react-router-dom";
import DashboardWrap from "./Dashboard/DashboardWrap";
import SignUp from "./Auth/Signup";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import PrivateRoute from "./helpers/PrivateRouter";
import { AuthProvider } from "../contexts/AuthContext";
import About from "./Other/About";

function App() {
    return (
        <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/" component={DashboardWrap} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/about" component={About} />
            </Switch>
        </AuthProvider>
    );
}

export default App;
