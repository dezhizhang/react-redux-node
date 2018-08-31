import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';


let app = express();
let dbUrl='mongodb://localhost:27017/crud';

//使用中间件
app.use(bodyParser.json())

const validata = (data) =>{
    let errors={};
    if(data.title==='') errors.title="Can't is empty"
    if(data.title==='') errors.cover="Can't is empty" 
    const isValid = Object.keys(errors).length===0;

    return { errors,isValid }

}

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
    app.post('/api/games',(req,res)=>{
       let  { errors, isValid }=validata(req.body);
       if(isValid){
        let { title, cover }=req.body;
        db.collection('games').insert({title,cover},(err,result)=>{
            if(err){
                console.log('数据添加失败'+err);
                return;

            }
            console.log('数据添加成功');
            
        })

        }else{
           res.status(404).json({errors});

        }
           
            
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
