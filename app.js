const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("OK Response!");
});

app.get('/status', (req, res) => {
    const status = {
        "Status": "Running",
    };

    res.status(200).json(status);
});