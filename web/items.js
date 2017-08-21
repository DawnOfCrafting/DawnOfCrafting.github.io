Item = function(param) {
	var self = {
		x: 0,
		y: 0,
		id: param.id,
		name: param.name,
		image: param.image,
		amount: 1,
	}

	if(param.amount) {
		self.amount = param.amount
	}
	return self
}

Item.getList = function() {
    var list = [Stone(), Orange(), Banana(), Stick()]
    return list
}

Stone = function() {
	self = Item(param = {
		id: "Stone",
		name: "Stone",
		image: "./img/Stone.png",
	})
	return self
}

Orange = function() {
    self = Item(param = {
        id: "Orange",
        name: "Orange",
        image: "./img/Orange.png",
    })
    return self
}

Banana = function() {
    self = Item(param = {
        id: "Banana",
        name: "Banana",
        image: "./img/Banana.png",
    })
    return self
}

Stick = function() {
    self = Item(param = {
        id: "Stick",
        name: "Stick",
        image: "./img/Stick.png",
    })
    return self
}

