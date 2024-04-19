const express = require('express')
const cors = require('cors')
const app = express();
const port = 1600;
app.use(cors())

app.get("/gofind", (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    const ans = x+y;
    res.send(ans.toString());
})

app.listen(port)