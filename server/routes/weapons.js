const router = require('express').Router()
//our weapon schema
let Weapon = require('../models/schemas')


//route to get all weapons route
router.route('/').get((req, res) => {
    Weapon.find()
        .then(weapons => { res.json(weapons) })
        .catch(err => console.log(err))
})
//route to get for sale weapons with 'weapon_for_sale:true' query.
router.route('/getWeaponsForSale').get((req, res) => {
    Weapon.find({weapon_for_sale:true})
        .then(weapons => { res.json(weapons) })
        .catch(err => console.log(err))
})
//route to get the last weapon added to our database.
//when buying new weapon we first need to create the weapon in order to get his MongoDB Object ID so we can add the weapon to the blockchain.
router.route('/getLastWeapon').get((req, res) => {
    Weapon.find().sort([['_id',-1]]).limit(1)
        .then(weapon => { res.json(weapon) })
        .catch(err => console.log(err))
})

//route to get all account weapons inventory from his metamask address.
router.route('/byMetamask').post((req, res) => {
    Weapon.find({ account_metamask_address: req.body.account_metamask_address })
        .then(weapons => { res.json(weapons) })
        .catch(err => console.log(err))
})

//route to add new weapon to the database when a user buying from the store.
router.route('/add').post(async (req, res) => {
    const account_metamask_address = req.body.account_metamask_address
    const weapon_name = req.body.weapon_name
    const weapon_type = req.body.weapon_type
    const weapon_price = req.body.weapon_price
    const old_price = req.body.weapon_price
    const weapon_url = req.body.weapon_url
    //the training will be set to zero because this is a new weapon.
    const weapon_training = { shooting_range: 0, basic_training: 0, advanced_training: 0, idle_time:0 }
    const timestamp = req.body.timestamp
    const last_modified = req.body.timestamp

    const newWeapon = new Weapon({ old_price,weapon_name, weapon_price, weapon_type, weapon_training, weapon_url, account_metamask_address,timestamp,last_modified })
    newWeapon
        .save().then(() => { res.json(`added ${JSON.stringify(newWeapon)}`) })
        .catch((err) => console.log(err))
})

//route to update the weapon account address. When a user selling his weapon and other user buying the weapon from that user
//we need to update the account address and change the 'weapon_for_sale' field to 'false'.
router.route('/updateAddress').post(async (req, res) => {
    const account_metamask_address = req.body.account_metamask_address

    await Weapon.findByIdAndUpdate({ _id: req.body._id },
        { account_metamask_address: account_metamask_address,weapon_for_sale:false })
    .then(() => { res.json("updated address") })
})

//route to update the weapon price. when a user is training his weapon the price needs to be updated in our database according to the training type.
//we will update the price, training and last modified time so we can know when the user used that weapon in order to calculate the idle time burning coins.
router.route('/updatePrice').post(async (req, res) => {
    const weapon_price = req.body.weapon_price
    const weapon_training = req.body.weapon_training
    const last_modified = req.body.last_modified
    const count_training = req.body.count_training
    const old_price = req.body.old_price

    await Weapon.findByIdAndUpdate({ _id: req.body._id },
        { weapon_price: weapon_price, weapon_training:weapon_training, last_modified:last_modified, count_training:count_training, old_price:old_price })
        .then(() => { res.json("updated price") })
})

//route to update the price after idle time (in hours) calculated
router.route('/idlePrice').post(async (req, res) => {
    const weapon_training = req.body.weapon_training
    const weapon_price = Number(req.body.weapon_price)
    const count_training = req.body.count_training
    const old_price = req.body.old_price

    await Weapon.findByIdAndUpdate({ _id: req.body._id },
        { weapon_training:weapon_training, weapon_price: weapon_price, count_training:count_training, old_price:old_price })
    .then(() => res.json("updated idle"))
})

//route to update the price after idle time (in hours) calculated
router.route('/updateCount').post(async (req, res) => {
    const weapon_training = req.body.weapon_training
    const last_modified = req.body.last_modified
    const count_training = req.body.count_training
    console.log(req.body);
    await Weapon.findByIdAndUpdate({ _id: req.body._id },
        { weapon_training:weapon_training, last_modified:last_modified, count_training:count_training })
    .then(() => res.json("updated idle"))
})

//route to when a user wants to sell his weapon or remove from sale his weapon, we need to update the field 'weapon_for_sale' to 'true' or 'false'
router.route('/updateForSale').post(async (req, res) => {
    const weapon_for_sale = req.body.weapon_for_sale

    await Weapon.findByIdAndUpdate({ _id: req.body._id },
        { weapon_for_sale: weapon_for_sale})
    .then(() => res.json("updated for sale"))
})
//route to delete weapon from our database, in case the user didnt trained his weapon for a while. the weapon price will be dropped to zero and then the user will lost his weapon.
// Or, we will need delete the weapon from database incase of an error in the transaction.
router.route('/delete').post(async (req, res) => {
    await Weapon.deleteOne({ _id: req.body._id})
    res.json("Deleted")
})

module.exports = router