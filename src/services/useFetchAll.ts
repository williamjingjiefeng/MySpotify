import { useState, useRef, useEffect, MutableRefObject } from "react";

export default function useFetchAll(urls: string[]) {
    const prevUrls: MutableRefObject<string[]> = useRef([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Only run if the array of URLs passed in changes
        if (areEqual(prevUrls.current, urls)) {
            setLoading(false);
            return;
        }
        prevUrls.current = urls;

        const promises = urls.map((url) =>
            fetch(process.env.API_URL + url).then((response) => {
                if (response.ok) return response.json();
                throw response;
            })
        );

        Promise.all(promises)
            .then((json: any) => setData(json))
            .catch((e) => {
                console.error(e);
                setError(e);
            })
            .finally(() => setLoading(false));
    }, [urls]);

    return { data, loading, error };
}

function areEqual(array1: string[], array2: string[]) {
    return (
        array1.length === array2.length &&
        array1.every((value, index) => value === array2[index])
    );
}
