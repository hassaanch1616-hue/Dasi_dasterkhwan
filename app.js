// Pakistani Cooking Recipes ("Desi Dasterkhwan") Application Logic

// Initial Pakistani Recipes Dataset
const DEFAULT_RECIPES = [
    // --- BREAKFAST CATEGORY (10 Recipes) ---
    {
        id: "recipe-halwapuri",
        title: "Halwa Puri Cholay",
        category: "Breakfast",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        description: "The ultimate Sunday Desi Breakfast: soft puffed puris served with aromatic, sweet semolina halwa and spicy chickpea potato curry.",
        image: "halwa_puri_1784532152132.png",
        ingredients: [
            { name: "All-purpose Flour (Maida) for puris", amount: 500, unit: "g" },
            { name: "Semolina (Suji) for halwa", amount: 200, unit: "g" },
            { name: "Sugar", amount: 200, unit: "g" },
            { name: "Boiled Chickpeas (Cholay)", amount: 400, unit: "g" },
            { name: "Potatoes (boiled & diced)", amount: 2, unit: "pcs" },
            { name: "Ghee / Oil", amount: 2, unit: "cups" },
            { name: "Cardamom pods", amount: 4, unit: "pcs" },
            { name: "Spices (Chili powder, Turmeric, Cumin)", amount: 1.5, unit: "tbsp" }
        ],
        instructions: [
            "Puri: Knead flour with 1 tbsp oil, salt, and water. Roll into small circles and deep fry in piping hot oil.",
            "Halwa: Heat 0.5 cup ghee, add cardamoms and suji. Sauté for 6 minutes, add sugar syrup and cook until thick.",
            "Cholay: Sauté chopped onions and spices, add boiled chickpeas, diced potatoes, and 1 cup water. Simmer for 15 minutes."
        ]
    },
    {
        id: "recipe-nihari",
        title: "Special Beef Nihari",
        category: "Breakfast",
        difficulty: "Hard",
        prepTime: 20,
        cookTime: 180,
        servings: 6,
        description: "A slow-cooked shank beef stew, rich in gelatinous gravy, spiced with a unique Nihari spice mix and thickened with wheat flour.",
        image: "beef_nihari_1784532940517.png",
        ingredients: [
            { name: "Beef Shank (Bong) with bones", amount: 1, unit: "kg" },
            { name: "Nihari Spice Blend (Fennel, Ginger, Pipali)", amount: 4, unit: "tbsp" },
            { name: "Wheat Flour (Atta)", amount: 0.5, unit: "cup" },
            { name: "Ginger-Garlic Paste", amount: 2, unit: "tbsp" },
            { name: "Onion (medium, finely sliced)", amount: 1, unit: "pc" },
            { name: "Oil or Ghee", amount: 1, unit: "cup" }
        ],
        instructions: [
            "Heat ghee in a pot, add onions and sauté until transparent.",
            "Add ginger-garlic paste and beef shank. Sear on high heat for 5 minutes.",
            "Add Nihari spice blend and 6 cups of water. Cover tightly and simmer on very low heat for 3 hours.",
            "Dissolve wheat flour in water and pour into the stew while stirring. Simmer for 15 minutes until thick."
        ]
    },
    {
        id: "recipe-andashami",
        title: "Anda Shami Burger",
        category: "Breakfast",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        description: "Classic Lahori street-style breakfast burger featuring a fried egg, spiced lentil-beef patty, and tangy mint chutney.",
        image: "shami_burger_1784533217336.png",
        ingredients: [
            { name: "Burger Buns", amount: 2, unit: "pcs" },
            { name: "Prepared Shami Kabab patty", amount: 2, unit: "pcs" },
            { name: "Eggs", amount: 2, unit: "pcs" },
            { name: "Cabbage (thinly sliced)", amount: 0.5, unit: "cup" },
            { name: "Onion rings", amount: 4, unit: "pcs" },
            { name: "Mint & Coriander Chutney", amount: 3, unit: "tbsp" },
            { name: "Oil for pan frying", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Pan-fry the shami kabab patties on medium heat until golden brown.",
            "Beat eggs with a pinch of salt and fry them in the pan.",
            "Toast the burger buns on the same pan with a little butter or oil.",
            "Spread mint chutney on the buns, place the shami patty, add sliced onion, cabbage, fried egg, and serve hot."
        ]
    },
    {
        id: "recipe-lachaparatha",
        title: "Lacha Paratha with Omelette",
        category: "Breakfast",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        description: "Crispy, multi-layered flatbread served alongside a classic Pakistani herb-spiced omelette and hot chai.",
        image: "pakistani_paratha_1784533192347.png",
        ingredients: [
            { name: "Whole Wheat Flour Dough", amount: 2, unit: "balls" },
            { name: "Ghee (for layers and frying)", amount: 4, unit: "tbsp" },
            { name: "Eggs", amount: 3, unit: "pcs" },
            { name: "Onion (finely chopped)", amount: 3, unit: "tbsp" },
            { name: "Green Chilies (chopped)", amount: 2, unit: "pcs" },
            { name: "Fresh Coriander (chopped)", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Roll out dough ball, brush with ghee, sprinkle flour, fold like an accordion, roll into a coil, and roll flat again.",
            "Fry the paratha on a hot griddle (Tawa) with ghee until golden brown and flaky on both sides.",
            "Whisk eggs, chopped onions, chilies, coriander, salt, and red chili powder together. Fry in ghee to make the omelette."
        ]
    },
    {
        id: "recipe-siripaye",
        title: "Mutton Siri Paye",
        category: "Breakfast",
        difficulty: "Hard",
        prepTime: 30,
        cookTime: 240,
        servings: 4,
        description: "A traditional slow-cooked breakfast delicacy featuring goat head and trotters stewed overnight in aromatic spices.",
        image: "mutton_paye_1784532952514.png",
        ingredients: [
            { name: "Mutton Trotters (Paye)", amount: 4, unit: "pcs" },
            { name: "Mutton Head Meat (Siri)", amount: 500, unit: "g" },
            { name: "Onions (chopped)", amount: 2, unit: "pcs" },
            { name: "Yogurt", amount: 0.5, unit: "cup" },
            { name: "Ginger-Garlic Paste", amount: 2, unit: "tbsp" },
            { name: "Spices (Coriander, Turmeric, Garam Masala)", amount: 2, unit: "tbsp" },
            { name: "Oil / Ghee", amount: 0.75, unit: "cup" }
        ],
        instructions: [
            "Wash paye thoroughly. Boil in water with turmeric and garlic, discarding the first foam.",
            "In a separate deep pot, heat oil, fry onions until golden, add ginger-garlic paste, meat, paye, spices, and yogurt. Sauté well.",
            "Add 8 cups of water. Cover tightly and cook on low heat for 4-5 hours until the trotters are extremely tender and gelatinous."
        ]
    },
    {
        id: "recipe-alooparatha",
        title: "Spicy Aloo Paratha",
        category: "Breakfast",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        description: "Whole wheat flatbread stuffed with a seasoned mashed potato filling, pan-fried to crispy golden perfection.",
        image: "pakistani_paratha_1784533192347.png",
        ingredients: [
            { name: "Potatoes (boiled & mashed)", amount: 3, unit: "pcs" },
            { name: "Atta (Wheat Flour Dough)", amount: 2, unit: "balls" },
            { name: "Green Chilies (minced)", amount: 2, unit: "pcs" },
            { name: "Cumin seeds (roasted & crushed)", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Ghee / Butter for frying", amount: 3, unit: "tbsp" }
        ],
        instructions: [
            "Mix mashed potatoes with green chilies, cumin, coriander, salt, and a pinch of chili powder.",
            "Roll two small flat dough discs, place potato stuffing on one, cover with the second disc, and seal edges.",
            "Roll out carefully and fry on a hot tawa with ghee/butter until crispy and brown on both sides. Serve with yogurt."
        ]
    },
    {
        id: "recipe-lahorichana",
        title: "Lahori Cholay (Chickpea Curry)",
        category: "Breakfast",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 40,
        servings: 4,
        description: "Lahore's famous spicy chickpea curry, cooked with baking soda and black pepper to achieve a buttery soft texture.",
        image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "White Chickpeas (soaked overnight)", amount: 300, unit: "g" },
            { name: "Onions (ground to paste)", amount: 2, unit: "pcs" },
            { name: "Ginger-Garlic Paste", amount: 1.5, unit: "tbsp" },
            { name: "Yogurt", amount: 0.5, unit: "cup" },
            { name: "Black Pepper (freshly ground)", amount: 1.5, unit: "tsp" },
            { name: "Baking Soda", amount: 0.25, unit: "tsp" },
            { name: "Oil", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Boil chickpeas in water with baking soda until they are extremely soft.",
            "Heat oil in a pan, fry onion paste, add ginger-garlic, spices, yogurt, and sauté until oil separates.",
            "Add chickpeas with their boiling water and simmer on low heat for 15 minutes. Garnish with black pepper and green chilies."
        ]
    },
    {
        id: "recipe-khageena",
        title: "Pakistani Egg Khageena",
        category: "Breakfast",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        description: "Spicy scrambled eggs cooked with chopped onions, green chilies, tomatoes, and fresh coriander.",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Eggs", amount: 4, unit: "pcs" },
            { name: "Onion (finely chopped)", amount: 1, unit: "pc" },
            { name: "Tomato (chopped)", amount: 1, unit: "pc" },
            { name: "Green Chili (chopped)", amount: 2, unit: "pcs" },
            { name: "Turmeric powder", amount: 0.25, unit: "tsp" },
            { name: "Red Chili powder", amount: 0.5, unit: "tsp" },
            { name: "Butter or Oil", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Heat oil or butter in a pan. Sauté chopped onions until translucent.",
            "Add tomatoes, green chilies, turmeric, red chili, and salt. Cook for 3 minutes.",
            "Whisk eggs, pour into the pan, cook on low heat, and scramble gently. Garnish with coriander and serve with paratha."
        ]
    },
    {
        id: "recipe-haleembreakfast",
        title: "Shahi Beef Haleem",
        category: "Breakfast",
        difficulty: "Hard",
        prepTime: 30,
        cookTime: 180,
        servings: 8,
        description: "Slow-cooked stew of beef, lentils, and wheat, shredded and pounded to a smooth, thick consistency, garnised with crispy onions.",
        image: "beef_haleem_1784532982671.png",
        ingredients: [
            { name: "Beef (boneless pieces)", amount: 1, unit: "kg" },
            { name: "Haleem Grains Mix (Wheat, Barley, Lentils)", amount: 500, unit: "g" },
            { name: "Ginger-Garlic Paste", amount: 3, unit: "tbsp" },
            { name: "Haleem Spice Mix", amount: 4, unit: "tbsp" },
            { name: "Onions (sliced, for garnish)", amount: 3, unit: "pcs" },
            { name: "Ghee / Oil", amount: 1.5, unit: "cups" }
        ],
        instructions: [
            "Soak grains overnight. Boil in water until completely soft, then blend roughly.",
            "Cook beef with spices, oil, and ginger-garlic paste until very tender. Shred the beef meat.",
            "Combine shredded meat and grains, mash together continuously (Ghotna) on low heat for 30 minutes. Temper with hot ghee and crispy onions."
        ]
    },
    {
        id: "recipe-keemaparatha",
        title: "Mince Beef Keema Paratha",
        category: "Breakfast",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 20,
        servings: 2,
        description: "Crispy flatbread filled with seasoned minced beef, cooked on a hot tawa with generous ghee.",
        image: "pakistani_paratha_1784533192347.png",
        ingredients: [
            { name: "Beef Minced Meat (cooked & dry)", amount: 200, unit: "g" },
            { name: "Wheat Dough", amount: 2, unit: "balls" },
            { name: "Garam Masala powder", amount: 0.5, unit: "tsp" },
            { name: "Onion (finely chopped)", amount: 2, unit: "tbsp" },
            { name: "Ghee / Butter for frying", amount: 3, unit: "tbsp" }
        ],
        instructions: [
            "Knead minced beef with chopped onions, garam masala, salt, and coriander.",
            "Roll two dough circles, place keema filling, seal, roll lightly.",
            "Fry on tawa with ghee until crispy and golden brown. Serve hot with raita."
        ]
    },

    // --- LUNCH CATEGORY (10 Recipes) ---
    {
        id: "recipe-karahi",
        title: "Peshawari Chicken Karahi",
        category: "Lunch",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        description: "A fast and fiery woks-style chicken curry cooked with fresh tomatoes, ginger, garlic, and freshly crushed black pepper. Onion-free!",
        image: "karahi_1784531967565.png",
        ingredients: [
            { name: "Chicken (cut into small karahi pieces)", amount: 750, unit: "g" },
            { name: "Tomatoes (ripe, halved)", amount: 5, unit: "pcs" },
            { name: "Ginger (finely chopped & julienned)", amount: 3, unit: "tbsp" },
            { name: "Garlic (crushed)", amount: 1.5, unit: "tbsp" },
            { name: "Green Chilies (slit lengthwise)", amount: 6, unit: "pcs" },
            { name: "Black Pepper (freshly crushed)", amount: 1, unit: "tsp" },
            { name: "Red Chili Flakes", amount: 1, unit: "tsp" },
            { name: "Oil", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Heat oil in a wok. Fry chicken on high heat for 6 minutes.",
            "Add garlic and ginger. Sauté for 2 minutes.",
            "Place halved tomatoes on top. Cover and steam for 8 minutes, then remove skins and mash tomatoes into gravy.",
            "Add green chilies and freshly crushed black pepper. Sauté on high heat until oil separates."
        ]
    },
    {
        id: "recipe-golgappa",
        title: "Chilli-Tangy Gol Gappay",
        category: "Lunch",
        difficulty: "Medium",
        prepTime: 25,
        cookTime: 20,
        servings: 4,
        description: "Crispy, hollow semolina puris stuffed with spicy potatoes and chickpeas, dipped in custom-flavored tangy mint water.",
        image: "gol_gappay_1784533204893.png",
        ingredients: [
            { name: "Semolina (Suji)", amount: 200, unit: "g" },
            { name: "All-Purpose Flour (Maida)", amount: 2, unit: "tbsp" },
            { name: "Boiled Chickpeas & Potatoes", amount: 300, unit: "g" },
            { name: "Chaat Masala", amount: 2, unit: "tbsp" },
            { name: "Tamarind Pulp (Imli)", amount: 100, unit: "g" },
            { name: "Mint & Coriander leaves", amount: 1, unit: "cup" },
            { name: "Oil for deep frying", amount: 2, unit: "cups" }
        ],
        instructions: [
            "Knead semolina and flour into a stiff dough. Rest for 30 minutes, roll thin, cut into discs, and deep fry until crispy.",
            "Paani: Blend mint, coriander, tamarind pulp, green chilies, and cold water.",
            "Poke a hole in the puri shell, fill with chickpeas/potatoes, add chutney, and fill with tangy water."
        ]
    },
    {
        id: "recipe-chickenpulao",
        title: "Yakhni Chicken Pulao",
        category: "Lunch",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 40,
        servings: 4,
        description: "Mild, fragrant rice dish cooked in a spiced chicken broth (Yakhni), loaded with cardamom, cloves, and bay leaves.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Basmati Rice (soaked)", amount: 500, unit: "g" },
            { name: "Chicken pieces", amount: 500, unit: "g" },
            { name: "Onions (sliced)", amount: 2, unit: "pcs" },
            { name: "Yogurt", amount: 0.5, unit: "cup" },
            { name: "Whole Garam Masala spices", amount: 2, unit: "tbsp" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Oil", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Make Yakhni: Boil chicken in water with whole spices, half onion, and garlic. Strain broth and set chicken aside.",
            "Heat oil, fry remaining onions, add ginger-garlic, chicken, yogurt, and sauté for 5 minutes.",
            "Pour strained broth, bring to boil, add soaked rice, cook until water evaporates. Steam (Dum) for 15 minutes."
        ]
    },
    {
        id: "recipe-daalchawal",
        title: "Tarka Daal Chawal",
        category: "Lunch",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 25,
        servings: 4,
        description: "Simple, comfort home food: yellow lentils tempered with garlic and cumin, served over hot boiled basmati rice.",
        image: "daal_chawal.png",
        ingredients: [
            { name: "Split Yellow Lentils (Moong & Masoor)", amount: 250, unit: "g" },
            { name: "Basmati Rice", amount: 400, unit: "g" },
            { name: "Garlic cloves (sliced)", amount: 4, unit: "pcs" },
            { name: "Cumin seeds", amount: 1, unit: "tsp" },
            { name: "Turmeric & Chili powder", amount: 1, unit: "tbsp" },
            { name: "Ghee / Oil", amount: 4, unit: "tbsp" }
        ],
        instructions: [
            "Boil lentils in water with turmeric, red chili, and salt until completely soft and mashed.",
            "Boil basmati rice in salted water until fluffy; drain.",
            "Tarka: Heat ghee in a pan, fry sliced garlic and cumin seeds until golden brown. Pour over the hot lentils."
        ]
    },
    {
        id: "recipe-alookeema",
        title: "Aloo Keema Masala",
        category: "Lunch",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        description: "Sautéed minced beef or mutton cooked with diced potatoes in a rich onion-tomato gravy.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Minced Meat (Beef / Mutton)", amount: 500, unit: "g" },
            { name: "Potatoes (diced)", amount: 2, unit: "pcs" },
            { name: "Onion (chopped)", amount: 2, unit: "pcs" },
            { name: "Tomato (chopped)", amount: 1, unit: "pc" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Oil", amount: 4, unit: "tbsp" }
        ],
        instructions: [
            "Heat oil in a pan, fry chopped onions until golden. Add ginger-garlic paste and minced meat.",
            "Stir fry mince until browned. Add tomatoes, spices (red chili, turmeric, coriander), and sauté.",
            "Add diced potatoes and 0.5 cup water. Cover and cook on low heat for 15 minutes until potatoes are soft."
        ]
    },
    {
        id: "recipe-bhindimasala",
        title: "Bhindi Masala (Okra)",
        category: "Lunch",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 15,
        servings: 3,
        description: "Stir-fried okra with sliced onions, tomatoes, and tangy spices. A delicious vegetarian option.",
        image: "bhindi.png",
        ingredients: [
            { name: "Okra / Bhindi (cut into rounds)", amount: 500, unit: "g" },
            { name: "Onions (sliced)", amount: 2, unit: "pcs" },
            { name: "Tomatoes (sliced)", amount: 2, unit: "pcs" },
            { name: "Green Chilies (chopped)", amount: 2, unit: "pcs" },
            { name: "Turmeric & Chili powder", amount: 1, unit: "tsp" },
            { name: "Oil", amount: 4, unit: "tbsp" }
        ],
        instructions: [
            "Heat 2 tbsp oil and fry the okra rounds until light brown and dry (no slime). Set aside.",
            "Heat remaining oil, sauté onions until soft, add tomatoes, green chilies, and spices.",
            "Add fried okra, stir well, cover and cook on very low heat (Dam) for 8 minutes."
        ]
    },
    {
        id: "recipe-chickenjalfrezi",
        title: "Resturant-style Chicken Jalfrezi",
        category: "Lunch",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        description: "Boneless chicken strips cooked with bell peppers, onions, and tomatoes in a sweet and tangy ketchup-based sauce.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Boneless Chicken (sliced)", amount: 500, unit: "g" },
            { name: "Bell Pepper (Capsicum, cubed)", amount: 1, unit: "pc" },
            { name: "Onion (cubed)", amount: 1, unit: "pc" },
            { name: "Tomato Paste & Ketchup", amount: 4, unit: "tbsp" },
            { name: "Soy sauce & Vinegar", amount: 1, unit: "tbsp" },
            { name: "Oil", amount: 3, unit: "tbsp" }
        ],
        instructions: [
            "Sauté cubed onions and bell peppers in 1 tbsp oil for 2 minutes. Remove and set aside.",
            "Sauté chicken in remaining oil with ginger-garlic paste until it turns white.",
            "Add tomato paste, ketchup, soy sauce, vinegar, and spices. Simmer for 8 minutes, then toss back the vegetables."
        ]
    },
    {
        id: "recipe-mixveg",
        title: "Dhaba Mix Sabzi",
        category: "Lunch",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        description: "Dry, seasoned mixed vegetable curry made with potatoes, carrots, peas, and cauliflower.",
        image: "mix_sabzi.png",
        ingredients: [
            { name: "Mixed Vegetables (Carrot, Peas, Cauliflower, Potatoes)", amount: 600, unit: "g" },
            { name: "Onion (chopped)", amount: 1, unit: "pc" },
            { name: "Tomatoes (chopped)", amount: 2, unit: "pcs" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Turmeric, Red chili, Cumin", amount: 1.5, unit: "tbsp" },
            { name: "Oil", amount: 4, unit: "tbsp" }
        ],
        instructions: [
            "Sauté onions in oil until golden. Stir in ginger-garlic paste and chopped tomatoes.",
            "Add the chopped mixed vegetables and spices. Stir fry for 5 minutes.",
            "Cover tightly and cook on low heat without water for 15-20 minutes until veggies are tender."
        ]
    },
    {
        id: "recipe-kadhipakora",
        title: "Punjabi Kadhi Pakora",
        category: "Lunch",
        difficulty: "Hard",
        prepTime: 20,
        cookTime: 60,
        servings: 6,
        description: "Gram flour and sour yogurt curry simmered for hours, served with deep-fried onion pakoras and garlic tempering.",
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Sour Yogurt", amount: 500, unit: "g" },
            { name: "Gram Flour (Besan) for curry", amount: 1, unit: "cup" },
            { name: "Gram Flour for pakoras", amount: 1.5, unit: "cups" },
            { name: "Onions (for pakoras & curry)", amount: 3, unit: "pcs" },
            { name: "Cumin, Mustard seeds, Curry leaves", amount: 2, unit: "tbsp" },
            { name: "Oil for frying pakoras", amount: 1.5, unit: "cups" }
        ],
        instructions: [
            "Whisk yogurt and 1 cup besan with 4 cups of water. Bring to a boil, then simmer on low heat for 45 minutes.",
            "Make a batter with besan, sliced onions, spices. Deep fry pakoras (fritters).",
            "Add pakoras to the curry. Temper with oil, cumin, mustard seeds, dry red chilies, and curry leaves."
        ]
    },
    {
        id: "recipe-saagroti",
        title: "Sarson ka Saag & Makki Roti",
        category: "Lunch",
        difficulty: "Hard",
        prepTime: 30,
        cookTime: 90,
        servings: 4,
        description: "Classic Punjabi winter dish: slow-cooked mustard greens served with yellow maize flour flatbread and butter.",
        image: "saag.png",
        ingredients: [
            { name: "Mustard Greens (Sarson Saag)", amount: 1, unit: "kg" },
            { name: "Spinach (Palak)", amount: 500, unit: "g" },
            { name: "Cornmeal (Makki Atta) for roti", amount: 400, unit: "g" },
            { name: "Green Chilies", amount: 8, unit: "pcs" },
            { name: "Garlic & Ginger (finely chopped)", amount: 3, unit: "tbsp" },
            { name: "Butter or Ghee", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Boil chopped saag, palak, green chilies with salt until mushy. Mash/blend and stir in 2 tbsp cornmeal.",
            "Temper saag: Heat butter/ghee, fry chopped garlic and ginger until aromatic. Toss in mashed saag.",
            "Knead cornmeal with warm water and pat flat to make yellow rotis. Fry on tawa and serve with butter."
        ]
    },

    // --- BBQ CATEGORY (10 Recipes) ---
    {
        id: "recipe-kabab",
        title: "Traditional Seekh Kabab",
        category: "BBQ",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 15,
        servings: 4,
        description: "Juicy, melt-in-the-mouth skewers of minced beef seasoned with aromatic spices, fresh green chilies, cilantro, and butter.",
        image: "seekh_kabab_1784533230156.png",
        ingredients: [
            { name: "Beef Minced Meat (Keema, 20% fat)", amount: 500, unit: "g" },
            { name: "Onion (squeezed dry)", amount: 1, unit: "pc" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Green Chilies (minced)", amount: 3, unit: "pcs" },
            { name: "Garam Masala & Crushed Coriander", amount: 2, unit: "tbsp" },
            { name: "Melted Butter or Ghee for basting", amount: 3, unit: "tbsp" }
        ],
        instructions: [
            "Process the minced beef with onions and ginger-garlic paste until sticky.",
            "Knead in ground spices, salt, and marinated in the fridge for 2 hours.",
            "Shape meat onto skewers and grill over charcoal or grill pan for 12 minutes, basting with butter."
        ]
    },
    {
        id: "recipe-tikkaboti",
        title: "Chicken Tikka Boti",
        category: "BBQ",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        description: "Boneless chicken chunks marinated in spicy yogurt, lemon juice, and red tandoori spices, grilled to perfection.",
        image: "https://images.unsplash.com/photo-1608500218900-8afa132050f2?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Chicken (boneless cubes)", amount: 600, unit: "g" },
            { name: "Yogurt (thick)", amount: 0.5, unit: "cup" },
            { name: "Tikka Masala Powder", amount: 3, unit: "tbsp" },
            { name: "Lemon Juice", amount: 2, unit: "tbsp" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Oil for brushing", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Marinate chicken cubes in yogurt, tikka masala, lemon juice, and ginger-garlic paste for at least 1 hour.",
            "Thread onto skewers and grill over hot charcoal or in a preheated oven at 200°C.",
            "Brush with oil periodically. Cook for 15-20 minutes until charred and cooked through."
        ]
    },
    {
        id: "recipe-malaiboti",
        title: "Reshmi Malai Boti",
        category: "BBQ",
        difficulty: "Easy",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        description: "Super soft chicken chunks marinated in heavy cream, yogurt, white pepper, and green cardamom, grilled gently.",
        image: "malai_booti.png",
        ingredients: [
            { name: "Chicken Boneless (breast or thigh)", amount: 600, unit: "g" },
            { name: "Heavy Cream (Malai)", amount: 4, unit: "tbsp" },
            { name: "Yogurt", amount: 2, unit: "tbsp" },
            { name: "Green Chilies & Ginger Paste", amount: 1, unit: "tbsp" },
            { name: "White Pepper & Cardamom powder", amount: 1.5, unit: "tsp" },
            { name: "Butter (for basting)", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Marinate chicken cubes with heavy cream, yogurt, white pepper, cardamom, and chili paste. Rest for 2 hours.",
            "Thread onto skewers. Grill over medium-low charcoal heat so they remain soft and moist.",
            "Baste with butter during the last few minutes of cooking. Serve with mint chutney."
        ]
    },
    {
        id: "recipe-biharikabab",
        title: "Tender Spicy Bihari Kabab",
        category: "BBQ",
        difficulty: "Hard",
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        description: "Ultra tender beef strips marinated with raw papaya paste, mustard oil, and toasted spices, grilled over coal.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Beef Undercut (sliced thin)", amount: 750, unit: "g" },
            { name: "Raw Papaya Paste (tenderiser)", amount: 2, unit: "tbsp" },
            { name: "Yogurt", amount: 0.5, unit: "cup" },
            { name: "Mustard Oil", amount: 4, unit: "tbsp" },
            { name: "Bihari Masala Spice mix", amount: 3, unit: "tbsp" },
            { name: "Fried Onions (crushed)", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Coat beef strips with raw papaya paste and marinate for 1 hour.",
            "Add mustard oil, yogurt, crushed fried onions, and Bihari masala. Marinate for 8 hours (or overnight).",
            "Thread the ribbon-like beef strips in a zigzag pattern onto skewers. Grill over hot charcoal until cooked."
        ]
    },
    {
        id: "recipe-chaplikabab",
        title: "Peshawari Chapli Kabab",
        category: "BBQ",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        description: "Flattish, spiced minced beef patties with tomatoes, pomegranate seeds, and coarse coriander, shallow-fried in animal fat.",
        image: "chapli_kabab.png",
        ingredients: [
            { name: "Beef Minced Meat (with fat)", amount: 500, unit: "g" },
            { name: "Tomato (thinly sliced & chopped)", amount: 2, unit: "pcs" },
            { name: "Maize Flour (Makki Atta)", amount: 3, unit: "tbsp" },
            { name: "Pomegranate Seeds (Anardana, crushed)", amount: 1, unit: "tbsp" },
            { name: "Coriander seeds (coarsely crushed)", amount: 1.5, unit: "tbsp" },
            { name: "Egg (scrambled)", amount: 1, unit: "pc" },
            { name: "Oil or Tallow for shallow frying", amount: 1, unit: "cup" }
        ],
        instructions: [
            "Knead minced beef with scrambled egg, maize flour, chopped tomatoes, crushed coriander, anardana, and spices.",
            "Form large, thin round patties. Press a thin slice of tomato on one side of each patty.",
            "Shallow fry in hot fat/oil until deep golden brown and crispy on the edges. Serve with naan."
        ]
    },
    {
        id: "recipe-reshmikabab",
        title: "Chicken Reshmi Kabab",
        category: "BBQ",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        description: "Silky minced chicken skewers made with cream, cashews, and mild spices, grilled to golden brown.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Chicken Minced Meat (Keema)", amount: 500, unit: "g" },
            { name: "Cashew paste", amount: 1.5, unit: "tbsp" },
            { name: "Heavy Cream", amount: 2, unit: "tbsp" },
            { name: "Onion (squeezed dry)", amount: 1, unit: "pc" },
            { name: "Green Chilies (minced)", amount: 3, unit: "pcs" },
            { name: "Butter (for basting)", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Blend chicken mince, cashew paste, cream, squeezed onions, and green chilies together until very fine.",
            "Knead in spices and chill in the refrigerator for 2 hours.",
            "Mould onto skewers and grill over coal, basting with melted butter regularly."
        ]
    },
    {
        id: "recipe-fishtikka",
        title: "Tandoori Fish Tikka",
        category: "BBQ",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 10,
        servings: 3,
        description: "Fish cubes marinated in mustard, carom seeds (ajwain), lemon juice, and spices, quick grilled.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Fish Fillet (cubes, e.g. Rahu/Sole)", amount: 500, unit: "g" },
            { name: "Carom Seeds (Ajwain)", amount: 0.5, unit: "tsp" },
            { name: "Lemon Juice", amount: 2, unit: "tbsp" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Gram Flour (Besan, roasted)", amount: 1.5, unit: "tbsp" },
            { name: "Tandoori Masala", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Marinate fish cubes in lemon juice, ajwain, ginger-garlic, roasted besan, and tandoori masala for 30 minutes.",
            "Thread carefully onto skewers or place on a grill rack.",
            "Grill or bake at 220°C for 10-12 minutes until charred and cooked. Do not overcook."
        ]
    },
    {
        id: "recipe-muttonchops",
        title: "Masala Grilled Mutton Chops",
        category: "BBQ",
        difficulty: "Hard",
        prepTime: 25,
        cookTime: 30,
        servings: 4,
        description: "Mutton ribs marinated in raw papaya tenderiser and thick spicy masala, chargrilled for a smokey flavor.",
        image: "masala_grilled.png",
        ingredients: [
            { name: "Mutton Chops (Ribs)", amount: 8, unit: "pcs" },
            { name: "Raw Papaya Paste", amount: 1, unit: "tbsp" },
            { name: "Yogurt (thick)", amount: 0.5, unit: "cup" },
            { name: "Ginger-Garlic Paste", amount: 1.5, unit: "tbsp" },
            { name: "Spices (Chili, Garam Masala, Chaat Masala)", amount: 2, unit: "tbsp" },
            { name: "Oil", amount: 3, unit: "tbsp" }
        ],
        instructions: [
            "Apply papaya paste, ginger-garlic paste to chops and tenderise for 2 hours.",
            "Mix yogurt, spices, oil, coat chops, and marinate for 4 hours.",
            "Grill over charcoal or cook covered in a pan until meat is tender, then char on high flame."
        ]
    },
    {
        id: "recipe-kasturi",
        title: "Kasturi Chicken Boti",
        category: "BBQ",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        description: "Skewered chicken cubes marinated in egg yolk, cream, and roasted fenugreek leaves (Kasuri Methi).",
        image: "kasturi_chicken_boti.png",
        ingredients: [
            { name: "Chicken Boneless cubes", amount: 600, unit: "g" },
            { name: "Dried Fenugreek Leaves (Kasuri Methi)", amount: 2, unit: "tbsp" },
            { name: "Cream & Yogurt", amount: 3, unit: "tbsp" },
            { name: "Egg Yolk", amount: 1, unit: "pc" },
            { name: "White Pepper", amount: 1, unit: "tsp" }
        ],
        instructions: [
            "Crush kasuri methi between palms. Mix with cream, yogurt, egg yolk, white pepper, and salt.",
            "Marinate chicken cubes for 1.5 hours in the mixture.",
            "Skew and grill over coal for 15 minutes, ensuring the chicken stays juicy."
        ]
    },
    {
        id: "recipe-golakabab",
        title: "Juicy Gola Kabab",
        category: "BBQ",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        description: "Juicy round beef meatballs smoked with hot charcoal, skewered, and grilled.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Beef minced meat (fatty)", amount: 500, unit: "g" },
            { name: "Raw Papaya Paste", amount: 1, unit: "tbsp" },
            { name: "Fried Onions (ground)", amount: 3, unit: "tbsp" },
            { name: "Nutmeg & Mace powder", amount: 0.5, unit: "tsp" },
            { name: "Heavy Cream", amount: 1, unit: "tbsp" },
            { name: "Coal for smoking", amount: 1, unit: "pc" }
        ],
        instructions: [
            "Knead minced beef with papaya paste, cream, fried onions, and nutmeg/mace spices. Rest for 3 hours.",
            "Smoke the mixture: Place hot coal in a foil cap inside the bowl, pour a drop of oil, cover pot for 3 mins.",
            "Mould into small round balls on skewers. Grill or shallow fry in a pan."
        ]
    },

    // --- DINNER CATEGORY (10 Recipes) ---
    {
        id: "recipe-biryani",
        title: "Sindhi Chicken Biryani",
        category: "Dinner",
        difficulty: "Hard",
        prepTime: 25,
        cookTime: 45,
        servings: 4,
        description: "A legendary Pakistani aromatic rice dish layered with spicy chicken masala, fresh herbs, saffron, and lemons.",
        image: "biryani_1784531956751.png",
        ingredients: [
            { name: "Basmati Rice (soaked for 30 mins)", amount: 500, unit: "g" },
            { name: "Chicken (bone-in pieces)", amount: 500, unit: "g" },
            { name: "Onions (sliced)", amount: 3, unit: "pcs" },
            { name: "Tomatoes (chopped)", amount: 3, unit: "pcs" },
            { name: "Ginger-Garlic Paste", amount: 2, unit: "tbsp" },
            { name: "Yogurt (whisked)", amount: 1, unit: "cup" },
            { name: "Biryani Masala Powder", amount: 3, unit: "tbsp" },
            { name: "Green Chilies (slit)", amount: 4, unit: "pcs" },
            { name: "Fresh Mint & Coriander leaves", amount: 0.5, unit: "bunch" },
            { name: "Oil or Ghee", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Boil rice with bay leaf until 70% cooked (Ek Kani). Drain.",
            "Heat oil. Fry sliced onions until golden brown. Remove half.",
            "Add ginger-garlic and chicken to remaining onions. Sauté, add tomatoes, yogurt, masala, and cook for 15 minutes.",
            "Layer chicken masala and parboiled rice. Top with reserved onions, mint, and steam (Dum) for 15 minutes."
        ]
    },
    {
        id: "recipe-kheer",
        title: "Shahi Zafrani Kheer",
        category: "Dinner",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 50,
        servings: 6,
        description: "A rich, creamy Pakistani rice pudding slow-simmered with whole milk, basmati rice, cardamom, saffron, and toasted nuts.",
        image: "kheer.png",
        ingredients: [
            { name: "Whole Milk", amount: 1.5, unit: "liters" },
            { name: "Basmati Rice (broken, soaked)", amount: 0.25, unit: "cup" },
            { name: "Sugar", amount: 0.75, unit: "cup" },
            { name: "Cardamom Pods", amount: 4, unit: "pcs" },
            { name: "Saffron threads", amount: 10, unit: "pcs" },
            { name: "Almonds & Pistachios (slivered)", amount: 0.25, unit: "cup" }
        ],
        instructions: [
            "Drain soaked rice and crush slightly.",
            "Bring milk to a boil in a heavy pot along with cardamoms. Add crushed rice.",
            "Simmer for 40 minutes on low heat, stirring frequently until the rice is cooked and milk thickens.",
            "Stir in sugar, saffron, and nuts. Cook for another 10 minutes, chill in fridge, and serve cold."
        ]
    },
    {
        id: "recipe-muttonkunna",
        title: "Chinioti Mutton Kunna",
        category: "Dinner",
        difficulty: "Hard",
        prepTime: 20,
        cookTime: 150,
        servings: 6,
        description: "A famous clay-pot slow-cooked mutton shank curry, flavored with black cumin (Kala Zeera) and thickened with flour.",
        image: "chinioti_mutton_kunna.png",
        ingredients: [
            { name: "Mutton Shanks / Meat", amount: 1, unit: "kg" },
            { name: "Onions (sliced)", amount: 2, unit: "pcs" },
            { name: "Black Cumin (Kala Zeera)", amount: 1.5, unit: "tsp" },
            { name: "Ginger-Garlic Paste", amount: 2, unit: "tbsp" },
            { name: "Wheat flour (Atta)", amount: 3, unit: "tbsp" },
            { name: "Ghee", amount: 1, unit: "cup" }
        ],
        instructions: [
            "In a clay pot (Kunni), heat ghee and sauté onions until light pink.",
            "Add ginger-garlic, mutton, Kala Zeera, and salt. Sauté on high heat for 10 minutes.",
            "Add 4 cups of water. Cover tightly and seal with flour dough. Simmer on low heat for 2 hours.",
            "Open, add wheat flour slurry, cook for 10 minutes until gravy is thick and rich."
        ]
    },
    {
        id: "recipe-beefkofta",
        title: "Beef Kofta Curry",
        category: "Dinner",
        difficulty: "Hard",
        prepTime: 35,
        cookTime: 40,
        servings: 5,
        description: "Juicy minced beef meatballs simmered in a velvet-smooth, spiced onion-yogurt gravy.",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Beef minced meat (very fine)", amount: 500, unit: "g" },
            { name: "Onions (fried & crushed)", amount: 0.75, unit: "cup" },
            { name: "Yogurt (whisked)", amount: 1, unit: "cup" },
            { name: "Ginger-Garlic Paste", amount: 2, unit: "tbsp" },
            { name: "Gram flour (roasted)", amount: 2, unit: "tbsp" },
            { name: "Spices (Garam Masala, Chili, Coriander)", amount: 2, unit: "tbsp" },
            { name: "Oil", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Kofte: Mix mince, roasted besan, ginger-garlic, spices, and half of the crushed fried onions. Roll into smooth round meatballs.",
            "Gravy: Heat oil, fry ginger-garlic, add yogurt, remaining fried onions, spices, and cook for 5 minutes.",
            "Gently place meatballs in the gravy. Do not stir with a spoon; rotate the pot to coat. Add 1 cup water, cover and simmer for 25 minutes."
        ]
    },
    {
        id: "recipe-butterchicken",
        title: "Shahi Butter Chicken Handi",
        category: "Dinner",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        description: "Mouthwatering butter chicken cooked in a tomato-butter-cream gravy, served in a traditional clay handi.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Chicken (boneless cubes)", amount: 600, unit: "g" },
            { name: "Tomatoes (pureed)", amount: 4, unit: "pcs" },
            { name: "Butter", amount: 50, unit: "g" },
            { name: "Heavy Cream", amount: 4, unit: "tbsp" },
            { name: "Ginger-Garlic paste", amount: 1.5, unit: "tbsp" },
            { name: "Cashews (ground)", amount: 10, unit: "pcs" },
            { name: "Kasuri Methi (dried fenugreek)", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "Sauté chicken in 1 tbsp oil & butter with ginger-garlic paste until cooked. Set aside.",
            "In the same pan, cook tomato puree, cashew paste, and spices until oil separates.",
            "Add chicken back, stir in remaining butter, cream, and Kasuri methi. Simmer for 5 minutes."
        ]
    },
    {
        id: "recipe-whitekarahi",
        title: "Chicken White Karahi",
        category: "Dinner",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        description: "A popular rich and mild chicken karahi cooked onion-free with yogurt, fresh cream, white pepper, and green chilies.",
        image: "chicken_white_karahi.png",
        ingredients: [
            { name: "Chicken pieces", amount: 750, unit: "g" },
            { name: "Yogurt (thick)", amount: 1, unit: "cup" },
            { name: "Fresh Cream", amount: 0.5, unit: "cup" },
            { name: "Ginger-Garlic Paste", amount: 1.5, unit: "tbsp" },
            { name: "Green Chilies (sliced)", amount: 6, unit: "pcs" },
            { name: "White Pepper powder", amount: 1, unit: "tsp" },
            { name: "Cumin powder (roasted)", amount: 1, unit: "tsp" },
            { name: "Oil or Ghee", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Fry chicken in hot ghee with ginger-garlic paste until white.",
            "Add yogurt, white pepper, cumin, and salt. Cook covered on medium heat for 12 minutes until chicken is tender.",
            "Add cream and green chilies. Sauté on high heat for 3 minutes until oil separates."
        ]
    },
    {
        id: "recipe-daalmakhni",
        title: "Shahi Daal Makhni",
        category: "Dinner",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 40,
        servings: 4,
        description: "Creamy slow-cooked black lentils and red kidney beans, enriched with butter and fresh cream.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Whole Black Gram (Maash)", amount: 200, unit: "g" },
            { name: "Red Kidney Beans (Lobia)", amount: 50, unit: "g" },
            { name: "Butter / Ghee", amount: 4, unit: "tbsp" },
            { name: "Fresh Cream", amount: 4, unit: "tbsp" },
            { name: "Tomato Puree", amount: 3, unit: "tbsp" },
            { name: "Ginger-Garlic Paste", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "Boil soaked lentils and lobia with salt and turmeric until soft.",
            "Heat ghee, sauté ginger-garlic and tomato puree. Add boiled lentils and mash slightly.",
            "Add butter and cream, simmer on low heat for 15 minutes."
        ]
    },
    {
        id: "recipe-chickensajji",
        title: "Balochi Chicken Sajji",
        category: "Dinner",
        difficulty: "Hard",
        prepTime: 20,
        cookTime: 60,
        servings: 4,
        description: "Traditional Balochi dish: whole chicken skewered and roasted slowly with special sajji masala, stuffed with rice.",
        image: "https://images.unsplash.com/photo-1598182126888-c83fc0e3a774?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Whole Chicken (intact)", amount: 1.2, unit: "kg" },
            { name: "Sajji Masala spice mix", amount: 3, unit: "tbsp" },
            { name: "Lemon Juice", amount: 4, unit: "tbsp" },
            { name: "Garlic water (diluted garlic paste)", amount: 0.5, unit: "cup" },
            { name: "Boiled Basmati Rice (for stuffing)", amount: 1.5, unit: "cups" }
        ],
        instructions: [
            "Marinate whole chicken with garlic water, lemon juice, and sajji masala. Stuff the cavity with rice and tie legs.",
            "Roast on rotisserie or in a preheated oven at 180°C for 60 minutes, basting with a little oil.",
            "Sprinkle with sajji masala and serve with lemon juice."
        ]
    },
    {
        id: "recipe-beefpasanday",
        title: "Traditional Beef Pasanday",
        category: "Dinner",
        difficulty: "Hard",
        prepTime: 30,
        cookTime: 45,
        servings: 4,
        description: "Thin flattened beef fillets marinated in yogurt, raw papaya and spices, slow cooked.",
        image: "beef_pasanday.png",
        ingredients: [
            { name: "Beef fillets (flattened with mallet)", amount: 750, unit: "g" },
            { name: "Yogurt", amount: 1, unit: "cup" },
            { name: "Raw Papaya Paste", amount: 1, unit: "tbsp" },
            { name: "Poppy Seeds (Khashkhash, ground)", amount: 1, unit: "tbsp" },
            { name: "Roasted gram flour", amount: 2, unit: "tbsp" },
            { name: "Oil", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Marinate flattened beef fillets with papaya paste, yogurt, poppy seeds, and gram flour for 3 hours.",
            "Heat oil in a pan, fry onions, add marinated beef fillets.",
            "Cover and cook on low heat in its own yogurt juices for 40 minutes until tender."
        ]
    },
    {
        id: "recipe-muttonshinwari",
        title: "Mutton Shinwari Karahi",
        category: "Dinner",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 35,
        servings: 4,
        description: "Traditional tribal Shinwari recipe: tender mutton cooked with tomatoes, green chilies, and salt in mutton fat/ghee.",
        image: "gosht.png",
        ingredients: [
            { name: "Mutton pieces", amount: 1, unit: "kg" },
            { name: "Tomatoes (halved)", amount: 6, unit: "pcs" },
            { name: "Green Chilies (slit)", amount: 6, unit: "pcs" },
            { name: "Garlic Paste", amount: 1, unit: "tbsp" },
            { name: "Ginger (julienned)", amount: 2, unit: "tbsp" },
            { name: "Ghee", amount: 0.5, unit: "cup" }
        ],
        instructions: [
            "Fry mutton in ghee with salt and garlic paste for 8 minutes.",
            "Add tomatoes and 1 cup water, cover and simmer on low heat for 20 minutes until mutton is tender.",
            "Remove tomato skins, mash them, add green chilies, and sauté on high heat until dry and oil separates."
        ]
    },

    // --- DRINKS CATEGORY (10 Recipes) ---
    {
        id: "recipe-lassi",
        title: "Special Zafrani Mango Lassi",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "A thick, creamy summer cooler blending sweet ripe Pakistani mangoes with fresh thick yogurt, saffron, and ice.",
        image: "mango_lassi_1784532163330.png",
        ingredients: [
            { name: "Ripe Mangoes (peeled and diced)", amount: 2, unit: "pcs" },
            { name: "Fresh Thick Yogurt (Dahi)", amount: 2, unit: "cups" },
            { name: "Milk", amount: 0.5, unit: "cup" },
            { name: "Sugar or Honey", amount: 3, unit: "tbsp" },
            { name: "Saffron threads", amount: 6, unit: "pcs" },
            { name: "Pistachios (crushed)", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "Blend mangoes, yogurt, milk, sugar, and ice until smooth.",
            "Drizzle saffron water and pulse once.",
            "Pour into glasses, garnish with crushed pistachios."
        ]
    },
    {
        id: "recipe-mintmarg",
        title: "Refreshing Mint Margarita",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "A zesty, ice-cold mocktail blending fresh mint leaves, lemon juice, black salt, and sprite/soda.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Fresh Mint Leaves", amount: 1, unit: "cup" },
            { name: "Lemon Juice", amount: 3, unit: "tbsp" },
            { name: "Black Salt (Kala Namak)", amount: 0.5, unit: "tsp" },
            { name: "Sugar", amount: 1, unit: "tbsp" },
            { name: "Sprite / Soda water", amount: 1.5, unit: "cups" },
            { name: "Ice Cubes", amount: 1.5, unit: "cups" }
        ],
        instructions: [
            "Place mint leaves, lemon juice, black salt, sugar, and ice cubes in a blender.",
            "Blend on high until the ice is crushed to slush.",
            "Add soda water, blend for 2 seconds, and pour immediately into glasses."
        ]
    },
    {
        id: "recipe-roohafza",
        title: "Rooh Afza Lemonade",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        description: "Traditional red rose syrup drink combined with squeezed lemon juice, mint, and water.",
        image: "rooh_afza_lemonade.png",
        ingredients: [
            { name: "Rooh Afza Rose Syrup", amount: 0.5, unit: "cup" },
            { name: "Lemons (squeezed)", amount: 2, unit: "pcs" },
            { name: "Basil Seeds (Tukhm-e-Balanga, soaked)", amount: 2, unit: "tbsp" },
            { name: "Cold Water", amount: 4, unit: "cups" },
            { name: "Mint leaves", amount: 8, unit: "pcs" }
        ],
        instructions: [
            "Mix Rooh Afza, lemon juice, and cold water in a pitcher.",
            "Stir in the soaked basil seeds (Tukhm-e-Balanga).",
            "Serve poured over ice cubes, garnished with mint leaves."
        ]
    },
    {
        id: "recipe-peachtea",
        title: "Desi Peach Iced Tea",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 10,
        servings: 3,
        description: "Fresh peach reduction combined with brewed black tea, served ice-cold.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Peaches (sliced)", amount: 2, unit: "pcs" },
            { name: "Black Tea Bags", amount: 2, unit: "pcs" },
            { name: "Water", amount: 3, unit: "cups" },
            { name: "Sugar", amount: 3, unit: "tbsp" },
            { name: "Lemon juice", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "Boil sliced peaches with sugar and 1 cup water for 10 minutes until soft. Mash and strain syrup.",
            "Brew tea in remaining water, let it cool.",
            "Combine tea, peach syrup, and lemon juice. Serve over ice."
        ]
    },
    {
        id: "recipe-masalachai",
        title: "Dhaba Masala Chai",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 2,
        cookTime: 8,
        servings: 2,
        description: "Strong Pakistani milk tea brewed with cardamom, ginger, cloves, and loose black tea leaves (Patti).",
        image: "masala_chai.png",
        ingredients: [
            { name: "Water", amount: 1, unit: "cup" },
            { name: "Whole Milk", amount: 1.5, unit: "cups" },
            { name: "Loose Black Tea Patti", amount: 2, unit: "tsp" },
            { name: "Green Cardamoms (crushed)", amount: 3, unit: "pcs" },
            { name: "Fresh Ginger (sliced)", amount: 0.5, unit: "inch" },
            { name: "Sugar", amount: 2, unit: "tsp" }
        ],
        instructions: [
            "Boil water with cardamoms, ginger, and sugar.",
            "Add tea leaves (Patti), boil for 1 minute until color darkens.",
            "Add milk, bring to a boil twice (Kharra Karein), strain, and serve hot."
        ]
    },
    {
        id: "recipe-kashmirichai",
        title: "Pink Kashmiri Chai (Noon Chai)",
        category: "Drinks",
        difficulty: "Hard",
        prepTime: 5,
        cookTime: 45,
        servings: 4,
        description: "Fragrant pink tea brewed from green Kashmiri tea leaves, baking soda, cardamoms, almonds, and pistachios.",
        image: "noon_chai.png",
        ingredients: [
            { name: "Kashmiri Green Tea Leaves", amount: 2, unit: "tbsp" },
            { name: "Water (ice cold)", amount: 4, unit: "cups" },
            { name: "Baking Soda", amount: 0.25, unit: "tsp" },
            { name: "Milk", amount: 3, unit: "cups" },
            { name: "Crushed Pistachios & Almonds", amount: 2, unit: "tbsp" },
            { name: "Green Cardamoms", amount: 4, unit: "pcs" }
        ],
        instructions: [
            "Boil tea leaves, cardamoms, and baking soda in 2 cups water for 30 minutes until water turns dark green. Add cold water, beat/aerate with a ladle for 10 minutes.",
            "Pour in warm milk; the chemical reaction turns the tea a beautiful pink.",
            "Simmer for 5 minutes, strain, and serve topped with crushed nuts."
        ]
    },
    {
        id: "recipe-imli",
        title: "Imli Aloo Bukhara Sharbat",
        category: "Drinks",
        difficulty: "Medium",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        description: "Traditional tangy summer tonic made from tamarind, dried plums, black salt, and sugar.",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Tamarind (Imli, soaked)", amount: 100, unit: "g" },
            { name: "Dried Plums (Aloo Bukhara, soaked)", amount: 100, unit: "g" },
            { name: "Sugar", amount: 4, unit: "tbsp" },
            { name: "Black Salt (Kala Namak)", amount: 1, unit: "tsp" },
            { name: "Cold Water", amount: 4, unit: "cups" }
        ],
        instructions: [
            "Cook soaked imli and aloo bukhara with sugar and 2 cups water for 15 minutes. Mash and remove seeds.",
            "Blend the pulp, add cold water and black salt.",
            "Strain and serve over ice cubes."
        ]
    },
    {
        id: "recipe-sattu",
        title: "Traditional Sattu Drink",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Nutritious, cooling rural drink made of roasted barley flour, brown sugar (Jaggery), and cold water.",
        image: "sattu_drink.png",
        ingredients: [
            { name: "Roasted Barley Flour (Sattu)", amount: 4, unit: "tbsp" },
            { name: "Jaggery (Gurr) or brown sugar", amount: 3, unit: "tbsp" },
            { name: "Cold Water", amount: 2, unit: "cups" },
            { name: "Lemon juice", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "Dissolve jaggery/gurr in water.",
            "Add sattu flour and lemon juice. Mix vigorously until smooth.",
            "Serve cold with ice cubes."
        ]
    },
    {
        id: "recipe-sugarjuice",
        title: "Ganne ka Sharbat (Sugarcane)",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Traditional street beverage simulated at home using ginger, mint, lemon, and brown sugar jaggery syrup.",
        image: "ganne_sharbat.png",
        ingredients: [
            { name: "Jaggery (Gurr, grated)", amount: 0.5, unit: "cup" },
            { name: "Mint Leaves", amount: 12, unit: "pcs" },
            { name: "Fresh Ginger", amount: 0.5, unit: "inch" },
            { name: "Lemon", amount: 1, unit: "pc" },
            { name: "Cold Water", amount: 2, unit: "cups" }
        ],
        instructions: [
            "Blend grated gurr, mint leaves, ginger, lemon juice, and cold water on high speed.",
            "Strain to remove ginger fibers.",
            "Serve ice-cold. Tastes exactly like fresh sugarcane juice!"
        ]
    },
    {
        id: "recipe-pakola",
        title: "Pakola Ice Cream Soda Drink",
        category: "Drinks",
        difficulty: "Easy",
        prepTime: 2,
        cookTime: 0,
        servings: 2,
        description: "Classic Pakistani green cream soda served mixed with chilled condensed milk and ice cream.",
        image: "pakola_drink.png",
        ingredients: [
            { name: "Pakola Cream Soda Can", amount: 1, unit: "pc" },
            { name: "Cold Milk", amount: 1, unit: "cup" },
            { name: "Condensed Milk", amount: 2, unit: "tbsp" },
            { name: "Vanilla Ice Cream", amount: 2, unit: "scoops" }
        ],
        instructions: [
            "Whisk milk and condensed milk together in a glass.",
            "Pour Pakola soda halfway, stir gently.",
            "Top with a scoop of vanilla ice cream."
        ]
    },

    // --- SHAKES CATEGORY (10 Recipes) ---
    {
        id: "recipe-shake",
        title: "Pista Badam Royal Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        description: "A rich, creamy, and traditional nutritional drink packed with ground almonds, pistachios, saffron, and cardamom seeds.",
        image: "pista_badam_shake.png",
        ingredients: [
            { name: "Whole Milk", amount: 2.5, unit: "cups" },
            { name: "Almonds (soaked & peeled)", amount: 15, unit: "pcs" },
            { name: "Pistachios (soaked)", amount: 15, unit: "pcs" },
            { name: "Sugar or Honey", amount: 2, unit: "tbsp" },
            { name: "Cardamom powder", amount: 0.25, unit: "tsp" },
            { name: "Saffron threads", amount: 5, unit: "pcs" }
        ],
        instructions: [
            "Grind almonds and pistachios with 4 tbsp milk into paste.",
            "Boil remaining milk with cardamom, saffron, sugar, and nut paste. Simmer for 5 minutes. Cool and chill.",
            "Blend chilled milk with ice cream or ice cubes until frothy."
        ]
    },
    {
        id: "recipe-mangomastani",
        title: "Mango Mastani Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Thick mango milkshake topped with a large scoop of mango ice cream, cut fruits, and nuts.",
        image: "mango_mastani.png",
        ingredients: [
            { name: "Mango Pulp", amount: 1, unit: "cup" },
            { name: "Chilled Milk", amount: 1, unit: "cup" },
            { name: "Mango Ice cream", amount: 3, unit: "scoops" },
            { name: "Slivered Almonds & Pistachios", amount: 1, unit: "tbsp" },
            { name: "Mango cubes (small)", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Blend mango pulp, chilled milk, and 1 scoop mango ice cream together until very thick.",
            "Pour into glasses, leave some space at the top.",
            "Top with a scoop of mango ice cream, garnish with diced mango cubes and slivered nuts."
        ]
    },
    {
        id: "recipe-dateshake",
        title: "Khajoor & Banana Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Energy booster shake made with sweet soft Pakistani dates, ripe bananas, milk, and honey.",
        image: "khajoor_shake.png",
        ingredients: [
            { name: "Soft Dates (Khajoor, pitted)", amount: 10, unit: "pcs" },
            { name: "Ripe Bananas", amount: 2, unit: "pcs" },
            { name: "Chilled Milk", amount: 2, unit: "cups" },
            { name: "Honey", amount: 1, unit: "tbsp" },
            { name: "Almonds (chopped)", amount: 4, unit: "pcs" }
        ],
        instructions: [
            "Soak dates in warm milk for 10 minutes to soften.",
            "Add dates, sliced bananas, milk, and honey to a blender.",
            "Blend on high until dates are thoroughly mixed and drink is thick and smooth."
        ]
    },
    {
        id: "recipe-brownieshake",
        title: "Chocolate Brownie Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Decadent chocolate milkshake made with fudgy brownie chunks and vanilla/chocolate base.",
        image: "chocolate_brownie_shake.png",
        ingredients: [
            { name: "Chocolate Ice Cream", amount: 3, unit: "scoops" },
            { name: "Milk", amount: 1, unit: "cup" },
            { name: "Chocolate Brownie (crumbled)", amount: 1, unit: "pc" },
            { name: "Chocolate Syrup", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Drizzle chocolate syrup inside glasses and chill.",
            "Blend chocolate ice cream, milk, and half of the brownie crumble.",
            "Pour into glasses, top with remaining brownie crumbles."
        ]
    },
    {
        id: "recipe-strawberryrose",
        title: "Strawberry Rose Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Creamy milkshake made with fresh strawberries, rose syrup, and strawberry ice cream.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            { name: "Fresh Strawberries", amount: 8, unit: "pcs" },
            { name: "Rose Syrup", amount: 2, unit: "tbsp" },
            { name: "Strawberry Ice cream", amount: 2, unit: "scoops" },
            { name: "Cold Milk", amount: 1.5, unit: "cups" }
        ],
        instructions: [
            "Blend fresh strawberries, rose syrup, milk, and ice cream.",
            "Blend until smooth and pink.",
            "Serve topped with fresh strawberry slice."
        ]
    },
    {
        id: "recipe-coconutshake",
        title: "Creamy Coconut Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Tropical dessert shake made with fresh coconut milk, grated coconut, and vanilla base.",
        image: "creamy_coconut_shake.png",
        ingredients: [
            { name: "Coconut Milk", amount: 1, unit: "cup" },
            { name: "Whole Milk", amount: 1, unit: "cup" },
            { name: "Vanilla Ice cream", amount: 2, unit: "scoops" },
            { name: "Grated Coconut (toasted)", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Blend coconut milk, whole milk, and ice cream.",
            "Pour into glasses, garnish with toasted coconut flakes."
        ]
    },
    {
        id: "recipe-figshake",
        title: "Royal Anjeer (Fig) Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        description: "Healthy royal dry fruit shake made with sweet dried figs, honey, and cold milk.",
        image: "royal_anjeer_shake.png",
        ingredients: [
            { name: "Dried Figs (Anjeer, soaked)", amount: 8, unit: "pcs" },
            { name: "Cold Milk", amount: 2, unit: "cups" },
            { name: "Honey", amount: 1, unit: "tbsp" },
            { name: "Vanilla Ice cream", amount: 1, unit: "scoop" }
        ],
        instructions: [
            "Soak dried figs in warm water for 30 minutes, drain.",
            "Blend figs, cold milk, honey, and ice cream until completely smooth."
        ]
    },
    {
        id: "recipe-oreomalai",
        title: "Oreo Malai Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Classic Oreo chocolate cookies blended with cold milk, clotted cream (Malai), and vanilla cream.",
        image: "oreo_malai_shake.png",
        ingredients: [
            { name: "Oreo Cookies", amount: 6, unit: "pcs" },
            { name: "Fresh Cream / Malai", amount: 3, unit: "tbsp" },
            { name: "Chilled Milk", amount: 1.5, unit: "cups" },
            { name: "Vanilla Ice cream", amount: 2, unit: "scoops" }
        ],
        instructions: [
            "Crush 2 Oreo cookies for garnish.",
            "Blend remaining cookies, malai, milk, and ice cream.",
            "Pour and top with crushed Oreo cookie crumbs."
        ]
    },
    {
        id: "recipe-kulfishake",
        title: "Tandoori Kulfi Shake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Traditional malai kulfi stick blended into a milkshake, topped with falooda noodles.",
        image: "tandoori_kulfi_shake.png",
        ingredients: [
            { name: "Malai Kulfi (sliced)", amount: 2, unit: "sticks" },
            { name: "Milk", amount: 1.5, unit: "cups" },
            { name: "Cardamom powder", amount: 0.25, unit: "tsp" },
            { name: "Falooda noodles", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "Blend sliced kulfi, milk, and cardamom powder together until smooth.",
            "Pour into glasses, top with Falooda noodles, and serve cold."
        ]
    },
    {
        id: "recipe-rabrishake",
        title: "Rabri Kheer Milkshake",
        category: "Shakes",
        difficulty: "Easy",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        description: "Extremely rich milkshake made by blending thick traditional Rabri (condensed milk scrapings) with milk.",
        image: "rabri_kheer_milkshake.png",
        ingredients: [
            { name: "Rabri (clotted milk reduction)", amount: 1, unit: "cup" },
            { name: "Chilled Milk", amount: 1.5, unit: "cups" },
            { name: "Pistachios & Almonds", amount: 1.5, unit: "tbsp" },
            { name: "Kewra water", amount: 1, unit: "drop" }
        ],
        instructions: [
            "Blend Rabri, chilled milk, and a drop of kewra water until frothy.",
            "Pour, top with cardamom and finely chopped nuts. Serve chilled."
        ]
    }
];

// Active State Management
let recipesList = [];
let currentCategory = "All";
let searchQuery = "";
let selectedRecipe = null;
let currentTimer = null;
let timerInterval = null;
let timerAudio = null;
let favoriteRecipes = [];
let currentLanguage = localStorage.getItem("desi_dasterkhwan_lang") || "en";

// UI Translations
const UI_TRANSLATIONS = {
    en: {
        logoText: "Desi <span>Dasterkhwan</span>",
        langBtn: "اردو",
        addRecipe: "Add Recipe",
        adminBtn: "Admin",
        purposeTitle: "Hamara Maqsad | Our Purpose",
        purposeDesc: "Desi Dasterkhwan ka maqsad traditional Pakistani recipe heritage ko zinda rakhna aur aapke kitchen ko digital features ke sath modern banana hai. Hum chahte hain ke har koi lazeez aur behtareen khane aasaani se cook kar sake, hamare <span>dynamic servings calculator</span> aur <span>step-by-step cooking timers</span> ke sath.",
        heritageTitle: "Heritage Recipes",
        heritageDesc: "Authentic Pakistani recipes.",
        smartToolsTitle: "Smart Tools",
        smartToolsDesc: "Servings & live step timers.",
        heroSubtitle: "Traditional Flavors, Modern Kitchen",
        heroTitle: "Pakistani <span>Dishes Ki Recipes</span>",
        heroDesc: "Apne pasandeeda Pakistani khanon ki recipes dhoondein aur ghor se cook kijiye hamare dynamic calculator aur cooking timers ke sath.",
        searchPlaceholder: "Biryani, Nihari, Karahi ya koi bhi ingredient search karein...",
        noRecipes: "Koi recipe nahi mili. Kuch aur search kijiye!",
        prepTime: "Prep Time",
        cookTime: "Cook Time",
        difficulty: "Difficulty",
        ingredients: "Ingredients",
        instructions: "Instructions",
        servingsText: "Servings",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        categories: {
            "All": "Our Purpose",
            "Breakfast": "Breakfast",
            "Lunch": "Lunch",
            "BBQ": "BBQ",
            "Dinner": "Dinner",
            "Drinks": "Drinks",
            "Shakes": "Shakes",
            "Feedback": "Feedback",
            "AIAssistant": "AI Assistant",
            "Admin": "Admin Portal"
        }
    },
    ur: {
        logoText: "دیسی <span>دسترخوان</span>",
        langBtn: "English",
        addRecipe: "ریسپى شامل کریں",
        adminBtn: "ایڈمن",
        purposeTitle: "ہمارا مقصد",
        purposeDesc: "دیسی دسترخوان کا مقصد روایتی پاکستانی پکوانوں کے ورثے کو زندہ رکھنا اور آپ کے باورچی خانے کو ڈیجیٹل خصوصیات کے ساتھ جدید بنانا ہے۔ ہم چاہتے ہیں کہ ہر کوئی ہمارے <span>ڈائنامک سرونگ کیلکولیٹر</span> اور <span>مرحلہ وار کوکنگ ٹائمرز</span> کے ساتھ آسانی سے پکا سکے۔",
        heritageTitle: "روایتی پکوان",
        heritageDesc: "اصیل پاکستانی ذائقے۔",
        smartToolsTitle: "جدید ٹولز",
        smartToolsDesc: "سرونگز اور لائیو ٹائمر۔",
        heroSubtitle: "روایتی ذائقے، جدید باورچی خانہ",
        heroTitle: "پاکستانی <span>کھانوں کی ریسپیز</span>",
        heroDesc: "اپنے پسندیدہ پاکستانی کھانوں کی ریسپیز تلاش کریں اور ہمارے ڈائنامک کیلکولیٹر اور کوکنگ ٹائمرز کے ساتھ آسانی سے پکائیں۔",
        searchPlaceholder: "بریانی، نہاری، کڑاہی یا کوئی بھی چیز تلاش کریں...",
        noRecipes: "کوئی ریسپی نہیں ملی۔ کچھ اور تلاش کریں!",
        prepTime: "تیاری کا وقت",
        cookTime: "پکانے کا وقت",
        difficulty: "مشکل کا درجہ",
        ingredients: "اجزاء",
        instructions: "پکانے کا طریقہ",
        servingsText: "افراد کی سرونگ",
        easy: "آسان",
        medium: "درمیانہ",
        hard: "مشکل",
        categories: {
            "All": "ہمارا مقصد",
            "Breakfast": "ناشتہ",
            "Lunch": "دوپہر کا کھانا",
            "BBQ": "باربی کیو",
            "Dinner": "رات کا کھانا",
            "Drinks": "مشروبات",
            "Shakes": "شیکس",
            "Feedback": "رائے / تاثرات",
            "AIAssistant": "اے آئی اسسٹنٹ",
            "Admin": "ایڈمن پورٹل"
        }
    }
};

const INGREDIENT_TRANSLATIONS = {
    "whole milk": "دودھ", "milk": "دودھ", "sugar": "چینی", "water": "پانی", "rice": "چاول",
    "chicken": "چکن", "beef": "بیف", "mutton": "مٹن", "onions": "پیاز", "onion": "پیاز",
    "tomatoes": "ٹماٹر", "tomato": "ٹماٹر"
};

const UNIT_TRANSLATIONS = {
    "g": "گرام",
    "kg": "کلو",
    "cup": "کپ",
    "cups": "کپ",
    "pc": "عدد",
    "pcs": "عدد",
    "tbsp": "کھانے کا چمچ",
    "tsp": "چائے کا چمچ",
    "liter": "لیٹر",
    "liters": "لیٹر",
    "ml": "ملی لیٹر",
    "pinch": "چٹکی",
    "pinches": "چٹکی",
    "bunch": "گٹھی",
    "drop": "قطرہ",
    "drops": "قطرے"
};

const RECIPE_TRANSLATIONS = {
    // --- BREAKFAST ---
    "recipe-halwapuri": {
        title: "حلوہ پوری چنے",
        description: "اتوار کا خاص لاہوری ناشتہ: نرم و خستہ پوری، سوجی کا خوشبودار حلوہ اور چٹپٹے چنے آلو کا سالن۔",
        ingredients: [
            "میدہ (پوریوں کے لیے)",
            "سوجی (حلوہ کے لیے)",
            "چینی",
            "ابلے ہوئے چنے",
            "ابلے آلو (کٹے ہوئے)",
            "گھی / تیل",
            "چھوٹی الائچی",
            "مصالحے (سرخ مرچ، ہلدی، زیرا)"
        ],
        instructions: [
            "پوری: میدے میں 1 کھانے کا چمچ تیل، نمک اور پانی ڈال کر گوندھ لیں، چھوٹے پیڑے بنا کر گرم تیل میں فرائی کریں۔",
            "حلوہ: 0.5 کپ گھی گرم کر کے الائچی اور سوجی 6 منٹ بھونیں، پھر شیرہ ڈال کر گاڑھا ہونے تک پکائیں۔",
            "چنے: پیاز اور مصالحے بھون کر ابلے چنے، آلو اور 1 کپ پانی شامل کریں اور 15 منٹ ہلکی آنچ پر پکائیں۔"
        ]
    },
    "recipe-nihari": {
        title: "خصوصی بیف نہاری",
        description: "ہلکی آنچ پر رات بھر پکی ہوئی بیف کی گاڑھی گریوی، ادرک، لیموں اور ہری مرچوں کے ساتھ سجی ہوئی۔",
        ingredients: [
            "بیف کی بونگ ہڈی کے ساتھ",
            "نہاری مصالحہ مکس (سونف، ادرک، پیپلی)",
            "گندم کا آٹا",
            "ادرک لہسن کا پیسٹ",
            "پیاز (باریک کٹی ہوئی)",
            "تیل یا گھی"
        ],
        instructions: [
            "دیگچی میں گھی گرم کریں، پیاز شامل کریں اور نرم ہونے تک بھونیں۔",
            "ادرک لہسن کا پیسٹ اور بیف شامل کریں۔ تیز آنچ پر 5 منٹ تک بھونیں۔",
            "نہاری مصالحہ اور 6 کپ پانی شامل کریں۔ ڈھانپ کر ہلکی آنچ پر 3 گھنٹے تک پکائیں۔",
            "آٹے کو پانی میں گھول کر سالن میں ڈالیں اور چمچ چلاتے رہیں۔ گاڑھا ہونے تک 15 منٹ مزید پکائیں۔"
        ]
    },
    "recipe-andashami": {
        title: "انڈا شامی برگر",
        description: "شامی کباب، انڈا، گوبھی اور چٹنی کے ساتھ سجا ہوا روایتی پاکستانی اسٹریٹ برگر۔",
        ingredients: [
            "برگر بن",
            "تلاش شدہ شامی کباب",
            "انڈے",
            "بند گوبھی (باریک کٹی)",
            "پیاز کے چھلے",
            "پودینہ اور دھنیا چٹنی",
            "تلی کے لیے تیل"
        ],
        instructions: [
            "شامی کباب کو درمیانی آنچ پر سنہری ہونے تک فرائی کریں۔",
            "انڈوں کو نمک کے ساتھ پھینٹ کر پین میں فرائی کر لیں۔",
            "برگر بن کو پین میں مکھن یا تیل لگا کر ہلکا سا سیک لیں۔",
            "بن پر پودینے کی چٹنی لگائیں، شامی کباب رکھیں، پیاز، گوبھی، فرائی انڈا رکھیں اور گرم گرم پیش کریں۔"
        ]
    },
    "recipe-lachaparatha": {
        title: "لچھا پراٹھا اور اوملیٹ",
        description: "گھی سے پکا ہوا تہہ دار خستہ روایتی لچھا پراٹھا، مصالحے دار اوملیٹ اور کڑک چائے کے ساتھ۔",
        ingredients: [
            "گندم کے آٹے کے پیڑے",
            "گھی (تہوں اور تلی کے لیے)",
            "انڈے",
            "پیاز (باریک کٹا)",
            "ہری مرچیں (کٹی ہوئی)",
            "تازہ دھنیا (کٹا ہوا)"
        ],
        instructions: [
            "پیڑے کو بیلیں، گھی لگائیں، آٹا چھڑکیں، پنکھے کی طرح طے کریں، گول پیڑا بنا کر دوبارہ بیلیں۔",
            "تویہ پر گھی لگا کر پراٹھے کو دونوں طرف سے سنہری اور کرسپی ہونے تک سیکیں۔",
            "انڈے، پیاز، ہری مرچ، دھنیا، نمک اور سرخ مرچ پھینٹ کر گھی میں اوملیٹ بنا لیں۔"
        ]
    },
    "recipe-siripaye": {
        title: "مٹن سری پائے",
        description: "مٹن کے پائے اور سری کا روایتی گاڑھا شوربہ جو اپنی لیس دار گریوی اور افادیت کے لیے مشہور ہے۔",
        ingredients: [
            "مٹن کے پائے",
            "مٹن سری کا گوشت",
            "پیاز (کٹے ہوئے)",
            "دہی",
            "ادرک لہسن کا پیسٹ",
            "مصالحے (دھنیا، ہلدی، گرم مصالحہ)",
            "تیل / گھی"
        ],
        instructions: [
            "پائے اچھی طرح دھو لیں۔ ہلدی اور لہسن کے پانی میں ابال کر پہلا جھاگ ہٹا دیں۔",
            "الگ دیگچی میں تیل گرم کریں، پیاز سنہری کریں، ادرک لہسن، گوشت، پائے، مصالحے اور دہی ڈال کر اچھی طرح بھونیں۔",
            "8 کپ پانی شامل کریں۔ ڈھانپ کر ہلکی آنچ پر 4-5 گھنٹے پائے بالکل نرم ہونے تک پکائیں۔"
        ]
    },
    "recipe-alooparatha": {
        title: "چٹپٹا آلو پراٹھا",
        description: "مکھن یا گھی سے پکا ہوا گندم کا پراٹھا جس میں چٹپٹے آلوؤں کا بھرتا شامل ہے۔",
        ingredients: [
            "ابلے اور میش کیے آلو",
            "آٹے کے پیڑے",
            "ہری مرچیں (باریک کٹی)",
            "بھنا کٹا زیرا",
            "دھنیا پاؤڈر",
            "گھی / مکھن"
        ],
        instructions: [
            "میش آلوؤں میں ہری مرچیں، زیرا، دھنیا، نمک اور سرخ مرچ مکس کریں۔",
            "دو چھوٹی روٹیاں بییلیں، ایک پر آلو کی فلنگ رکھیں، دوسری روٹی اوپر رکھ کر کنارے بند کر دیں۔",
            "تویہ پر گھی/مکھن لگا کر دونوں طرف سے کرسپی ہونے تک سیکیں۔ دہی کے ساتھ پیش کریں۔"
        ]
    },
    "recipe-lahorichana": {
        title: "لاہوری چنا سالن",
        description: "لاہور کے مشہور مصالحے دار چنے کا سالن، کالی مرچ اور میٹھے سوڈے کے ساتھ پکا ہوا نرم و ملائم سالن۔",
        ingredients: [
            "سفید چنے (رات بھر بھیگے ہوئے)",
            "پیاز کا پیسٹ",
            "ادرک لہسن پیسٹ",
            "دہی",
            "کالی مرچ (پسی ہوئی)",
            "میٹھی سوڈا",
            "تیل"
        ],
        instructions: [
            "چنوں کو میٹھے سوڈے کے ساتھ پانی میں بالکل نرم ہونے تک ابال لیں۔",
            "پین میں تیل گرم کریں، پیاز کا پیسٹ بھونیں، ادرک لہسن، مصالحے اور دہی ڈال کر تیل الگ ہونے تک بھونیں۔",
            "ابلے چنے ان کے پانی سمیت شامل کریں اور 15 منٹ دھیمی آنچ پر دم دیں۔ کالی مرچ سے سجائیں۔"
        ]
    },
    "recipe-khageena": {
        title: "پاکستانی انڈا خاگینہ",
        description: "پیاز، ٹماٹر، ہری مرچوں اور تازے دھنیے کے ساتھ فرائی انڈے کی سوغات۔",
        ingredients: [
            "انڈے",
            "پیاز (باریک کٹی)",
            "ٹماٹر (کٹا ہوا)",
            "ہری مرچ (کٹی ہوئی)",
            "ہلدی پاؤڈر",
            "سرخ مرچ پاؤڈر",
            "مکھن یا تیل"
        ],
        instructions: [
            "پین میں تیل یا مکھن گرم کریں۔ کٹی پیاز نرم ہونے تک بھونیں۔",
            "ٹماٹر، ہری مرچ، ہلدی، سرخ مرچ اور نمک ڈال کر 3 منٹ پکائیں۔",
            "انڈے پھینٹ کر شامل کریں، ہلکی آنچ پر اسکریمل کریں۔ دھنیے سے سجا کر پراٹھے کے ساتھ پیش کریں۔"
        ]
    },
    "recipe-haleembreakfast": {
        title: "شاہی بیف حلیم",
        description: "گندم، جو، دالوں اور بیف کو گھوٹ کر بنائی گئی روایتی لذیذ اور گاڑھی حلیم۔",
        ingredients: [
            "بیف (بغیر ہڈی)",
            "حلیم اناج مکس (گندم، جو، دالیں)",
            "ادرک لہسن پیسٹ",
            "حلیم مصالحہ",
            "پیاز (تلی ہوئی، تڑکے کے لیے)",
            "گھی / تیل"
        ],
        instructions: [
            "اناج کو رات بھر بھیگو کر نرم ہونے تک ابالیں اور ہلکا بلینڈ کر لیں۔",
            "بیف کو مصالحوں، تیل اور ادرک لہسن کے ساتھ گلنے تک پکائیں اور ریشے کر لیں۔",
            "گوشت اور اناج کو ملا کر دھیمی آنچ پر 30 منٹ تک گھوٹا لگائیں۔ تلی پیاز اور گرم گھی کا تڑکا لگائیں۔"
        ]
    },
    "recipe-keemaparatha": {
        title: "بیف قیمہ پراٹھا",
        description: "مصالحے دار بیف قیمے سے بھرا ہوا خستہ پراٹھا، رائےتے کے ساتھ پیش کریں۔",
        ingredients: [
            "بیف قیمہ (پکا اور خشک)",
            "آٹے کے پیڑے",
            "گرم مصالحہ پاؤڈر",
            "پیاز (باریک کٹی)",
            "گھی / مکھن"
        ],
        instructions: [
            "قیمے میں کٹی پیاز، گرم مصالحہ، نمک اور دھنیا مکس کریں۔",
            "روٹی کے اندر قیمے کی فلنگ رکھیں، کنارے سیل کریں اور ہلکا سا بیل لیں۔",
            "تویہ پر گھی لگا کر گولڈن اور کرسپی ہونے تک فرائی کریں۔"
        ]
    },

    // --- LUNCH ---
    "recipe-karahi": {
        title: "پشاور چکن کڑاہی",
        description: "ٹماٹر، ادرک اور ہری مرچوں کے ساتھ لوہے کی کڑاہی میں بغیر پیاز کے پکا ہوا مشہور چکن پکوان۔",
        ingredients: [
            "چکن (کڑاہی کٹ)",
            "ٹماٹر (دو ٹکڑے)",
            "ادرک (باریک کٹی)",
            "لہسن (پسا ہوا)",
            "ہری مرچیں",
            "کالی مرچ (کٹی ہوئی)",
            "سرخ مرچ فلیکس",
            "تیل"
        ],
        instructions: [
            "کڑاہی میں تیل گرم کریں۔ چکن کو تیز آنچ پر 6 منٹ فرائی کریں۔",
            "لہسن اور ادرک شامل کر کے 2 منٹ بھونیں۔",
            "ٹماٹر کے ٹکڑے اوپر رکھ کر 8 منٹ دم دیں۔ چھلکے اتار کر ٹماٹروں کو گریوی میں میش کر لیں۔",
            "ہری مرچیں اور کالی مرچ شامل کریں۔ تیل الگ ہونے تک تیز آنچ پر بھونیں۔"
        ]
    },
    "recipe-golgappa": {
        title: "چٹپٹے گول گپے",
        description: "کرسپی گول گپے جن میں چنے آلو بھرے ہوں اور چٹپٹے کھٹے پودینے کے پانی کے ساتھ کھائے جائیں۔",
        ingredients: [
            "سوجی",
            "میدہ",
            "ابلے چنے اور آلو",
            "چاٹ مصالحہ",
            "املی کا گودا",
            "پودینہ اور دھنیا",
            "تلی کے لیے تیل"
        ],
        instructions: [
            "سوجی اور میدے کو سخت گوندھ لیں۔ 30 منٹ بعد باریک بیل کر گول گپے کاٹیں اور کرسپی ہونے تک فرائی کریں۔",
            "پانی: پودینہ، دھنیا، املی، ہری مرچ اور ٹھنڈا پانی بلینڈ کر لیں۔",
            "گول گپے میں سوراخ کریں، چنے آلو بھریں اور کھٹے پانی میں ڈبو کر کھائیں۔"
        ]
    },
    "recipe-chickenpulao": {
        title: "یخنی چکن پلاؤ",
        description: "خوشبودار مصالحوں کی یخنی میں پکے چاول اور چکن کا روایتی لذیذ پلاؤ۔",
        ingredients: [
            "باسمتی چاول (بھیگے ہوئے)",
            "چکن کے ٹکڑے",
            "پیاز (سلائس)",
            "دہی",
            "ثابت گرم مصالحہ",
            "ادرک لہسن پیسٹ",
            "تیل"
        ],
        instructions: [
            "یخنی: چکن کو پانی، ثابت مصالحے، ادھا پیاز اور لہسن کے ساتھ ابال کر یخنی چھان لیں۔",
            "تیل میں باقی پیاز سنہری کریں، ادرک لہسن، چکن اور دہی ڈال کر 5 منٹ بھونیں۔",
            "یخنی شامل کریں، ابال آنے پر چاول ڈالیں اور پانی خشک ہونے پر 15 منٹ دم دیں۔"
        ]
    },
    "recipe-daalchawal": {
        title: "تڑکے والی دال چاول",
        description: "سادہ ابلے چاولوں کے ساتھ روایتی پیلی مونگ اور مسور کی لہسن زیرا تڑکے والی دال۔",
        ingredients: [
            "مونگ اور مسور دال",
            "باسمتی چاول",
            "لہسن کے جوئے (سلائس)",
            "زیرا",
            "ہلدی اور مرچ پاؤڈر",
            "گھی / تیل"
        ],
        instructions: [
            "دالوں کو ہلدی، سرخ مرچ اور نمک کے ساتھ گلنے تک ابال لیں۔",
            "چاولوں کو نمکین پانی میں ابال کر نتھار لیں۔",
            "تڑکا: گھی میں لہسن اور زیرا سنہری کر کے دال کے اوپر ڈالیں۔"
        ]
    },
    "recipe-alookeema": {
        title: "آلو قیمہ مصالحہ",
        description: "قیمے اور آلو کا پیاز ٹماٹر کی گریوی میں بھنا ہوا لذیذ سالن۔",
        ingredients: [
            "بیف یا مٹن قیمہ",
            "آلو (ٹوکڑے کٹے)",
            "پیاز (کٹی ہوئی)",
            "ٹماٹر (کٹا ہوا)",
            "ادرک لہسن پیسٹ",
            "تیل"
        ],
        instructions: [
            "پیاز سنہری کریں، ادرک لہسن پیسٹ اور قیمہ ڈال کر بھونیں۔",
            "ٹماٹر اور مصالحے شامل کر کے بھونیں۔",
            "آلو اور 0.5 کپ پانی ڈال کر ڈھانپیں اور 15 منٹ ہلکی آنچ پر پکائیں۔"
        ]
    },
    "recipe-bhindimasala": {
        title: "بھنڈی مصالحہ",
        description: "پیاز اور ٹماٹر کے چٹپٹے مصالحے میں تلی ہوئی مزیدار بھنڈیاں۔",
        ingredients: [
            "بھنڈی (گول کٹی)",
            "پیاز (سلائس)",
            "ٹماٹر (سلائس)",
            "ہری مرچیں",
            "ہلدی اور مرچ پاؤڈر",
            "تیل"
        ],
        instructions: [
            "2 چمچ تیل میں بھنڈی ہلکی فرائی کر کے الگ نکال لیں۔",
            "باقی تیل میں پیاز اور ٹماٹر نرم کریں، مصالحے شامل کریں۔",
            "تلی بھنڈی شامل کر کے 8 منٹ ہلکی آنچ پر دم دیں۔"
        ]
    },
    "recipe-chickenjalfrezi": {
        title: "ریسٹورنٹ اسٹائل چکن جلفریزی",
        description: "شملہ مرچ، پیاز اور ٹماٹر کی سوس میں پکا ہوا مزیدار بونس چکن پکوان۔",
        ingredients: [
            "بونلیس چکن (پٹیاں)",
            "شملہ مرچ (کیوب)",
            "پیاز (کیوب)",
            "ٹماٹو پیسٹ اور کیچپ",
            "سویا سوس اور سرکہ",
            "تیل"
        ],
        instructions: [
            "پیاز اور شملہ مرچ کو 2 منٹ فرائی کر کے نکال لیں۔",
            "چکن کو ادرک لہسن کے ساتھ سفید ہونے تک بھونیں۔",
            "کیچپ، سویا سوس، سرکہ اور مصالحے ڈال کر 8 منٹ پکائیں، پھر سبزیاں شامل کریں۔"
        ]
    },
    "recipe-mixveg": {
        title: "ڈھابہ مکس سبزی",
        description: "موسمی سبزیوں (گاجر، مٹر، آلو، گوبھی) کا ملا جلا تڑکے دار خشک سالن۔",
        ingredients: [
            "مکس سبزیاں (گاجر، مٹر، آلو، گوبھی)",
            "پیاز",
            "ٹماٹر",
            "ادرک لہسن پیسٹ",
            "مصالحے (ہلدی، مرچ، زیرا)",
            "تیل"
        ],
        instructions: [
            "پیاز سنہری کر کے ادرک لہسن اور ٹماٹر بھونیں۔",
            "مکس سبزیاں اور مصالحے شامل کر کے 5 منٹ بھونیں۔",
            "ڈھانپ کر بغیر پانی کے 15-20 منٹ دھیمی آنچ پر پکائیں۔"
        ]
    },
    "recipe-kadhipakora": {
        title: "پنجابی کڑھی پکوڑہ",
        description: "دہی اور بیسن کی کھٹی کڑھی، تلے ہوئے پیاز کے پکوڑوں اور لہسن زیرا تڑکے کے ساتھ۔",
        ingredients: [
            "کھٹا دہی",
            "بیسن (کڑھی کے لیے)",
            "بیسن (پکوڑوں کے لیے)",
            "پیاز",
            "زیرا، رائی، کڑی پتہ",
            "تلی کے لیے تیل"
        ],
        instructions: [
            "دہی اور بیسن کو 4 کپ پانی میں پھینٹ کر ابالیں اور 45 منٹ دھیمی آنچ پر پکائیں۔",
            "بیسن، پیاز اور مصالحوں کے پکوڑے تال لیں۔",
            "پکوڑے کڑھی میں ڈالیں اور گھی، زیرا، رائی، کڑی پتہ کا تڑکا لگائیں۔"
        ]
    },
    "recipe-saagroti": {
        title: "سرسوں کا ساگ اور مکئی کی روٹی",
        description: "مکھن کے ساتھ پکا ہوا روایتی سرسوں کا ساگ اور گرم گرم مکئی کی روٹی۔",
        ingredients: [
            "سرسوں کا ساگ",
            "پالک",
            "مکئی کا آٹا (روٹی کے لیے)",
            "ہری مرچیں",
            "لہسن اور ادرک",
            "مکھن یا گھی"
        ],
        instructions: [
            "ساگ، پالک اور ہری مرچیں ابال کر میش کر لیں اور 2 چمچ مکئی کا آٹا شامل کریں۔",
            "مکھن میں لہسن ادرک بھون کر ساگ شامل کریں۔",
            "مکئی کے آٹے کی روٹیاں بنا کر تویہ پر سیکیں اور مکھن کے ساتھ پیش کریں۔"
        ]
    },

    // --- BBQ ---
    "recipe-kabab": {
        title: "روایتی بیف سیخ کباب",
        description: "کوئلوں پر سینکے ہوئے مسالے دار بیف کے قیمے کے جوسی سیخ کباب۔",
        ingredients: [
            "بیف قیمہ (20% چربی)",
            "پیاز (خشک نچوڑی)",
            "ادرک لہسن پیسٹ",
            "ہری مرچیں",
            "گرم مصالحہ اور دھنیا",
            "مکھن (پالش کے لیے)"
        ],
        instructions: [
            "قیمہ، پیاز اور ادرک لہسن باریک پیس لیں۔",
            "مصالحے ملا کر 2 گھنٹے فریج میں رکھیں۔",
            "سیخوں پر لگا کر کوئلوں پر 12 منٹ گرل کریں اور مکھن لگائیں۔"
        ]
    },
    "recipe-tikkaboti": {
        title: "چکن تکہ بوٹی",
        description: "تندوری مصالحے، دہی اور لیموں میں میرینیٹ کی ہوئی کوئلوں پر گرل کی ہوئی چکن بوٹی۔",
        ingredients: [
            "چکن بونلیس بوٹی",
            "گاڑھا دہی",
            "تکہ مصالحہ پاؤڈر",
            "لیموں کا رس",
            "ادرک لہسن پیسٹ",
            "تیل"
        ],
        instructions: [
            "چکن کو دہی، تکہ مصالحہ، لیموں اور ادرک لہسن میں 1 گھنٹہ میرینیٹ کریں۔",
            "سیخوں پر لگا کر کوئلوں یا اوون میں 200°C پر گرل کریں۔",
            "تیل لگا کر 15-20 منٹ پکائیں تاکہ جوسی رہیں۔"
        ]
    },
    "recipe-malaiboti": {
        title: "ریشمی ملائی بوٹی",
        description: "ملائی، دہی اور سفید مرچ کے ساتھ میرینیٹ کی ہوئی انتہائی نرم چکن ملائی بوٹی۔",
        ingredients: [
            "چکن بونلیس",
            "تازہ ملائی",
            "دہی",
            "ہری مرچ ادرک پیسٹ",
            "سفید مرچ اور الائچی",
            "مکھن"
        ],
        instructions: [
            "چکن کو ملائی، دہی، سفید مرچ اور الائچی پاؤڈر میں 2 گھنٹے میرینیٹ کریں۔",
            "سیخوں پر پرو کر درمیانی آنچ پر گرل کریں۔",
            "آخری لمحے پر مکھن لگائیں اور پودینہ چٹنی کے ساتھ پیش کریں۔"
        ]
    },
    "recipe-biharikabab": {
        title: "مصالحے دار بیف بہاری کباب",
        description: "کچے پپیتے کے پیسٹ اور ریشے دار بیف پارچوں سے تیار کردہ کوئلے کے بہاری کباب۔",
        ingredients: [
            "بیف کے باریک پارچے",
            "کچا پپیتا پیسٹ",
            "دہی",
            "سرشوں کا تیل",
            "بہاری مصالحہ مکس",
            "تلی پیاز"
        ],
        instructions: [
            "گوشت پر کچا پپیتا لگا کر 1 گھنٹہ رکھیں۔",
            "سرسوں کا تیل، دہی، تلی پیاز اور بہاری مصالحہ ملا کر رات بھر میرینیٹ کریں۔",
            "سیخوں پر زیگ زیگ لگا کر کوئلوں پر سرخ ہونے تک گرل کریں۔"
        ]
    },
    "recipe-chaplikabab": {
        title: "پشاور چپلی کباب",
        description: "انار دانے اور قیمے سے تیار کردہ روایتی پشاور کے کرسپی فرائی کباب۔",
        ingredients: [
            "بیف قیمہ چربی والا",
            "ٹماٹر (کٹا ہوا)",
            "مکئی کا آٹا",
            "انار دانہ پیسا ہوا",
            "ثابت دھنیا کٹا",
            "انڈا",
            "تلی کے لیے تیل / چربی"
        ],
        instructions: [
            "قیمے میں تمام مصالحے، ٹماٹر، مکئی کا آٹا اور انڈا ملا کر اچھی طرح گوندھ لیں۔",
            "بڑے پتلے کباب بنا کر ایک طرف ٹماٹر کا سلائس چپکائیں۔",
            "گرما گرم تیل میں کرسپی سنہری ہونے تک فرائی کریں۔"
        ]
    },
    "recipe-reshmikabab": {
        title: "چکن ریشمی کباب",
        description: "کاجو پیسٹ اور بالائی کے ساتھ تیار کردہ ریشمی ملائم چکن کباب۔",
        ingredients: [
            "چکن قیمہ",
            "کاجو پیسٹ",
            "تازہ ملائی",
            "پیاز نچوڑی ہوئی",
            "ہری مرچیں",
            "مکھن"
        ],
        instructions: [
            "چکن قیمہ، کاجو پیسٹ، ملائی، پیاز اور ہری مرچیں باریک بلینڈ کر لیں۔",
            "مصالحے ملا کر 2 گھنٹے ٹھنڈا کریں۔",
            "سیخوں پر لگا کر کوئلوں پر گرل کریں اور مکھن لگائیں۔"
        ]
    },
    "recipe-fishtikka": {
        title: "تندوری فش تکہ",
        description: "اجوائن، لیموں اور تندوری مصالحے میں میرینیٹ کی ہوئی کرسپی گرلڈ مچھلی۔",
        ingredients: [
            "مچھلی کے کیوب (روہو یا سول)",
            "اجوائن",
            "لیموں کا رس",
            "ادرک لہسن پیسٹ",
            "بھنا بیسن",
            "تندوری مصالحہ"
        ],
        instructions: [
            "مچھلی کے ٹکڑوں پر لیموں، اجوائن، ادرک لہسن، بیسن اور تندوری مصالحہ 30 منٹ لگائیں۔",
            "سیخوں پر لگا کر یا گرل پر 220°C پر 10-12 منٹ پکائیں۔"
        ]
    },
    "recipe-muttonchops": {
        title: "مصالحہ گرلڈ مٹن چاپ",
        description: "کچے پپیتے اور گاڑھے مصالحے میں میرینیٹ کی ہوئی کوئلوں پر گرل مٹن چانپیں۔",
        ingredients: [
            "مٹن چانپیں",
            "کچا پپیتا پیسٹ",
            "گاڑھا دہی",
            "ادرک لہسن پیسٹ",
            "مصالحے (مرچ، گرم مصالحہ، چاٹ مصالحہ)",
            "تیل"
        ],
        instructions: [
            "چانپوں پر پپیتا اور ادرک لہسن لگا کر 2 گھنٹے رکھیں۔",
            "دہی اور مصالحے ملا کر 4 گھنٹے میرینیٹ کریں۔",
            "کوئلوں پر نرم ہونے تک گرل کریں۔"
        ]
    },
    "recipe-kasturi": {
        title: "کستوری چکن بوٹی",
        description: "قصوری میتھی اور بالائی کے ساتھ میرینیٹ کی ہوئی لذیذ چکن بوٹی۔",
        ingredients: [
            "چکن بونلیس",
            "قصوری میتھی",
            "کریم اور دہی",
            "انڈے کی زردی",
            "سفید مرچ"
        ],
        instructions: [
            "قصوری میتھی، کریم، دہی، زردی اور سفید مرچ مکس کریں۔",
            "چکن بوٹیوں کو 1.5 گھنٹے میرینیٹ کریں۔",
            "سیخوں پر لگا کر کوئلوں پر 15 منٹ پکائیں۔"
        ]
    },
    "recipe-golakabab": {
        title: "جوسی گولا کباب",
        description: "کوئلے کا دھواں دیے گئے گول نرم اور جوسی بیف گولا کباب۔",
        ingredients: [
            "بیف قیمہ",
            "کچا پپیتا پیسٹ",
            "تلی پیاز پسی ہوئی",
            "جائفل جاوتری پاؤڈر",
            "ملائی",
            "دھواں دینے کے لیے کوئلہ"
        ],
        instructions: [
            "قیمے میں پپیتا، ملائی، پیاز اور مصالحے ملا کر 3 گھنٹے رکھیں۔",
            "گرم کوئلے پر تیل ڈال کر 3 منٹ دھواں دیں۔",
            "گول کباب بنا کر فرائی یا گرل کریں۔"
        ]
    },

    // --- DINNER ---
    "recipe-biryani": {
        title: "سندھی چکن بریانی",
        description: "خوشبودار چاولوں اور چکن کا تہہ دار مسالے دار روایتی پکوان۔",
        ingredients: [
            "باسمتی چاول (30 منٹ بھیگے)",
            "چکن (ہڈی والا)",
            "پیاز (سلائس)",
            "ٹماٹر (کٹے ہوئے)",
            "ادرک لہسن پیسٹ",
            "دہی (پھینٹا ہوا)",
            "بریانی مصالحہ پاؤڈر",
            "ہری مرچیں",
            "تازہ پودینہ اور دھنیا",
            "تیل یا گھی"
        ],
        instructions: [
            "چاولوں کو 30 منٹ کے لیے بھگو دیں اور آدھا (ایک کنی) ابال لیں۔",
            "ایک پین میں پیاز سنہری کریں، چکن، ٹماٹر اور بریانی مصالحہ ڈال کر بھونیں۔",
            "چکن گلنے تک پکائیں اور دہی شامل کریں۔",
            "دیگچی میں چاول اور چکن سالن کی تہیں لگائیں، دھنیا، پودینہ اور زردہ رنگ ڈالیں۔",
            "ہلکی آنچ پر 15 منٹ دم دیں اور گرما گرم پیش کریں۔"
        ]
    },
    "recipe-kheer": {
        title: "شاہی زعفرانی کھیر",
        description: "دودھ اور چاول کو دھیمی آنچ پر پکا کر زعفران اور میووں سے سجائی گئی کھیر۔",
        ingredients: [
            "خالص دودھ",
            "باسمتی چاول (ٹوٹا، بھیگا ہوا)",
            "چینی",
            "چھوٹی الائچی",
            "زعفران",
            "بادام اور پستے"
        ],
        instructions: [
            "بھیگے چاول نتھار کر ہلکے کرش کر لیں۔",
            "بھاری برتن میں دودھ اور الائچی ابالیں، چاول شامل کریں۔",
            "40 منٹ دھیمی آنچ پر مسلسل چمچ چلاتے ہوئے گاڑھا ہونے تک پکائیں۔",
            "چینی، زعفران اور میوے ڈال کر 10 منٹ مزید پکائیں۔ ٹھنڈا کر کے پیش کریں۔"
        ]
    },
    "recipe-muttonkunna": {
        title: "چنیوٹی مٹن کنا",
        description: "مٹی کی ہانڈی میں پکا ہوا چنیوٹ کا روایتی مٹن کنا سالن۔",
        ingredients: [
            "مٹن کے گوشت و شانک",
            "پیاز (سلائس)",
            "کالا زیرا",
            "ادرک لہسن پیسٹ",
            "گندم کا آٹا",
            "گھی"
        ],
        instructions: [
            "مٹی کی ہانڈی (کنی) میں گھی گرم کر کے پیاز ہلکی گلابی کریں۔",
            "ادرک لہسن، مٹن، کالا زیرا اور نمک ڈال کر 10 منٹ بھونیں۔",
            "4 کپ پانی ڈال کر ہانڈی کا ڈھکن آٹے سے سیل کر کے 2 گھنٹے دھیمی آنچ پر پکائیں۔",
            "آٹے کا گھول شامل کر کے 10 منٹ سالن گاڑھا کریں۔"
        ]
    },
    "recipe-beefkofta": {
        title: "بیف کوفتہ سالن",
        description: "مصالحے دار بیف کے کوفتوں کا دہی اور پیاز کی گریوی میں لذیذ شوربہ۔",
        ingredients: [
            "بیف قیمہ باریک",
            "تلی پیاز",
            "دہی",
            "ادرک لہسن پیسٹ",
            "بھنا بیسن",
            "مصالحے (گرم مصالحہ، مرچ، دھنیا)",
            "تیل"
        ],
        instructions: [
            "کوفتے: قیمہ، بیسن، ادرک لہسن اور آدھی تلی پیاز ملا کر گول کوفتے بنا لیں۔",
            "گریوی: تیل میں ادرک لہسن، دہی، باقی پیاز اور مصالحے 5 منٹ بھونیں۔",
            "کوفتے رکھیں، چمچ نہ چلائیں بلکہ برتن گھمائیں۔ 1 کپ پانی ڈال کر 25 منٹ پکائیں۔"
        ]
    },
    "recipe-butterchicken": {
        title: "شاہی مکھنی چکن (بٹر چکن)",
        description: "کریم اور مکھن کی گریوی میں پکا ہوا نرم اور ملائم بٹر چکن۔",
        ingredients: [
            "چکن بونلیس",
            "ٹماٹر پیسٹ",
            "مکھن",
            "تازہ کریم",
            "ادرک لہسن پیسٹ",
            "کاجو پیسٹ",
            "قصوری میتھی"
        ],
        instructions: [
            "چکن کو 1 چمچ مکھن اور ادرک لہسن کے ساتھ پکائیں اور الگ رکھیں۔",
            "پین میں ٹماٹر پیسٹ، کاجو پیسٹ اور مصالحے تیل الگ ہونے تک پکائیں۔",
            "چکن شامل کریں، باقی مکھن، کریم اور قصوری میتھی ڈال کر 5 منٹ دم دیں۔"
        ]
    },
    "recipe-whitekarahi": {
        title: "چکن وائٹ کڑاہی",
        description: "کالی مرچ، دہی اور کریم کے ساتھ بغیر پیاز بنائی گئی ملائم وائٹ کڑاہی۔",
        ingredients: [
            "چکن کے ٹکڑے",
            "گاڑھا دہی",
            "تازہ کریم",
            "ادرک لہسن پیسٹ",
            "ہری مرچیں",
            "سفید مرچ پاؤڈر",
            "بھنا زیرا پاؤڈر",
            "تیل یا گھی"
        ],
        instructions: [
            "گھی میں چکن اور ادرک لہسن سفید ہونے تک فرائی کریں۔",
            "دہی، سفید مرچ اور زیرا ڈال کر 12 منٹ ڈھانپ کر پکائیں۔",
            "کریم اور ہری مرچیں ڈال کر 3 منٹ تیز آنچ پر بھونیں۔"
        ]
    },
    "recipe-daalmakhni": {
        title: "شاہی دال مکھنی",
        description: "مکھن اور کریم کے ساتھ دھیمی آنچ پر پکی ہوئی کالی دال اور سرخ لوبیا۔",
        ingredients: [
            "ثابت ماش (کالی دال)",
            "سرخ لوبیا",
            "مکھن / گھی",
            "تازہ کریم",
            "ٹماٹو پیوری",
            "ادرک لہسن پیسٹ"
        ],
        instructions: [
            "دال اور لوبیا کو نمک اور ہلدی کے ساتھ نرم ہونے تک ابالیں۔",
            "گھی میں ادرک لہسن اور ٹماٹر پیوری بھون کر دال شامل کریں۔",
            "مکھن اور کریم ڈال کر 15 منٹ دھیمی آنچ پر پکائیں۔"
        ]
    },
    "recipe-chickensajji": {
        title: "بلوچی چکن سجی",
        description: "بلوچی انداز میں کوئلوں کے گرد ہلکی آنچ پر پکی ہوئی سجی، چاولوں کے ساتھ۔",
        ingredients: [
            "ثابت چکن",
            "سجی مصالحہ مکس",
            "لیموں کا رس",
            "لہسن کا پانی",
            "ابلے چاول (فلنگ کے لیے)"
        ],
        instructions: [
            "چکن پر لہسن کا پانی، لیموں اور سجی مصالحہ لگائیں۔ چاول اندر بھر کر ٹانگیں باندھیں۔",
            "اوون یا سیخ پر 180°C پر 60 منٹ روسٹ کریں۔",
            "سجی مصالحہ چھڑک کر لیموں کے ساتھ پیش کریں۔"
        ]
    },
    "recipe-beefpasanday": {
        title: "روایتی بیف پسندے",
        description: "پارچوں کو مسالے، دہی اور پپیتے کے ساتھ لگا کر ہلکی آنچ پر دم کیا ہوا گوشت۔",
        ingredients: [
            "بیف پسندے (چپٹے پارچے)",
            "دہی",
            "کچا پپیتا پیسٹ",
            "خشخاش پسی ہوئی",
            "بھنا بیسن",
            "تیل"
        ],
        instructions: [
            "پسندوں کو پپیتا، دہی، خشخاش اور بیسن کے ساتھ 3 گھنٹے میرینیٹ کریں۔",
            "تیل میں پیاز سرخ کریں اور پسندے شامل کریں۔",
            "دھک کر اپنے ہی پانی میں 40 منٹ دھیمی آنچ پر پکائیں۔"
        ]
    },
    "recipe-muttonshinwari": {
        title: "مٹن شنواری کڑاہی",
        description: "کم مسالوں میں ٹماٹر اور چربی کے ساتھ پکی ہوئی شنواری مٹن کڑاہی۔",
        ingredients: [
            "مٹن کے ٹکڑے",
            "ٹماٹر (دو حصے)",
            "ہری مرچیں",
            "لہسن پیسٹ",
            "ادرک کٹی ہوئی",
            "گھی"
        ],
        instructions: [
            "گھی میں مٹن، نمک اور لہسن 8 منٹ فرائی کریں۔",
            "ٹماٹر اور 1 کپ پانی ڈال کر 20 منٹ ڈھانپ کر پکائیں۔",
            "ٹماٹر کے چھلکے ہٹا کر میش کریں، ہری مرچیں ڈال کر تیل الگ ہونے تک بھونیں۔"
        ]
    },

    // --- DRINKS ---
    "recipe-lassi": {
        title: "خصوصی زعفرانی مینگو لسی",
        description: "تازہ آموں، دہی اور زعفران سے تیار کردہ ٹھنڈی شاہی لسی۔",
        ingredients: [
            "پکے آم",
            "تازہ گاڑھا دہی",
            "دودھ",
            "چینی یا شہد",
            "زعفران",
            "پستے"
        ],
        instructions: [
            "آم، دہی، دودھ، چینی اور برف بلینڈ کر لیں۔",
            "زعفران کا پانی شامل کریں۔",
            "گلاسوں میں ڈال کر پستے سے سجائیں۔"
        ]
    },
    "recipe-mintmarg": {
        title: "فرحت بخش منٹ مارگریٹا",
        description: "پودینے کے پتوں، لیموں کے رس، کالا نمک اور سوڈا کا یخ ٹھنڈا مشروب۔",
        ingredients: [
            "تازہ پودینہ",
            "لیموں کا رس",
            "کالا نمک",
            "چینی",
            "سپرائٹ / سوڈا",
            "برف کے کیوب"
        ],
        instructions: [
            "پودینہ، لیموں، کالا نمک، چینی اور برف بلینڈر میں ڈالیں۔",
            "برف چورا ہونے تک تیز بلینڈ کریں۔",
            "سوڈا شامل کر کے 2 سیکنڈ بلینڈ کریں اور فوراً پیش کریں۔"
        ]
    },
    "recipe-roohafza": {
        title: "روح افزا لیمونیڈ",
        description: "روح افزا، لیموں کا رس، تخم ملنگا اور پودینے سے تیار کردہ شربت۔",
        ingredients: [
            "روح افزا سیرپ",
            "لیموں کا رس",
            "تخم ملنگا (بھیگا ہوا)",
            "ٹھنڈا پانی",
            "پودینے کے پتے"
        ],
        instructions: [
            "روح افزا، لیموں اور پانی جگ میں مکس کریں۔",
            "بھیگا تخم ملنگا شامل کریں۔",
            "برف اور پودینے کے ساتھ ٹھنڈا پیش کریں۔"
        ]
    },
    "recipe-peachtea": {
        title: "دیسی پیچ آئسڈ ٹی",
        description: "آڑو کے سیرپ اور کالی چائے کا زبردست ٹھنڈا کمبینیشن۔",
        ingredients: [
            "آڑو (سلائس)",
            "بلیک ٹی بیگز",
            "پانی",
            "چینی",
            "لیموں کا رس"
        ],
        instructions: [
            "آڑو کو چینی اور 1 کپ پانی میں 10 منٹ پکا کر سیرپ چھان لیں۔",
            "باقی پانی میں چائے بنا کر ٹھنڈی کریں۔",
            "چائے، آڑو سیرپ اور لیموں مکس کر کے برف پر پیش کریں۔"
        ]
    },
    "recipe-masalachai": {
        title: "ڈھابہ مصالحہ چائے",
        description: "الائچی، ادرک اور کڑک پتی کے ساتھ کڑھی ہوئی ڈھابے کی کڑک چائے۔",
        ingredients: [
            "پانی",
            "خالص دودھ",
            "چائے کی پتی",
            "چھوٹی الائچی",
            "تازہ ادرک",
            "چینی"
        ],
        instructions: [
            "پانی میں الائچی، ادرک اور چینی ابالیں۔",
            "پتی ڈال کر 1 منٹ ابالیں۔",
            "دودھ ڈال کر دو بار کھڑا کریں (پکائیں)، چھان کر گرم پیش کریں۔"
        ]
    },
    "recipe-kashmirichai": {
        title: "گلابی کشمیری چائے (نون چائے)",
        description: "پستہ بادام اور الائچی والی روایتی گلابی کشمیری چائے۔",
        ingredients: [
            "کشمیری چائے کی پتی",
            "برفیلہ ٹھنڈا پانی",
            "میٹھی سوڈا",
            "دودھ",
            "پستہ اور بادام",
            "چھوٹی الائچی"
        ],
        instructions: [
            "پتی، الائچی اور سوڈا 2 کپ پانی میں 30 منٹ ابالیں۔ ٹھنڈا پانی ڈال کر 10 منٹ پھینٹیں۔",
            "گرم دودھ شامل کریں جس سے قدرتی گلابی رنگ نکلے گا۔",
            "5 منٹ پکا کر پستے بادام ڈال کر پیش کریں۔"
        ]
    },
    "recipe-imli": {
        title: "املی آلو بخارا شربت",
        description: "گرمیوں کا توڑ، املی اور آلو بخارے کا روایتی کھٹا میٹھا شربت۔",
        ingredients: [
            "املی (بھیگی ہوئی)",
            "آلو بخارا (بھیگا ہوا)",
            "چینی",
            "کالا نمک",
            "ٹھنڈا پانی"
        ],
        instructions: [
            "املی آلو بخارے کو چینی اور 2 کپ پانی میں 15 منٹ پکائیں اور گٹھلیاں نکال لیں۔",
            "گودا بلینڈ کریں، ٹھنڈا پانی اور کالا نمک ملا لیں۔",
            "چھان کر برف پر پیش کریں۔"
        ]
    },
    "recipe-sattu": {
        title: "روایتی ستو ڈرنک",
        description: "جو کے ستو اور گڑ کا صحت بخش اور ٹھنڈا شربت۔",
        ingredients: [
            "بھنے جو کا ستو",
            "گڑ یا شکر",
            "ٹھنڈا پانی",
            "لیموں کا رس"
        ],
        instructions: [
            "گڑ کو پانی میں حل کریں۔",
            "ستو اور لیموں کا رس ڈال کر اچھی طرح مکس کریں۔",
            "برف کے ساتھ ٹھنڈا پیش کریں۔"
        ]
    },
    "recipe-sugarjuice": {
        title: "گنے کا شربت",
        description: "گڑ، ادرک، پودینہ اور لیموں سے تیار کردہ ہوم میڈ گنے کا رس۔",
        ingredients: [
            "گڑ (پیسا ہوا)",
            "پودینے کے پتے",
            "تازہ ادرک",
            "لیموں",
            "ٹھنڈا پانی"
        ],
        instructions: [
            "گڑ، پودینہ، ادرک، لیموں اور پانی بلینڈ کریں۔",
            "ادرک کے ریشے چھان لیں۔",
            "برف ڈال کر بالکل تازہ گنے کے رس کا مزہ لیں۔"
        ]
    },
    "recipe-pakola": {
        title: "پاکولا آئس کریم سوڈا",
        description: "پاکولا ڈرنک اور ونیلا آئس کریم کا مزیدار سوڈا ڈرنک۔",
        ingredients: [
            "پاکولا کریم سوڈا",
            "ٹھنڈا دودھ",
            "کنڈینسڈ ملکس",
            "ونیلا آئس کریم"
        ],
        instructions: [
            "دودھ اور کنڈینسڈ ملکس گلاس میں مکس کریں۔",
            "پاکولا سوڈا ادھا گلاس ڈالیں۔",
            "اوپر ونیلا آئس کریم کا اسکوپ رکھیں۔"
        ]
    },

    // --- SHAKES ---
    "recipe-shake": {
        title: "پستہ بادام رائل شیک",
        description: "پستہ، بادام، زعفران اور دودھ سے تیار کردہ شاہی ہیلدی شیک۔",
        ingredients: [
            "خالص دودھ",
            "بادام (بھیگے اور چھلے)",
            "پستے (بھیگے ہوئے)",
            "چینی یا شہد",
            "الائچی پاؤڈر",
            "زعفران"
        ],
        instructions: [
            "بادام پستے کو 4 چمچ دودھ کے ساتھ پیس کر پیسٹ بنا لیں۔",
            "باقی دودھ میں الائچی، زعفران، چینی اور پیسٹ ڈال کر 5 منٹ ابالیں۔ ٹھنڈا کریں۔",
            "برف یا آئس کریم کے ساتھ بلینڈ کر کے پیش کریں۔"
        ]
    },
    "recipe-mangomastani": {
        title: "مینگو مستانی شیک",
        description: "گاڑھا مینگو شیک جس کے اوپر آئس کریم کا اسکوپ اور ڈرائی فروٹس ہوں۔",
        ingredients: [
            "مینگو پلمپ",
            "ٹھنڈا دودھ",
            "مینگو آئس کریم",
            "کٹے بادام پستے",
            "آم کے چھوٹے کیوب"
        ],
        instructions: [
            "مینگو پلمپ، دودھ اور 1 اسکوپ آئس کریم گاڑھا بلینڈ کریں۔",
            "گلاس میں انڈیلیں۔",
            "اوپر آئس کریم اسکوپ رکھیں، آم کے کیوب اور پستے سے سجائیں۔"
        ]
    },
    "recipe-dateshake": {
        title: "کھجور اور کیلا شیک",
        description: "توانائی سے بھرپور نرم کھجوروں، کیلے اور شہد کا ہیلدی شیک۔",
        ingredients: [
            "نرم کھجوریں (بغیر گٹھلی)",
            "پکے کیلے",
            "ٹھنڈا دودھ",
            "شہد",
            "بادام (کٹے ہوئے)"
        ],
        instructions: [
            "کھجوروں کو گرم دودھ میں 10 منٹ بھیگو کر نرم کریں۔",
            "کھجوریں، کیلے، دودھ اور شہد بلینڈ کریں۔",
    "recipe-brownieshake": {
        title: "چاکلیٹ براؤنی شیک",
        description: "چاکلیٹ براؤنی کے ٹکڑوں اور چاکلیٹ آئس کریم کا کریمی شیک۔",
        ingredients: [
            "چاکلیٹ آئس کریم",
            "دودھ",
            "چاکلیٹ براؤنی (ٹوکڑے)",
            "چاکلیٹ سیرپ"
        ],
        instructions: [
            "گلاس کے اندر چاکلیٹ سیرپ لگائیں۔",
            "آئس کریم، دودھ اور ادھی براؤنی بلینڈ کریں۔",
            "گلاس میں ڈال کر باقی براؤنی کے کرمبز اوپر ڈالیں۔"
        ]
    },
    "recipe-strawberryrose": {
        title: "اسٹرابیری روز شیک",
        description: "تازہ اسٹرابیری اور گلاب کے فلیور کا خوشبودار کریمی شیک۔",
        ingredients: [
            "تازہ اسٹرابیریز",
            "روز سیرپ",
            "اسٹرابیری آئس کریم",
            "ٹھنڈا دودھ"
        ],
        instructions: [
            "اسٹرابیری، روز سیرپ، دودھ اور آئس کریم بلینڈ کریں۔",
            "پنک اور سموتھ ہونے تک چلاائیں۔",
            "اسٹرابیری سلائس سے سجا کر پیش کریں۔"
        ]
    },
    "recipe-coconutshake": {
        title: "کریمی کوکونٹ شیک",
        description: "ناریل کے دودھ، بھنے ناریل اور ونیلا بیس کا فرحت بخش شیک۔",
        ingredients: [
            "کوکونٹ ملک",
            "خالص دودھ",
            "ونیلا آئس کریم",
            "کرش کوکونٹ (بھنا ہوا)"
        ],
        instructions: [
            "کوکونٹ ملک، دودھ اور آئس کریم بلینڈ کریں۔",
            "گلاس میں ڈال کر اوپر بھنا ناریل چھڑکیں۔"
        ]
    },
    "recipe-figshake": {
        title: "رائل انجیر (فگ) شیک",
        description: "خشک انجیر اور شہد کے ساتھ بنا ہوا شاہی ڈرائی فروٹ شیک۔",
        ingredients: [
            "خشک انجیر (بھیگی ہوئی)",
            "ٹھنڈا دودھ",
            "شہد",
            "ونیلا آئس کریم"
        ],
        instructions: [
            "انجیر کو گرم پانی میں 30 منٹ بھیگو کر نرم کریں۔",
            "انجیر، دودھ، شہد اور آئس کریم مکمل سموتھ ہونے تک بلینڈ کریں۔"
        ]
    },
    "recipe-oreomalai": {
        title: "اوریو ملائی شیک",
        description: "اوریو بسکٹ اور تازہ ملائی کا کریمی مزیدار شیک۔",
        ingredients: [
            "اوریو بسکٹ",
            "تازہ ملائی",
            "ٹھنڈا دودھ",
            "ونیلا آئس کریم"
        ],
        instructions: [
            "2 بسکٹ سجاوٹ کے لیے توڑ لیں۔",
            "باقی بسکٹ، ملائی، دودھ اور آئس کریم بلینڈ کریں۔",
            "پورا کریں اور بسکٹ چورا اوپر ڈالیں۔"
        ]
    },
    "recipe-kulfishake": {
        title: "تندوری قلفی شیک",
        description: "روایتی مٹکا کلفی اور دودھ کو بلینڈ کر کے بنایا گیا شیک۔",
        ingredients: [
            "ملائی کلفی",
            "دودھ",
            "الائچی پاؤڈر",
            "فالودہ سیوئیاں"
        ],
        instructions: [
            "کلفی، دودھ اور الائچی کو سموتھ بلینڈ کریں۔",
            "گلاس میں ڈال کر فالودہ سیوئیاں اوپر رکھیں۔"
        ]
    },
    "recipe-rabrishake": {
        title: "ربڑی کھیر ملک شیک",
        description: "گاڑھی لذیذ ربڑی اور دودھ کا شاہی شیک۔",
        ingredients: [
            "گاڑھی ربڑی",
            "ٹھنڈا دودھ",
            "پستے اور بادام",
            "کیوڑا واٹر"
        ],
        instructions: [
            "ربڑی، ٹھنڈا دودھ اور کیوڑا واٹر بلینڈ کریں۔",
            "گلاس میں ڈال کر پستے بادام سے سجائیں۔"
        ]
    }
};
// DOM Element Selectors
const recipeGrid = document.getElementById("recipe-grid");
const searchInput = document.getElementById("search-input");
const categoryTabs = document.querySelectorAll(".category-tab");
const recipeModal = document.getElementById("recipe-modal");
const addRecipeModal = document.getElementById("add-recipe-modal");
const showAddRecipeBtn = document.getElementById("show-add-recipe-btn");
const closeRecipeModalBtn = document.getElementById("close-recipe-modal");
const closeAddRecipeModalBtn = document.getElementById("close-add-recipe-modal");
const addRecipeForm = document.getElementById("add-recipe-form");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initRecipes();
    initFavorites();
    updateLanguage();
    renderRecipes();
    setupEventListeners();
    initAudio();
});

// Load recipes from localStorage or use default dataset
// Version 16: Flushes previous data caches
function initRecipes() {
    // Clean up older localStorage versions
    localStorage.removeItem("desi_dasterkhwan_recipes_v12");
    localStorage.removeItem("desi_dasterkhwan_recipes_v13");
    localStorage.removeItem("desi_dasterkhwan_recipes_v14");
    localStorage.removeItem("desi_dasterkhwan_recipes_v15");

    const saved = localStorage.getItem("desi_dasterkhwan_recipes_v16");
    if (saved) {
        try {
            recipesList = JSON.parse(saved);
            
            // Self-healing migration: update image path if it has been updated in the code
            let hasUpdate = false;
            recipesList.forEach(recipe => {
                const defaultRecipe = DEFAULT_RECIPES.find(r => r.id === recipe.id);
                if (defaultRecipe && recipe.image !== defaultRecipe.image) {
                    recipe.image = defaultRecipe.image;
                    hasUpdate = true;
                }
            });
            
            if (hasUpdate) {
                localStorage.setItem("desi_dasterkhwan_recipes_v16", JSON.stringify(recipesList));
            }
        } catch (e) {
            recipesList = [...DEFAULT_RECIPES];
        }
    } else {
        recipesList = [...DEFAULT_RECIPES];
        localStorage.setItem("desi_dasterkhwan_recipes_v16", JSON.stringify(recipesList));
    }
}

// Load favorites from localStorage
function initFavorites() {
    const saved = localStorage.getItem("recipe_favorites");
    if (saved) {
        try {
            favoriteRecipes = JSON.parse(saved);
        } catch (e) {
            favoriteRecipes = [];
        }
    }
}

// Language update helpers
function updateLanguage() {
    const lang = currentLanguage;
    const isUrdu = lang === "ur";
    
    // Toggle page direction if needed (Urdu is RTL, English is LTR)
    document.documentElement.dir = isUrdu ? "rtl" : "ltr";
    if (isUrdu) {
        document.documentElement.classList.add("ur-lang");
    } else {
        document.documentElement.classList.remove("ur-lang");
    }
    
    // Update static labels
    const logoText = document.getElementById("logo-text");
    if (logoText) logoText.innerHTML = UI_TRANSLATIONS[lang].logoText;

    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) langBtnText.innerText = UI_TRANSLATIONS[lang].langBtn;
    
    const addRecipeBtnText = document.getElementById("add-recipe-btn-text");
    if (addRecipeBtnText) addRecipeBtnText.innerText = UI_TRANSLATIONS[lang].addRecipe;

    const adminBtnText = document.getElementById("admin-btn-text");
    if (adminBtnText) adminBtnText.innerText = UI_TRANSLATIONS[lang].adminBtn;
    
    const addRecipeTitleH = document.getElementById("add-recipe-title-h");
    if (addRecipeTitleH) addRecipeTitleH.innerText = isUrdu ? "نئی ریسپی شامل کریں" : "Add New Recipe";

    const heroSubtitle = document.querySelector(".hero-subtitle");
    if (heroSubtitle) heroSubtitle.innerText = UI_TRANSLATIONS[lang].heroSubtitle;
    
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) heroTitle.innerHTML = UI_TRANSLATIONS[lang].heroTitle;
    
    const heroDesc = document.querySelector(".hero-desc");
    if (heroDesc) heroDesc.innerText = UI_TRANSLATIONS[lang].heroDesc;
    
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.placeholder = UI_TRANSLATIONS[lang].searchPlaceholder;
    
    // Update categories tabs
    document.querySelectorAll(".category-tab").forEach(tab => {
        const cat = tab.dataset.category;
        tab.innerText = UI_TRANSLATIONS[lang].categories[cat] || cat;
    });

    updateModalLabels();

    if (selectedRecipe && recipeModal.classList.contains("show")) {
        openRecipeDetails(selectedRecipe);
    }
}

function updateModalLabels() {
    const lang = currentLanguage;
    const labelPrep = document.getElementById("label-prep");
    if (labelPrep) labelPrep.innerText = UI_TRANSLATIONS[lang].prepTime;
    
    const labelCook = document.getElementById("label-cook");
    if (labelCook) labelCook.innerText = UI_TRANSLATIONS[lang].cookTime;
    
    const labelDiff = document.getElementById("label-difficulty");
    if (labelDiff) labelDiff.innerText = UI_TRANSLATIONS[lang].difficulty;
    
    const labelIng = document.getElementById("label-ingredients");
    if (labelIng) labelIng.innerText = UI_TRANSLATIONS[lang].ingredients;
    
    const labelServings = document.getElementById("label-servings-text");
    if (labelServings) labelServings.innerText = UI_TRANSLATIONS[lang].servingsText;
    
    const labelInst = document.getElementById("label-instructions");
    if (labelInst) labelInst.innerText = UI_TRANSLATIONS[lang].instructions;
}

// Setup Event Listeners
function setupEventListeners() {
    // Language Toggle button
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "ur" : "en";
            localStorage.setItem("desi_dasterkhwan_lang", currentLanguage);
            updateLanguage();
            renderRecipes();
        });
    }

    // Admin Portal header button click
    const showAdminBtn = document.getElementById("show-admin-btn");
    if (showAdminBtn) {
        showAdminBtn.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            const adminTab = document.querySelector('.category-tab[data-category="Admin"]');
            if (adminTab) adminTab.classList.add("active");
            currentCategory = "Admin";
            renderRecipes();
            const filterSection = document.querySelector(".filter-section");
            if (filterSection) filterSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderRecipes();
    });

    // Category Tabs filtering
    document.querySelectorAll(".category-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentCategory = tab.dataset.category;
            renderRecipes();

            // Smooth scroll to recipe grid top if user is scrolled past filter section
            const filterSection = document.querySelector(".filter-section");
            if (filterSection && window.scrollY > filterSection.offsetTop + 100) {
                filterSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Modal Closing
    closeRecipeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    window.addEventListener("click", (e) => {
        if (e.target === recipeModal) {
            closeModal();
        }
        if (e.target === addRecipeModal) {
            closeAddRecipeModalBtn.click();
        }
    });

    // Show Add Recipe Form Modal
    showAddRecipeBtn.addEventListener("click", () => {
        addRecipeModal.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    // Close Add Recipe Form Modal
    closeAddRecipeModalBtn.addEventListener("click", () => {
        addRecipeModal.classList.remove("show");
        document.body.style.overflow = "auto";
        addRecipeForm.reset();
        clearFormDynamicIngredients();
    });

    // Dynamic Ingredient Add in Form
    const addFormIngredientBtn = document.getElementById("form-add-ingredient");
    addFormIngredientBtn.addEventListener("click", () => {
        addFormIngredientInputRow();
    });

    // Dynamic Instruction Add in Form
    const addFormStepBtn = document.getElementById("form-add-step");
    addFormStepBtn.addEventListener("click", () => {
        addFormStepInputRow();
    });

    // Save Recipe Form Submission
    addRecipeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        saveNewRecipe();
    });
}

// Feedback Storage and Logic
let savedFeedbacks = JSON.parse(localStorage.getItem("desi_dasterkhwan_feedbacks")) || [
    {
        name: "Ali Raza",
        email: "ali@example.com",
        rating: "5",
        comments: "Boht hi lazeez recipes hain aur step timer ka feature boht zabardast hai!",
        date: "2026-07-20"
    },
    {
        name: "Sara Khan",
        email: "sara@example.com",
        rating: "5",
        comments: "Urdu translation support is awesome. Nihari recipe turn out perfect!",
        date: "2026-07-21"
    }
];

window.handleFeedbackSubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("fb-name").value.trim();
    const email = document.getElementById("fb-email").value.trim();
    const ratingEl = document.querySelector('input[name="rating"]:checked');
    const rating = ratingEl ? ratingEl.value : "5";
    const comments = document.getElementById("fb-comments").value.trim();
    
    if (!name || !email || !comments) return;

    const newFeedback = {
        name,
        email,
        rating,
        comments,
        date: new Date().toISOString().split('T')[0]
    };

    savedFeedbacks.unshift(newFeedback);
    localStorage.setItem("desi_dasterkhwan_feedbacks", JSON.stringify(savedFeedbacks));

    const isUrdu = currentLanguage === "ur";
    const msgEl = document.getElementById("feedback-success-msg");
    if (msgEl) {
        msgEl.style.display = "block";
        msgEl.innerText = isUrdu ? "شکریہ! آپ کی رائے کامیابی سے جمع ہو گئی ہے۔" : "Thank you! Your feedback has been submitted successfully.";
    }

    document.getElementById("feedback-form").reset();
    renderFeedbacksList();
};

