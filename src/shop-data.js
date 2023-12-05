const SHOP_DATA = [
  {
    title: 'Pet-Friendly',
    items: [
      {
        id: 1,
        name: 'Prayer Plant',
        latin_biomial: 'Maranta leuconeura \'Red Vein\'',
        imageUrl: {
          img1: 'https://i.ibb.co/vPk0r9d/prayer-palm-1.png',
          img2: 'https://i.ibb.co/27GWDgc/prayer-palm-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/CJHdVjT/prayer-palm-1-thumb.png',
          thumb2: 'https://i.ibb.co/HpWgPHG/prayer-palm-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet-friendly', 'best-seller'],
        description: 'Originating from the lush tropics of Brazil, the Maranta leuconeura "Red Vein" earns its popular moniker, the "prayer plant," due to its enchanting nightly ritual of folding its leaves, resembling hands in prayer. This unique behavior is believed to be an evolutionary adaptation, ensuring optimal root access to rainfall. The plant\'s striking feature lies in its vibrant red veins, creating an eye-catching display.',
        care: 'Thriving in low to bright indirect light, the \'Red Vein\' Prayer Plant is a pet-friendly charmer that demands attention. Shield it from direct sunlight to prevent leaf scorching while ensuring a consistently moist but not soggy soil. Water when the top inch feels dry, maintaining a harmonious environment for both plant and pet.',
        size_description: {
          small: 'Small: Around 8"–10" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 10"–14" tall in a 6-inch pot',
        },
        pro_tip: 'Ensure your \'Fascinator\' feels like royalty by using lukewarm water for hydration—no chilly surprises for this regal plant.'
      },
      {
        id: 2,
        name: 'Spider Plant',
        latin_biomial: 'Chlorophytum comosum \'Variegatum\'',
        imageUrl: {
          img1: 'https://i.ibb.co/q79Y0C0/spider-plant-2.png',
          img2: 'https://i.ibb.co/sypmCwF/spider-plant-3.png', 
          img3: ' https://i.postimg.cc/MHtHdCXP/spider-plant-4.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/LgrhcKV/spider-plant-1-thumb.png',
          thumb2: 'https://i.ibb.co/YjjTf1M/spider-plant-2-thumb.png',
          thumb3: 'https://i.ibb.co/6yzvtDm/spider-plant-3-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet_friendly', 'best_seller'],
        description: 'Introducing the Chlorophytum comosum \'Variegatum\'—the Spider Plant that\'s anything but creepy! With arching leaves resembling nature\'s artwork, painted in shades of green and creamy white, this houseplant brings an elegant and modern vibe to your space. Its air-purifying prowess makes it a favorite, while the cascading effect of its variegated foliage adds a touch of charm.',
        care: 'This easy-going companion thrives in a range of light conditions, from bright, indirect light to partial shade, making it a versatile choice for various indoor settings. Pet-friendly and resilient, the Spider Plant tolerates occasional neglect. Water moderately, allowing the soil to dry out between waterings. Expect it to flourish in well-lit areas and gracefully endure lower light levels.',
        size_description: {
          small: 'Small: Approximately 3"-6" tall in a 4-inch pot',
          medium: 'Medium: Reaching 7"-12" tall in a 6-inch pot',
        },
        pro_tip: 'For a happy Spider Plant, water moderately and let it enjoy a bit of drought - overcaring is the only way to cast a web of trouble.'

      },
      {
        id: 3,
        name: "Bird's Nest Fern",
        latin_biomial: 'Asplenium nidus \'Crissie\'',
        imageUrl: {
          img1: 'https://i.postimg.cc/jSB5gQdb/birds-nest-fern-1.png',
          img2: 'https://i.ibb.co/q5QRJ1c/birds-nest-fern-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/C2yGF9W/birds-nest-fern-thumb.png',
          thumb2: 'https://i.ibb.co/8g9cmcC/birds-nest-fern-2-thumb.png'
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet_friendly'],
        description: 'Meet the Asplenium nidus \'Crissie\'—the Bird\'s Nest Fern with a personality as vibrant as its lush green fronds. Native to tropical Southeast Asia, this fern earns its name from the unique nest-like arrangement of its leaves, creating an exotic and captivating presence. \'Crissie\' is your ticket to bringing a slice of the rainforest into your living space.',
        care: 'Thriving in medium to bright indirect light, \'Crissie\' adds a touch of the jungle to your home while tolerating lower light conditions. Pet-friendly and low-maintenance, this fern enjoys consistently moist soil, but be mindful not to let it become waterlogged. Keep humidity levels up, especially in drier indoor environments, to mimic its native tropical habitat.',
        size_description: {
          small: 'Small: Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip: 'Mist the fronds regularly to provide the humidity \'Crissie\' craves, and avoid letting the soil dry out completely.',
      },
      {
        id: 4,
        name: 'Aloe Vera',
        latin_biomial: 'Aloe barbadensis miller',
        imageUrl: {
          img1: 'https://i.ibb.co/N6wkbN6/aloe-vera-1.png',
          img2: 'https://i.ibb.co/8MjTm4Z/aloe-vera-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/1z33dss/aloe-thumb.png',
          thumb2: 'https://i.ibb.co/VL6MfDN/aloe-vera-1-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet_friendly'],
        description: 'Say hello to Aloe vera, the desert\'s gift to your home! Known for its spiky, fleshy leaves packed with healing properties, this succulent is a true multitasker. With a sleek and modern aesthetic, Aloe vera adds a touch of green elegance while serving as a natural remedy hub. Let its soothing presence grace your space.',
        care: 'Thriving in bright indirect light, Aloe vera is your sun-worshipping companion. Pet-friendly and drought-tolerant, this succulent prefers well-draining soil. Water sparingly, allowing the soil to dry out completely between waterings. Aloe vera is a low-maintenance friend, but beware of overwatering—it\'s the only thing that might make it a little prickly.',
        size_description: {
          small: 'Small: Typically around 10"–14" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 10"–16" in height with a 6-inch pot.',
          large: 'Large: Majestic at 16"–24" tall in an 8-inch pot.',
        },
        pro_tip: 'Harvest the healing gel from its leaves for natural skincare remedies. It\'s your home\'s pharmacy in a pot!',
      },
      {
        id: 5,
        name: 'Majesty Palm',
        latin_biomial: 'Ravenea rivularis',
        imageUrl: {
          img1: 'https://i.postimg.cc/BvdKFf12/majesty-palm-1.png',
          img2: 'https://i.ibb.co/qjzh5RX/majesty-palm-2.png',
        
        },
        thumbnailUrl:  {
          thumb1: 'https://i.ibb.co/nRQpYDD/majesty-palm-1-thumb.png',
          thumb2: 'https://i.ibb.co/qjzh5RX/majesty-palm-2.png',
        },
        price: {
          large: 88,
          extra_large: 109,
        },
        tags: ['all_products', 'pet_friendly'],
        description: 'Introducing the Majesty Palm, a touch of tropical elegance for your indoor oasis! With its gracefully arching fronds and regal presence, the Ravenea rivularis brings a slice of paradise to your home. Native to Madagascar, this palm radiates a serene and majestic aura, making it a statement piece in any space.',
        care: 'Basking in bright, indirect light, the Majesty Palm flourishes in conditions that mimic its native rainforest habitat. Keep the soil consistently moist but not waterlogged, and provide ample humidity for optimal growth. This pet-friendly palm appreciates regular misting and occasional fertilization during the growing season. Watch for browning tips, a sign it needs a bit more TLC.',
        size_description: {
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large: 'Towering at 48"–60" in height, ready to make a bold statement in a 12-inch pot.',
        },
        pro_tip: 'Turn your home into a tropical haven by placing the Majesty Palm near a humidifier or grouping it with other moisture-loving plants.',
      },
      {
        id: 6,
        name: 'Peperomia Raindrop',
        latin_biomial: 'Peperomia polybotrya',
        imageUrl: {
          img1: 'https://i.ibb.co/hFz3Kht/peperomia-1.png',
          img2: 'https://i.ibb.co/wzLPnhf/peperomia-2.png',
          img3: 'https://i.postimg.cc/3RXdD4hH/peperomia-3.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/SQNVP6k/peperomia-1-thumb.png',
          thumb2: 'https://i.ibb.co/wKq40bn/peperomia-2-thumb.png',
          thumb3: 'https://i.ibb.co/VLtbCfX/peperomia-3-thumb.png',
        },
        price: {
          small: 30,
          medium: 42,
        },
        tags: ['all_products', 'pet_friendly'],
        description: 'Meet the Peperomia Raindrop—nature\'s tear-shaped gem! With its glossy, raindrop-like leaves and compact form, the Peperomia polybotrya is a delightful addition to your plant family. Native to South America, this easy-care beauty offers a modern aesthetic and a touch of whimsy, making it a favorite among plant enthusiasts.',
        care: 'Thriving in medium to bright indirect light, the Peperomia Raindrop adapts well to various lighting conditions. Pet-friendly and low-maintenance, this peperomia prefers well-draining soil and is sensitive to overwatering, so allow the top inch of soil to dry out between waterings. Fertilize sparingly during the growing season to keep it happy and compact.',
        size_description: {
          small: 'Small: Typically around 6"–9" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 10"–12" in height with a 6-inch pot.',
        },
        pro_tip: 'Wipe the raindrop-shaped leaves gently to keep them glossy and dust-free, enhancing the plant\'s visual appeal.',
      },
      {
        id: 7,
        name: 'Ponytail Palm',
        latin_biomial: 'Beaucarnea recurvata',
        imageUrl: {
          img1: 'https://i.ibb.co/s2xStsx/ponytail-palm-1.png',
          img2: '',
        
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/J5ftZTB/ponytail-palm-1-thumb.png',
          thumb2: '',
       
        },
        price: {
          small: 25,
          medium: 35,
          large: 95,
        },
        tags: ['all_products', 'pet_friendly', 'best_seller'],
        description: 'Meet the Ponytail Palm, a quirky and delightful addition to your indoor garden! Despite its name, the Beaucarnea recurvata is not a true palm but belongs to the agave family. Native to Mexico, this distinctive plant features a swollen trunk that stores water, topped with a cascade of long, arching leaves resembling a cascading ponytail. With its charming and carefree demeanor, the Ponytail Palm adds a touch of desert chic to any space.',
        care: 'Thriving in bright, indirect light, the Ponytail Palm is an easy-going companion. Pet-friendly and drought-tolerant, this low-maintenance plant prefers well-draining soil. Water sparingly, allowing the soil to dry out between waterings, and avoid overwatering to prevent root rot. The Ponytail Palm is known for its slow growth, making it an excellent choice for those seeking a lasting green companion.',
        size_description: {
          small: 'Small: Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 12"–18" in height with a 6-inch pot.',
          large: 'Large: Majestic at 18"–24" tall in an 8-inch pot.',
        },
        pro_tip: 'Rotate the pot occasionally to ensure even growth of the arching leaves and maintain its whimsical appearance.',
      },

    ],
  },
  {
    title: 'Best-Sellers',
    items: [
      {
        id: 8,
        name: 'Bird of Paradise',
        latin_biomial: 'Strelitzia reginae',
        imageUrl: {
          img1: 'https://i.ibb.co/QXDMdqZ/bird-of-paradise-1.png',
          img2: 'https://i.ibb.co/LNV46zX/bird-of-paradise-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/BGf43Vy/bird-of-paradise-1-thumb.png',
          thumb2: 'https://i.ibb.co/rHGHTDQ/bird-of-paradise-2-thumb.png',
        },
        price: {
          medium: 35,
          large: 99,
          extra_large: 119,
        },
        tags: ['all_products', 'best-seller'],
        description: 'Enter the realm of tropical grandeur with the Bird of Paradise, also known as Strelitzia reginae. Native to South Africa, this plant exudes elegance with its large, banana-like leaves and striking orange and blue flowers. With a regal presence, the Bird of Paradise adds a touch of exotic sophistication to your indoor space, making it a favorite among plant enthusiasts.',
        care: 'Basking in bright, indirect light, the Bird of Paradise thrives in conditions reminiscent of its native tropical habitat. Pet-friendly and low-maintenance, this plant prefers well-draining soil and should be watered moderately, allowing the top inch of soil to dry out between waterings. Regular misting helps maintain humidity levels, and occasional fertilization during the growing season encourages robust growth.',
        size_description: {
          medium: 'Medium: Typically around 18"–24" tall in a 6-inch pot.',
          large: 'Large: Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large: 'Towering at 48"–72" in height, making a bold statement in a 12-inch pot.',
        },
        pro_tip: 'To encourage the Bird of Paradise to spread its wings, rotate it occasionally to ensure even exposure to sunlight for balanced growth.',
      },
      {
        id: 9,
        name: 'Bonsai ',
        latin_biomial: 'Juniperus spp. (Various species)',
        imageUrl: {
          img1: 'https://i.ibb.co/ZHkdv1y/bonsai-1.png',
          img2: 'https://i.ibb.co/TmRppzp/bonsai-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/QFDg4tW/bonsai-1-thumb.png',
          thumb2: 'https://i.ibb.co/5sjDnnq/bonsai-2-thumb.png',
          thumb3: '',
        },
        price: {
          small: 29,
          medium: 55,
       
        },
        tags: ['all_products', 'best-seller'],
        description: 'Step into the miniature world of artistry with the Bonsai Tree, a living sculpture that encapsulates nature\'s beauty in a confined space. Originating from ancient Asian traditions, Bonsai involves carefully cultivating trees to mimic their full-sized counterparts in a compact form. Each Bonsai is a unique expression of patience, skill, and a deep appreciation for the delicate balance between the natural and the cultivated.',
        care: 'Bonsai care is an art in itself. The light requirements vary depending on the tree species, but most Bonsai thrive in bright, indirect light. Regular pruning and shaping are essential to maintain the desired form, and the watering schedule is specific to the type of tree. Ensure well-draining soil and repot every few years to refresh nutrients. Bonsai trees are generally pet-friendly, but care should be taken to keep pets from nibbling on the delicate foliage.',
        size_description: {
          small: 'Small: Typically ranging from 6" to 9" in height, showcasing intricate details and refined shaping.',
          medium: 'Medium: Varies between 10" to 17" tall, presenting a mature and harmonious aesthetic.',
        },
        pro_tip: 'Connect with your Bonsai by taking time for mindful trimming and shaping, fostering a bond that transcends the typical plant-owner relationship.',
      },
      {
        id: 10,
        name: 'Monstera',
        latin_biomial: 'Monstera deliciosa',
        imageUrl: {
          img1: 'https://i.ibb.co/Pwpp7H8/monstera-1.png',
          img2: 'https://i.ibb.co/sFccFyj/monstera-2.png',
          img3: 'https://i.ibb.co/TmVj1CS/monstera-3.png',
          img4: 'https://i.ibb.co/vPqmPmv/monstera-4.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/N1nJnGC/monstera-1-thumb.png',
          thumb2: 'https://i.ibb.co/28RPGgg/monstera-2-thumb.png',
          thumb3: 'https://i.ibb.co/k1QMj1P/monstera-3-thumb.png',
          thumb4: 'https://i.ibb.co/JFWRFnn/monstera-4-thumb.png',
        },
        price: {
          medium: 32,
          large: 99,
        },
        tags: ['all_products', 'best-seller'],
        description: 'Meet the Monstera Deliciosa, a tropical delight that brings a touch of the jungle to your living space! Characterized by its iconic split leaves, this plant is a statement piece with a bold and captivating presence. Native to the rainforests of Central America, the Monstera Deliciosa has earned its popularity for its unique foliage, making it a favorite among plant enthusiasts.',
        care: 'Thriving in bright, indirect light, the Monstera Deliciosa adapts well to various lighting conditions. Pet-friendly and easy to care for, this plant prefers well-draining soil and requires moderate watering. Allow the top inch of soil to dry out between waterings to prevent overwatering. Regularly wipe its large leaves to keep them dust-free and enhance their natural shine. Consider staking for optimal support as the plant grows.',
        size_description: {
          medium: 'Medium: Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Large: Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip: 'Embrace the natural beauty of the Monstera Deliciosa by allowing it to develop its characteristic fenestrations (leaf splits). For a bushier appearance, prune the stems just above a leaf node.',
      },
      {
        id: 11,
        name: 'Cactus',
        latin_biomial: 'Ferocactus spp. (Various species)',
        imageUrl: {
          img1: 'https://i.ibb.co/NLVK3nd/cactus-1.png',
          img2: 'https://i.ibb.co/c25S379/cactus-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/3ChZvBs/cactus-1-thumb.png',
          thumb2: 'https://i.ibb.co/Y2mxfPp/cactus-2-thumb.png',
        },
        price: {
          small: 27,
          medium: 42,
        },
        tags: ['all_products', 'best-seller'],
        description: 'Enter the world of the desert with the Barrel Cactus, a resilient and iconic succulent that thrives in arid landscapes. Belonging to the Ferocactus genus, these cacti are known for their cylindrical shape, ribbed texture, and striking spines. With a distinctive silhouette that echoes the beauty of the southwestern United States, the Barrel Cactus brings a touch of the wild, sun-soaked desert to your indoor collection.',
        care: 'Place your Barrel Cactus in a location with plenty of sunlight, as these plants adore bright, direct sunlight. Be cautious not to overwater; let the soil dry out completely between waterings to mimic their native habitat. Use a well-draining cactus mix to prevent waterlogging. Barrel Cacti are low-maintenance, requiring minimal attention beyond occasional monitoring for pests.',
        size_description: {
          small: 'Small: Typically around 4"–8" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 9"–16" in height with a 6-inch pot.',
        },
        pro_tip: 'Rotate the Barrel Cactus regularly to ensure even sun exposure, promoting symmetrical growth. Keep an eye on the color and texture of the spines—they can be a visual indicator of the plant\'s overall health.',
      },
      {
        id: 12,
        name: 'Satin Pothos',
        latin_biomial: 'Scindapsus pictus \'Exotica\'',
        imageUrl: {
          img1: 'https://i.ibb.co/qDKrQHp/satin-pothos-1.png',
          img2: 'https://i.ibb.co/RCY2VzF/satin-pothos-2.png',
          img3: 'https://i.ibb.co/w7V4BQj/satin-pothos-3.png',
          img4: 'https://i.ibb.co/PtNMqqL/satin-pothos-4.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/9NFq2Gn/satin-pothos-1-thumb.png',
          thumb2: 'https://i.ibb.co/3T59R9x/satin-pothos-2-thumb.png',
          thumb3: 'https://i.ibb.co/FY5fdhw/satin-pothos-3-thumb.png',
          thumb4: 'https://i.ibb.co/yYvT9QV/satin-pothos-4-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet-friendly', 'best-seller'],
        description: 'Introducing the Satin Pothos, a luscious and trailing beauty that adds a touch of elegance to any space. With heart-shaped leaves adorned in silver variegation, the Scindapsus pictus \'Exotica\' creates a mesmerizing display. This vining plant is not just a feast for the eyes but also a resilient and easy-to-care-for companion, making it a cherished favorite among plant enthusiasts.',
        care: 'Thriving in low to bright indirect light, the Satin Pothos is a versatile choice for various indoor environments. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and moderate watering. Allow the top inch of soil to dry out between waterings to maintain its health. A regular wipe-down of its leaves keeps them glossy and vibrant. The Satin Pothos is a best-seller, admired for its visual appeal and low-maintenance demeanor.',
        size_description: {
          small: 'Small: Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 10"–16" in height with a 6-inch pot.',
        },
        pro_tip: 'Encourage bushier growth by occasionally trimming the trailing vines, promoting a fuller and more compact appearance.',
      },
      {
        id: 13,
        name: 'Pothos',
        latin_biomial: 'Epipremnum aureum',
        imageUrl: {
          img1: 'https://i.ibb.co/PD7GCqw/pothos-1.png',
          img2: 'https://i.ibb.co/X4ZFwgP/pothos-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/1J1YchY/pothos-1-thumb.png',
          thumb2: 'https://i.ibb.co/nr5vGtn/pothos-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'pet-friendly', 'best-seller'],
        description: 'Meet the Pothos, a classic and versatile houseplant that effortlessly combines beauty with resilience. With heart-shaped leaves cascading down long, trailing vines, the Epipremnum aureum brings a touch of greenery to any corner of your home. Renowned for its adaptability and air-purifying qualities, the Pothos is a timeless favorite among both beginner and experienced plant enthusiasts.',
        care: 'Thriving in low to medium indirect light, the Pothos is an adaptable companion suitable for various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate periods of drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth.',
        size_description: {
          small: 'Small: Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 11"–18" in height with a 6-inch pot.',
        },
        pro_tip: 'Enhance the Pothos\'s lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage.',
      },
      {
        id: 14,
        name: 'Alocasia Polly',
        latin_biomial: 'Alocasia micholitziana \'Polly\'',
        imageUrl: {
          img1: 'https://i.ibb.co/3f4CnhM/svizzera-1.png',
          img2: 'https://i.ibb.co/7pQVzs2/svizzera-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/xDFVcBg/svizzera-1-thumb.png',
          thumb2: 'https://i.ibb.co/gw1fCGV/svizzera-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        tags: ['all_products', 'best-seller'],
        description: 'Introducing the Alocasia Polly, an exquisite and compact member of the Alocasia family. Also known as Alocasia micholitziana \'Polly,\' this plant boasts striking arrow-shaped leaves with dark green hues and contrasting veins, creating an enchanting visual display. Native to Southeast Asia, the Alocasia Polly is celebrated for its unique foliage and its ability to add a touch of tropical elegance to any interior.',
        care: 'Thriving in bright, indirect light, the Alocasia Polly brings a tropical ambiance to your space. While not pet-friendly due to its toxicity, this plant is relatively low-maintenance. Keep the soil consistently moist, avoiding waterlogging, and provide high humidity for optimal growth. Regularly wipe down the leaves to keep them dust-free and maintain their glossy appearance. The Alocasia Polly appreciates a well-draining soil mix to prevent root rot.',
        size_description: {
          small: 'Small: Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Medium: Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Large: Majestic at 24"–36" tall in a 10-inch pot.'
        },
        pro_tip: 'Encourage healthy growth by occasionally rotating the plant to ensure even exposure to sunlight on all sides. Dilute liquid fertilizer during the growing season for added nourishment.',
      },
      {
        id: 15,
        name: 'Yucca Cane',
        latin_biomial: 'Yucca elephantipes',
        imageUrl: {
          img1: 'https://i.ibb.co/tJq9H1z/yucca-cane-1.png',
          img2: 'https://i.ibb.co/f8qzfPh/yuca-cane-2.png',
          img3: '',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/mhPHvXy/yucca-cane-1-thumb.png',
          thumb2: 'https://i.ibb.co/n7JsC1f/yuca-cane-2-thumb.png',
          thumb3: 'https://i.ibb.co/q0bP5Fg/yuca-cane-3-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
          large: 60,
        },
        tags: ['all_products', 'new-plant-parent', 'best-seller'],
        description: 'Meet the Yucca Cane, a striking and resilient plant that brings a touch of the desert to your indoor oasis. Also known as Yucca elephantipes, this plant features sturdy, sword-shaped leaves that radiate from a central trunk. Native to arid regions of Mexico, the Yucca Cane is celebrated for its architectural beauty and its ability to thrive in a variety of indoor environments.',
        care: 'Thriving in bright, indirect light, the Yucca Cane is adaptable to lower light conditions but prefers a sunlit spot. Known for its drought tolerance, this plant requires infrequent watering—allow the top inch of soil to dry out between waterings. Use well-draining soil and be cautious not to overwater, as excessive moisture can lead to root rot. Pet-friendly and low-maintenance, the Yucca Cane is an excellent choice for those seeking an easy-care statement plant.',
        size_description: {
          small: 'Small: Typically around 24"–30" tall in a 6-inch pot.',
          medium: 'Medium: Reaching 30"–36" in height with an 8-inch pot.',
          large: 'Large: Majestic at 36"–48" tall in a 10-inch pot.',
        },
        pro_tip: 'Wipe down the leaves periodically to keep them free from dust.',
      },
    ],
  },
  {
    title: 'New-Plant-Parent',
    items: [
      {
        id: 16,
        name: 'Echeveria',
        latin_biomial: 'Echeveria spp.',
        imageUrl: {
          img1: 'https://i.ibb.co/nLt1KWW/echeveria-1.png',
          img2: 'https://i.ibb.co/NWm01X5/echeveria-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/QjRgpSx/echeveria-1-thumb.png',
          thumb2: 'https://i.ibb.co/X2DXV7J/echeveria-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all_products', 'new-plant-parent'],
        description: 'Meet the Echeveria, a charming and diverse genus of succulents celebrated for its rosette-shaped, fleshy leaves. With a wide range of species and varieties, Echeverias showcase an array of colors, from muted greens to vibrant pinks and purples. Native to semi-desert regions of Central America, Mexico, and northwestern South America, these succulents bring a touch of elegance and modernity to any succulent garden or indoor collection.',
        care: 'Thriving in bright, indirect light, Echeverias prefer well-draining soil to prevent root rot. Allow the soil to dry out completely between waterings, as these succulents are adapted to survive periods of drought. Pet-friendly and low-maintenance, Echeverias are suitable for both indoor and outdoor settings. Consider their sunlight preferences when deciding on placement—some varieties can tolerate more direct sunlight than others.',
        size_description: {
          small: 'Small: Typically around 3"–6" in diameter for the rosette.',
          medium: 'Medium: Reaching 6"–12" in diameter with a more established and mature appearance.',
        },
        pro_tip: 'Rotate your Echeveria periodically to ensure even exposure to sunlight, promoting symmetrical growth. Propagate new plants by removing offsets or leaves and allowing them to root.',
      },
      {
        id: 17,
        name: 'ZZ Plant',
        latin_biomial: 'Zamioculcas zamiifolia',
        imageUrl: {
          img1: 'https://i.ibb.co/2FqrxrP/zz-1.png',
          img2: 'https://i.ibb.co/S3Mc6JP/zz-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/P6SWvxH/zz-1-thumb.png',
          thumb2: 'https://i.ibb.co/FKFCf0f/zz-2-thumb.png',

        },
        price: {
          small: 25,
          medium: 35,
          large: 99
        },
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description: 'Introducing the ZZ Plant, a resilient and low-maintenance gem that adds a touch of modern elegance to your indoor jungle. Also known as Zamioculcas zamiifolia, this plant features glossy, dark green leaves that gracefully arch upward, creating a striking and architectural display. Native to Eastern Africa, the ZZ Plant has become a popular choice for homes and offices due to its ability to thrive in various light conditions and its air-purifying qualities.',
        care:'Thriving in low to bright indirect light, the ZZ Plant is exceptionally adaptable and can tolerate low light conditions. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out completely between waterings to prevent overwatering, as the ZZ Plant is susceptible to root rot. Regular wiping of the leaves keeps them glossy and dust-free.',
        size_description: {
          small: 'Small: Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Medium: Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Large: Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip: 'Prune yellow or damaged leaves at the base to encourage healthy growth. The ZZ Plant is an excellent choice for beginners due to its resilience and ease of care.',
      },
      {
        id: 18,
        name: 'Polka Dot Begonia',
        latin_biomial: 'Begonia maculata',
        imageUrl: {
          img1: 'https://i.ibb.co/0D7qR3f/polka-dot-begonia-1.png',
          img2: 'https://i.ibb.co/k439CHv/polkda-dot-begonia-1.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/80TL5M1/polka-dot-begonia-1-thumb.png',
          thumb2: 'https://i.ibb.co/Jc2S5xV/polkda-dot-begonia-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description: 'Say hello to the Polka Dot Begonia, a captivating and stylish member of the Begonia family. Also known as Begonia maculata, this plant steals the spotlight with its angel-wing-shaped leaves adorned with silver polka dots. Native to the rainforests of Brazil, the Polka Dot Begonia is not just a treat for the eyes but also a perfect choice for plant enthusiasts seeking a unique and visually striking addition to their collection.',
        care: 'Thriving in bright, indirect light, the Polka Dot Begonia prefers well-draining soil and slightly higher humidity levels. Keep the soil consistently moist but not waterlogged, allowing the top inch to dry out between waterings. Pet-friendly and relatively low-maintenance, this Begonia adds a touch of tropical flair to your indoor space. Regularly wipe the leaves to maintain their glossy appearance and ensure the plant\'s overall health.',
        size_description: {
          small: 'Small: Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip: 'Encourage bushier growth and enhance the Polka Dot Begonia\'s appearance by pinching back the stems periodically. Propagate by taking stem cuttings and rooting them in water or soil.',
      },
      {
        id: 19,
        name: 'Snake Plant',
        latin_biomial: 'Sansevieria trifasciata',
        imageUrl: {
          img1: 'https://i.ibb.co/cDWb3ZG/snake-plant-1.png',
          img2: 'https://i.ibb.co/gmLB9xR/snake-plant-2.png',
          img3: 'https://i.ibb.co/NF9TKWJ/snake-plant-3.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/N32RTpK/snake-plant-1-thumb.png',
          thumb2: 'https://i.ibb.co/BPPRVfd/snake-plant-2-thumb.png',
          thumb3: 'https://i.ibb.co/Zm7xV71/snake-plant-3-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description: 'Meet the Snake Plant, a resilient and striking houseplant known for its architectural leaves and air-purifying qualities. Also known as Sansevieria trifasciata, this plant features upright, sword-like leaves with variegated patterns, creating a modern and eye-catching display. Native to West Africa, the Snake Plant is a popular choice for homes and offices due to its ability to thrive in low-light conditions and its low-maintenance nature.',
        care: 'Thriving in low to bright indirect light, the Snake Plant is exceptionally adaptable and can tolerate low light levels. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out between waterings to prevent overwatering, as the Snake Plant is susceptible to root rot. A hardy and robust choice, it can withstand neglect and still thrive.',
        size_description: {
          small: 'Small: Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 12"–24" in height with a 6-inch pot.',
          large: 'Large: Majestic at 24"–36" tall in a 10-inch pot.'
        },
        pro_tip: 'The Snake Plant is known for its ability to filter indoor air pollutants. Place it in bedrooms or living areas to enhance air quality. Consider using a cactus or succulent mix for planting.',
      },
      {
        id: 20,
        name: 'Pothos Variegated',
        latin_biomial: 'Epipremnum aureum \'Marble Queen\' or \'Golden Pothos\'',
        imageUrl: {
          img1: 'https://i.ibb.co/PD7GCqw/pothos-1.png',
          img2: 'https://i.ibb.co/X4ZFwgP/pothos-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/GHQ9Wbs/pothos-verigated-1-thumb.png',
          thumb2: 'https://i.ibb.co/qd5hqsZ/pothos-verigated-2-thumb.png',
          thumb3: '',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all-products', 'pet-friendly', 'new-plant-parent', 'best-seller'],
        description: 'Introducing the Variegated Pothos, a classic and enchanting houseplant that effortlessly combines elegance with ease of care. Also known as Epipremnum aureum \'Marble Queen\' or \'Golden Pothos,\' this plant features heart-shaped leaves adorned with variegated patterns of green and creamy white. Native to the Solomon Islands, the Variegated Pothos is celebrated for its versatility, air-purifying qualities, and the trailing vines that add a touch of greenery to any space.',
        care: 'Thriving in low to bright indirect light, the Variegated Pothos is adaptable to various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate occasional drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth. The Variegated Pothos is an excellent choice for beginners and seasoned plant enthusiasts alike.',
        size_description: {
          small: 'Small: Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 10"–18" in height with a 6-inch pot.',
        },
        pro_tip: 'Enhance the Variegated Pothos\'s lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage. Trim the vines to control its size and encourage a fuller appearance.',
      },
      {
        id: 21,
        name: 'Fiddle Leaf Fig',
        latin_biomial: 'Ficus lyrata',
        imageUrl: {
          img1: 'https://i.ibb.co/PcxVhSg/fiddle-leaf-fig-1.png',
          img2: 'https://i.ibb.co/5kYwPNZ/fiddle-leaf-fig-2.png',
          img3: 'https://i.ibb.co/cw28M1k/fiddle-leaf-fig-3.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/s3d7433/fiddle-leaf-fig-1-thumb.png',
          thumb2: 'https://i.ibb.co/JssRCf1/fiddle-leaf-fig-2-thumb.png',
          thumb3: 'https://i.ibb.co/kSWYsxH/fiddle-leaf-fig-3-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
          large: 99,
          extra_large: 129,
        },
        tags: ['all_products', 'new-plant-parent'],
        description: 'Enter the world of botanical elegance with the Fiddle Leaf Fig, a statement plant celebrated for its large, violin-shaped leaves. Also known as Ficus lyrata, this plant is a popular choice for interior decor, adding a touch of lush greenery and a hint of tropical flair to any space. Native to West Africa, the Fiddle Leaf Fig has become a beloved favorite among plant enthusiasts for its striking foliage and iconic silhouette.',
        care: 'Thriving in bright, indirect light, the Fiddle Leaf Fig prefers well-draining soil and appreciates consistent moisture. Allow the top inch of soil to dry out between waterings to prevent overwatering. Pet-friendly and low-maintenance, this plant benefits from occasional leaf wiping to keep its large leaves dust-free. Regularly rotate the plant to ensure even exposure to sunlight and promote symmetrical growth.',
        size_description: {
          small: 'Small: Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Medium: Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Large: Majestic at 24"–36" tall in a 10-inch pot.',
          extra_large:'Extra Large: Towering at 36"–60" in height, making a bold statement in a 12-inch pot.'
        },
        pro_tip: 'Support the Fiddle Leaf Fig\'s upward growth by staking or providing a decorative support. Consider misting the leaves or placing a humidifier nearby to enhance humidity, especially in dry indoor environments.',
      },
      {
        id: 22,
        name: 'Oxalis',
        latin_biomial: 'Oxalis spp.',
        imageUrl: {
          img1: 'https://i.ibb.co/M2T25tz/oxalis-1.png',
          img2: 'https://i.ibb.co/yWDVGXN/oxalis-2.png',
        },
        thumbnailUrl: {
          thumb1: 'https://i.ibb.co/0QC8JXv/oxalis-1-thumb.png',
          thumb2: 'https://i.ibb.co/QpKFnXX/oxalis-2-thumb.png',
        },
        price: {
          small: 22,
          medium: 32,
        },
        tags: ['all-products', 'new-plant-parent'],
        description: 'Meet Oxalis, a charming and delicate plant genus known for its distinctive shamrock-shaped leaves and dainty flowers. Also referred to as the Shamrock Plant, Oxalis comes in various species and varieties, each displaying unique leaf colors and characteristics. Originating from various regions worldwide, including South America, Central America, and South Africa, Oxalis is a delightful addition to both indoor and outdoor gardens.',
        care: 'Thriving in bright, indirect light, Oxalis prefers well-draining soil and slightly higher humidity levels. Water the plant when the top inch of soil feels dry, but be cautious not to overwater, as excessive moisture can lead to bulb rot. Pet-friendly and relatively low-maintenance, Oxalis goes through periods of dormancy where it may shed some leaves—this is a normal part of its growth cycle. During dormancy, reduce watering and allow the plant to rest.',
        size_description: {
          small: 'Small: Typically around 6"–8" tall in a 4-inch pot.',
          medium: 'Medium: Reaching 8"–12" in height with a 6-inch pot.',
        },
        pro_tip: 'Rotate the Oxalis periodically to ensure even growth and prevent the plant from leaning towards the light. If the leaves start to look tired or close during the day, it might be an indication that the plant needs more light.',
      },
    ],
  },
]

export default SHOP_DATA
