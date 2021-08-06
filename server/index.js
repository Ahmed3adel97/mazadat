const app = require('./src/app')
require('dotenv').config()

app.listen(process.env.PORT, ()=>{
    console.log(`conntenct to ${process.env.PORT}`);

})