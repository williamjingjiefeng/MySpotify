import { useState, useRef, useEffect } from "react";

const baseUrl = process.env.API_URL;

export default function useFetchGeneral(url: string) {
    const isMounted = useRef(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        isMounted.current = true;
        async function init() {
            try {
                const response = await fetch(baseUrl + url);
                if (response.ok) {
                    const json = await response.json();
                    if (isMounted.current) setData(json);
                } else {
                    throw response;
                }
            } catch (e) {
                if (isMounted.current) setError(e);
            } finally {
                if (isMounted.current) setLoading(false);
            }
        }
        init();

        return () => {
            isMounted.current = false;
        };
    }, [url]);

    return { data, error, loading };
}

interface IMusicEffect {
    children: (data: any, loading: boolean, error: any) => React.ReactElement | null;
    url: string;
}

export function Fetch({ url, children }: IMusicEffect) {
    const { data, loading, error } = useFetchGeneral(url);
    return children(data, loading, error);
}
