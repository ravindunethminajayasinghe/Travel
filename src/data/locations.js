// src/data/locations.js
export const provinces = {
  western: {
    name: 'Western Province',
    capital: 'Colombo',
    districts: ['colombo', 'gampaha', 'kalutara']
  },
  central: {
    name: 'Central Province',
    capital: 'Kandy',
    districts: ['kandy', 'matale', 'nuwaraEliya']
  },
  southern: {
    name: 'Southern Province',
    capital: 'Galle',
    districts: ['galle', 'matara', 'hambantota']
  },
  northern: {
    name: 'Northern Province',
    capital: 'Jaffna',
    districts: ['jaffna', 'killinochchi', 'mannar', 'Vavuniya', "Mullaitivu"]
  },
  eastern: {
    name: 'Eastern Province',
    capital: 'Trincomalee',
    districts: ['trincomalee', 'batticaloa', 'ampara']
  },
  northWestern: {
    name: 'North Western Province',
    capital: 'Kurunegala',
    districts: ['kurunegala', 'puttalam']
  },
  northCentral: {
    name: 'North Central Province',
    capital: 'Anuradhapura',
    districts: ['anuradhapura', 'polonnaruwa']
  },
  uva: {
    name: 'Uva Province',
    capital: 'Badulla',
    districts: ['badulla', 'monaragala']
  },
  sabaragamuwa: {
    name: 'Sabaragamuwa Province',
    capital: 'Ratnapura',
    districts: ['ratnapura', 'kegalle']
  },
};

