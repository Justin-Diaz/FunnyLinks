import { useState } from "react"
import useLinkFormCreate from "./useLinkFormCreate"

export default function LinkFormCreate() {
    const [url, setUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        useLinkFormCreate(url)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="https://youtube.com" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button type="submit">Guardar</button>
        </form>
    )
}