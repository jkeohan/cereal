var num = process.argv[2];

var arr1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded, Toasted"];

var arr2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];

var ran1 = "";
var ran2 = "";

for(i = 0; i < num; i++) {

	ran1 = (Math.floor(arr1.length*Math.random()));
	ran2 = (Math.floor(arr2.length*Math.random()));



	console.log(arr1[ran1] + " " + arr2[ran2]);

}
