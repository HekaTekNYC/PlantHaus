const SHOP_DATA = [
  {
    title: 'Pet-Friendly',
    items: [
      {
        id: 1,
        name: 'Prayer Plant',
        urlName: 'prayer-plant',
        latin_binomial: "Maranta Leuconeura 'Red Vein'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-1.webp?updatedAt=1723131742816',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-2.webp?updatedAt=1723131742767',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-1-thumb.webp?updatedAt=1723131742767',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-2-thumb.webp?updatedAt=1723131742557',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 90,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          'Originating from the lush tropics of Brazil, the Maranta Leuconeura "Red Vein" earns its popular moniker, the "prayer plant," due to its enchanting nightly ritual of folding its leaves, resembling hands in prayer. This unique behavior is believed to be an evolutionary adaptation, ensuring optimal root access to rainfall. The plant\'s striking feature lies in its vibrant red veins, creating an eye-catching display.',
        care: "Thriving in low to bright indirect light, the 'Red Vein' Prayer Plant is a pet-friendly charmer that demands attention. Shield it from direct sunlight to prevent leaf scorching while ensuring a consistently moist but not soggy soil. Water when the top inch feels dry, maintaining a harmonious environment for both plant and pet.",
        size_description: {
          small: 'Around 8"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–14" tall in a 6-inch pot',
        },
        pro_tip:
          "Ensure your 'Fascinator' feels like royalty by using lukewarm water for hydration—no chilly surprises for this regal plant.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 2,
        name: 'Spider Plant',
        urlName: 'spider-plant',
        latin_binomial: "Chlorophytum Ccomosum 'Variegatum'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-4.webp?updatedAt=1723131752164p',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-3.webp?updatedAt=1723131752066',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-2.webp?updatedAt=1723131746870',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-4-thumb.webp?updatedAt=1723131752138',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-3-thumb.webp?updatedAt=1723131746890',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-2-thumb.webp?updatedAt=1723131746921',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 111,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          "Introducing the Chlorophytum Ccomosum 'Variegatum'—the Spider Plant that's anything but creepy! With arching leaves resembling nature's artwork, painted in shades of green and creamy white, this houseplant brings an elegant and modern vibe to your space. Its air-purifying prowess makes it a favorite, while the cascading effect of its variegated foliage adds a touch of charm.",
        care: 'This easy-going companion thrives in a range of light conditions, from bright, indirect light to partial shade, making it a versatile choice for various indoor settings. Pet-friendly and resilient, the Spider Plant tolerates occasional neglect. Water moderately, allowing the soil to dry out between waterings. Expect it to flourish in well-lit areas and gracefully endure lower light levels.',
        size_description: {
          small: ' Approximately 3"-6" tall in a 4-inch pot',
          medium: 'Reaching 7"-12" tall in a 6-inch pot',
        },
        pro_tip:
          'For a happy Spider Plant, water moderately and let it enjoy a bit of drought - overcaring is the only way to cast a web of trouble.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 3,
        name: "Bird's Nest Fern",
        urlName: 'birds-nest-fern',
        latin_binomial: "Asplenium Nidus 'Crissie'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-1.webp?updatedAt=1723131730537',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-2.webp?updatedAt=1723131730742',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-1-thumb.webp?updatedAt=1723131730284',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-2-thumb.webp?updatedAt=1723131731160',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 47,
        stars: 5,
        tags: ['all-products', 'pet-friendly'],
        description:
          "Meet the Asplenium Nidus 'Crissie'—the Bird's Nest Fern with a personality as vibrant as its lush green fronds. Native to tropical Southeast Asia, this fern earns its name from the unique nest-like arrangement of its leaves, creating an exotic and captivating presence. 'Crissie' is your ticket to bringing a slice of the rainforest into your living space.",
        care: "Thriving in medium to bright indirect light, 'Crissie' adds a touch of the jungle to your home while tolerating lower light conditions. Pet-friendly and low-maintenance, this fern enjoys consistently moist soil, but be mindful not to let it become waterlogged. Keep humidity levels up, especially in drier indoor environments, to mimic its native tropical habitat.",
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Mist the fronds regularly to provide the humidity 'Crissie' craves, and avoid letting the soil dry out completely.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },

      {
        id: 5,
        name: 'Majesty Palm',
        latin_binomial: 'Ravenea rivularis',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-1.webp?updatedAt=1723131733809',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-2.webp?updatedAt=1723131734145',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-1-thumb.webp?updatedAt=1723131733629',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-2-thumb.webp?updatedAt=1723131733788',
        },
        price: {
          large: 88,
          extra_large: 109,
        },
        reviews: 59,
        stars: 5,
        tags: ['all-products', 'pet-friendly'],
        description:
          'Introducing the Majesty Palm, a touch of tropical elegance for your indoor oasis! With its gracefully arching fronds and regal presence, the Ravenea rivularis brings a slice of paradise to your home. Native to Madagascar, this palm radiates a serene and majestic aura, making it a statement piece in any space.',
        care: 'Basking in bright, indirect light, the Majesty Palm flourishes in conditions that mimic its native rainforest habitat. Keep the soil consistently moist but not waterlogged, and provide ample humidity for optimal growth. This pet-friendly palm appreciates regular misting and occasional fertilization during the growing season. Watch for browning tips, a sign it needs a bit more TLC.',
        size_description: {
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large:
            'Towering at 48"–60" in height, ready to make a bold statement in a 12-inch pot.',
        },
        pro_tip:
          'Turn your home into a tropical haven by placing the Majesty Palm near a humidifier or grouping it with other moisture-loving plants.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 6,
        name: 'Peperomia Raindrop',
        latin_binomial: 'Peperomia Polybotrya',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-1_iurcww.webp?updatedAt=1723131736703',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-2.webp?updatedAt=1723131736624',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-3.webp?updatedAt=1723131737414',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-1-thumb.webp?updatedAt=1723131736319',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-2-thumb.webp?updatedAt=1723131736637',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-3-thumb.webp?updatedAt=1723131736513',
        },
        price: {
          small: 30,
          medium: 42,
        },
        reviews: 30,
        stars: 4,
        tags: ['all-products', 'pet-friendly'],
        description:
          "Meet the Peperomia Raindrop—nature's tear-shaped gem! With its glossy, raindrop-like leaves and compact form, the Peperomia Polybotrya is a delightful addition to your plant family. Native to South America, this easy-care beauty offers a modern aesthetic and a touch of whimsy, making it a favorite among plant enthusiasts.",
        care: 'Thriving in medium to bright indirect light, the Peperomia Raindrop adapts well to various lighting conditions. Pet-friendly and low-maintenance, this peperomia prefers well-draining soil and is sensitive to overwatering, so allow the top inch of soil to dry out between waterings. Fertilize sparingly during the growing season to keep it happy and compact.',
        size_description: {
          small: 'Typically around 6"–9" tall in a 4-inch pot.',
          medium: 'Reaching 10"–12" in height with a 6-inch pot.',
        },
        pro_tip:
          "Wipe the raindrop-shaped leaves gently to keep them glossy and dust-free, enhancing the plant's visual appeal.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 7,
        name: 'Ponytail Palm',
        latin_binomial: 'Beaucarnea Recurvata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-2.webp?updatedAt=1723131741078',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-1.webp?updatedAt=1723131740999',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-2-thumb_2.webp?updatedAt=1723131741012',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-1-thumb.webp?updatedAt=1723131740243',
        },
        price: {
          small: 25,
          medium: 35,
          large: 95,
        },
        reviews: 62,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          'Meet the Ponytail Palm, a quirky and delightful addition to your indoor garden! Despite its name, the Beaucarnea Recurvata is not a true palm but belongs to the agave family. Native to Mexico, this distinctive plant features a swollen trunk that stores water, topped with a cascade of long, arching leaves resembling a cascading ponytail. With its charming and carefree demeanor, the Ponytail Palm adds a touch of desert chic to any space.',
        care: 'Thriving in bright, indirect light, the Ponytail Palm is an easy-going companion. Pet-friendly and drought-tolerant, this low-maintenance plant prefers well-draining soil. Water sparingly, allowing the soil to dry out between waterings, and avoid overwatering to prevent root rot. The Ponytail Palm is known for its slow growth, making it an excellent choice for those seeking a lasting green companion.',
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
          large: 'Majestic at 18"–24" tall in an 8-inch pot.',
        },
        pro_tip:
          'Rotate the pot occasionally to ensure even growth of the arching leaves and maintain its whimsical appearance.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 9,
        name: 'Bonsai ',
        latin_binomial: 'Juniperus Spp. (Various species)',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2.webp?updatedAt=1723131730967',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1.webp?updatedAt=1723131731098',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2-thumb.webp?updatedAt=1723131730882',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1-thumb.webp?updatedAt=1723131730742',
        },
        price: {
          small: 29,
          medium: 55,
        },
        reviews: 22,
        stars: 4,
        tags: ['all-products'],
        description:
          "Step into the miniature world of artistry with the Bonsai Tree, a living sculpture that encapsulates nature's beauty in a confined space. Originating from ancient Asian traditions, Bonsai involves carefully cultivating trees to mimic their full-sized counterparts in a compact form. Each Bonsai is a unique expression of patience, skill, and a deep appreciation for the delicate balance between the natural and the cultivated.",
        care: 'Bonsai care is an art in itself. The light requirements vary depending on the tree species, but most Bonsai thrive in bright, indirect light. Regular pruning and shaping are essential to maintain the desired form, and the watering schedule is specific to the type of tree. Ensure well-draining soil and repot every few years to refresh nutrients. Bonsai trees are generally pet-friendly, but care should be taken to keep pets from nibbling on the delicate foliage.',
        size_description: {
          small:
            'Typically ranging from 6" to 9" in height, showcasing intricate details and refined shaping.',
          medium:
            'Varies between 10" to 17" tall, presenting a mature and harmonious aesthetic.',
        },
        pro_tip:
          'Connect with your Bonsai by taking time for mindful trimming and shaping, fostering a bond that transcends the typical plant-owner relationship.',
        icons: [
          {
            id: 2,
            name: 'Lots of Loving',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/lots-love.webp?updatedAt=1723131732928',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 15,
        name: 'Yucca Cane',
        latin_binomial: 'Yucca Elephantipes',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1.webp?updatedAt=1723131755087',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3.webp?updatedAt=1723131758704',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2.webp?updatedAt=1723131754787',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1-thumb.webp?updatedAt=1723131755557',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3-thumb.webp?updatedAt=1723131755046',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2-thumb.webp?updatedAt=1723131754851',
        },
        price: {
          small: 22,
          medium: 32,
          large: 60,
        },
        reviews: 71,
        stars: 4,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Meet the Yucca Cane, a striking and resilient plant that brings a touch of the desert to your indoor oasis. Also known as Yucca Elephantipes, this plant features sturdy, sword-shaped leaves that radiate from a central trunk. Native to arid regions of Mexico, the Yucca Cane is celebrated for its architectural beauty and its ability to thrive in a variety of indoor environments.',
        care: 'Thriving in bright, indirect light, the Yucca Cane is adaptable to lower light conditions but prefers a sunlit spot. Known for its drought tolerance, this plant requires infrequent watering—allow the top inch of soil to dry out between waterings. Use well-draining soil and be cautious not to overwater, as excessive moisture can lead to root rot. Pet-friendly and low-maintenance, the Yucca Cane is an excellent choice for those seeking an easy-care statement plant.',
        size_description: {
          small: 'Typically around 24"–30" tall in a 6-inch pot.',
          medium: 'Reaching 30"–36" in height with an 8-inch pot.',
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
        },
        pro_tip:
          'Wipe down the leaves periodically to keep them free from dust.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
    ],
  },
  /* Best Sellers Category*/
  {
    title: 'Best-Sellers',
    items: [
      {
        id: 8,
        name: 'Bird of Paradise',
        latin_binomial: 'Strelitzia Reginae',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-1.webp?updatedAt=1723131730463',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-2.webp?updatedAt=1723131730605',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-1-thumb.webp?updatedAt=1723131730528',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-2-thumb.webp?updatedAt=1723131730424',
        },
        price: {
          medium: 35,
          large: 99,
          extra_large: 119,
        },
        reviews: 83,
        stars: 4,
        tags: ['all-products', 'best-seller'],
        description:
          'Enter the realm of tropical grandeur with the Bird of Paradise, also known as Strelitzia Reginae. Native to South Africa, this plant exudes elegance with its large, banana-like leaves and striking orange and blue flowers. With a regal presence, the Bird of Paradise adds a touch of exotic sophistication to your indoor space, making it a favorite among plant enthusiasts.',
        care: 'Basking in bright, indirect light, the Bird of Paradise thrives in conditions reminiscent of its native tropical habitat. Pet-friendly and low-maintenance, this plant prefers well-draining soil and should be watered moderately, allowing the top inch of soil to dry out between waterings. Regular misting helps maintain humidity levels, and occasional fertilization during the growing season encourages robust growth.',
        size_description: {
          medium: 'Typically around 18"–24" tall in a 6-inch pot.',
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large:
            'Towering at 48"–72" in height, making a bold statement in a 12-inch pot.',
        },
        pro_tip:
          'To encourage the Bird of Paradise to spread its wings, rotate it occasionally to ensure even exposure to sunlight for balanced growth.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 9,
        name: 'Bonsai',
        latin_binomial: 'Juniperus Spp. (Various species)',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2.webp?updatedAt=1723131730967',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1.webp?updatedAt=1723131731098',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2-thumb.webp?updatedAt=1723131730882',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1-thumb.webp?updatedAt=1723131730742',
        },
        price: {
          small: 29,
          medium: 55,
        },
        reviews: 22,
        stars: 4,
        tags: ['all-products'],
        description:
          "Step into the miniature world of artistry with the Bonsai Tree, a living sculpture that encapsulates nature's beauty in a confined space. Originating from ancient Asian traditions, Bonsai involves carefully cultivating trees to mimic their full-sized counterparts in a compact form. Each Bonsai is a unique expression of patience, skill, and a deep appreciation for the delicate balance between the natural and the cultivated.",
        care: 'Bonsai care is an art in itself. The light requirements vary depending on the tree species, but most Bonsai thrive in bright, indirect light. Regular pruning and shaping are essential to maintain the desired form, and the watering schedule is specific to the type of tree. Ensure well-draining soil and repot every few years to refresh nutrients. Bonsai trees are generally pet-friendly, but care should be taken to keep pets from nibbling on the delicate foliage.',
        size_description: {
          small:
            'Typically ranging from 6" to 9" in height, showcasing intricate details and refined shaping.',
          medium:
            'Varies between 10" to 17" tall, presenting a mature and harmonious aesthetic.',
        },
        pro_tip:
          'Connect with your Bonsai by taking time for mindful trimming and shaping, fostering a bond that transcends the typical plant-owner relationship.',
        icons: [
          {
            id: 2,
            name: 'Lots of Loving',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/lots-love.webp?updatedAt=1723131732928',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 10,
        name: 'Monstera',
        latin_binomial: 'Monstera Deliciosa',
        imageUrl: {
          img1: ' https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-4.webp?updatedAt=1723131735904',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-2.webp?updatedAt=1723131735767',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-3.webp?updatedAt=1723131735462',
          img4: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-1.webp?updatedAt=1723131734440',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-4-thumb.webp?updatedAt=1723131735830 ',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-2-thumb.webp?updatedAt=1723131735155',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-3-thumb.webp?updatedAt=1723131735497',
          thumb4:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-1-thumb.webp?updatedAt=1723131734394',
        },
        price: {
          medium: 32,
          large: 99,
        },
        reviews: 126,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Meet the Monstera Deliciosa, a tropical delight that brings a touch of the jungle to your living space! Characterized by its iconic split leaves, this plant is a statement piece with a bold and captivating presence. Native to the rainforests of Central America, the Monstera Deliciosa has earned its popularity for its unique foliage, making it a favorite among plant enthusiasts.',
        care: 'Thriving in bright, indirect light, the Monstera Deliciosa adapts well to various lighting conditions. Pet-friendly and easy to care for, this plant prefers well-draining soil and requires moderate watering. Allow the top inch of soil to dry out between waterings to prevent overwatering. Regularly wipe its large leaves to keep them dust-free and enhance their natural shine. Consider staking for optimal support as the plant grows.',
        size_description: {
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Embrace the natural beauty of the Monstera Deliciosa by allowing it to develop its characteristic fenestrations (leaf splits). For a bushier appearance, prune the stems just above a leaf node.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 11,
        name: 'Cactus',
        latin_binomial: 'Ferocactus Spp. (Various species)',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-1.webp?updatedAt=1723131730928',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-2.webp?updatedAt=1723131731291',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-1-thumb.webp?updatedAt=1723131731627',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-2-thumb.webp?updatedAt=1723131731047',
        },
        price: {
          small: 27,
          medium: 42,
        },
        reviews: 40,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Enter the world of the desert with the Barrel Cactus, a resilient and iconic succulent that thrives in arid landscapes. Belonging to the Ferocactus genus, these cacti are known for their cylindrical shape, ribbed texture, and striking spines. With a distinctive silhouette that echoes the beauty of the southwestern United States, the Barrel Cactus brings a touch of the wild, sun-soaked desert to your indoor collection.',
        care: 'Place your Barrel Cactus in a location with plenty of sunlight, as these plants adore bright, direct sunlight. Be cautious not to overwater; let the soil dry out completely between waterings to mimic their native habitat. Use a well-draining cactus mix to prevent waterlogging. Barrel Cacti are low-maintenance, requiring minimal attention beyond occasional monitoring for pests.',
        size_description: {
          small: 'Typically around 4"–8" tall in a 4-inch pot.',
          medium: 'Reaching 9"–16" in height with a 6-inch pot.',
        },
        pro_tip:
          "Rotate the Barrel Cactus regularly to ensure even sun exposure, promoting symmetrical growth. Keep an eye on the color and texture of the spines—they can be a visual indicator of the plant's overall health.",
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 12,
        name: 'Satin Pothos',
        latin_binomial: "Scindapsus Pictus 'Exotica'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-1.webp?updatedAt=1723131744274',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-3.webp?updatedAt=1723131744119',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-2.webp?updatedAt=1723131744067',
          img4: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-4.webp?updatedAt=1723131744149',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-1-thumb.webp?updatedAt=1723131743744',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-3-thumb.webp?updatedAt=1723131743927',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-2-thumb.webp?updatedAt=1723131743889',
          thumb4:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-4-thumb.webp?updatedAt=1723131743956',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 75,
        stars: 4,
        tags: ['all-products', 'best-seller'],
        description:
          "Introducing the Satin Pothos, a luscious and trailing beauty that adds a touch of elegance to any space. With heart-shaped leaves adorned in silver variegation, the Scindapsus Pictus 'Exotica' creates a mesmerizing display. This vining plant is not just a feast for the eyes but also a resilient and easy-to-care-for companion, making it a cherished favorite among plant enthusiasts.",
        care: 'Thriving in low to bright indirect light, the Satin Pothos is a versatile choice for various indoor environments. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and moderate watering. Allow the top inch of soil to dry out between waterings to maintain its health. A regular wipe-down of its leaves keeps them glossy and vibrant. The Satin Pothos is a best-seller, admired for its visual appeal and low-maintenance demeanor.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–16" in height with a 6-inch pot.',
        },
        pro_tip:
          'Encourage bushier growth by occasionally trimming the trailing vines, promoting a fuller and more compact appearance.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 13,
        name: 'Pothos',
        latin_binomial: 'Epipremnum aureum',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-1.webp?updatedAt=1723131741846',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-2.webp?updatedAt=1723131742042',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-1-thumb.webp?updatedAt=1723131742074',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-2-thumb.webp?updatedAt=1723131741941',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 146,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Meet the Pothos, a classic and versatile houseplant that effortlessly combines beauty with resilience. With heart-shaped leaves cascading down long, trailing vines, the Am brings a touch of greenery to any corner of your home. Renowned for its adaptability and air-purifying qualities, the Pothos is a timeless favorite among both beginner and experienced plant enthusiasts.',
        care: 'Thriving in low to medium indirect light, the Pothos is an adaptable companion suitable for various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate periods of drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 11"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Enhance the Pothos's lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 14,
        name: 'Alocasia Polly',
        latin_binomial: "Alocasia Micholitziana 'Polly'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-1.webp?updatedAt=1723131752374',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-2.webp?updatedAt=1723131755147',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-1-thumb.webp?updatedAt=1723131752104',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-2-thumb.webp?updatedAt=1723131758955',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        reviews: 62,
        stars: 4,
        tags: ['all-products', 'best-seller'],
        description:
          "Introducing the Alocasia Polly, an exquisite and compact member of the Alocasia family. Also known as Alocasia Micholitziana 'Polly,' this plant boasts striking arrow-shaped leaves with dark green hues and contrasting veins, creating an enchanting visual display. Native to Southeast Asia, the Alocasia Polly is celebrated for its unique foliage and its ability to add a touch of tropical elegance to any interior.",
        care: 'Thriving in bright, indirect light, the Alocasia Polly brings a tropical ambiance to your space. While not pet-friendly due to its toxicity, this plant is relatively low-maintenance. Keep the soil consistently moist, avoiding waterlogging, and provide high humidity for optimal growth. Regularly wipe down the leaves to keep them dust-free and maintain their glossy appearance. The Alocasia Polly appreciates a well-draining soil mix to prevent root rot.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Encourage healthy growth by occasionally rotating the plant to ensure even exposure to sunlight on all sides. Dilute liquid fertilizer during the growing season for added nourishment.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 15,
        name: 'Yucca Cane',
        latin_binomial: 'Yucca Elephantipes',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1.webp?updatedAt=1723131755087',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3.webp?updatedAt=1723131758704',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2.webp?updatedAt=1723131754787',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1-thumb.webp?updatedAt=1723131755557',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3-thumb.webp?updatedAt=1723131755046',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2-thumb.webp?updatedAt=1723131754851',
        },
        price: {
          small: 22,
          medium: 32,
          large: 60,
        },
        reviews: 71,
        stars: 4,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Meet the Yucca Cane, a striking and resilient plant that brings a touch of the desert to your indoor oasis. Also known as Yucca Elephantipes, this plant features sturdy, sword-shaped leaves that radiate from a central trunk. Native to arid regions of Mexico, the Yucca Cane is celebrated for its architectural beauty and its ability to thrive in a variety of indoor environments.',
        care: 'Thriving in bright, indirect light, the Yucca Cane is adaptable to lower light conditions but prefers a sunlit spot. Known for its drought tolerance, this plant requires infrequent watering—allow the top inch of soil to dry out between waterings. Use well-draining soil and be cautious not to overwater, as excessive moisture can lead to root rot. Pet-friendly and low-maintenance, the Yucca Cane is an excellent choice for those seeking an easy-care statement plant.',
        size_description: {
          small: 'Typically around 24"–30" tall in a 6-inch pot.',
          medium: 'Reaching 30"–36" in height with an 8-inch pot.',
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
        },
        pro_tip:
          'Wipe down the leaves periodically to keep them free from dust.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
    ],
  },
  /* New Plant Parent Category */
  {
    title: 'New-Plant-Parent',
    items: [
      {
        id: 16,
        name: 'Polka Dot Begonia',
        latin_binomial: 'Begonia Maculata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-1.webp?updatedAt=1723131739692',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-2.webp?updatedAt=1723131739897',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-1-thumb.webp?updatedAt=1723131738833',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-2-thumb.webp?updatedAt=1723131739935',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 23,
        stars: 4,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Say hello to the Polka Dot Begonia, a captivating and stylish member of the Begonia family. Also known as Begonia Maculata, this plant steals the spotlight with its angel-wing-shaped leaves adorned with silver polka dots. Native to the rainforests of Brazil, the Polka Dot Begonia is not just a treat for the eyes but also a perfect choice for plant enthusiasts seeking a unique and visually striking addition to their collection.',
        care: "Thriving in bright, indirect light, the Polka Dot Begonia prefers well-draining soil and slightly higher humidity levels. Keep the soil consistently moist but not waterlogged, allowing the top inch to dry out between waterings. Pet-friendly and relatively low-maintenance, this Begonia adds a touch of tropical flair to your indoor space. Regularly wipe the leaves to maintain their glossy appearance and ensure the plant's overall health.",
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Encourage bushier growth and enhance the Polka Dot Begonia's appearance by pinching back the stems periodically. Propagate by taking stem cuttings and rooting them in water or soil.",
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 17,
        name: 'ZZ Plant',
        latin_binomial: 'Zamioculcas Zamiifolia',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-1.webp?updatedAt=1723131756121',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-2.webp?updatedAt=1723131756268',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-1-thumb.webp?updatedAt=1723131755134',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-2-thumb.webp?updatedAt=1723131755941',
        },
        price: {
          small: 25,
          medium: 35,
          large: 99,
        },
        reviews: 165,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Introducing the ZZ Plant, a resilient and low-maintenance gem that adds a touch of modern elegance to your indoor jungle. Also known as Zamioculcas Zamiifolia, this plant features glossy, dark green leaves that gracefully arch upward, creating a striking and architectural display. Native to Eastern Africa, the ZZ Plant has become a popular choice for homes and offices due to its ability to thrive in various light conditions and its air-purifying qualities.',
        care: 'Thriving in low to bright indirect light, the ZZ Plant is exceptionally adaptable and can tolerate low light conditions. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out completely between waterings to prevent overwatering, as the ZZ Plant is susceptible to root rot. Regular wiping of the leaves keeps them glossy and dust-free.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Prune yellow or damaged leaves at the base to encourage healthy growth. The ZZ Plant is an excellent choice for beginners due to its resilience and ease of care.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 18,
        name: 'Echeveria',
        latin_binomial: 'Echeveria Spp.',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-1.webp?updatedAt=1723131731643',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-2.webp?updatedAt=1723131731592',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-1-thumb.webp?updatedAt=1723131731354',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-2-thumb.webp?updatedAt=1723131731987',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 45,
        stars: 5,
        tags: ['all-products', 'best-sellers'],
        description:
          'Meet the Echeveria, a charming and diverse genus of succulents celebrated for its rosette-shaped, fleshy leaves. With a wide range of species and varieties, Echeverias showcase an array of colors, from muted greens to vibrant pinks and purples. Native to semi-desert regions of Central America, Mexico, and northwestern South America, these succulents bring a touch of elegance and modernity to any succulent garden or indoor collection.',
        care: 'Thriving in bright, indirect light, Echeverias prefer well-draining soil to prevent root rot. Allow the soil to dry out completely between waterings, as these succulents are adapted to survive periods of drought. Pet-friendly and low-maintenance, Echeverias are suitable for both indoor and outdoor settings. Consider their sunlight preferences when deciding on placement—some varieties can tolerate more direct sunlight than others.',
        size_description: {
          small: 'Typically around 3"–6" in diameter for the rosette.',
          medium:
            'Reaching 6"–12" in diameter with a more established and mature appearance.',
        },
        pro_tip:
          'Rotate your Echeveria periodically to ensure even exposure to sunlight, promoting symmetrical growth. Propagate new plants by removing offsets or leaves and allowing them to root.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 19,
        name: 'Snake Plant',
        latin_binomial: 'Sansevieria Trifasciata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-1.webp?updatedAt=1723131746930',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-3.webp?updatedAt=1723131746816',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-2.webp?updatedAt=1723131747034',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-1-thumb.webp?updatedAt=1723131746941',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-3-thumb.webp?updatedAt=1723131746678',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-2-thumb.webp?updatedAt=1723131746757',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        reviews: 115,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Meet the Snake Plant, a resilient and striking houseplant known for its architectural leaves and air-purifying qualities. Also known as Sansevieria Trifasciata, this plant features upright, sword-like leaves with variegated patterns, creating a modern and eye-catching display. Native to West Africa, the Snake Plant is a popular choice for homes and offices due to its ability to thrive in low-light conditions and its low-maintenance nature.',
        care: 'Thriving in low to bright indirect light, the Snake Plant is exceptionally adaptable and can tolerate low light levels. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out between waterings to prevent overwatering, as the Snake Plant is susceptible to root rot. A hardy and robust choice, it can withstand neglect and still thrive.',
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–24" in height with a 6-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'The Snake Plant is known for its ability to filter indoor air pollutants. Place it in bedrooms or living areas to enhance air quality. Consider using a cactus or succulent mix for planting.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 11,
            name: 'Once a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 20,
        name: 'Pothos Variegated',
        latin_binomial: "Am 'Marble Queen' or 'Golden Pothos'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-2.webp?updatedAt=1723131742631',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-1.webp?updatedAt=1723131742075',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-2-thumb.webp?updatedAt=1723131742397',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-1-thumb.webp?updatedAt=1723131742141',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 98,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          "Introducing the Variegated Pothos, a classic and enchanting houseplant that effortlessly combines elegance with ease of care. Also known as Am 'Marble Queen' or 'Golden Pothos,' this plant features heart-shaped leaves adorned with variegated patterns of green and creamy white. Native to the Solomon Islands, the Variegated Pothos is celebrated for its versatility, air-purifying qualities, and the trailing vines that add a touch of greenery to any space.",
        care: 'Thriving in low to bright indirect light, the Variegated Pothos is adaptable to various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate occasional drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth. The Variegated Pothos is an excellent choice for beginners and seasoned plant enthusiasts alike.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Enhance the Variegated Pothos's lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage. Trim the vines to control its size and encourage a fuller appearance.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 21,
        name: 'Fiddle Leaf Fig',
        latin_binomial: 'Ficus Lyrata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-3.webp?updatedAt=1723131732706',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-1.webp?updatedAt=1723131732170 ',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-2.webp?updatedAt=1723131732682',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-3-thumb.webp?updatedAt=1723131732053',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-1-thumb.webp?updatedAt=1723131732077',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-2-thumb.webp?updatedAt=1723131732258',
        },
        price: {
          small: 22,
          medium: 32,
          large: 99,
          extra_large: 129,
        },
        reviews: 27,
        stars: 5,
        tags: ['all-products', 'new-plant-parent'],
        description:
          'Enter the world of botanical elegance with the Fiddle Leaf Fig, a statement plant celebrated for its large, violin-shaped leaves. Also known as Ficus Lyrata, this plant is a popular choice for interior decor, adding a touch of lush greenery and a hint of tropical flair to any space. Native to West Africa, the Fiddle Leaf Fig has become a beloved favorite among plant enthusiasts for its striking foliage and iconic silhouette.',
        care: 'Thriving in bright, indirect light, the Fiddle Leaf Fig prefers well-draining soil and appreciates consistent moisture. Allow the top inch of soil to dry out between waterings to prevent overwatering. Pet-friendly and low-maintenance, this plant benefits from occasional leaf wiping to keep its large leaves dust-free. Regularly rotate the plant to ensure even exposure to sunlight and promote symmetrical growth.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
          extra_large:
            'Towering at 36"–60" in height, making a bold statement in a 12-inch pot.',
        },
        pro_tip:
          "Support the Fiddle Leaf Fig's upward growth by staking or providing a decorative support. Consider misting the leaves or placing a humidifier nearby to enhance humidity, especially in dry indoor environments.",
        icons: [
          {
            id: 2,
            name: 'Lots of Loving',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/lots-love.webp?updatedAt=1723131732928',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 22,
        name: 'Oxalis',
        latin_binomial: 'Oxalis Spp.',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-1.webp?updatedAt=1723131736376',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-2.webp?updatedAt=1723131736526',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-1-thumb.webp?updatedAt=1723131736183',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-2-thumb.webp?updatedAt=1723131736430',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 63,
        stars: 5,
        tags: ['all-products', 'new-plant-parent'],
        description:
          'Meet Oxalis, a charming and delicate plant genus known for its distinctive shamrock-shaped leaves and dainty flowers. Also referred to as the Shamrock Plant, Oxalis comes in various species and varieties, each displaying unique leaf colors and characteristics. Originating from various regions worldwide, including South America, Central America, and South Africa, Oxalis is a delightful addition to both indoor and outdoor gardens.',
        care: 'Thriving in bright, indirect light, Oxalis prefers well-draining soil and slightly higher humidity levels. Water the plant when the top inch of soil feels dry, but be cautious not to overwater, as excessive moisture can lead to bulb rot. Pet-friendly and relatively low-maintenance, Oxalis goes through periods of dormancy where it may shed some leaves—this is a normal part of its growth cycle. During dormancy, reduce watering and allow the plant to rest.',
        size_description: {
          small: 'Typically around 6"–8" tall in a 4-inch pot.',
          medium: 'Reaching 8"–12" in height with a 6-inch pot.',
        },
        pro_tip:
          'Rotate the Oxalis periodically to ensure even growth and prevent the plant from leaning towards the light. If the leaves start to look tired or close during the day, it might be an indication that the plant needs more light.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
    ],
  },
  /* All Products Category */
  {
    title: 'All-Products',
    items: [
      {
        id: 1,
        name: 'Prayer Plant',
        latin_binomial: "Maranta Leuconeura 'Red Vein'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-1.webp?updatedAt=1723131742816',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-2.webp?updatedAt=1723131742767',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-1-thumb.webp?updatedAt=1723131742767',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/prayer-palm-2-thumb.webp?updatedAt=1723131742557',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 90,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          'Originating from the lush tropics of Brazil, the Maranta Leuconeura "Red Vein" earns its popular moniker, the "prayer plant," due to its enchanting nightly ritual of folding its leaves, resembling hands in prayer. This unique behavior is believed to be an evolutionary adaptation, ensuring optimal root access to rainfall. The plant\'s striking feature lies in its vibrant red veins, creating an eye-catching display.',
        care: "Thriving in low to bright indirect light, the 'Red Vein' Prayer Plant is a pet-friendly charmer that demands attention. Shield it from direct sunlight to prevent leaf scorching while ensuring a consistently moist but not soggy soil. Water when the top inch feels dry, maintaining a harmonious environment for both plant and pet.",
        size_description: {
          small: 'Around 8"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–14" tall in a 6-inch pot',
        },
        pro_tip:
          "Ensure your 'Fascinator' feels like royalty by using lukewarm water for hydration—no chilly surprises for this regal plant.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },

      {
        id: 2,
        name: 'Spider Plant',
        latin_binomial: "Chlorophytum Comosum 'Variegatum'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-4.webp?updatedAt=1723131752164p',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-3.webp?updatedAt=1723131752066',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-2.webp?updatedAt=1723131746870',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-4-thumb.webp?updatedAt=1723131752138',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-3-thumb.webp?updatedAt=1723131746890',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/spider-plant-2-thumb.webp?updatedAt=1723131746921',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 111,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          "Introducing the Chlorophytum Ccomosum 'Variegatum'—the Spider Plant that's anything but creepy! With arching leaves resembling nature's artwork, painted in shades of green and creamy white, this houseplant brings an elegant and modern vibe to your space. Its air-purifying prowess makes it a favorite, while the cascading effect of its variegated foliage adds a touch of charm.",
        care: 'This easy-going companion thrives in a range of light conditions, from bright, indirect light to partial shade, making it a versatile choice for various indoor settings. Pet-friendly and resilient, the Spider Plant tolerates occasional neglect. Water moderately, allowing the soil to dry out between waterings. Expect it to flourish in well-lit areas and gracefully endure lower light levels.',
        size_description: {
          small: 'Approximately 3"-6" tall in a 4-inch pot',
          medium: 'Reaching 7"-12" tall in a 6-inch pot',
        },
        pro_tip:
          'For a happy Spider Plant, water moderately and let it enjoy a bit of drought - overcaring is the only way to cast a web of trouble.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 3,
        name: "Bird's Nest Fern",
        latin_binomial: "Asplenium Nidus 'Crissie'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-1.webp?updatedAt=1723131730537',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-2.webp?updatedAt=1723131730742',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-1-thumb.webp?updatedAt=1723131730284',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/birds-nest-fern-2-thumb.webp?updatedAt=1723131731160',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 47,
        stars: 5,
        tags: ['all-products', 'pet-friendly'],
        description:
          "Meet the Asplenium Nidus 'Crissie'—the Bird's Nest Fern with a personality as vibrant as its lush green fronds. Native to tropical Southeast Asia, this fern earns its name from the unique nest-like arrangement of its leaves, creating an exotic and captivating presence. 'Crissie' is your ticket to bringing a slice of the rainforest into your living space.",
        care: "Thriving in medium to bright indirect light, 'Crissie' adds a touch of the jungle to your home while tolerating lower light conditions. Pet-friendly and low-maintenance, this fern enjoys consistently moist soil, but be mindful not to let it become waterlogged. Keep humidity levels up, especially in drier indoor environments, to mimic its native tropical habitat.",
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Mist the fronds regularly to provide the humidity 'Crissie' craves, and avoid letting the soil dry out completely.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 4,
        name: 'Aloe Vera',
        latin_binomial: 'Aloe Barbadensis Miller',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/aloe-vera-1.webp?updatedAt=1723131730514',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/aloe-vera-2.webp?updatedAt=1723131730414',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/aloe-vera-1-thumb.webp?updatedAt=1723131730287',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/aloe-vera-2-thumb.webp?updatedAt=1723131730465',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 90,
        stars: 5,
        tags: ['all-products', 'pet-friendly'],
        description:
          "Say hello to Aloe Vera, the desert's gift to your home! Known for its spiky, fleshy leaves packed with healing properties, this succulent is a true multitasker. With a sleek and modern aesthetic, Aloe Vera adds a touch of green elegance while serving as a natural remedy hub. Let its soothing presence grace your space.",
        care: "Thriving in bright indirect light, Aloe Vera is your sun-worshipping companion. Pet-friendly and drought-tolerant, this succulent prefers well-draining soil. Water sparingly, allowing the soil to dry out completely between waterings. Aloe Vera is a low-maintenance friend, but beware of overwatering—it's the only thing that might make it a little prickly.",
        size_description: {
          small: 'Typically around 10"–14" tall in a 4-inch pot.',
          medium: 'Reaching 10"–16" in height with a 6-inch pot.',
          large: 'Majestic at 16"–24" tall in an 8-inch pot.',
        },
        pro_tip:
          "Harvest the healing gel from its leaves for natural skincare remedies. It's your home's pharmacy in a pot!",
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 11,
            name: 'Once a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 5,
        name: 'Majesty Palm',
        latin_binomial: 'Ravenea Rivularis',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-1.webp?updatedAt=1723131733809?updatedAt=1723131730465',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-2.webp?updatedAt=1723131734145',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-1-thumb.webp?updatedAt=1723131733629',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/majesty-palm-2-thumb.webp?updatedAt=1723131733788',
        },
        price: {
          large: 88,
          extra_large: 109,
        },
        reviews: 59,
        stars: 5,
        tags: ['all-products', 'pet-friendly'],
        description:
          'Introducing the Majesty Palm, a touch of tropical elegance for your indoor oasis! With its gracefully arching fronds and regal presence, the Ravenea rivularis brings a slice of paradise to your home. Native to Madagascar, this palm radiates a serene and majestic aura, making it a statement piece in any space.',
        care: 'Basking in bright, indirect light, the Majesty Palm flourishes in conditions that mimic its native rainforest habitat. Keep the soil consistently moist but not waterlogged, and provide ample humidity for optimal growth. This pet-friendly palm appreciates regular misting and occasional fertilization during the growing season. Watch for browning tips, a sign it needs a bit more TLC.',
        size_description: {
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large:
            'Towering at 48"–60" in height, ready to make a bold statement in a 12-inch pot.',
        },
        pro_tip:
          'Turn your home into a tropical haven by placing the Majesty Palm near a humidifier or grouping it with other moisture-loving plants.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 6,
        name: 'Peperomia Raindrop',
        latin_binomial: 'Peperomia Polybotrya',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-1_iurcww.webp?updatedAt=1723131736703',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-2.webp?updatedAt=1723131736624',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-3.webp?updatedAt=1723131737414',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-1-thumb.webp?updatedAt=1723131736319',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-2-thumb.webp?updatedAt=1723131736637',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/peperomia-3-thumb.webp?updatedAt=1723131736513',
        },
        price: {
          small: 30,
          medium: 42,
        },
        reviews: 30,
        stars: 4,
        tags: ['all-products', 'pet-friendly'],
        description:
          "Meet the Peperomia Raindrop—nature's tear-shaped gem! With its glossy, raindrop-like leaves and compact form, the Peperomia Polybotrya is a delightful addition to your plant family. Native to South America, this easy-care beauty offers a modern aesthetic and a touch of whimsy, making it a favorite among plant enthusiasts.",
        care: 'Thriving in medium to bright indirect light, the Peperomia Raindrop adapts well to various lighting conditions. Pet-friendly and low-maintenance, this Peperomia prefers well-draining soil and is sensitive to overwatering, so allow the top inch of soil to dry out between waterings. Fertilize sparingly during the growing season to keep it happy and compact.',
        size_description: {
          small: 'Typically around 6"–9" tall in a 4-inch pot.',
          medium: 'Reaching 10"–12" in height with a 6-inch pot.',
        },
        pro_tip:
          "Wipe the raindrop-shaped leaves gently to keep them glossy and dust-free, enhancing the plant's visual appeal.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 7,
        name: 'Ponytail Palm',
        latin_binomial: 'Beaucarnea Recurvata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-2.webp?updatedAt=1723131741078',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-1.webp?updatedAt=1723131740999',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-2-thumb_2.webp?updatedAt=1723131741012',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/ponytail-palm-1-thumb.webp?updatedAt=1723131740243',
        },
        price: {
          small: 25,
          medium: 35,
          large: 95,
        },
        reviews: 62,
        stars: 5,
        tags: ['all-products', 'pet-friendly', 'best-seller'],
        description:
          'Meet the Ponytail Palm, a quirky and delightful addition to your indoor garden! Despite its name, the Beaucarnea Recurvata is not a true palm but belongs to the agave family. Native to Mexico, this distinctive plant features a swollen trunk that stores water, topped with a cascade of long, arching leaves resembling a cascading ponytail. With its charming and carefree demeanor, the Ponytail Palm adds a touch of desert chic to any space.',
        care: 'Thriving in bright, indirect light, the Ponytail Palm is an easy-going companion. Pet-friendly and drought-tolerant, this low-maintenance plant prefers well-draining soil. Water sparingly, allowing the soil to dry out between waterings, and avoid overwatering to prevent root rot. The Ponytail Palm is known for its slow growth, making it an excellent choice for those seeking a lasting green companion.',
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
          large: 'Majestic at 18"–24" tall in an 8-inch pot.',
        },
        pro_tip:
          'Rotate the pot occasionally to ensure even growth of the arching leaves and maintain its whimsical appearance.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 8,
        name: 'Bird of Paradise',
        latin_binomial: 'Strelitzia Reginae',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-1.webp?updatedAt=1723131730463',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-2.webp?updatedAt=1723131730605',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-1-thumb.webp?updatedAt=1723131730528',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bird-of-paradise-2-thumb.webp?updatedAt=1723131730424',
        },
        price: {
          medium: 35,
          large: 99,
          extra_large: 119,
        },
        reviews: 83,
        stars: 4,
        tags: ['all-products', 'best-seller'],
        description:
          'Enter the realm of tropical grandeur with the Bird of Paradise, also known as Strelitzia Reginae. Native to South Africa, this plant exudes elegance with its large, banana-like leaves and striking orange and blue flowers. With a regal presence, the Bird of Paradise adds a touch of exotic sophistication to your indoor space, making it a favorite among plant enthusiasts.',
        care: 'Basking in bright, indirect light, the Bird of Paradise thrives in conditions reminiscent of its native tropical habitat. Pet-friendly and low-maintenance, this plant prefers well-draining soil and should be watered moderately, allowing the top inch of soil to dry out between waterings. Regular misting helps maintain humidity levels, and occasional fertilization during the growing season encourages robust growth.',
        size_description: {
          medium: 'Typically around 18"–24" tall in a 6-inch pot.',
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
          extra_large:
            'Towering at 48"–72" in height, making a bold statement in a 12-inch pot.',
        },
        pro_tip:
          'To encourage the Bird of Paradise to spread its wings, rotate it occasionally to ensure even exposure to sunlight for balanced growth.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 9,
        name: 'Bonsai ',
        latin_binomial: 'Juniperus Spp. (Various species)',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2.webp?updatedAt=1723131730967',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1.webp?updatedAt=1723131731098',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-2-thumb.webp?updatedAt=1723131730882',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bonsai-1-thumb.webp?updatedAt=1723131730742',
        },
        price: {
          small: 29,
          medium: 55,
        },
        reviews: 22,
        stars: 4,
        tags: ['all-products'],
        description:
          "Step into the miniature world of artistry with the Bonsai Tree, a living sculpture that encapsulates nature's beauty in a confined space. Originating from ancient Asian traditions, Bonsai involves carefully cultivating trees to mimic their full-sized counterparts in a compact form. Each Bonsai is a unique expression of patience, skill, and a deep appreciation for the delicate balance between the natural and the cultivated.",
        care: 'Bonsai care is an art in itself. The light requirements vary depending on the tree species, but most Bonsai thrive in bright, indirect light. Regular pruning and shaping are essential to maintain the desired form, and the watering schedule is specific to the type of tree. Ensure well-draining soil and repot every few years to refresh nutrients. Bonsai trees are generally pet-friendly, but care should be taken to keep pets from nibbling on the delicate foliage.',
        size_description: {
          small:
            'Typically ranging from 6" to 9" in height, showcasing intricate details and refined shaping.',
          medium:
            'Varies between 10" to 17" tall, presenting a mature and harmonious aesthetic.',
        },
        pro_tip:
          'Connect with your Bonsai by taking time for mindful trimming and shaping, fostering a bond that transcends the typical plant-owner relationship.',
        icons: [
          {
            id: 2,
            name: 'Lots of Loving',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/lots-love.webp?updatedAt=1723131732928',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 10,
        name: 'Monstera',
        latin_binomial: 'Monstera Deliciosa',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-4.webp?updatedAt=1723131735904',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-2.webp?updatedAt=1723131735767',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-3.webp?updatedAt=1723131735462',
          img4: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-1.webp?updatedAt=1723131734440',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-4-thumb.webp?updatedAt=1723131735830',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-2-thumb.webp?updatedAt=1723131735155',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-3-thumb.webp?updatedAt=1723131735497',
          thumb4:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/monstera-1-thumb.webp?updatedAt=1723131734394',
        },
        price: {
          medium: 32,
          large: 99,
        },
        reviews: 126,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Meet the Monstera Deliciosa, a tropical delight that brings a touch of the jungle to your living space! Characterized by its iconic split leaves, this plant is a statement piece with a bold and captivating presence. Native to the rainforests of Central America, the Monstera Deliciosa has earned its popularity for its unique foliage, making it a favorite among plant enthusiasts.',
        care: 'Thriving in bright, indirect light, the Monstera Deliciosa adapts well to various lighting conditions. Pet-friendly and easy to care for, this plant prefers well-draining soil and requires moderate watering. Allow the top inch of soil to dry out between waterings to prevent overwatering. Regularly wipe its large leaves to keep them dust-free and enhance their natural shine. Consider staking for optimal support as the plant grows.',
        size_description: {
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Embrace the natural beauty of the Monstera Deliciosa by allowing it to develop its characteristic fenestrations (leaf splits). For a bushier appearance, prune the stems just above a leaf node.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 11,
        name: 'Cactus',
        latin_binomial: 'Ferocactus Spp. (Various species)',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-1.webp?updatedAt=1723131730928',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-2.webp?updatedAt=1723131731291',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-1-thumb.webp?updatedAt=1723131731627',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/cactus-2-thumb.webp?updatedAt=1723131731047',
        },
        price: {
          small: 27,
          medium: 42,
        },
        reviews: 40,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Enter the world of the desert with the Barrel Cactus, a resilient and iconic succulent that thrives in arid landscapes. Belonging to the Ferocactus genus, these cacti are known for their cylindrical shape, ribbed texture, and striking spines. With a distinctive silhouette that echoes the beauty of the southwestern United States, the Barrel Cactus brings a touch of the wild, sun-soaked desert to your indoor collection.',
        care: 'Place your Barrel Cactus in a location with plenty of sunlight, as these plants adore bright, direct sunlight. Be cautious not to overwater; let the soil dry out completely between waterings to mimic their native habitat. Use a well-draining cactus mix to prevent waterlogging. Barrel Cacti are low-maintenance, requiring minimal attention beyond occasional monitoring for pests.',
        size_description: {
          small: 'Typically around 4"–8" tall in a 4-inch pot.',
          medium: 'Reaching 9"–16" in height with a 6-inch pot.',
        },
        pro_tip:
          "Rotate the Barrel Cactus regularly to ensure even sun exposure, promoting symmetrical growth. Keep an eye on the color and texture of the spines—they can be a visual indicator of the plant's overall health.",
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 12,
        name: 'Satin Pothos',
        latin_binomial: "Scindapsus Pictus 'Exotica'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-1.webp?updatedAt=1723131744274',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-3.webp?updatedAt=1723131744119',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-2.webp?updatedAt=1723131744067',
          img4: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-4.webp?updatedAt=1723131744149',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-1-thumb.webp?updatedAt=1723131743744',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-3-thumb.webp?updatedAt=1723131743927',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-2-thumb.webp?updatedAt=1723131743889',
          thumb4:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/satin-pothos-4-thumb.webp?updatedAt=1723131743956',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 75,
        stars: 4,
        tags: ['all-products', 'best-seller'],
        description:
          "Introducing the Satin Pothos, a luscious and trailing beauty that adds a touch of elegance to any space. With heart-shaped leaves adorned in silver variegation, the Scindapsus Pictus 'Exotica' creates a mesmerizing display. This vining plant is not just a feast for the eyes but also a resilient and easy-to-care-for companion, making it a cherished favorite among plant enthusiasts.",
        care: 'Thriving in low to bright indirect light, the Satin Pothos is a versatile choice for various indoor environments. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and moderate watering. Allow the top inch of soil to dry out between waterings to maintain its health. A regular wipe-down of its leaves keeps them glossy and vibrant. The Satin Pothos is a best-seller, admired for its visual appeal and low-maintenance demeanor.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–16" in height with a 6-inch pot.',
        },
        pro_tip:
          'Encourage bushier growth by occasionally trimming the trailing vines, promoting a fuller and more compact appearance.',

        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 13,
        name: 'Pothos',
        latin_binomial: 'Epipremnum Aureum',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-1.webp?updatedAt=1723131741846',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-2.webp?updatedAt=1723131742042',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-1-thumb.webp?updatedAt=1723131742074',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-2-thumb.webp?updatedAt=1723131741941',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 140,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          'Meet the Pothos, a classic and versatile houseplant that effortlessly combines beauty with resilience. With heart-shaped leaves cascading down long, trailing vines, the Am brings a touch of greenery to any corner of your home. Renowned for its adaptability and air-purifying qualities, the Pothos is a timeless favorite among both beginner and experienced plant enthusiasts.',
        care: 'Thriving in low to medium indirect light, the Pothos is an adaptable companion suitable for various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate periods of drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 11"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Enhance the Pothos's lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 14,
        name: 'Alocasia Polly',
        latin_binomial: "Alocasia Micholitziana 'Polly'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-1.webp?updatedAt=1723131752374',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-2.webp?updatedAt=1723131755147',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-1-thumb.webp?updatedAt=1723131752104',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/svizzera-2-thumb.webp?updatedAt=1723131758955',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        reviews: 62,
        stars: 5,
        tags: ['all-products', 'best-seller'],
        description:
          "Introducing the Alocasia Polly, an exquisite and compact member of the Alocasia family. Also known as Alocasia Micholitziana 'Polly,' this plant boasts striking arrow-shaped leaves with dark green hues and contrasting veins, creating an enchanting visual display. Native to Southeast Asia, the Alocasia Polly is celebrated for its unique foliage and its ability to add a touch of tropical elegance to any interior.",
        care: 'Thriving in bright, indirect light, the Alocasia Polly brings a tropical ambiance to your space. While not pet-friendly due to its toxicity, this plant is relatively low-maintenance. Keep the soil consistently moist, avoiding waterlogging, and provide high humidity for optimal growth. Regularly wipe down the leaves to keep them dust-free and maintain their glossy appearance. The Alocasia Polly appreciates a well-draining soil mix to prevent root rot.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Encourage healthy growth by occasionally rotating the plant to ensure even exposure to sunlight on all sides. Dilute liquid fertilizer during the growing season for added nourishment.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 15,
        name: 'Yucca Cane',
        latin_binomial: 'Yucca Elephantipes',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1.webp?updatedAt=1723131755087',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3.webp?updatedAt=1723131758704',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2.webp?updatedAt=1723131754787',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-1-thumb.webp?updatedAt=1723131755557',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-3-thumb.webp?updatedAt=1723131755046',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/yucca-cane-2-thumb.webp?updatedAt=1723131754851',
        },
        price: {
          small: 22,
          medium: 32,
          large: 60,
        },
        reviews: 71,
        stars: 4,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Meet the Yucca Cane, a striking and resilient plant that brings a touch of the desert to your indoor oasis. Also known as Yucca Elephantipes, this plant features sturdy, sword-shaped leaves that radiate from a central trunk. Native to arid regions of Mexico, the Yucca Cane is celebrated for its architectural beauty and its ability to thrive in a variety of indoor environments.',
        care: 'Thriving in bright, indirect light, the Yucca Cane is adaptable to lower light conditions but prefers a sunlit spot. Known for its drought tolerance, this plant requires infrequent watering—allow the top inch of soil to dry out between waterings. Use well-draining soil and be cautious not to overwater, as excessive moisture can lead to root rot. Pet-friendly and low-maintenance, the Yucca Cane is an excellent choice for those seeking an easy-care statement plant.',
        size_description: {
          small: 'Typically around 24"–30" tall in a 6-inch pot.',
          medium: 'Reaching 30"–36" in height with an 8-inch pot.',
          large: 'Majestic at 36"–48" tall in a 10-inch pot.',
        },
        pro_tip:
          'Wipe down the leaves periodically to keep them free from dust.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 16,
        name: 'Echeveria',
        latin_binomial: 'Echeveria Spp.',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-1.webp?updatedAt=1723131731643',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-2.webp?updatedAt=1723131731592',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-1-thumb.webp?updatedAt=1723131731354',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/echeveria-2-thumb.webp?updatedAt=1723131731987',
        },

        price: {
          small: 22,
          medium: 32,
        },
        reviews: 45,
        stars: 5,
        tags: ['all-products', 'best-sellers'],
        description:
          'Meet the Echeveria, a charming and diverse genus of succulents celebrated for its rosette-shaped, fleshy leaves. With a wide range of species and varieties, Echeverias showcase an array of colors, from muted greens to vibrant pinks and purples. Native to semi-desert regions of Central America, Mexico, and northwestern South America, these succulents bring a touch of elegance and modernity to any succulent garden or indoor collection.',
        care: 'Thriving in bright, indirect light, Echeverias prefer well-draining soil to prevent root rot. Allow the soil to dry out completely between waterings, as these succulents are adapted to survive periods of drought. Pet-friendly and low-maintenance, Echeverias are suitable for both indoor and outdoor settings. Consider their sunlight preferences when deciding on placement—some varieties can tolerate more direct sunlight than others.',
        size_description: {
          small: 'Typically around 3"–6" in diameter for the rosette.',
          medium:
            'Reaching 6"–12" in diameter with a more established and mature appearance.',
        },
        pro_tip:
          'Rotate your Echeveria periodically to ensure even exposure to sunlight, promoting symmetrical growth. Propagate new plants by removing offsets or leaves and allowing them to root.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 7,
            name: 'Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pf.webp?updatedAt=1723131737424',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 17,
        name: 'ZZ Plant',
        latin_binomial: 'Zamioculcas Zamiifolia',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-1.webp?updatedAt=1723131756121',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-2.webp?updatedAt=1723131756268',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-1-thumb.webp?updatedAt=1723131755134',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/zz-2-thumb.webp?updatedAt=1723131755941',
        },
        price: {
          small: 25,
          medium: 35,
          large: 99,
        },
        reviews: 165,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Introducing the ZZ Plant, a resilient and low-maintenance gem that adds a touch of modern elegance to your indoor jungle. Also known as Zamioculcas Zamiifolia, this plant features glossy, dark green leaves that gracefully arch upward, creating a striking and architectural display. Native to Eastern Africa, the ZZ Plant has become a popular choice for homes and offices due to its ability to thrive in various light conditions and its air-purifying qualities.',
        care: 'Thriving in low to bright indirect light, the ZZ Plant is exceptionally adaptable and can tolerate low light conditions. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out completely between waterings to prevent overwatering, as the ZZ Plant is susceptible to root rot. Regular wiping of the leaves keeps them glossy and dust-free.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'Prune yellow or damaged leaves at the base to encourage healthy growth. The ZZ Plant is an excellent choice for beginners due to its resilience and ease of care.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 18,
        name: 'Polka Dot Begonia',
        latin_binomial: 'Begonia Maculata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-1.webp?updatedAt=1723131739692',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-2.webp?updatedAt=1723131739897',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-1-thumb.webp?updatedAt=1723131738833',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/polka-dot-begonia-2-thumb.webp?updatedAt=1723131739935',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 23,
        stars: 4,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Say hello to the Polka Dot Begonia, a captivating and stylish member of the Begonia family. Also known as Begonia Maculata, this plant steals the spotlight with its angel-wing-shaped leaves adorned with silver polka dots. Native to the rainforests of Brazil, the Polka Dot Begonia is not just a treat for the eyes but also a perfect choice for plant enthusiasts seeking a unique and visually striking addition to their collection.',
        care: "Thriving in bright, indirect light, the Polka Dot Begonia prefers well-draining soil and slightly higher humidity levels. Keep the soil consistently moist but not waterlogged, allowing the top inch to dry out between waterings. Pet-friendly and relatively low-maintenance, this Begonia adds a touch of tropical flair to your indoor space. Regularly wipe the leaves to maintain their glossy appearance and ensure the plant's overall health.",
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Encourage bushier growth and enhance the Polka Dot Begonia's appearance by pinching back the stems periodically. Propagate by taking stem cuttings and rooting them in water or soil.",
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 5,
            name: 'Medium Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/medium-light.webp?updatedAt=1723131733943',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 19,
        name: 'Snake Plant',
        latin_binomial: 'Sansevieria Trifasciata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-1.webp?updatedAt=1723131746930',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-3.webp?updatedAt=1723131746816',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-2.webp?updatedAt=1723131747034',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-1-thumb.webp?updatedAt=1723131746941',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-3-thumb.webp?updatedAt=1723131746678',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/snake-plant-2-thumb.webp?updatedAt=1723131746757',
        },
        price: {
          small: 22,
          medium: 32,
          large: 64,
        },
        reviews: 115,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          'Meet the Snake Plant, a resilient and striking houseplant known for its architectural leaves and air-purifying qualities. Also known as Sansevieria Trifasciata, this plant features upright, sword-like leaves with variegated patterns, creating a modern and eye-catching display. Native to West Africa, the Snake Plant is a popular choice for homes and offices due to its ability to thrive in low-light conditions and its low-maintenance nature.',
        care: 'Thriving in low to bright indirect light, the Snake Plant is exceptionally adaptable and can tolerate low light levels. Pet-friendly and drought-tolerant, this plant prefers well-draining soil and requires infrequent watering. Allow the soil to dry out between waterings to prevent overwatering, as the Snake Plant is susceptible to root rot. A hardy and robust choice, it can withstand neglect and still thrive.',
        size_description: {
          small: 'Typically around 8"–12" tall in a 4-inch pot.',
          medium: 'Reaching 12"–24" in height with a 6-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
        },
        pro_tip:
          'The Snake Plant is known for its ability to filter indoor air pollutants. Place it in bedrooms or living areas to enhance air quality. Consider using a cactus or succulent mix for planting.',
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 11,
            name: 'Once a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 20,
        name: 'Pothos Variegated',
        latin_binomial: "Am 'Marble Queen' or 'Golden Pothos'",
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-2.webp?updatedAt=1723131742631',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-1.webp?updatedAt=1723131742075',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-2-thumb.webp?updatedAt=1723131742397',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pothos-verigated-1-thumb.webp?updatedAt=1723131742141',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 98,
        stars: 5,
        tags: ['all-products', 'new-plant-parent', 'best-seller'],
        description:
          "Introducing the Variegated Pothos, a classic and enchanting houseplant that effortlessly combines elegance with ease of care. Also known as Am 'Marble Queen' or 'Golden Pothos,' this plant features heart-shaped leaves adorned with variegated patterns of green and creamy white. Native to the Solomon Islands, the Variegated Pothos is celebrated for its versatility, air-purifying qualities, and the trailing vines that add a touch of greenery to any space.",
        care: 'Thriving in low to bright indirect light, the Variegated Pothos is adaptable to various light conditions. Pet-friendly and low-maintenance, this plant prefers well-draining soil and can tolerate occasional drought. Water moderately, allowing the top inch of soil to dry out between waterings. Regular pruning helps maintain its bushy appearance and encourages new growth. The Variegated Pothos is an excellent choice for beginners and seasoned plant enthusiasts alike.',
        size_description: {
          small: 'Typically around 6"–10" tall in a 4-inch pot.',
          medium: 'Reaching 10"–18" in height with a 6-inch pot.',
        },
        pro_tip:
          "Enhance the Variegated Pothos's lushness by occasionally fertilizing during the growing season, promoting vibrant and vigorous foliage. Trim the vines to control its size and encourage a fuller appearance.",
        icons: [
          {
            id: 1,
            name: 'Easy Peasy',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/easy-peasy.webp?updatedAt=1723131731545',
          },
          {
            id: 6,
            name: 'Low Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/low-light.webp?updatedAt=1723131733646',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
      {
        id: 21,
        name: 'Fiddle Leaf Fig',
        latin_binomial: 'Ficus Lyrata',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-3.webp?updatedAt=1723131732706',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-1.webp?updatedAt=1723131732170',
          img3: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-2.webp?updatedAt=1723131732682',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-3-thumb.webp?updatedAt=1723131732053',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-1-thumb.webp?updatedAt=1723131732077',
          thumb3:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/fiddle-leaf-fig-2-thumb.webp?updatedAt=1723131732258',
        },
        price: {
          small: 22,
          medium: 32,
          large: 99,
          extra_large: 129,
        },
        reviews: 27,
        stars: 5,
        tags: ['all-products', 'new-plant-parent'],
        description:
          'Enter the world of botanical elegance with the Fiddle Leaf Fig, a statement plant celebrated for its large, violin-shaped leaves. Also known as Ficus Lyrata, this plant is a popular choice for interior decor, adding a touch of lush greenery and a hint of tropical flair to any space. Native to West Africa, the Fiddle Leaf Fig has become a beloved favorite among plant enthusiasts for its striking foliage and iconic silhouette.',
        care: 'Thriving in bright, indirect light, the Fiddle Leaf Fig prefers well-draining soil and appreciates consistent moisture. Allow the top inch of soil to dry out between waterings to prevent overwatering. Pet-friendly and low-maintenance, this plant benefits from occasional leaf wiping to keep its large leaves dust-free. Regularly rotate the plant to ensure even exposure to sunlight and promote symmetrical growth.',
        size_description: {
          small: 'Typically around 12"–18" tall in a 6-inch pot.',
          medium: 'Reaching 18"–24" in height with an 8-inch pot.',
          large: 'Majestic at 24"–36" tall in a 10-inch pot.',
          extra_large:
            'Towering at 36"–60" in height, making a bold statement in a 12-inch pot.',
        },
        pro_tip:
          "Support the Fiddle Leaf Fig's upward growth by staking or providing a decorative support. Consider misting the leaves or placing a humidifier nearby to enhance humidity, especially in dry indoor environments.",
        icons: [
          {
            id: 2,
            name: 'Lots of Loving',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/lots-love.webp?updatedAt=1723131732928',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 10,
            name: 'Twice a Month',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/twice-month.webp?updatedAt=1723131754806',
          },
        ],
      },
      {
        id: 22,
        name: 'Oxalis',
        latin_binomial: 'Oxalis Spp.',
        imageUrl: {
          img1: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-1.webp?updatedAt=1723131736376',
          img2: 'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-2.webp?updatedAt=1723131736526',
        },
        thumbnailUrl: {
          thumb1:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-1-thumb.webp?updatedAt=1723131736183',
          thumb2:
            'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/oxalis-2-thumb.webp?updatedAt=1723131736430',
        },
        price: {
          small: 22,
          medium: 32,
        },
        reviews: 63,
        stars: 5,
        tags: ['all-products', 'new-plant-parent'],
        description:
          'Meet Oxalis, a charming and delicate plant genus known for its distinctive shamrock-shaped leaves and dainty flowers. Also referred to as the Shamrock Plant, Oxalis comes in various species and varieties, each displaying unique leaf colors and characteristics. Originating from various regions worldwide, including South America, Central America, and South Africa, Oxalis is a delightful addition to both indoor and outdoor gardens.',
        care: 'Thriving in bright, indirect light, Oxalis prefers well-draining soil and slightly higher humidity levels. Water the plant when the top inch of soil feels dry, but be cautious not to overwater, as excessive moisture can lead to bulb rot. Pet-friendly and relatively low-maintenance, Oxalis goes through periods of dormancy where it may shed some leaves—this is a normal part of its growth cycle. During dormancy, reduce watering and allow the plant to rest.',
        size_description: {
          small: 'Typically around 6"–8" tall in a 4-inch pot.',
          medium: 'Reaching 8"–12" in height with a 6-inch pot.',
        },
        pro_tip:
          'Rotate the Oxalis periodically to ensure even growth and prevent the plant from leaning towards the light. If the leaves start to look tired or close during the day, it might be an indication that the plant needs more light.',
        icons: [
          {
            id: 3,
            name: 'Pretty chill',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/pretty-chill.webp?updatedAt=1723131743632',
          },
          {
            id: 4,
            name: 'Bright Light',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/bright-light.webp?updatedAt=1723131730904',
          },
          {
            id: 8,
            name: 'Not Pet Friendly',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/not-pf.webp?updatedAt=1723131736280',
          },
          {
            id: 9,
            name: 'Once a Week',
            imageUrl:
              'https://ik.imagekit.io/snjtzh7cg/Plant%20Haus/once-week.webp?updatedAt=1723131736059',
          },
        ],
      },
    ],
  },
]

export default SHOP_DATA
