// this is a javascript file
const express = require("express");
const cors=require("cors");
const mongodb=require("mongoose");
const mongodb2=require("mongodb").MongoClient;
const database = require("./dd");



const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
require("dotenv").config();

// connect mongodb with mongoose



database.mongodb
 .connect(process.env.MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 })
 .then(() => {

   
 })
 .catch((err) => console.log(err));

 const _database=database.mongodb.createConnection(process.env.MONGODB_URI+"/test");
//  console.log(_database);
// database.mongodb
//  .connect(process.env.MONGODB_URI,
//    {

//   }
// cc();
 app.post("/login",function(req,res){
     //var userBody=req.body;
     console.log(req.body)

   var userName=req.body.userName;
    var password=req.body.password;
    // console.log(userName);
    console.log("Nodejs Connected!!");
  // return  res.json(req.body);


  var user;
  
  //  console.log("errr:"+database.mongodb.model("paking"));
    if(database.mongodb.models.users){
     // console.log("done")
     user=database.mongodb.model("users")//database.mongodb.pakingSchema;
    }
    else{
      user=database.mongodb.model("users",database.userSchema);
    }

    //var user=database.mongodb.model("users",database.userSchema);
    
    if(user){
      console.log("Model is created!!");
    
 var f=function(res){

  user.find({'userName':userName,'password':password}).then((rows)=>{
  
    console.log(rows.length)
    if(rows && rows.length==1){
      const row=rows[0];
    

      res(
        {'connected':true,
        
        'user':row
      } 
       );
    }
    else{
      res({
        'connected':false,
        'user':{}

      });
    }
   // res(rows.length>0?true:false);
 
  });
 }

 f(function(call){

  console.log(call);
  return res.json(call);//{'connected':call}
 })
}
  
 
 });
app.get("/",async function(req,res){

  console.log("server is running!!");
  res.json({'message':'ok'});
//  var user=database.mongodb.model("users",database.userSchema);

//  try{
   

//}
});

app.post('/report',async function(req,res){
  
  var parking;
  console.log("search");
  var searchDate=req.body.data;//JSON.parse(req.query.q);
 
  console.log(searchDate);
  if(database.mongodb.models.paking){
    console.log('start report')
     parking=database.mongodb.model("paking");
    

  }
  else{
    parking=database.mongodb.model("paking",database.pakingSchema);
  }

 
 

 var f=(r)=>{


  parking.find({$and:[{'DatePaking':searchDate}]}).then( function(data){
    
    //console.log(data);
    r(data);
    
   });
  
 };
 f( async function(d){

  var ss=await d;
  console.log('ss:',ss);
  return res.json({data:ss});
 // return res.status(200).json({data:ss});
 })

});
app.post('/reportBydate',async function(req,res){
  
  var parking;
  console.log("search");
  var searchDate=req.body.data;//JSON.parse(req.query.q);
 
  console.log(searchDate);
  if(database.mongodb.models.paking){
    console.log('start report')
     parking=database.mongodb.model("paking");
    

  }
  else{
    parking=database.mongodb.model("paking",database.pakingSchema);
  }

 
 

 var f=(r)=>{


  parking.find({$and:[{'DatePaking':searchDate}]}).then( function(data){
    
    //console.log(data);
    r(data);
    
   });
  
 };
 f( async function(d){

  var ss=await d;
  console.log('ss:',ss);
  return res.json({data:ss});
 // return res.status(200).json({data:ss});
 })

});
app.post('/reportbyid',async function(req,res){
  
  var parking;
  console.log("search");
  var searchDate=req.body.data;//JSON.parse(req.query.q);
  var id=req.body.id;
  
  console.log(id+","+searchDate);
  if(database.mongodb.models.paking){
    console.log('start report')
     parking=database.mongodb.model("paking");
    

  }
  else{
    parking=database.mongodb.model("paking",database.pakingSchema);
  }

 
 

 var f=(r)=>{


  parking.find({$and:[{'Id':id}]}).then( function(data){
    
    //console.log(data);
    r(data);
    
   });
  
 };
 f( async function(d){

  var ss=await d;
  console.log('ss:',ss);
  return res.json({data:ss});
 // return res.status(200).json({data:ss});
 })

});
app.post('/bookparking', function(req,res){
  

  // return res.json({xxx:'ok'})

  var parking;
  console.log("search");
  var searchDate=req.body.data;
  var id=req.body.id;
  console.log(searchDate);
  if(database.mongodb.models.paking){
    console.log('start report')
     parking=database.mongodb.model("paking");
    

  }
  else{
    parking=database.mongodb.model("paking",database.pakingSchema);
  }

 console.log("id:"+id+","+'date:'+searchDate)



 var f=(r)=>{


  parking.find({$and:[{'DatePaking':searchDate},{'Id':id}]}).then((data)=>{
    
   
    r(data);
    
   });
  
 };
 f( async function(d){

  var ss=await d;
  console.log('ss:',ss.length);
  return res.json({'message':d.length>0?'ok':'error'})

 
 })

});


