import mongojs from 'mongojs';


var db = mongojs('mongodb://SRUser:password1@13.59.12.41:27017/StreamRewards', ['Users']);



module.exports = app =>
{
app.get('/',(req,res) =>{

    res.json({
        respones:'API its working'
    })
});

app.get('/users',(req,res) =>{

    db.users.find((err,users) => {

            res.json({
                myUsers: users
            })

    })


});


app.get('/usersadd',(req,res) =>{

db.users.insert({name:'myname'},(err,obj) => {

res.json({

response:obj,
err:err

})

});


});



};