// TODO:- add and review data
export const travelData = {
  colombo: {
    province: 'western',
    name: 'Colombo District',
    locations: [
      { name: 'Galle Face Green', description: 'A scenic ocean-side park in the city.' },
      { name: 'National Museum of Colombo', description: 'The largest museum in Sri Lanka, showcasing cultural heritage.' },
      { name: 'Gangaramaya Temple', description: 'A mix of modern & traditional architecture with Buddhist elements.' }
    ]
  },
  gampaha: {
    province: 'western',
    name: 'Gampaha District',
    locations: [
      { name: 'Negombo Beach', description: 'Popular coastal resort close to the airport, with vibrant lagoon life.' },
      { name: 'Muthurajawela Wetland', description: 'Large marsh & mangrove ecosystem with boat tours.' },
      { name: 'Anguruwella Waterfall', description: 'A scenic waterfall and mini-trek outing.' }
    ]
  },
  kalutara: {
    province: 'western',
    name: 'Kalutara District',
    locations: [
      { name: 'Kalutara Bodhiya', description: 'Sacred Buddhist site near the coast.' },
      { name: 'Bentota Beach & River Safari', description: 'Beach resort zone plus river safari on Bentota River.' },
      { name: 'Kosgoda Turtle Hatchery', description: 'Sea-turtle conservation & beach experience.' }
    ]
  },
  kurunegala: {
    province: 'northWestern',
    name: 'Kurunegala District',
    locations: [
      { name: 'Ethagala (Elephant Rock)', description: 'Large rock outcrop shaped like an elephant, overlooking the town.' },
      { name: 'Panduwasnuwara Ancient City', description: 'Archaeological site with ruins of medieval kingdom.' },
      { name: 'Ambepussa Heritage Railway Station', description: 'Historical railway station and bridges.' }
    ]
  },
  puttalam: {
    province: 'northWestern',
    name: 'Puttalam District',
    locations: [
      { name: 'Wilpattu National Park (partial)', description: 'Lion & leopard territory in dry zone—partially extends into Puttalam.' },
      { name: 'Kalpitiya Peninsula', description: 'Kite-surfing & dolphin spotting on the NW coast.' },
      { name: 'Puttalam Lagoon', description: 'Expansive lagoon ecosystem with birdlife & local fishing villages.' }
    ]
  },
  anuradhapura: {
    province: 'northCentral',
    name: 'Anuradhapura District',
    locations: [
      { name: 'Ancient City of Anuradhapura', description: 'UNESCO World Heritage site with stupas, Bodhi Tree & monastic complex.' },
      { name: 'Ruwanwelisaya Stupa', description: 'Iconic large white stupa in Anuradhapura religious area.' },
      { name: 'Mihintale', description: 'Sacred mountain plateau where Buddhism was introduced to Sri Lanka.' }
    ]
  },
  polonnaruwa: {
    province: 'northCentral',
    name: 'Polonnaruwa District',
    locations: [
      { name: 'Medieval City of Polonnaruwa', description: 'UNESCO site with well-preserved kingdom ruins.' },
      { name: 'Gal Vihara', description: 'Impressive rock-carved Buddha statues in Polonnaruwa.' },
      { name: 'Parakrama Samudra', description: 'Ancient large reservoir built by kings, scenic for walks.' }
    ]
  },
  hambantota: {
    province: 'southern',
    name: 'Hambantota District',
    locations: [
      { name: 'Yala National Park (part)', description: 'One of Sri Lanka’s best wildlife safari areas (leopards etc).' },
      { name: 'Bundala National Park', description: 'Bird-life & wetland sanctuary on the southern coast.' },
      { name: 'Mirissa / Tangalle Beaches', description: 'Beautiful southern beaches for relaxation & whales (Mirissa).' }
    ]
  },
  matara: {
    province: 'southern',
    name: 'Matara District',
    locations: [
      { name: 'Polhena Beach', description: 'Good for snorkelling and coral-beds by the coast.' },
      { name: 'Star Fort (Matara Fort)', description: 'Small but well-preserved Dutch era fort by the sea.' },
      { name: 'Dondra Head Lighthouse', description: 'Southernmost point of Sri Lanka with a historic lighthouse.' }
    ]
  },
  galle: {
    province: 'southern',
    name: 'Galle District',
    locations: [
      { name: 'Galle Fort', description: 'Historic fortress built under Portuguese/Dutch influence; UNESCO site.' },
      { name: 'Unawatuna Beach', description: 'Famous palm-fringed beach near Galle for snorkelling etc.' },
      { name: 'Hikkaduwa Coral Reefs', description: 'Vibrant coral reef ecosystem just offshore for diving and snorkelling.' }
    ]
  },
  matale: {
    province: 'central',
    name: 'Matale District',
    locations: [
      { name: 'Sigiriya Rock Fortress', description: 'Ancient rock citadel rising dramatically, UNESCO site.' },
      { name: 'Dambulla Cave Temple', description: 'Large cave-temple complex with murals and Buddha statues.' },
      { name: 'Knuckles Mountain Range (edge)', description: 'Mountainous wilderness, trekking and scenic views.' }
    ]
  },
  kandy: {
    province: 'central',
    name: 'Kandy District',
    locations: [
      { name: 'Temple of the Tooth Relic', description: 'A sacred Buddhist site and UNESCO cultural heritage.' },
      { name: 'Peradeniya Botanical Gardens', description: 'Large botanical garden with thousands of plant species.' },
      { name: 'Kandy Lake & City Center', description: 'Scenic lake in the heart of the heritage city.' }
    ]
  },
  nuwaraEliya: {
    province: 'central',
    name: 'Nuwara Eliya District',
    locations: [
      { name: 'Horton Plains & World’s End', description: 'Hill-country national park with dramatic cliff views.' },
      { name: 'Gregory Lake & Nuwara Eliya town', description: 'Cool climate town, colonial architecture and scenic lake.' },
      { name: 'Tea Plantations & Pedro Estate', description: 'Rolling tea fields and factory tours in “Little England”.' }
    ]
  },
  badulla: {
    province: 'uva',
    name: 'Badulla District',
    locations: [
      { name: 'Ella & Nine-Arch Bridge', description: 'Famous scenic train & bridge viewpoint amidst tea country.' },
      { name: 'Ravana Falls', description: 'Large waterfall and popular photo-spot in hill country.' },
      { name: 'Diyaluma Falls', description: 'Sri Lanka’s second highest waterfall with natural infinity pools.' }
    ]
  },
  monaragala: {
    province: 'uva',
    name: 'Monaragala District',
    locations: [
      { name: 'Yala (part) / Gal Oya Wildlife', description: 'Wildlife & nature in southeastern zone.' },
      { name: 'Senanayake Samudraya Reservoir', description: 'Large reservoir popular for nature & bird-life.' },
      { name: 'Buttala & Wellawaya Region', description: 'Gateway to hill roads & waterfalls.' }
    ]
  },
  batticaloa: {
    province: 'eastern',
    name: 'Batticaloa District',
    locations: [
      { name: 'Arugam Bay (nearby in Ampara but regional surf hub)', description: 'Legendary surfing beach & laid-back coast.' },
      { name: 'Kallady Beach & Bridge', description: 'Coastal stretch near Batticaloa town.' },
      { name: 'Lighthouse & Dutch Fort (old town spot)', description: 'Historic colonial structures by the lagoon.' }
    ]
  },
  ampara: {
    province: 'eastern',
    name: 'Ampara District',
    locations: [
      { name: 'Arugam Bay Beach', description: 'Surfing hotspot on the east coast.' },
      { name: 'Kumana National Park', description: 'Bird-rich wilderness & coastal safari zone.' },
      { name: 'Pottuvil Lagoon & Beach', description: 'Scenic lagoon meets sea, nature & snorkelling.' }
    ]
  },
  trincomalee: {
    province: 'eastern',
    name: 'Trincomalee District',
    locations: [
      { name: 'Nilaveli & Pigeon Island', description: 'Pristine east coast beaches and snorkelling island.' },
      { name: 'Koneswaram Temple & Swami Rock', description: 'Historic Hindu temple perched on a cliff by the sea.' },
      { name: 'Uppuveli Beach', description: 'Relaxed beach resort area with sea-view vibes.' }
    ]
  },
  killinochchi: {
    province: 'northern',
    name: 'Kilinochchi District',
    locations: [
      { name: 'Vavuniya-Kilinochchi Rural Region', description: 'Less tourist-crowded zone, rural and coastal possibilities.' },
      { name: 'Jaffna Peninsula Access (from Kilinochchi)', description: 'Gateway towards northern cultural/temple tours.' },
      { name: 'Pooneryn Lagoon & Fishing Villages', description: 'Coastal lagoon and local life experience.' }
    ]
  },
  Vavuniya: {
    province: 'northern',
    name: 'Vavuniya District',
    locations: [
      { name: 'Vavuniya Town & Surroundings', description: 'Cultural and local town experience in northern Sri Lanka.' },
      { name: 'Mannar Access (from Vavuniya)', description: 'Gateway towards Mannar Island and coastal tours.' },
      { name: 'Local Markets & Rural Life', description: 'Experience traditional markets and village life.' }
    ]
  },
  Mullaitivu: {
    province: 'northern',
    name: 'Mullaitivu District',
    locations: [
      { name: 'Mullaitivu Beaches', description: 'Untouched beaches with serene coastal views.' },
      { name: 'Nagar Kovil Temple', description: 'Ancient Hindu temple with cultural significance.' },
      { name: 'Local Fishing Villages', description: 'Experience traditional fishing communities and their way of life.' }
    ]
  },
  jaffna: {
    province: 'northern',
    name: 'Jaffna District',
    locations: [
      { name: 'Jaffna Fort & Town Centre', description: 'Rich Tamil-heritage town, fortress & cultural sites.' },
      { name: 'Keerimalai Springs & Naguleswaram Temple', description: 'Sacred bathing springs & ancient temple by the sea.' },
      { name: 'Delft Island (via ferry)', description: 'Remote island with wild horses, salt-flats and historic ruins.' }
    ]
  },
  mannar: {
    province: 'northern',
    name: 'Mannar District',
    locations: [
      { name: 'Mannar Island & Adam’s Bridge view', description: 'Thin-strip island, bird-life, and mythic ‘Bridge’ link to India.' },
      { name: 'Rama Setu/Adam’s Bridge vantage', description: 'Mythical chain of islets between India & Sri Lanka.' },
      { name: 'Thiruketheeswaram Temple & Fort', description: 'Historic Hindu temple plus colonial fort remains.' }
    ]
  },
  ratnapura: {
    province: 'sabaragamuwa',
    name: 'Ratnapura District',
    locations: [
      { name: 'Sinharaja Rainforest (edge)', description: 'Biodiverse rainforest UNESCO site near Ratnapura zone.' },
      { name: 'Kitulgala White-Water Rafting & Nature', description: 'River adventure & jungle scenery in Ratnapura region.' },
      { name: 'Gem Mines & Tours', description: 'Ratnapura “City of Gems” tours of old-mining terrain.' }
    ]
  },
  kegalle: {
    province: 'sabaragamuwa',
    name: 'Kegalle District',
    locations: [
      { name: 'Sinharaja Rainforest (edge)', description: 'Biodiverse rainforest UNESCO site near Kegalle zone.' },
    ]
  }
};
