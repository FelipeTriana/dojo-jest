const app = require("./app")
var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`running in port ${port}`)
})