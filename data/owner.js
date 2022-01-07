const schema = mongoose.Schema({
    ownerCode: String,
    worldWhitelist: { type: Array, default: [] }
});
module.exports = mongoose.model("Owner", schema)
