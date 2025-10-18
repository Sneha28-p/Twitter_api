const express=require("express");
const app=express();
const port=8080;
const path=require("path");

const { v4:uuidv4 }=require('uuid');//require od uuid

const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let tweets=[
    {
        // id:"1a",
        id:uuidv4(),
        username:"apnacollege",
        content:"I love to code"
    },
    {
        id:uuidv4(),
        username:"snehapatted",
        content:"i need to finish within october with full stack"
    },
    {
       id:uuidv4(),
        username:"sirihalegouda",
        content:"she likes to do voluntering"
    },
];



app.get("/tweets",(req,res)=>{
    //res.send("server is working");
    res.render("index.ejs",{tweets});
});

app.get("/tweets/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/tweets",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    // res.send("post is working");
    res.redirect("/tweets");
});

app.get("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let tweet=tweets.find((p)=>id===p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs",{tweet});
});

app.patch("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    let  newContent=req.body.content;
    let tweet=tweets.find((p)=>id===p.id);
    // console.log(newContent);
    // console.log(id);
    tweet.content=newContent;
    console.log(tweet);
    res.redirect("/tweets");
})

app.get("/tweets/:id/edit",(req,res)=>{
    let {id}=req.params;
    let tweet=tweets.find((p)=>id===p.id);
    res.render("edit.ejs",{tweet});
})

app.delete("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    tweets=tweets.filter((p)=>id !== p.id);
    //res.send("Delete success");
    res.redirect("/tweets");
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
});