import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
// import { createProxyMiddleware } from 'http-proxy-middleware'
function WSDLTree({ wsdlUrl }) {
    const [xmlData, setXmlData] = useState(null);
    const [selectedOperation, setSelectedOperation] = useState(null);
    // createProxyMiddleware({ target: {wsdlUrl}, changeOrigin: true })
    useEffect(() => {
        console.log("🚀 ~ file: WSDLTree.js:11 ~ useEffect ~ wsdlUrl", wsdlUrl)
        axios.get(wsdlUrl, { withCredentials: true, headers: { "Content-Type": 'text/xml; charset=utf-8' } })
            .then(response => {
                parseString(response.data, (err, result) => {
                    setXmlData(result);
                });
            })
            .catch(error => {
                console.log(error)
            })
    }, [wsdlUrl]);

    function handleClick(operation) {
        setSelectedOperation(operation);
    }

    if (!xmlData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>WSDL Tree</h1>
            <ul>
                {xmlData.definitions.binding.map((binding, i) => (
                    <li key={i}>
                        <b>{binding.$.name}</b>
                        <ul>
                            {binding.operation.map((operation, j) => (
                                <li key={j} onClick={() => handleClick(operation)}>
                                    {operation.$.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            {selectedOperation && (
                <div>
                    <h2>Selected Operation: {selectedOperation.$.name}</h2>
                    <p>{selectedOperation.$.name} is associated with the {selectedOperation.$.type}</p>
                </div>
            )}
        </div>
    );
}

export default WSDLTree;
