import "./linkCard.css";
import useLinkCard from "./useLinkCard";
import { useEffect, useState } from "react";

export default function LinkCard() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function fetchLinks() {
            const data = await useLinkCard();
            setLinks(data);
            console.log(data);
        }
        fetchLinks();
    }, [])


    return (
        <div className="link_card">
            {links && links.length > 0 ? links.map((link) => (
                <div key={link.id} className="og_data">
                    <h2>{link.title}</h2>
                    <p>{link.description}</p>
                    <img src={link.ogImageUrl} alt={link.title} />
                    <a href={link.siteUrl} target="_blank" rel="noopener noreferrer">{link.siteUrl}</a>
                </div>
            )) : <p>No links available.</p>}
        </div>
    )
}