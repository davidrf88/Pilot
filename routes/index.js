module.exports = app =>
{
app.get('/',(req,res) =>{

    res.json({
        respones:'API its working'
    })
});

app.get('/test',(req,res) =>{

    res.json({
        respones: "yes its working",
        testData:[1,2,3,4]
    })
});


};