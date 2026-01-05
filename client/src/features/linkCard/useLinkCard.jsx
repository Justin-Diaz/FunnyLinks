import { getAllLinks } from "../../lib/db";

export default async function useLinkCard() {
    try {
        const links = await getAllLinks();
        return links;
    } catch (error) {
        console.error("Error fetching links:", error);
        return [];
    }
}