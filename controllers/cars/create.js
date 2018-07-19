const uuid = require("uuid/v4");

module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        req.body.id = uuid();
        Car.create(req.body)
            .then(cars => res.send(cars))
            .catch(error => res.send(error))
    }
};