 
const app = require('./src/app');
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.json({ message: 'JB server is running 🚀' });
});

app.listen(PORT, () => {
    console.log(`\n\t Server running on http://localhost:${PORT} 🔥 \n`);
});
