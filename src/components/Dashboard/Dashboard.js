import React, { useRef, useState, useEffect } from "react";
import NavbarComponent from "./Navbar";
import { useUrls } from "../../contexts/UrlContext";
import BoostButton from "./BoostButton";
import AddSite from "./AddSite";
import { Alert } from "react-bootstrap";
import LinkBlock from "./LinkBlock";
import Background from "../../assets/images/backgroundDarkGreen.jpg";

export default function Dashboard() {
    const { insertURL, deleteURL, getURLs } = useUrls();

    const urlComponentRef = useRef();
    const [urlError, setUrlError] = useState("");
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    var iCount = 0;

    function addUrl(e) {
        e.preventDefault();
        setLoading(true);
        setUrlError("");

        if (urlComponentRef.current.value.length !== 0) {
            insertURL(urlComponentRef.current.value)
                .then(() => {
                    getAndSetUrls();
                    setLoading(false);
                })
                .catch((err) => {
                    setUrlError(err.message);
                    setLoading(false);
                });
        } else {
            setUrlError("Enter valid url");
            setLoading(false);
        }
    }

    function deleteAndUpdateURL(url) {
        deleteURL(url)
            .then(() => {
                getAndSetUrls();
            })
            .catch((err) => {
                setError(err);
            });
    }

    async function getAndSetUrls() {
        try {
            let snapshotData = await getURLs();
            let urls = [];

            snapshotData.forEach((snapshot) => {
                urls.push(snapshot.data().urlLink);
            });

            setUrls(urls);
        } catch (error) {
            setError(error);
        }
    }

    function openNextURL(tempUrls) {
        if (tempUrls[iCount]) {
            var x = window.open(tempUrls[iCount], "_blank");
            iCount++;
            setTimeout(() => {
                openNextURL(tempUrls);
            }, 2000);
        }
    }

    const openURLs = function (e) {
        iCount = 0;
        var tempUrls = [];

        urls.forEach((url) => {
            let tempUrl = url;

            if (!isUrl(tempUrl)) {
                tempUrl = "http://" + url;
            }

            if (isUrl(tempUrl)) {
                tempUrls.push(tempUrl);
            } else {
                setError(`Invalid URL - "${url}"`);
            }
        });

        e.stopPropagation();
        e.preventDefault();
        openNextURL(tempUrls);
    };

    function isUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    useEffect(() => {
        getAndSetUrls();
    }, []);

    return (
        <div
            id="dashboardID"
            style={{
                backgroundImage: `url(${Background})`,
                minHeight: "100vh",
                backgroundSize: "contain",
            }}
        >
            <NavbarComponent />

            {error && (
                <div className="d-flex justify-content-center align-items-center">
                    <Alert
                        variant="danger"
                        className="my-3"
                        style={{
                            overflowWrap: "break-word",
                        }}
                    >
                        {error}
                    </Alert>
                </div>
            )}

            {urls.length !== 0 && <BoostButton openUrls={openURLs} />}

            <AddSite
                handleSubmit={addUrl}
                urlComponentRef={urlComponentRef}
                error={urlError}
                loading={loading}
            />

            <div className="my-3" />

            {urls.length !== 0 &&
                urls.map((url) => {
                    iCount++;
                    return (
                        <LinkBlock
                            key={iCount}
                            url={url}
                            delUrl={() => {
                                deleteAndUpdateURL(url);
                            }}
                        />
                    );
                })}
        </div>
    );
}