app.post("/queue",async function(req,res){

 // var user=database.mongodb.model("users",database.userSchema);

  
  var user;
  
  //  console.log("errr:"+database.mongodb.model("paking"));
    if(database.mongodb.models.queue){
     // console.log("done")
     user=database.mongodb.model("queue")//database.mongodb.pakingSchema;
    }
    else{
      user=database.mongodb.model("queue",database.queue);
    }
  var id=req.body.id;
  var date=req.body.date;    
  var time=req.body.time;
  var park=req.body.park;
  var location=req.body.location;


  var d=new user({

    id:id,
    date:date,
    time:time,
    park:park,
    location:location

});


user.find({
  $and:[

    {'id':id},
    {'date':date},
   {'time':time},
   {'park':park},
   {'location':location}
  ]}).then(async data=>{
    if(data.length>0){
      return res.json({'messsage':'exists'});
    }
    else{
      await d.save();
      return res.json({'messsage':'done'});
    }
 

});

  
  
  
  
 });

 app.post("/randomqueue",async function(req,res){

  // var user=database.mongodb.model("users",database.userSchema);
 
   
   var user;
   
   //  console.log("errr:"+database.mongodb.model("paking"));
     if(database.mongodb.models.queue){
      // console.log("done")
      user=database.mongodb.model("queue")//database.mongodb.pakingSchema;
     }
     else{
       user=database.mongodb.model("queue",database.queue);
     }
   var id=req.body.id;
   var date=req.body.date;    
   var time=req.body.time;
   var park=req.body.park;
   var location=req.body.location;
 
   console.log("search")
   
    user.find({
      $and:[
        {'date':date},
       {'time':time},
       {'park':park},
       {'location':location}
      ]}).then(data=>{
      
        //console.log("len:"+data.length);
        if(data.length>0){//1
        
           var len=data.length;
           var rnd=Math.floor(Math.random()*len);
           var index=rnd;
           console.log("len:"+len+",random:"+data[index]);
          //  data.forEach((e,i)=>{
          //   if(i==index){
          //     console.log("ok");
          //   }
          //  })
          // console.log("data:singile"+data[index])
         return res.json({data:data[index],status:false})
        }

        return res.json({data:null,status:true})

    });
   
  });
 

 app.post("/register",async function(req,res){

  // var user=database.mongodb.model("users",database.userSchema);
 
   
   var user;
   
   //  console.log("errr:"+database.mongodb.model("paking"));
     if(database.mongodb.models.users){
      // console.log("done")
      user=database.mongodb.model("users")//database.mongodb.pakingSchema;
     }
     else{
       user=database.mongodb.model("users",database.userSchema);
     }
   var name=req.body.NameDriver;
   var clientid=req.body.id;    
   var vehiclelicense=req.body.vehicle;
   var phone=req.body.phone;
   var visaCard=req.body.visaCard;
   var username=req.body.userName;
   var password=req.body.password;
 
   var f=(r)=>{
     user.find({'userName':username}).then((data)=>{
           
       r(data.length>0?true:false);
     });
     
   };
 
   f(async function(d){
 
     if(d){
 
       return res.json({'message':'user exists'});
     }
     else{
       var d=new user({
 
         NameDriver:name,
         id:clientid,
         vehicle:vehiclelicense,
         phone:phone,
         visaCard:visaCard,
         userName:username,
         password:password
 
     });
 
     await d.save();
 
     return res.json({'message':'A new user is saved'});
 
     }
   });
   
   
  });

  
 app.post("/customMessage",async function(req,res){

  // var user=database.mongodb.model("users",database.userSchema);
 
   
   var customMessage;
   
   //  console.log("errr:"+database.mongodb.model("paking"));
     if(database.mongodb.models.customMessage){
      // console.log("done")
      customMessage=database.mongodb.model("customMessage")//database.mongodb.pakingSchema;
     }
     else{
      customMessage=database.mongodb.model("customMessage",database.customMessage);
     }
   var value=req.body.message;
 //  console.log(value);
   var date=new Date().toISOString().slice(0,10);//req.body.id; 

 
   var f=(r)=>{
    customMessage.find({'date':date}).then((data)=>{
          
       r(data.length>0?true:false);
     });
     
   };
 
   f(async function(d){
 
     if(d){
   //   console.log("ok");
       return res.json({message:'There is already a message that the parking lot is full'});
     }
     else{
       var d=new customMessage({
 
         message:value,
         date:date,
   
 
     });
 
     await d.save();
 
     return res.json({message:'A message was generated that the parking lot is full'});
 
     }
   });
   
   
  });
 
  app.post("/getMessage",async function(req,res){

    // var user=database.mongodb.model("users",database.userSchema);
   
     
     var customMessage;
     
     //  console.log("errr:"+database.mongodb.model("paking"));
       if(database.mongodb.models.customMessage){
        // console.log("done")
        customMessage=database.mongodb.model("customMessage")//database.mongodb.pakingSchema;
       }
       else{
        customMessage=database.mongodb.model("customMessage",database.customMessage);
       }
     //var value=req.body.message;
   //  console.log(value);
     var date=new Date().toISOString().slice(0,10);//req.body.id; 
     //console.log(date);   
    //  var vehiclelicense=req.body.vehicle;

   
     var f=(r)=>{
      customMessage.find({'date':date}).then((data)=>{
            
         r(data.length>0?true:false);
       });
       
     };
   
     f(async function(d){
   
       if(d){
       // console.log("ok");
         return res.json({message:'There is already a message that the parking lot is full',empty:false});
       }
       return res.json({message:'Parking lot is not full yet',empty:true});
     });
     
     
    });
 
