const dbConnect = require('./mongodb');

const update = async () => {
    let db = await dbConnect();
    let result = await db.updateMany(
        {brand:"oppo"},
        {$set: {brand:"oppo brand"}}
    );
    console.log(result);
}

update();