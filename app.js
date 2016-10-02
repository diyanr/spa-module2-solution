(function () {
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	       .controller('ToBuyController',ToBuyController)
	       .controller('AlreadyBoughtController', AlreadyBoughtController)
	       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var tobuy = this;

		tobuy.items = ShoppingListCheckOffService.getItemsTobuy();

		tobuy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;

		bought.items = ShoppingListCheckOffService.getItemsBought();
	}

	function ShoppingListCheckOffService() {
		var listService = this;

		var itemsTobuy = [];
		itemsTobuy.push({name: "bags of cookies", quantity: "10"});
		itemsTobuy.push({name: "cans of soda", quantity: "5"});
		itemsTobuy.push({name: "bags of chips", quantity: "20"});

		var itemsBought = [];

		listService.getItemsTobuy = function () {
			return itemsTobuy;
		};

		listService.getItemsBought = function () {
			return itemsBought;
		};

		listService.buyItem = function (itemIndex) {
			var item = itemsTobuy[itemIndex];
			itemsTobuy.splice(itemIndex, 1);
			itemsBought.push(item);
		};

	}

}) ();
