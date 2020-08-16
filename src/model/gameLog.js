import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GameLogSchema = new Schema({
    id: ObjectId,
    gameUid: {
        type: String,
        required: true,
        trim: true
    },
    value: { 
        type: String,
        required: true,
        trim: true 
    },
    rowIndex: { 
        type: Number,
        required: true
    },
    colIndex: { 
        type: Number,
        required: true 
    }
},
{
    timestamps: true,
    versionKey: false
});

export default Mongoose.model('GameLog', GameLogSchema);