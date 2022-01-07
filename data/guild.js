schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: "e!"},
    ban: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
   },
    kick: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    channel: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    role: { 
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    webhook: {
        onoff: { type: String, default: "on"}
    },
    spam: {
        onoff: { type: String, default: "off"}      
    },
    bot: {
        onoff: { type: String, default: "on"}
    },
    punishment: { type: String, default: "removerole"},
    whitelist: { type: Array, default: [] },
    time: { type: Number, default: 30}
});
module.exports = mongoose.model("Guild", schema)
