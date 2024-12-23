import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json())


app.get('/products/:id', (req, res) => {
    const product = {
        id: req.params.id,
        title: `Product ${req.params.id}`,
        description: `Product ${req.params.id} description (This message is added after the build process)`
    }
    res.json(product)
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})