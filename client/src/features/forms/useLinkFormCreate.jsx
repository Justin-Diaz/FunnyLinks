import { addLink } from "../../lib/db";

export default async function useLinkFormCreate(url) {
    try {
        await addLink(url);
        console.log("Link added successfully");
    } catch (error) {
        console.error("Error adding link:", error);
    }
}