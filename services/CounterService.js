
const counter = 0;

module.exports = class CounterService{
    static getCounter(){
        return {counter: counter}
    }
}