function renderFeedbacksList() {
    const container = document.getElementById("feedbacks-container");
    if (!container) return;
    container.innerHTML = "";
    
    if (savedFeedbacks.length === 0) {
        container.innerHTML = `<p style="color:var(--color-text-muted);">${currentLanguage === 'ur' ? 'ابھی تک کوئی رائے موصول نہیں ہوئی۔' : 'No feedback yet. Be the first!'}</p>`;
        return;
    }

    savedFeedbacks.forEach(fb => {
        const item = document.createElement("div");
        item.className = "feedback-item-card";
        const starsCount = parseInt(fb.rating || 5);
        const stars = "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
        item.innerHTML = `
            <div class="feedback-item-header">
                <div>
                    <h4 class="feedback-user-name">${escapeHtml(fb.name)}</h4>
                    <span class="feedback-user-email">${escapeHtml(fb.email)}</span>
                </div>
                <span class="feedback-stars">${stars}</span>
            </div>
            <p class="feedback-item-text">${escapeHtml(fb.comments)}</p>
            <span class="feedback-item-date"><i class="far fa-calendar-alt"></i> ${fb.date}</span>
        `;
        container.appendChild(item);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

// Admin Portal Logic & Authentication
let ADMIN_USERNAME = "hassaan";
let ADMIN_PASSWORD = "zunain";

function isAdminLoggedIn() {
    return sessionStorage.getItem("desi_admin_logged_in") === "true";
}

window.handleAdminLogin = function(e) {
    e.preventDefault();
    const userInput = document.getElementById("admin-user");
    const passInput = document.getElementById("admin-pass");
    if (!userInput || !passInput) return;
    const enteredUser = userInput.value.trim();
    const enteredPass = passInput.value.trim();
    const isUrdu = currentLanguage === "ur";
    
    if (enteredUser.toLowerCase() === ADMIN_USERNAME.toLowerCase() && enteredPass === ADMIN_PASSWORD) {
        sessionStorage.setItem("desi_admin_logged_in", "true");
        renderRecipes();
    } else {
        const errEl = document.getElementById("admin-login-err");
        if (errEl) {
            errEl.style.display = "block";
            errEl.innerText = isUrdu ? "غلط یوزر نیم یا پاس ورڈ!" : "Incorrect Username or Password!";
        }
    }
};

window.handleAdminLogout = function() {
    sessionStorage.removeItem("desi_admin_logged_in");
    renderRecipes();
};

window.deleteFeedbackItem = function(index) {
    const isUrdu = currentLanguage === "ur";
    if (confirm(isUrdu ? 'کیا آپ اس رائے کو حذف کرنا چاہتے ہیں؟' : 'Are you sure you want to delete this feedback?')) {
        savedFeedbacks.splice(index, 1);
        localStorage.setItem("desi_dasterkhwan_feedbacks", JSON.stringify(savedFeedbacks));
        renderRecipes();
    }
};

window.clearAllFeedbacks = function() {
    const isUrdu = currentLanguage === "ur";
    if (confirm(isUrdu ? 'کیا آپ تمام تاثرات کو حذف کرنا چاہتے ہیں؟' : 'Are you sure you want to delete ALL feedbacks?')) {
        savedFeedbacks = [];
        localStorage.setItem("desi_dasterkhwan_feedbacks", JSON.stringify(savedFeedbacks));
        renderRecipes();
    }
};

// Groq AI Assistant Logic
let aiChatHistory = [];

// =========================================================================
// GROQ API KEY: Apni Groq API Key yahan quotes ke andar paste karein:
// Example: const DEFAULT_GROQ_API_KEY = "gsk_123456789abcdef...";
// =========================================================================
const DEFAULT_GROQ_API_KEY = "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"; 

function getStoredGroqKey() {
    return localStorage.getItem("desi_groq_api_key") || DEFAULT_GROQ_API_KEY;
}

window.saveGroqKey = function() {
    const input = document.getElementById("groq-key-input");
    if (!input) return;
    const key = input.value.trim();
    localStorage.setItem("desi_groq_api_key", key);
    const statusEl = document.getElementById("groq-key-status");
    const isUrdu = currentLanguage === "ur";
    if (statusEl) {
        statusEl.innerText = key ? (isUrdu ? "✓ Key محفوظ ہے" : "✓ Key Saved") : (isUrdu ? "Key درج کریں" : "Enter Key");
        statusEl.style.color = key ? "#27ae60" : "#e74c3c";
    }
};

window.sendQuickPrompt = function(promptText) {
    const chatInput = document.getElementById("ai-chat-input");
    if (chatInput) {
        chatInput.value = promptText;
        sendAIChatMessage();
    }
};

window.sendAIChatMessage = async function() {
    const chatInput = document.getElementById("ai-chat-input");
    if (!chatInput) return;
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const isUrdu = currentLanguage === "ur";

    // Append User Message to UI
    appendChatMessage("user", userMessage);
    chatInput.value = "";

    // Show Typing Indicator
    const typingId = appendTypingIndicator();

    const groqKey = getStoredGroqKey();

    if (!groqKey) {
        removeTypingIndicator(typingId);
        const smartFallback = getSmartLocalChefResponse(userMessage, isUrdu);
        const noKeyNotice = isUrdu ? 
            "\n\n(نوٹ: لائیو Groq AI کنیکشن کے لیے اپنی Groq API Key اوپر والے باکس میں پیسٹ کر کے 'Save Key' دبائیں!)" : 
            "\n\n(Note: For live Groq AI answers, paste your Groq API Key in the box above and click 'Save Key'!)";
        
        appendChatMessage("ai", (smartFallback || (isUrdu ? "برائے مہربانی اپنی Groq API Key اوپر درج کر کے Save کریں۔ تب میں براہِ راست Groq AI سے جواب دوں گا!" : "Please enter and save your Groq API Key above to enable live Groq AI answers!")) + noKeyNotice);
        return;
    }

    try {
        aiChatHistory.push({ role: "user", content: userMessage });

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${groqKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are Desi Chef AI, a polite, expert Pakistani culinary chef assistant. Answer cooking queries, give recipe guidance, ingredient substitutes, and kitchen tips in Roman Urdu, Urdu, or English based on the user's language preference."
                    },
                    ...aiChatHistory.slice(-6)
                ],
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        removeTypingIndicator(typingId);

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errText = errData.error ? errData.error.message : response.statusText;
            appendChatMessage("ai", isUrdu ? `Groq API خطا: ${errText}. براہ کرم اپنی API Key چیک کریں۔` : `Groq API Error: ${errText}. Please verify your API Key.`);
            return;
        }

        const data = await response.json();
        const aiReply = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "No response from AI.";
        
        aiChatHistory.push({ role: "assistant", content: aiReply });
        appendChatMessage("ai", aiReply);

    } catch (err) {
        removeTypingIndicator(typingId);
        appendChatMessage("ai", isUrdu ? `نیٹ ورک کی خرابی: ${err.message}` : `Network Error: ${err.message}`);
    }
};

function appendChatMessage(sender, text) {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-bubble ${sender}-bubble`;
    const formattedText = escapeHtml(text).replace(/\n/g, '<br>');
    msgDiv.innerHTML = `
        <div class="bubble-sender">${sender === 'user' ? (currentLanguage === 'ur' ? 'آپ' : 'You') : '👨‍🍳 Desi Chef AI'}</div>
        <div class="bubble-content">${formattedText}</div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function appendTypingIndicator() {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return null;
    const id = "typing-" + Date.now();
    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-bubble ai-bubble typing-indicator";
    typingDiv.id = id;
    typingDiv.innerHTML = `👨‍🍳 Desi Chef AI...`;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
}

function getSmartLocalChefResponse(query, isUrdu) {
    const q = query.toLowerCase();
    if (q.includes("biryani") || q.includes("بریانی")) {
        return isUrdu ? 
            "لذیذ بریانی کے لیے: چاول 80% ابالیں۔ گوشت کو دہی، لہسن ادرک اور بریانی مسالے میں میرینیٹ کر کے پکائیں، پھر تہہ لگا کر 15 منٹ دم دیں۔" :
            "For authentic Biryani: Boil basmati rice 80%. Marinate meat with yogurt, ginger-garlic, biryani spices & fried onions. Layer rice over gravy and steam (dum) for 15 mins!";
    }
    if (q.includes("nihari") || q.includes("نہاری")) {
        return isUrdu ?
            "خاص نہاری کے لیے: بیف کی بونگ کا گوشت استعمال کریں اور سونف اور ادرک کے مسالے کے ساتھ ہلکی آنچ پر 3-4 گھنٹے پکائیں۔" :
            "For Special Nihari: Use beef shank meat. Slow cook with fennel, dry ginger & nihari masala for 3-4 hours until tender!";
    }
    if (q.includes("karahi") || q.includes("کڑاہی")) {
        return isUrdu ?
            "چکن کڑاہی کے لیے: تیز آنچ پر چکن کو تیل میں فرائی کریں، پھر ٹماٹر، ہری مرچیں، ادرک اور کالی مرچ شامل کر کے بھونیں۔" :
            "For Chicken Karahi: Fry chicken on high heat in oil, then add crushed tomatoes, green chilies, ginger & black pepper until gravy thickens!";
    }
    return null;
}

// Render Recipe Grid based on category and search criteria
function renderRecipes() {
    recipeGrid.innerHTML = "";
    const lang = currentLanguage;
    const isUrdu = lang === "ur";

    if (currentCategory === "Admin") {
        const adminCard = document.createElement("div");
        adminCard.className = "admin-portal-card";

        if (!isAdminLoggedIn()) {
            adminCard.innerHTML = `
                <div class="admin-login-box">
                    <div class="admin-login-header">
                        <i class="fas fa-user-shield admin-login-icon"></i>
                        <h2>${isUrdu ? "ایڈمن پورٹل لاگ ان" : "Admin Portal Login"}</h2>
                        <p>${isUrdu ? "صارفین کی رائے اور پورٹل تک رسائی کے لیے پاس ورڈ درج کریں۔" : "Enter admin password to view customer feedbacks and portal management."}</p>
                    </div>
                    
                    <form onsubmit="handleAdminLogin(event)" class="admin-login-form">
                        <div class="form-group">
                            <label for="admin-user">${isUrdu ? "یوزر نیم (Username)" : "Username"}</label>
                            <input type="text" id="admin-user" required placeholder="${isUrdu ? 'یوزر نیم درج کریں...' : 'Enter username...'}" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="admin-pass">${isUrdu ? "پاس ورڈ (Password)" : "Password"}</label>
                            <input type="password" id="admin-pass" required placeholder="••••••••" class="form-control">
                        </div>
                        <button type="submit" class="btn-submit-admin-login">
                            <i class="fas fa-right-to-bracket"></i> ${isUrdu ? "لاگ ان کریں" : "Login to Admin"}
                        </button>
                        <div id="admin-login-err" class="admin-login-err" style="display:none;"></div>
                    </form>
                </div>
            `;
            recipeGrid.appendChild(adminCard);
            return;
        }

        // Authenticated Admin Dashboard UI
        const totalFeedbacks = savedFeedbacks.length;
        let avgRating = 5;
        if (totalFeedbacks > 0) {
            const sum = savedFeedbacks.reduce((acc, curr) => acc + parseInt(curr.rating || 5), 0);
            avgRating = (sum / totalFeedbacks).toFixed(1);
        }

        let feedbackRowsHtml = "";
        if (totalFeedbacks === 0) {
            feedbackRowsHtml = `<div class="no-data-msg">${isUrdu ? 'ابھی تک کوئی رائے موصول نہیں ہوئی۔' : 'No customer feedback received yet.'}</div>`;
        } else {
            savedFeedbacks.forEach((fb, idx) => {
                const starsCount = parseInt(fb.rating || 5);
                const stars = "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
                feedbackRowsHtml += `
                    <div class="admin-feedback-item">
                        <div class="admin-fb-header">
                            <div>
                                <h4>${escapeHtml(fb.name)} <span class="fb-email">(${escapeHtml(fb.email)})</span></h4>
                                <span class="fb-date"><i class="far fa-calendar-alt"></i> ${fb.date}</span>
                            </div>
                            <div class="admin-fb-actions">
                                <span class="fb-stars">${stars}</span>
                                <button type="button" onclick="deleteFeedbackItem(${idx})" class="btn-delete-fb" title="Delete">
                                    <i class="fas fa-trash-alt"></i> ${isUrdu ? 'حذف کریں' : 'Delete'}
                                </button>
                            </div>
                        </div>
                        <p class="admin-fb-text">${escapeHtml(fb.comments)}</p>
                    </div>
                `;
            });
        }

        adminCard.innerHTML = `
            <div class="admin-dashboard">
                <div class="admin-dash-header">
                    <div>
                        <h2><i class="fas fa-user-shield"></i> ${isUrdu ? "ایڈمن ڈیش بورڈ" : "Admin Dashboard"}</h2>
                        <p>${isUrdu ? "تمام کسٹمر فید بیک اور پورٹل کا انتظام" : "Overview of customer feedback and application statistics"}</p>
                    </div>
                    <button onclick="handleAdminLogout()" class="btn-admin-logout">
                        <i class="fas fa-sign-out-alt"></i> ${isUrdu ? "لاگ آؤٹ" : "Logout"}
                    </button>
                </div>

                <div class="admin-stats-grid">
                    <div class="stat-card">
                        <i class="fas fa-comments stat-icon"></i>
                        <div>
                            <span class="stat-num">${totalFeedbacks}</span>
                            <span class="stat-label">${isUrdu ? "کل رائے" : "Total Feedbacks"}</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star stat-icon"></i>
                        <div>
                            <span class="stat-num">${avgRating} ★</span>
                            <span class="stat-label">${isUrdu ? "اوسط ریٹنگ" : "Average Rating"}</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-utensils stat-icon"></i>
                        <div>
                            <span class="stat-num">${recipesList.length}</span>
                            <span class="stat-label">${isUrdu ? "کل ریسپیز" : "Total Recipes"}</span>
                        </div>
                    </div>
                </div>

                <div class="admin-feedbacks-section">
                    <div class="admin-sec-header">
                        <h3><i class="fas fa-comment-dots"></i> ${isUrdu ? "صارفین کی رائے کی فہرست" : "Customer Feedbacks List"}</h3>
                        ${totalFeedbacks > 0 ? `<button onclick="clearAllFeedbacks()" class="btn-clear-all"><i class="fas fa-trash"></i> ${isUrdu ? 'تمام حذف کریں' : 'Clear All'}</button>` : ''}
                    </div>
                    <div class="admin-feedbacks-list">
                        ${feedbackRowsHtml}
                    </div>
                </div>
            </div>
        `;
        recipeGrid.appendChild(adminCard);
        return;
    }
    
    if (currentCategory === "AIAssistant") {
        const storedKey = getStoredGroqKey();
        const aiCard = document.createElement("div");
        aiCard.className = "ai-section-card";
        aiCard.innerHTML = `
            <div class="ai-header">
                <div class="ai-title-wrap">
                    <i class="fas fa-robot ai-icon"></i>
                    <div>
                        <h2>${isUrdu ? "دیسی چیف اے آئی اسسٹنٹ" : "Desi Chef AI Assistant"}</h2>
                        <p>${isUrdu ? "Groq AI کی مدد سے کھانا پکانے کے ہر سوال کا لائیو جواب حاصل کریں!" : "Get instant, live cooking guidance powered by Groq AI!"}</p>
                    </div>
                </div>
                <div class="ai-status-badge">
                    <i class="fas fa-bolt" style="color:var(--color-primary); margin-right: 6px;"></i> ${isUrdu ? "لائیو Groq AI ایکٹیو ہے" : "Live Groq AI Active"}
                </div>
            </div>

            <div class="ai-quick-chips">
                <span>${isUrdu ? "تجویز کردہ سوالات:" : "Quick Suggestions:"}</span>
                <button type="button" class="chip-btn" onclick="sendQuickPrompt('${isUrdu ? "چکن کڑاہی بنانے کا طریقہ" : "Chicken Karahi Recipe"}')">${isUrdu ? "چکن کڑاہی" : "Chicken Karahi"}</button>
                <button type="button" class="chip-btn" onclick="sendQuickPrompt('${isUrdu ? "15 منٹ میں بننے والا آسان ناشتہ" : "Suggest a quick 15-min breakfast"}')">${isUrdu ? "فاسٹ ناشتہ" : "Fast Breakfast"}</button>
                <button type="button" class="chip-btn" onclick="sendQuickPrompt('${isUrdu ? "اگر دہی ختم ہو جائے تو کڑاہی میں کیا ڈالیں؟" : "Yogurt substitute in Karahi"}')">${isUrdu ? "دہی کا متبادل" : "Yogurt Substitute"}</button>
            </div>

            <div class="ai-chat-box">
                <div class="ai-chat-messages" id="ai-chat-messages">
                    <div class="chat-bubble ai-bubble">
                        <div class="bubble-sender">👨‍🍳 Desi Chef AI</div>
                        <div class="bubble-content">
                            ${isUrdu ? 
                                "السلام علیکم! میں آپ کا دیسی چیف اے آئی اسسٹنٹ ہوں۔ آپ مجھ سے کھانا پکانے، ریسپیز، یا کسی بھی چیز کا متبادل لائیو پوچھ سکتے ہیں!" : 
                                "Hello! I am your Desi Chef AI Assistant. Ask me anything live about cooking, recipes, or ingredient substitutes!"}
                        </div>
                    </div>
                </div>

                <div class="ai-chat-input-row">
                    <input type="text" id="ai-chat-input" placeholder="${isUrdu ? 'کوئی بھی سوال یہاں پوچھیں (مثلاً: بریانی کیسے بنائیں)...' : 'Ask Desi Chef AI anything about cooking...'}" onkeydown="if(event.key==='Enter') sendAIChatMessage()">
                    <button type="button" class="btn-send-chat" onclick="sendAIChatMessage()">
                        <i class="fas fa-paper-plane"></i> ${isUrdu ? "ارسال کریں" : "Send"}
                    </button>
                </div>
            </div>
        `;
        recipeGrid.appendChild(aiCard);
        return;
    }

    if (currentCategory === "Feedback") {
        const feedbackCard = document.createElement("div");
        feedbackCard.className = "feedback-section-card";
        feedbackCard.innerHTML = `
            <div class="feedback-header">
                <i class="fas fa-comments feedback-icon"></i>
                <h2>${isUrdu ? "اپنی قیمتی رائے دیں" : "Share Your Feedback"}</h2>
                <p>${isUrdu ? "برائے مہربانی اپنا نام، ای میل اور کمنٹس یہاں درج کریں۔" : "Please share your name, email address, and comments below."}</p>
            </div>
            
            <form id="feedback-form" class="feedback-form" onsubmit="handleFeedbackSubmit(event)">
                <div class="feedback-form-row">
                    <div class="feedback-field">
                        <label for="fb-name">${isUrdu ? "آپ کا نام (Name)" : "Your Name"}</label>
                        <input type="text" id="fb-name" required placeholder="${isUrdu ? 'اپنا نام درج کریں...' : 'Enter your full name...'}">
                    </div>
                    <div class="feedback-field">
                        <label for="fb-email">${isUrdu ? "ای میل ایڈریس (Email)" : "Email Address"}</label>
                        <input type="email" id="fb-email" required placeholder="${isUrdu ? 'اپنا ای میل لکھیں...' : 'name@example.com'}">
                    </div>
                </div>
                
                <div class="feedback-field">
                    <label>${isUrdu ? "ریٹنگ (Rating)" : "Rating"}</label>
                    <div class="star-rating">
                        <input type="radio" id="star5" name="rating" value="5" checked><label for="star5" title="5 Stars">★</label>
                        <input type="radio" id="star4" name="rating" value="4"><label for="star4" title="4 Stars">★</label>
                        <input type="radio" id="star3" name="rating" value="3"><label for="star3" title="3 Stars">★</label>
                        <input type="radio" id="star2" name="rating" value="2"><label for="star2" title="2 Stars">★</label>
                        <input type="radio" id="star1" name="rating" value="1"><label for="star1" title="1 Star">★</label>
                    </div>
                </div>
                
                <div class="feedback-field">
                    <label for="fb-comments">${isUrdu ? "آپ کے کمنٹس (Comments)" : "Comments / Feedback"}</label>
                    <textarea id="fb-comments" rows="4" required placeholder="${isUrdu ? 'اپنی تجاویز یا تاثرات تحریر کریں...' : 'Write your comments here...'}"></textarea>
                </div>
                
                <button type="submit" class="btn-submit-feedback">
                    <i class="fas fa-paper-plane"></i> ${isUrdu ? "رائے جمع کروائیں" : "Submit Feedback"}
                </button>
                <div id="feedback-success-msg" class="feedback-success-msg" style="display:none;"></div>
            </form>

            <div class="user-feedbacks-list">
                <h3>${isUrdu ? "حالیہ صارفین کی رائے" : "Recent Community Feedback"}</h3>
                <div id="feedbacks-container"></div>
            </div>
        `;
        recipeGrid.appendChild(feedbackCard);
        renderFeedbacksList();
        return;
    }
    
    if (currentCategory === "All" && searchQuery === "") {
        const purposeCard = document.createElement("div");
        purposeCard.className = "purpose-card";
        purposeCard.innerHTML = `
            <div class="purpose-header">
                <i class="fas fa-fire-burner purpose-icon"></i>
                <h2 class="purpose-title">${UI_TRANSLATIONS[lang].purposeTitle}</h2>
            </div>
            <div class="purpose-body">
                <p class="purpose-text">
                    ${UI_TRANSLATIONS[lang].purposeDesc}
                </p>
                <div class="purpose-pillars">
                    <div class="pillar-item">
                        <i class="fas fa-heart-circle-check pillar-icon"></i>
                        <div class="pillar-content">
                            <h5>${UI_TRANSLATIONS[lang].heritageTitle}</h5>
                            <p>${UI_TRANSLATIONS[lang].heritageDesc}</p>
                        </div>
                    </div>
                    <div class="pillar-item">
                        <i class="fas fa-stopwatch-20 pillar-icon"></i>
                        <div class="pillar-content">
                            <h5>${UI_TRANSLATIONS[lang].smartToolsTitle}</h5>
                            <p>${UI_TRANSLATIONS[lang].smartToolsDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        recipeGrid.appendChild(purposeCard);
        return;
    }
    
    const filtered = recipesList.filter(recipe => {
        const matchesCategory = currentCategory === "All" || recipe.category.toLowerCase() === currentCategory.toLowerCase();
        
        const trans = RECIPE_TRANSLATIONS[recipe.id];
        const titleUr = trans ? trans.title : "";
        const descUr = trans ? trans.description : "";

        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery) ||
                              titleUr.toLowerCase().includes(searchQuery) ||
                              recipe.description.toLowerCase().includes(searchQuery) ||
                              descUr.toLowerCase().includes(searchQuery) ||
                              recipe.category.toLowerCase().includes(searchQuery) ||
                              recipe.instructions.some(inst => inst.toLowerCase().includes(searchQuery));
                              
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        recipeGrid.innerHTML = `
            <div class="no-recipes">
                <i class="fas fa-search"></i>
                <p>${UI_TRANSLATIONS[lang].noRecipes}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.setAttribute("id", recipe.id);
        
        const isFavorite = favoriteRecipes.includes(recipe.id);
        
        const translated = isUrdu && RECIPE_TRANSLATIONS[recipe.id] ? RECIPE_TRANSLATIONS[recipe.id] : recipe;
        const displayTitle = translated.title || recipe.title;
        const displayDesc = translated.description || recipe.description;
        const displayCategory = isUrdu ? (UI_TRANSLATIONS.ur.categories[recipe.category] || recipe.category) : recipe.category;
        const displayTime = isUrdu ? `${recipe.prepTime + recipe.cookTime} منٹ` : `${recipe.prepTime + recipe.cookTime} Mins`;
        const displayDifficulty = isUrdu ? (UI_TRANSLATIONS.ur[recipe.difficulty.toLowerCase()] || recipe.difficulty) : recipe.difficulty;

        card.innerHTML = `
            <div class="recipe-card-image" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${recipe.image}'), url('karahi_1784531967565.png'); background-size: cover; background-position: center;">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${recipe.id}')" aria-label="Favorite">
                    <i class="fa${isFavorite ? 's' : 'r'} fa-bookmark"></i>
                </button>
                <div class="recipe-badge">${displayCategory}</div>
            </div>
            <div class="recipe-card-content">
                <h3>${displayTitle}</h3>
                <p class="recipe-desc">${displayDesc.substring(0, 80)}...</p>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${displayTime}</span>
                    <span class="difficulty-tag ${recipe.difficulty.toLowerCase()}">${displayDifficulty}</span>
                </div>
            </div>
        `;
        
        card.addEventListener("click", () => {
            openRecipeDetails(recipe);
        });
        
        recipeGrid.appendChild(card);
    });
}

// Toggle Favorite Status
window.toggleFavorite = function(recipeId) {
    const idx = favoriteRecipes.indexOf(recipeId);
    if (idx > -1) {
        favoriteRecipes.splice(idx, 1);
    } else {
        favoriteRecipes.push(recipeId);
    }
    localStorage.setItem("recipe_favorites", JSON.stringify(favoriteRecipes));
    
    // Update active state in grid cards
    const card = document.getElementById(recipeId);
    if (card) {
        const btn = card.querySelector(".favorite-btn");
        if (btn) {
            if (favoriteRecipes.includes(recipeId)) {
                btn.classList.add("active");
                btn.innerHTML = `<i class="fas fa-bookmark"></i>`;
            } else {
                btn.classList.remove("active");
                btn.innerHTML = `<i class="far fa-bookmark"></i>`;
            }
        }
    }
    
    // If the modal is currently open and displays this recipe, update it
    if (selectedRecipe && selectedRecipe.id === recipeId) {
        const modalFavBtn = document.getElementById("modal-favorite-btn");
        if (modalFavBtn) {
            if (favoriteRecipes.includes(recipeId)) {
                modalFavBtn.classList.add("active");
                modalFavBtn.innerHTML = `<i class="fas fa-bookmark"></i> Garnish Bookmark`;
            } else {
                modalFavBtn.classList.remove("active");
                modalFavBtn.innerHTML = `<i class="far fa-bookmark"></i> Bookmark Recipe`;
            }
        }
    }
};

// Open Recipe Detail Modal
function openRecipeDetails(recipe) {
    selectedRecipe = recipe;
    let tempServings = recipe.servings;
    
    const isFavorite = favoriteRecipes.includes(recipe.id);
    const lang = currentLanguage;
    const isUrdu = lang === "ur";
    
    const translatedRecipe = isUrdu && RECIPE_TRANSLATIONS[recipe.id] ? RECIPE_TRANSLATIONS[recipe.id] : recipe;
    
    // Populate Modal Info
    document.getElementById("modal-recipe-title").innerText = translatedRecipe.title || recipe.title;
    document.getElementById("modal-recipe-desc").innerText = translatedRecipe.description || recipe.description;
    document.getElementById("modal-recipe-image").style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('${recipe.image}'), url('karahi_1784531967565.png')`;
    
    const displayPrep = isUrdu ? `${recipe.prepTime} منٹ` : `${recipe.prepTime} Mins`;
    const displayCook = isUrdu ? `${recipe.cookTime} منٹ` : `${recipe.cookTime} Mins`;
    const displayDiff = isUrdu ? (UI_TRANSLATIONS[lang][recipe.difficulty.toLowerCase()] || recipe.difficulty) : recipe.difficulty;
    
    document.getElementById("modal-recipe-prep").innerText = displayPrep;
    document.getElementById("modal-recipe-cook").innerText = displayCook;
    document.getElementById("modal-recipe-difficulty").className = `difficulty-tag ${recipe.difficulty.toLowerCase()}`;
    document.getElementById("modal-recipe-difficulty").innerText = displayDiff;
    
    // Favorite Button setup in Modal
    const modalFavBtn = document.getElementById("modal-favorite-btn");
    modalFavBtn.className = `modal-action-btn ${isFavorite ? 'active' : ''}`;
    modalFavBtn.innerHTML = isFavorite ? 
        (isUrdu ? `<i class="fas fa-bookmark"></i> محفوظ شدہ` : `<i class="fas fa-bookmark"></i> Saved`) : 
        (isUrdu ? `<i class="far fa-bookmark"></i> محفوظ کریں` : `<i class="far fa-bookmark"></i> Save Recipe`);
    
    modalFavBtn.onclick = () => {
        toggleFavorite(recipe.id);
    };

    updateModalLabels();

    // Render Servings and Ingredients
    const servingsCountEl = document.getElementById("servings-count");
    servingsCountEl.innerText = tempServings;
    
    renderIngredients(recipe, tempServings);
    renderInstructions(recipe);
    
    // Setup Servings adjustments (+ / -)
    const decBtn = document.getElementById("servings-dec");
    const incBtn = document.getElementById("servings-inc");
    
    decBtn.onclick = () => {
        if (tempServings > 1) {
            tempServings--;
            servingsCountEl.innerText = tempServings;
            renderIngredients(recipe, tempServings);
        }
    };
    
    incBtn.onclick = () => {
        tempServings++;
        servingsCountEl.innerText = tempServings;
        renderIngredients(recipe, tempServings);
    };
    
    // Show Modal
    recipeModal.classList.add("show");
    document.body.style.overflow = "hidden";
}

// Render dynamic ingredients table based on target servings multiplier
function renderIngredients(recipe, targetServings) {
    const listEl = document.getElementById("modal-ingredients-list");
    listEl.innerHTML = "";
    
    const factor = targetServings / recipe.servings;
    const lang = currentLanguage;
    const isUrdu = lang === "ur";
    
    const translatedRecipe = isUrdu && RECIPE_TRANSLATIONS[recipe.id] ? RECIPE_TRANSLATIONS[recipe.id] : null;
    
    recipe.ingredients.forEach((ing, index) => {
        const item = document.createElement("div");
        item.className = "ingredient-item";
        
        let displayAmount = "";
        if (ing.amount && ing.amount > 0) {
            const calculated = ing.amount * factor;
            displayAmount = Number(calculated.toFixed(2)).toString();
        }
        
        let displayUnit = ing.unit || "";
        if (isUrdu && ing.unit) {
            displayUnit = UNIT_TRANSLATIONS[ing.unit.toLowerCase()] || ing.unit;
        }
        const unitStr = displayUnit ? ` ${displayUnit}` : "";
        const completeQuantityStr = displayAmount ? `${displayAmount}${unitStr}` : "";
        
        let displayIngName = ing.name;
        if (isUrdu) {
            if (translatedRecipe && translatedRecipe.ingredients && translatedRecipe.ingredients[index]) {
                const transIng = translatedRecipe.ingredients[index];
                displayIngName = typeof transIng === 'string' ? transIng : (transIng.name || ing.name);
            } else {
                const lowerName = ing.name.toLowerCase();
                displayIngName = INGREDIENT_TRANSLATIONS[lowerName] || ing.name;
                if (displayIngName === ing.name) {
                    for (const key in INGREDIENT_TRANSLATIONS) {
                        if (lowerName.includes(key)) {
                            displayIngName = INGREDIENT_TRANSLATIONS[key];
                            break;
                        }
                    }
                }
            }
        }
        
        item.innerHTML = `
            <label class="checkbox-container">
                <input type="checkbox" id="ing-check-${index}">
                <span class="checkmark"></span>
                <span class="ingredient-name">${displayIngName}</span>
            </label>
            <span class="ingredient-amount">${completeQuantityStr}</span>
        `;
        listEl.appendChild(item);
    });
}

// Render step by step instructions with embedded checklist and local smart timers
function renderInstructions(recipe) {
    const listEl = document.getElementById("modal-instructions-list");
    listEl.innerHTML = "";
    const lang = currentLanguage;
    const isUrdu = lang === "ur";
    
    const translatedRecipe = isUrdu && RECIPE_TRANSLATIONS[recipe.id] ? RECIPE_TRANSLATIONS[recipe.id] : null;
    const instructionsToUse = (translatedRecipe && translatedRecipe.instructions && translatedRecipe.instructions.length > 0)
        ? translatedRecipe.instructions 
        : recipe.instructions;
    
    instructionsToUse.forEach((step, index) => {
        const item = document.createElement("div");
        item.className = "step-item";
        
        const originalStep = recipe.instructions[index] || step;
        const timerBtnHtml = extractTimerButton(originalStep, index);
        
        item.innerHTML = `
            <div class="step-num-container">
                <span class="step-number">${index + 1}</span>
            </div>
            <div class="step-body">
                <p class="step-text" id="step-text-${index}">${step}</p>
                ${timerBtnHtml}
            </div>
        `;
        listEl.appendChild(item);
    });
}

// Extract timer markers from instructions
function extractTimerButton(stepText, stepIndex) {
    const minRegex = /(\d+)\s*(?:-|to)?\s*(\d+)?\s*(?:minutes|mins|minute|min)/i;
    const hourRegex = /(\d+)\s*(?:-|to)?\s*(\d+)?\s*(?:hours|hour|hr)/i;
    
    let minutes = 0;
    let label = "";
    
    const minMatch = stepText.match(minRegex);
    if (minMatch) {
        const val = minMatch[2] ? parseInt(minMatch[2]) : parseInt(minMatch[1]);
        minutes = val;
        label = `${val} Mins`;
    } else {
        const hourMatch = stepText.match(hourRegex);
        if (hourMatch) {
            const val = hourMatch[2] ? parseInt(hourMatch[2]) : parseInt(hourMatch[1]);
            minutes = val * 60;
            label = `${val} ${val > 1 ? 'Hours' : 'Hour'}`;
        }
    }
    
    if (minutes > 0) {
        let displayLabel = label;
        if (currentLanguage === "ur") {
            if (label.includes("Mins")) {
                displayLabel = `${minutes} منٹ`;
            } else {
                const hrs = minutes / 60;
                displayLabel = `${hrs} گھنٹہ`;
            }
        }
        return `
            <button class="step-timer-btn" onclick="startRecipeTimer(${minutes}, ${stepIndex})">
                <i class="far fa-clock"></i> ${currentLanguage === "ur" ? 'ٹائمر شروع کریں' : 'Start Timer'} (${displayLabel})
            </button>
        `;
    }
    return "";
}

// Custom Cooking Timer Countdown
window.startRecipeTimer = function(minutes, stepIndex) {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    const timerDisplay = document.getElementById("active-timer-widget");
    const timerLabel = document.getElementById("active-timer-label");
    const timerClock = document.getElementById("active-timer-clock");
    
    timerDisplay.classList.add("active");
    if (currentLanguage === "ur") {
        timerLabel.innerText = `مرحلہ ${stepIndex + 1} ٹائمر`;
    } else {
        timerLabel.innerText = `Step ${stepIndex + 1} Timer`;
    }
    
    let secondsLeft = minutes * 60;
    
    function updateClock() {
        const h = Math.floor(secondsLeft / 3600);
        const m = Math.floor((secondsLeft % 3600) / 60);
        const s = secondsLeft % 60;
        
        let displayStr = "";
        if (h > 0) {
            displayStr += `${h.toString().padStart(2, '0')}:`;
        }
        displayStr += `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        
        timerClock.innerText = displayStr;
    }
    
    updateClock();
    
    timerInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            if (currentLanguage === "ur") {
                timerClock.innerText = "کھانا تیار ہے!";
            } else {
                timerClock.innerText = "Khaana Tayar Hai!";
            }
            playTimerSound();
            setTimeout(() => {
                timerDisplay.classList.remove("active");
            }, 5000);
        } else {
            updateClock();
        }
    }, 1000);
    
    const cancelTimerBtn = document.getElementById("active-timer-cancel");
    cancelTimerBtn.onclick = () => {
        clearInterval(timerInterval);
        timerDisplay.classList.remove("active");
    };
};

