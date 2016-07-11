import express from 'express';

const app = express();

app.use('/', express.static('public'));
app.get('/api/', (req, res, next) => {
	res.json({ message: 'welcome!' })
})
app.listen(process.env.PORT || 3000);

console.log('Starting server ============= ')
console.log(`listening on ${process.env.PORT || 3000} ...`)