app.post("/newroute",async function(req,res){

  // var user=database.mongodb.model("users",database.userSchema);
 
   
   var route;
   
   //  console.log("errr:"+database.mongodb.model("paking"));
     if(database.mongodb.models.route){
      // console.log("done")
      route=database.mongodb.model("route")//database.mongodb.pakingSchema;
     }
     else{
      route=database.mongodb.model("route",database.route);
     }
   var name=req.body.name;
   var key=req.body.key;    
  //  var latuide=req.body.latuide;
  //  var longitude=req.body.longitude;
   var points=[];
   points=req.body.points;
  // console.log(points);
     

   

   var d=new route({
 
    name:name,
    key:key,
    points:points
    // latuide:vehiclelicense,
    // longitude:phone,
   

});

await d.save();
return res.json({'message':'A new route has been created'});
   
  });

app.post("/paking",async function(req,res){

  //var paking=database.mongodb.model("paking",database.pakingSchema);

  var paking;
  var connector;
  
  //  console.log("errr:"+database.mongodb.model("paking"));
    if(database.mongodb.models.paking){
     // console.log("done")
      paking=database.mongodb.model("paking")//database.mongodb.pakingSchema;
    }
    else{
      paking=database.mongodb.model("paking",database.pakingSchema);
    }

    if(database.mongodb.models.reservations){
      // console.log("done")
      connector=database.mongodb.model("reservations")//database.mongodb.pakingSchema;
     }
     else{
      connector=database.mongodb.model("reservations",database.reservations);
     }

  var name=req.body.name;
  var id=req.body.id;    
  var vehicle=req.body.vehicle;
  var phone=req.body.phone;
  var pakingnumber=req.body.paking;
  var date= req.body.date;
  var time=req.body.TimePaking;//new Date().toLocaleTimeString();
  var timeEnd=req.body.TimePakingEnd;
  var latuide=req.body.latuide;
  var longlatuide=req.body.longlatuide;
  var KeyPark=req.body.KeyPark;
  var isLeave=false;
  var price=req.body.Price;
  var ParkingType=req.body.ParkingType;
  var days=req.body.days;
  var finePayment=req.body.finePayment;
  var departure=req.body.departure;
  // console.log(date+"\n"+time);
 
  var f=(r)=>{

    paking.find({$and:[{'Id':id},{'ParkingType':'שיריון מחזורי'}]}).then(data=>{

      data.forEach(e=>{
        var da=e.days;

        if(da.length>0){
          da.forEach(ex=>{
  
            if(ex.date==date && ex.isLeave==false && ex.Id==id  ){
                 //  b=true;
              //return true;
              return res.json({'done':false, 'message':'there is a reserved place'});
            }
          });
  
        }
      })

    });

  
    paking.find({$and:[{'KeyPark':KeyPark},{'Paking':pakingnumber},{'ParkingType':'שיריון מחזורי'}]}).then((data)=>{
      var b=false;
 
      if(data){
     data.forEach(e=>{
       
       var da=e.days;
       b=false;
       if(da){
       if(da.length>0){
         da.forEach(ex=>{
 
           if(ex.date==date && ex.isLeave==false  ){
                  b=true;
             return true;
           }
         });
 
       }
       if(b)return true;
     }
     //  if(e.date)
 
     });
   }
     if(b){
       r(true);
       return;
     }
     if(b==false){

      paking.find({$and:[{'Id':id},{'DatePaking':date},{'isLeave':false}]}).then((data)=>{
           
        if(data.length>0){
          r(data.length>0?true:false);
        }
        else 
        {
          paking.find({$and:[{'KeyPark':KeyPark},{'Paking':pakingnumber},{'DatePaking':date},{'isLeave':false}]}).then((data)=>{
           
            r(data.length>0?true:false);
          });
        }
      //  
      
      
      });

       
       
     }
    // r(data.length>0?true:false);



});

  }

  f(async function(d){

    if(d){

      return res.json({'done':false, 'message':'there is a reserved place'});
    }
    else{
      var d=new paking({

        Name:name,
        Id:id,
        Vehicle:vehicle,
        Phone:phone,
        Paking:pakingnumber,
        DatePaking:date,
        TimePaking:time,
        TimePakingEnd:timeEnd,
        KeyPark:KeyPark,
        LocationPointLatuide:latuide,
        LocationPointLongLatuide:longlatuide,
        isLeave:isLeave,
        Price:price,
        finePayment:finePayment,
        // departure:departure,
        ParkingType:ParkingType,       
        days:days


    });

    var dd=new connector({
      parking_lot_name:pakingnumber,
      parking_spot_number:KeyPark,
      car_license_number:vehicle,
      entrance_actual_date:date,
      entrance_actual_time:time,
      entrance_actual_end_time:timeEnd,
      departure_actual_time:'---'

    })
    await dd.save();
    await d.save();

    return res.json({'done':true, 'message':'a parking space is reserved'});

    }
  });
  
  
 });


 app.post("/searchpaking",async function(req,res){

  //var paking=database.mongodb.model("paking",database.pakingSchema);

  var paking;

  
  //  console.log("errr:"+database.mongodb.model("paking"));
    if(database.mongodb.models.paking){
     // console.log("done")
      paking=database.mongodb.model("paking")//database.mongodb.pakingSchema;
    }
    else{
      paking=database.mongodb.model("paking",database.pakingSchema);
    }

   
  var name=req.body.name;
  var id=req.body.id;    
  var vehicle=req.body.vehicle;
  var phone=req.body.phone;
  var pakingnumber=req.body.paking;
  var date= req.body.date;
  var time=req.body.TimePaking;//new Date().toLocaleTimeString();
  var timeEnd=req.body.TimePakingEnd;
  var latuide=req.body.latuide;
  var longlatuide=req.body.longlatuide;
  var KeyPark=req.body.KeyPark;
  var isLeave=false;
  var price=req.body.Price;
  var ParkingType=req.body.ParkingType;
  var days=req.body.days;
  var finePayment=req.body.finePayment;
  var departure=req.body.departure;
  // console.log(date+"\n"+time);
 

  

  paking.find({$and:[{'DatePaking':date},{'TimePaking':time},{'KeyPark':KeyPark},{'isLeave':false},{'ParkingType':'שיריון חד פעמי'}]}).then(data=>{

 
    return res.json({'data':data.length>0?true:false});
  });
  
  
 });

 
 app.post("/sendMessage",async function(req,res){

  //var paking=database.mongodb.model("paking",database.pakingSchema);

  var mesg;
  
  //  console.log("errr:"+database.mongodb.model("paking"));
    if(database.mongodb.models.messagedata){
     // console.log("done")
     mesg=database.mongodb.model("messagedata")//database.mongodb.pakingSchema;
    }
    else{
      mesg=database.mongodb.model("messagedata",database.messageSchema);
    }

  var id=req.body.Id;
  var msg=req.body.Message;    
  var d=new Date().toISOString().slice(0,10);


  var d=new mesg({

    Id:id,
    Message:msg,
    Date:d


});

await d.save();

return res.json({'done':true, 'message':''});
 

  
  
 });
 app.post("/getPacking",async function(req,res){
 
  var paking;
  
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.paking){
   // console.log("done")
    paking=database.mongodb.model("paking")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("paking",database.pakingSchema);
  }
 
  var id=req.body.id;    

  var date= new Date().toISOString().slice(0,10);


 try{

  var f=(r)=>{
    paking.find({$and:[{'Id':id},{'DatePaking':date}]}).then((data)=>{
          
      r(data.length>0?true:false,data)
    });
    
  };

  f(async function(b,d){

    if(b){

     // console.log(d[0].LocationPointLatuide);
      return res.json({'done':true, 'message':'successfully','data':d[0]});
    }

    return res.json({'done':false,'message':'no data'});
  
  });
  
 }
 catch(err){

  console.log("error");
 }
  
 });

 app.post("/getRoutePacking",async function(req,res){
 
  var paking;
  var route;
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.paking){
   // console.log("done")
    paking=database.mongodb.model("paking")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("paking",database.pakingSchema);
  }
  //=mongodb.models.pakingSchema||database.mongodb.model("paking",database.pakingSchema);
  //var name=req.body.name;
  var id=req.body.id;    
  //var vehicle=req.body.vehicle;
 // var phone=req.body.phone;
 // var pakingnumber=req.body.paking;
  var date= new Date().toISOString().slice(0,10);
  //var time=new Date().toLocaleTimeString();
 // var latuide=req.body.latuide;
 try{

  var f=(r)=>{
    paking.find({$and:[{'Id':id},{'DatePaking':date},{'isLeave':false}]}).then((data)=>{
       //   console.log(data);
      r(data.length>0?true:false,data)
    });
    
  };

  f(async function(b,d){

    if(b==false){

      return res.json({message:'no data',data:[]});
     // console.log(d[0].LocationPointLatuide);
    //  return res.json({'done':true, 'message':'successfully','data':d[0]});
    }
    
    var key=d[0].KeyPark
    var name=d[0].Paking;
    // console.log("length:"+d.length)
 //   console.log(d);
    // console.log("array:"+d);
    if(database.mongodb.models.route){
      // console.log("done")
       route=database.mongodb.model("route")//database.mongodb.pakingSchema;
     }
     else{
       route=database.mongodb.model("route",database.route);
     }
       route.find({$and:[{'name':name},{'key':key}]}).then(data=>{

      if(data){

      //  console.log("array:"+data[0].points)
        return res.json({message:'apply data',data:data[0].points});
      }
      return  res.json({message:'no data',data:[]});
    });

   // return res.json({'done':false,'message':'no data'});
    // else{
    //   var d=new paking({

    // });

    // await d.save();

    // return res.json({'done':true, 'message':'a parking space is reserved'});

    // }
  });
  
 }
 catch(err){

  console.log("error");
 }
  
 });

 
 app.post("/findRoutePacking",async function(req,res){
 
  var paking;
  var route;
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.paking){
   // console.log("done")
    paking=database.mongodb.model("paking")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("paking",database.pakingSchema);
  }
  //=mongodb.models.pakingSchema||database.mongodb.model("paking",database.pakingSchema);
  //var name=req.body.name;
  var id=req.body.id;    
  //var vehicle=req.body.vehicle;
 // var phone=req.body.phone;
 // var pakingnumber=req.body.paking;
  var date= new Date().toISOString().slice(0,10);
  //var time=new Date().toLocaleTimeString();
 // var latuide=req.body.latuide;

 try{

  var f=(r)=>{
    paking.find({$and:[{'Id':id},{'DatePaking':date},{'isLeave':false}]}).then((data)=>{
       //   console.log(data);
      // console.log(data);
       return res.json(data.length==0?{message:'no-data'}:{message:'has-data'});
     // r(data.length>0?true:false,data)
    });
    
  };

  f(async function(b,d){


  });
  
 }
 catch(err){

  console.log("error");
 }
  
 });

 app.post("/getIndex",async function(req,res){
 
  var paking;
  
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.route){
   // console.log("done")
    paking=database.mongodb.model("route")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("route",database.route);
  }
  //=mongodb.models.pakingSchema||database.mongodb.model("paking",database.pakingSchema);
  //var name=req.body.name;
  var name=req.body.data;   
 // console.log(name); 
  //var vehicle=req.body.vehicle;
 // var phone=req.body.phone;


    
//   };

//   f(async function(b,d){


//   console.log("error");
//  }
paking.find({'name':name}).then(async (data)=>{
       
  var da=await data;
  //console.log(data.length);
     return res.json({d:da});
});
 });

 app.post("/deleteRoute",async function(req,res){
 
  var paking;
  
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.route){
   // console.log("done")
    paking=database.mongodb.model("route")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("route",database.route);
  }
  //=mongodb.models.pakingSchema||database.mongodb.model("paking",database.pakingSchema);
  //var name=req.body.name;
  var key=req.body.data; 
  var name=req.body.name; 
  //console.log(name+","+key); 
 




//  }

paking.deleteOne({$and:[{'name':name},{'key':key}]}).then(async (data)=>{
     //  console.log(data);
  var da=await data;
     return res.json({d:da});
});
 });

 app.post("/updateRoute",async function(req,res){
 
  var paking;
  
//  console.log("errr:"+database.mongodb.model("paking"));
  if(database.mongodb.models.route){
   // console.log("done")
    paking=database.mongodb.model("route")//database.mongodb.pakingSchema;
  }
  else{
    paking=database.mongodb.model("route",database.route);
  }
  //=mongodb.models.pakingSchema||database.mongodb.model("paking",database.pakingSchema);
  //var name=req.body.name;
  var key=req.body.data; 
  var name=req.body.name; 
  var points=req.body.route;

  // console.log('key:'+key);
  // console.log('name:'+name);
  // console.log('points:'+points.length);
  points.forEach(element => {
    console.log("Latitude:"+element.latuide+",Longitude:"+element.longitude+"\n");
  });
  //console.log(name+","+key); 
 

//     // });

//     // await d.save();

//     // return res.json({'done':true, 'message':'a parking space is reserved'});

//     // }
//   });
  
//  }
//  catch(err){

//   console.log("error");
//  }

//return res.json({message:'ok'});
paking.updateOne({$and:[{'name':name},{'key':key}]},{$set:{'points':points}},{}).then(data=>{

//  console.log(data);
  res.json({message:'done',array:points});
});
 
 });

//  app.post("/checkRouteindex",async function(req,res){
 
//   var paking;
// //  catch(err){

// //   console.log("error");
// //  }
// paking.find({'name':name}).then(async (data)=>{
       
//   var da=await data;
//      return res.json({d:da});
// });
//  });
// listen on port 3000
app.listen(3000, () => {
 console.log("Server is listening on port 3000");
});