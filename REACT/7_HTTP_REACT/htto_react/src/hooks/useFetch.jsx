import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //5 refaturando
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null)
    //6 loading
    const [loading, setLoading] = useState(false)
    //7 erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            });
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // 7 tratando erros
            try {
                //6 loading
                setLoading(true)
                const res = await fetch(url)
                const json = await res.json()
                

                setData(json);
            } catch(error) {
                console.log(error);
                setError("Houve algum erro ao carregar os dados, entre em contato com o suporte!")
            }
            setLoading(false )
        };
        fetchData()
    },[url, callFetch]);

    //5 refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {
                setLoading(true)
                let fetchOption = [url, config];
                const res = await fetch(...fetchOption);
                json = await res.json();
                setLoading(false)
            };

            setCallFetch(json)
        }
        httpRequest()
    }, [config, method, url]);
    
    return { data, httpConfig, loading, error };
};