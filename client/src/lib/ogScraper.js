export default async function ogScraper(url) {

    const fetchOgData = async () => {
        try {
            const response = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error('Error al obtener los datos OG');
            }

            const data = await response.json();
            return data
        } catch (err) {
            console.error('Error al obtener los datos OG:', err);
            throw err;
        }
    }
    return fetchOgData();
};