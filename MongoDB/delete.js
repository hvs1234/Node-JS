const dbConnect = require('./mongodb');

const deletedata = async () => {
    let db = await dbConnect();
    let result = await db.deleteOne(
        {
            name:"realme C3",
        }
    );
    console.log(result);
}

deletedata();