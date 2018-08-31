import express from 'express';
import mongodb from 'mongodb';

let app = express();
let dbUrl='mongodb://localhost:27017/crud';

mongodb.MongoClient.connect(dbUrl,(err,client)=>{
    if(err){
        console.log('数据库连接失败');
        return;

    }
    console.log('数据库连接成功');

    let db=client.db('crud');
    app.get('/api/games',(req,res)=>{
        db.collection('games').find({}).toArray((err,games)=>{
            if(err){
                console.log(err);
                return;

            }

            res.json(games);

        })
    });
    app.use((req,res)=>{
        res.status(404).json({
            errors:{
                global:'请检查地址是否正确'
            }
        })
    })
})

app.listen('8082','localhost',()=>console.log('Server is run localhost:8082'));