// Initialize Web Audio API synth to generate sound notification locally (no external assets needed)
function initAudio() {
    // Audio Context is initialized on first user interaction
    window.addEventListener('click', () => {
        if (!timerAudio) {
            timerAudio = new (window.AudioContext || window.webkitAudioContext)();
        }
    }, { once: true });
}

// Play beeping sound using synthesiser when cooking timer completes
function playTimerSound() {
    if (!timerAudio) return;
    
    try {
        // Play 3 pulses
        let start = timerAudio.currentTime;
        for (let i = 0; i < 3; i++) {
            let osc = timerAudio.createOscillator();
            let gain = timerAudio.createGain();
            
            osc.type = "sine";
            osc.frequency.setValueAtTime(880, start + (i * 0.5)); // Note A5
            
            gain.gain.setValueAtTime(0, start + (i * 0.5));
            gain.gain.linearRampToValueAtTime(0.5, start + (i * 0.5) + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, start + (i * 0.5) + 0.4);
            
            osc.connect(gain);
            gain.connect(timerAudio.destination);
            
            osc.start(start + (i * 0.5));
            osc.stop(start + (i * 0.5) + 0.4);
        }
    } catch (e) {
        console.error("Audio error: ", e);
    }
}

// Close Modals
function closeModal() {
    recipeModal.classList.remove("show");
    document.body.style.overflow = "auto";
    selectedRecipe = null;
}

