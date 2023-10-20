const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Chào mừng bạn đến với Dịch vụ Thiết kế Website LPTech.Asia!'))

app.listen(port, () => console.log(`Ứng dụng đang chạy trên Cổng (Port) ${port}!`))