const RestaurantMenu = 
    {
      APPETIZERS: [
        {
          name: "Iceberg Wedge Salad with House Cured Bacon",
          extra_sausage: ["tomato", "salsa", "gorgonzola"],
          price: 7.5,
        },
        {
          name: "autéed Shredded Brussels Sprouts ",
          extra_sausage: ["autéed", "Shredded Brussels Sprouts"],
          price: 7.5,
        },
      ],
      ENTREES: [
        {
          name: "Farfalle Pasta with Braised Pork in Tomato Cream",
          extra_sausage: ["capers", "butternut", "squash", "kale"],
          price: 12.95,
        },
        {
          name: "Stout Braised Bratwusrt",
          extra_sausage: [
            "horseradish",
            "mashed potatoes",
            "roasted root",
            "veggies",
            "grilled onion",
          ],
          price: 13.95,
        },
      ],
    }

module.exports = RestaurantMenu;
