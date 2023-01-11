const app=require('./app');
const {PORT}=process.env;
const port = PORT || 3000;
app.listen(port, function(req, res){
  console.log("Experss server is listening the port %d on %s mode", this.address().port, app.settings.env);
});