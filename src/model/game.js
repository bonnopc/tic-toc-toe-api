import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const GameSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // row0: [{
    //     type: String,
    //     default: null
    // }],
    // row1: [{
    //     type: String,
    //     default: null
    // }],
    // row2: [{
    //     type: String,
    //     default: null
    // }],
    scores: [{
        rowIndex: {
            type: Number,
            required: true
        },
        colIndex: {
            type: Number,
            required: true
        },
        value: {
            type: String,
            required: true,
            trim: true
        }
    }],
    winner: { 
        type: String,
        default: null 
    }
},
{
    timestamps: true,
    versionKey: false
});

export default Mongoose.model('Game', GameSchema);