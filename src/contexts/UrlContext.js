import React, { useContext } from "react";
import { urlRef } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const URLContext = React.createContext();

export function useUrls() {
    return useContext(URLContext);
}

export function UrlProvider({ children }) {
    const { currentUser } = useAuth();

    function insertURL(url) {
        if (currentUser) {
            return urlRef.add({
                userID: currentUser.uid,
                urlLink: url,
            });
        } else {
            throw new Error({
                code: 1,
                message: "Could not update URLs. Please sign in again",
            });
        }
    }

    function deleteURL(url) {
        if (currentUser) {
            return urlRef
                .where("userID", "==", currentUser.uid)
                .where("urlLink", "==", url)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                });
        } else {
            throw new Error({
                code: 1,
                message: "Could not delete URL. Please sign in again",
            });
        }
    }

    async function getURLs() {
        if (currentUser) {
            return await urlRef.where("userID", "==", currentUser.uid).get();
        } else {
            throw new Error({
                code: 1,
                message: "Could not get URLs. Please sign in again",
            });
        }
    }

    const value = {
        insertURL,
        deleteURL,
        getURLs,
    };

    return <URLContext.Provider value={value}>{children}</URLContext.Provider>;
}
