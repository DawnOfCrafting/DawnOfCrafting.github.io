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
    var list = [Stone(), Orange(), Banana(), Stick(), Bone(), Log(), Vine()]
    return list
}
Item.getCraftableList = function() {
    var list = [SharpStone(), PeeledBanana(), SlicedOrange(), PeeledOrange(), BoneChest(), BoneHelmet(), BoneHook(), BoneNecklace(), VineRope(), CampFire(), Club(), FishingRod(), Hammer(), Knife(), Spear(), SharpBone(), SharpClub(), WoodenTable()]
    return list
}

Stone = function(amount) {
	self = Item(param = {
		id: "Stone",
		name: "Stone",
		image: "./img/items/Stone.png",
	})
    if(amount) { self.amount = amount }
	return self
}

Log = function(amount) {
    self = Item(param = {
        id: "Log",
        name: "Log",
        image: "./img/items/Log.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Vine = function(amount) {
    self = Item(param = {
        id: "Vine",
        name: "Vine",
        image: "./img/items/Vine.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Bone = function(amount) {
    self = Item(param = {
        id: "Bone",
        name: "Bone",
        image: "./img/items/Bone.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Orange = function(amount) {
    self = Item(param = {
        id: "Orange",
        name: "Orange",
        image: "./img/items/Orange.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Banana = function(amount) {
    self = Item(param = {
        id: "Banana",
        name: "Banana",
        image: "./img/items/Banana.png",
    })
    if(amount) { self.amount = amount }
    return self
}

Stick = function(amount) {
    self = Item(param = {
        id: "Stick",
        name: "Stick",
        image: "./img/items/Stick.png",
    })
    if(amount) { self.amount = amount }
    return self
}

// Recipes
SharpStone = function(amount) {
    self = Item(param = {
        id: "SharpStone",
        name: "Sharp Stone",
        image: "./img/items/SharpStone.png",
        inputs: [Stone(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

PeeledBanana = function(amount) {
    self = Item(param = {
        id: "PeeledBanana",
        name: "Peeled Banana",
        image: "./img/items/PeeledBanana.png",
        inputs: [Banana(1)]
    })
    if(amount) { self.amount = amount }
    return self
}

BoneChest = function(amount) {
    self = Item(param = {
        id: "BoneChest",
        name: "Bone Chest",
        image: "./img/items/BoneChest.png",
        inputs: [Bone(5),VineRope(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

BoneHelmet = function(amount) {
    self = Item(param = {
        id: "BoneHelmet",
        name: "Bone Helmet",
        image: "./img/items/BoneHelmet.png",
        inputs: [Bone(3),VineRope(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

BoneHook = function(amount) {
    self = Item(param = {
        id: "BoneHook",
        name: "Bone Hook",
        image: "./img/items/BoneHook.png",
        inputs: [Bone(1),SharpStone(1)]
    })
    if(amount) { self.amount = amount }
    return self
}

BoneNecklace = function(amount) {
    self = Item(param = {
        id: "BoneNecklace",
        name: "Bone Necklace",
        image: "./img/items/BoneNecklace.png",
        inputs: [Bone(5),VineRope(1)]
    })
    if(amount) { self.amount = amount }
    return self
}

VineRope = function(amount) {
    self = Item(param = {
        id: "VineRope",
        name: "Vine Rope",
        image: "./img/items/VineRope.png",
        inputs: [Vine(2)]
    })
    if(amount) { self.amount = amount }
    return self
}

CampFire = function(amount) {
    self = Item(param = {
        id: "CampFire",
        name: "Camp Fire",
        image: "./img/items/CampFire.png",
        inputs: [Stick(10),Stone(10)]
    })
    if(amount) { self.amount = amount }
    return self
}

Club = function(amount) {
    self = Item(param = {
        id: "Club",
        name: "Club",
        image: "./img/items/Club.png",
        inputs: [Log(1),SharpStone(1)]
    })
    if(amount) { self.amount = amount }
    return self
}

FishingRod = function(amount) {
    self = Item(param = {
        id: "FishingRod",
        name: "Fishing Rod",
        image: "./img/items/FishingRod.png",
        inputs: [BoneHook(1),VineRope(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
Hammer = function(amount) {
    self = Item(param = {
        id: "Hammer",
        name: "Hammer",
        image: "./img/items/Hammer.png",
        inputs: [Stone(1),Stick(1),Vine(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
Knife = function(amount) {
    self = Item(param = {
        id: "Knife",
        name: "Knife",
        image: "./img/items/Knife.png",
        inputs: [SharpStone(1),Stick(1),Vine(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
Spear = function(amount) {
    self = Item(param = {
        id: "Spear",
        name: "Spear",
        image: "./img/items/Spear.png",
        inputs: [SharpStone(1),Stick(1),VineRope(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
SharpBone = function(amount) {
    self = Item(param = {
        id: "SharpBone",
        name: "Sharp Bone",
        image: "./img/items/SharpBone.png",
        inputs: [Bone(1),SharpStone(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
SharpClub = function(amount) {
    self = Item(param = {
        id: "SharpClub",
        name: "Sharp Club",
        image: "./img/items/SharpClub.png",
        inputs: [Club(1),SharpStone(4)]
    })
    if(amount) { self.amount = amount }
    return self
}
WoodenTable = function(amount) {
    self = Item(param = {
        id: "WoodenTable",
        name: "Wooden Table",
        image: "./img/items/WoodenTable.png",
        inputs: [Log(10)]
    })
    if(amount) { self.amount = amount }
    return self
}
SlicedOrange = function(amount) {
    self = Item(param = {
        id: "SlicedOrange",
        name: "Sliced Orange",
        image: "./img/items/SlicedOrange.png",
        inputs: [Orange(1),SharpStone(1)]
    })
    if(amount) { self.amount = amount }
    return self
}
PeeledOrange = function(amount) {
    self = Item(param = {
        id: "PeeledOrange",
        name: "Peeled Orange",
        image: "./img/items/PeeledOrange.png",
        inputs: [Orange(1)]
    })
    if(amount) { self.amount = amount }
    return self
}




