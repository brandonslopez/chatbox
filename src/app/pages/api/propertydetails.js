export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { prompt } = req.body;

        // Simulate fetching data from an external API or database
        const ollama_response = `Response to: ${prompt}`;

        res.status(200).json({ ollama_response });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}