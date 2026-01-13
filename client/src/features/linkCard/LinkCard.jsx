import "./linkCard.css";
import { useLinkCard, handleDelete } from "./useLinkCard";

export default function LinkCard() {

    const links = useLinkCard()

    return (
        <div className="link_card">
            {links && links.length > 0 ? links.map((link) => (
                <div key={link.id} className="og_data">
                    <h2>{link.title}</h2>
                    <p>{link.description}</p>
                    <img src={link.ogImageUrl} alt={link.title} />
                    <a href={link.siteUrl} target="_blank" rel="noopener noreferrer">{link.siteUrl}</a>
                    <button onClick={() => handleDelete(link.id)}>Delete</button>
                </div>
            )) : <p className="empty_state">No links available.</p>}
        </div>
    )
}