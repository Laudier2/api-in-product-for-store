const mongoose = require('mongoose')

//Config Mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://kali:123grasy@cluster0.2p344.mongodb.net/base-cloud?retryWrites=true&w=majority")
//mongoose.connect("mongodb://localhost/api1")

.then(() => {
  console.log('A conecção com o mango foi bem sucedida OK!')
})
.catch((err) => {
  console.log('Houve um erro ao se conectar com o mongo '+err)
})