// Form Dynamic Ingredient Rows setup
let ingredientIndex = 1;
function addFormIngredientInputRow() {
    const list = document.getElementById("form-ingredients-list");
    const row = document.createElement("div");
    row.className = "form-ingredient-row";
    row.innerHTML = `
        <input type="text" placeholder="Ingredient (e.g. Dahi)" required class="form-control ing-name">
        <input type="number" step="any" placeholder="Quantity" class="form-control ing-amt">
        <input type="text" placeholder="Unit (e.g. cup)" class="form-control ing-unit">
        <button type="button" class="form-row-remove" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
    `;
    list.appendChild(row);
}

// Form Dynamic Instruction Rows setup
let stepIndex = 1;
function addFormStepInputRow() {
    const list = document.getElementById("form-steps-list");
    const row = document.createElement("div");
    row.className = "form-step-row";
    row.innerHTML = `
        <span class="form-step-num"></span>
        <textarea placeholder="Step text (e.g. Sauté for 10 minutes)" required class="form-control step-text" rows="2"></textarea>
        <button type="button" class="form-row-remove" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
    `;
    list.appendChild(row);
}

function clearFormDynamicIngredients() {
    const listIng = document.getElementById("form-ingredients-list");
    listIng.innerHTML = `
        <div class="form-ingredient-row">
            <input type="text" placeholder="Ingredient (e.g. Chicken)" required class="form-control ing-name">
            <input type="number" step="any" placeholder="Quantity" class="form-control ing-amt">
            <input type="text" placeholder="Unit (e.g. g)" class="form-control ing-unit">
        </div>
    `;
    const listStep = document.getElementById("form-steps-list");
    listStep.innerHTML = `
        <div class="form-step-row">
            <span class="form-step-num"></span>
            <textarea placeholder="Step text (e.g. Oil garam karein aur pyaz brown karein)" required class="form-control step-text" rows="2"></textarea>
        </div>
    `;
}

