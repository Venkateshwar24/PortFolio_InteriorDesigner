const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_passkey}@portfoliokirthi.um1pd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err)
    {
        console.log('Database Connected!');
    }
    
    else
    {
        console.log(` Error in connecting the database ${err}`); 
    }
    
});

module.exports = mongoose;