import mongoose, {Mongoose} from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    // This ensures the global object has a mongoose property
    var mongoose: MongooseConnection | undefined;
}

let cached: MongooseConnection = global.mongoose || { conn: null, promise: null };
if(!cached) {
    cached = (global as any).mongoose =  {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;
    
    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');
    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL, {dbName:'imageAi', bufferCommands: false}
    )
    cached.conn = await cached.promise;
    return cached.conn;
}