// Save Recipe Form to localStorage
function saveNewRecipe() {
    const title = document.getElementById("recipe-title").value;
    const category = document.getElementById("recipe-category").value;
    const difficulty = document.getElementById("recipe-difficulty").value;
    const prepTime = parseInt(document.getElementById("recipe-prep-time").value) || 0;
    const cookTime = parseInt(document.getElementById("recipe-cook-time").value) || 0;
    const servings = parseInt(document.getElementById("recipe-servings-val").value) || 4;
    const description = document.getElementById("recipe-desc").value;
    
    // Extract Ingredients
    const ingRows = document.querySelectorAll(".form-ingredient-row");
    const ingredients = [];
    ingRows.forEach(row => {
        const name = row.querySelector(".ing-name").value;
        const amountVal = row.querySelector(".ing-amt").value;
        const amount = amountVal ? parseFloat(amountVal) : 0;
        const unit = row.querySelector(".ing-unit").value;
        if (name.trim()) {
            ingredients.push({ name, amount, unit });
        }
    });

    // Extract Steps
    const stepRows = document.querySelectorAll(".step-text");
    const instructions = [];
    stepRows.forEach(row => {
        const val = row.value;
        if (val.trim()) {
            instructions.push(val);
        }
    });

    // Handle Image Selection/Placeholder
    const uniqueId = `recipe-${Date.now()}`;
    const newRecipe = {
        id: uniqueId,
        title,
        category,
        difficulty,
        prepTime,
        cookTime,
        servings,
        description,
        image: "karahi_1784531967565.png", // Default graphic placeholder
        ingredients,
        instructions
    };

    recipesList.unshift(newRecipe); // Add to beginning of grid
    localStorage.setItem("desi_dasterkhwan_recipes_v16", JSON.stringify(recipesList));
    
    renderRecipes();
    closeAddRecipeModalBtn.click();
}
