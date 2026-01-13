import "./linkCard.css";
import useLinkCard from "./useLinkCard";
import { useState } from "react";

export default function LinkCard() {

    const { links, handleCreate, handleUpdate, handleDelete } = useLinkCard()

    const [formData, setFormData] = useState({
        siteUrl: "",
        title: "",
        description: ""
    });

    const [editingLink, setEditingLink] = useState(null);

    const startEdit = (link) => {
        setEditingLink(link);
        setFormData({
            title: link.title,
            description: link.description
        });
    };


    const submitForm = async (e) => {
        e.preventDefault();

        if (editingLink) {
            await handleUpdate(editingLink.id, {
                title: formData.title,
                description: formData.description
            });
        } else {
            await handleCreate(formData.siteUrl);
        }

        setEditingLink(null);
        setFormData({ siteUrl: "", title: "", description: "" });
    };

    return (
        <section className="links">

            <form onSubmit={submitForm}>
                {!editingLink && (
                    <input
                        required
                        placeholder="https://example.com"
                        value={formData.siteUrl}
                        onChange={e => setFormData({ ...formData, siteUrl: e.target.value })}
                    />
                )}

                {editingLink && (
                    <>
                        <input
                            placeholder="Titulo"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                        />

                        <textarea
                            placeholder="Descripción"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </>
                )}

                <button type="submit">
                    {editingLink ? "Update" : "Add"}
                </button>

                {editingLink && (
                    <button type="button" onClick={() => setEditingLink(null)}>
                        Cancel
                    </button>
                )}
            </form>

            <div className="links_container">
                {links && links.length > 0 ? links.map(link => (
                    <div key={link.id} className="link_card">
                        <div className="card_data">
                            <h2>{link.title}</h2>
                            <p>{link.description}</p>
                            <img src={link.ogImageUrl} alt={link.title} />
                            <a href={link.siteUrl} target="_blank">{link.siteUrl}</a>
                        </div>

                        <div className="card_actions">
                            <button onClick={() => startEdit(link)}>Actualizar</button>
                            <button onClick={() => handleDelete(link.id)}>Eliminar</button>
                        </div>
                    </div>
                )) : (
                    <p className="empty_state">No links available.</p>
                )}
            </div>

        </section>
    )
}