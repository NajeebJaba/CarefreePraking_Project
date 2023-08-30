// const { Double, Int32 } = require("mongodb");
const mongodb=require("mongoose");
const mongodbclient=require("mongodb");
const userSchema=new mongodb.Schema({ 


    NameDriver:{type:String},
    id:{type:String},
    vehicle:{type:String},
    phone:{type:String},
    visaCard:{type:String},
    userName:{type:String},
    password:{type:String}



});

const queue=({
    id:{type:String},
    date:{type:Date},
    time:{type:String},
    park:{type:String},
    location:{type:String}
})
const pakingSchema=({
    Name:{type:String},
    Id:{type:String},
    Vehicle:{type:String},
    Phone:{type:String},
    Paking:{type:String},
    DatePaking:{type:Date},
    TimePaking:{type:String},
    TimePakingEnd:{type:String},
    LocationPointLatuide:{type:String},
    LocationPointLongLatuide:{type:String},
    KeyPark:{type:String},
    Price:{type:String},
    finePayment:{type:String},
    isLeave:{type:Boolean},
    ParkingType:{type:String},
    days:{type:Array}


});


const messageSchema=({
   
    Id:{type:String},
    Date:{type:Date},
    Message:{type:String}



});
const route=({
    name:{type:String},
    key:{type:String},
    latuide:{type:String},
    longitude:{type:String},
    points:{type:Array}
})

const customMessage={
 message:{type:String},
 date:{type:Date}
};

const reservations={

    parking_lot_name:{type:String},
    parking_spot_number:{type:String},
    car_license_number:{type:String},
    entrance_actual_date:{type:String},
    entrance_actual_time:{type:String},
    entrance_actual_end_time:{type:String},
       מ:{type:String}
 
};

//var USERS=mongodb.model("USERS",userSchema);
module.exports={
    mongodb,
    mongodbclient,
    userSchema,
    pakingSchema,
    messageSchema,
    route,
    customMessage,
    reservations,
    queue
};