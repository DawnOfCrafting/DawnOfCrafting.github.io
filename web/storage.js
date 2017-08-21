Storage = function() {
	var self = {
		items: {}
	}

	self.addItem = function(item) {
		for(var i in self.items) {
			if(self.items[i].id === item.id) {
				self.items[i].amount += item.amount
				return
			}
		}
		self.items[item.id] = item
	}

	self.removeItem = function(item,amount) {
		for(var i in self.items) {
			if(self.items[i].id === item.id) {

			}
		}
	}
	return self
}