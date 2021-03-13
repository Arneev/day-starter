import React from "react";
import { UrlProvider } from "../../contexts/UrlContext";
import Dashboard from "./Dashboard";

export default function DashboardWrap() {
    return (
        <UrlProvider>
            <Dashboard />
        </UrlProvider>
    );
}
