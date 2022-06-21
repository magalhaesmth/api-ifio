
const CounterService = require("../services/CounterService")


module.exports = class CounterController{
    static async getCounter(req, res){
        res.status(200).send(CounterService.getCounter())
    }
}