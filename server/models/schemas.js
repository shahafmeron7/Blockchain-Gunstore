const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//our schema for a weapon in our database.
const weaponsSchema = new Schema ({
    account_metamask_address: {type:String,required:true},
     timestamp:{type:Date,required:true},
     weapon_name:{type:String,required:true},
     weapon_type:{type:String,required:true},
     // weapon training is an object contains these fields:
     // shooting_range:
     // basic_training:
     // advanced_training:
     // idle_time:
     weapon_training:{type:Schema.Types.Mixed, required:true},
     weapon_price:{type:Number,required:true},
     old_price:{type:Number,default:0},
     weapon_url:{type:String,required:true},
     weapon_for_sale:{type:Boolean,default:false},
     last_modified:{type:Date,required:true},
     count_training:{type:Number,default:0}

}, { versionKey: false })

const Weapons = mongoose.model('weapons',weaponsSchema,'weapons')

module.exports = Weapons;

