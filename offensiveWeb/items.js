Item = function(param) {
	var self = {
		x: 0,
		y: 0,
        w: SIDESIZE,
        h: SIDESIZE,
		id: param.id,
		name: param.name,
		image: param.image,
		amount: 1,
        inputs: param.inputs,
	}

	if(param.amount) {
		self.amount = param.amount
	}
    self.reset = function() {
        var itemList = Item.getAllItems()
        for(var i in itemList) {
            if(itemList[i].name == self.name) {
                return itemList[i]
            }
        }
    }
    self.canCraftThis = function(storage) {
        for(var i in self.inputs) {
            var inputItem = self.inputs[i]
            if(storage.items[inputItem.id]) {
                if(storage.items[inputItem.id].amount === inputItem.amount) {
                    continue
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }
    self.craftThis = function(storage1,storage2) {
        if(self.canCraftThis(storage1)) {
            for(var i in self.inputs) {
                storage1.removeItem(self.inputs[i],self.inputs[i].amount)
            }
            storage2.addItem(self,self.w)
            return true
        } else {
            // console.log('cant craft this item: ' + self.name)
        }
    }
	return self
}

Item.getAllItems = function() {
    var list1 = Item.getGatherableList()
    var list2 = Item.getCraftableList()
    return list1.concat(list2)
}

Item.getGatherableList = function() {
    var list = [Nibber(), Indian(), White(), Asian(), Muslim(), Jew()]
    return list
}
Item.getCraftableList = function() {
    var list = [Gold(), Shit(), Bomb(), Soap(), Nazi(), Toilet(), SuperPower(), Christian(), Bastard(), 
    Phedophile(), Potato(), Anime(), Hentai(), Cotton(), Rap(), Vegana(), Bob(), Rape()
    ]
    return list
}

Nibber = function(amount) {
	self = Item(param = {
		id: "Nibber",
		name: "Nibber",
		image: "./img/items/Nibber.png",
	})
    if(amount) { self.amount = amount }
	return self
}

Indian = function(amount) {
    self = Item(param = {
        id: "Indian",
        name: "Indian",
        image: "./img/items/Indian.png",
    })
    if(amount) { self.amount = amount }
    return self
}

White = function(amount) {
    self = Item(param = {
        id: "White",
        name: "White",
        image: "./img/items/White.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Asian = function(amount) {
    self = Item(param = {
        id: "Asian",
        name: "Asian",
        image: "./img/items/Asian.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Muslim = function(amount) {
    self = Item(param = {
        id: "Muslim",
        name: "Muslim",
        image: "./img/items/Muslim.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Jew = function(amount) {
    self = Item(param = {
        id: "Jew",
        name: "Jew",
        image: "./img/items/Jew.png",
    })
    if(amount) { self.amount = amount }
    return self
}

// Recipes
Gold = function(amount) {
    self = Item(param = {
        id: "Gold",
        name: "Gold",
        image: "./img/items/Gold.png",
        inputs: [Jew(1)]
    })
    if(amount) { self.amount = amount }
    return self
}

Shit = function(amount) {
    self = Item(param = {
        id: "Shit",
        name: "Shit",
        image: "./img/items/Shit.png",
        inputs: [Indian(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

Bomb = function(amount) {
    self = Item(param = {
        id: "Bomb",
        name: "Bomb",
        image: "./img/items/Bomb.png",
        inputs: [Muslim(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

Soap = function(amount) {
    self = Item(param = {
        id: "Soap",
        name: "Soap",
        image: "./img/items/Soap.png",
        inputs: [Jew(5)],
    })
    if(amount) { self.amount = amount }
    return self
}

Nazi = function(amount) {
    self = Item(param = {
        id: "Nazi",
        name: "Nazi",
        image: "./img/items/Nazi.png",
        inputs: [White(2)],
    })
    if(amount) { self.amount = amount }
    return self
}

Toilet = function(amount) {
    self = Item(param = {
        id: "Toilet",
        name: "Toilet",
        image: "./img/items/Toilet.png",
        inputs: [Gold(2),Shit(2)],
    })
    if(amount) { self.amount = amount }
    return self
}

SuperPower = function(amount) {
    self = Item(param = {
        id: "Super Power",
        name: "Super Power",
        image: "./img/items/SuperPower.png",
        inputs: [Toilet(1),Indian(10)],
    })
    if(amount) { self.amount = amount }
    return self
}

Christian = function(amount) {
    self = Item(param = {
        id: "Christian",
        name: "Christian",
        image: "./img/items/Christian.png",
        inputs: [White(1),Jew(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Bastard = function(amount) {
    self = Item(param = {
        id: "Bastard",
        name: "Bastard",
        image: "./img/items/Bastard.png",
        inputs: [White(1),Nibber(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Phedophile = function(amount) {
    self = Item(param = {
        id: "Phedophile",
        name: "Phedophile",
        image: "./img/items/Phedophile.png",
        inputs: [Christian(1),Bastard(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Potato = function(amount) {
    self = Item(param = {
        id: "Potato",
        name: "Potato",
        image: "./img/items/Potato.png",
        inputs: [Christian(1),Jew(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Anime = function(amount) {
    self = Item(param = {
        id: "Anime",
        name: "Anime",
        image: "./img/items/Anime.png",
        inputs: [Asian(2)],
    })
    if(amount) { self.amount = amount }
    return self
}

Hentai = function(amount) {
    self = Item(param = {
        id: "Hentai",
        name: "Hentai",
        image: "./img/items/Hentai.png",
        inputs: [Anime(3)],
    })
    if(amount) { self.amount = amount }
    return self
}

Cotton = function(amount) {
    self = Item(param = {
        id: "Cotton",
        name: "Cotton",
        image: "./img/items/Cotton.png",
        inputs: [Nibber(3)],
    })
    if(amount) { self.amount = amount }
    return self
}

Rap = function(amount) {
    self = Item(param = {
        id: "Rap",
        name: "Rap",
        image: "./img/items/Rap.png",
        inputs: [Nibber(2)],
    })
    if(amount) { self.amount = amount }
    return self
}

Vegana = function(amount) {
    self = Item(param = {
        id: "Vegana",
        name: "Vegana",
        image: "./img/items/Vegana.png",
        inputs: [Indian(1),White(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Bob = function(amount) {
    self = Item(param = {
        id: "Bob",
        name: "Bob",
        image: "./img/items/Bob.png",
        inputs: [Indian(2),White(1)],
    })
    if(amount) { self.amount = amount }
    return self
}

Rape = function(amount) {
    self = Item(param = {
        id: "Rape",
        name: "Rape",
        image: "./img/items/Rape.png",
        inputs: [Indian(5),Vegana(1)],
    })
    if(amount) { self.amount = amount }
    return self
}













