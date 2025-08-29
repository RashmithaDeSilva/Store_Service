export const ITEM_CONFIG = {
    BASE_URL: "http://192.168.1.6:5000",
    HEADERS: {
        accept: 'application/json',
    }
}

export const fatchItems = async ({ query }: { query: string }) => {
    const endpoint = query ? 
        `/items/filter?${ encodeURIComponent(query) }` :
        '/items';

    const response = await fetch(`${ ITEM_CONFIG.BASE_URL }${ endpoint }`, {
        method: 'GET',
        headers: ITEM_CONFIG.HEADERS,
    });

    if(!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fatch items', response.statusText);
    }

    const data = await response.json();
    return data;
}
