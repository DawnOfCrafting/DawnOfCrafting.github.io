Storage = function(x,y,w,h,image) {
    var self = Entity(image,x,y,w,h)
    self.items = {}

	self.addItem = function(item,SIDESIZE) {
		for(var i in self.items) {
			if(self.items[i].name === item.name) {
				self.items[i].amount += item.amount
				return
			}
		}
        var newItem = item.reset()
        newItem.amount = item.amount
        newItem.x = getRandomInt(0, self.w - SIDESIZE) + self.x
        newItem.y = getRandomInt(0, self.h - SIDESIZE) + self.y
		self.items[newItem.id] = newItem
	}
	self.removeItem = function(item,amount) {
		for(var i in self.items) {
			if(self.items[i].name === item.name) {
                self.items[i].amount -= amount
                if(self.items[i].amount <= 0) {
                    delete self.items[i]
                }
                return
			}
		}
	}
    self.addItemFromThisStorage = function(storage,item,amount,SIDESIZE) {
        var newItem = item.reset()
        newItem.amount = amount
        self.addItem(newItem,SIDESIZE)
        storage.removeItem(item,amount)
    }
	return self
}

Entity = function(image,x,y,w,h,title) {
    var self = {
        x: x,
        y: y,
        w: w,
        h: h,
        image: image,
        title: title
    }
    return self
}