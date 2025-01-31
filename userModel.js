const {getDb} = require("./database")

const CreateAuth = async (email, uid, createdAt) => {
    try {
        const db = getDb();
        const collection = db.collection('UISER')
        await  collection.createIndex ({email:1}, {unique:true})
        await  collection.createIndex ({uid:1}, {unique:true})

        const result = await collection.insertOne({email,uid,createdAt})
        return result;
    } catch (error) {
        throw error;
    }
}

const FindEmail = async (email) => {
    try {
        const db = getDb();
        const collection = db.collection('UISER')
        const result =  await collection.findOne ({email})
        return result;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    CreateAuth, FindEmail
}