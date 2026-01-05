import express from 'express';
import ogs from 'open-graph-scraper';

const router = express.Router();

router.get('/', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL requerida' });
    }

    try {
        const { result } = await ogs({ url });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo obtener OG' });
    }
});

export default router;
