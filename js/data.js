// Property data for Property Connect application

// Function to retrieve properties from localStorage or use initial data if none exists
function getProperties() {
  const storedProperties = localStorage.getItem("propertyConnectData")

  if (storedProperties) {
    return JSON.parse(storedProperties)
  }

  // Initial properties data
  const initialProperties = [
    {
      id: 1,
      title: "Modern Apartment in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      type: "Apartment",
      price: "35,000 BDT/month",
      description:
        "A beautiful 3-bedroom apartment in the heart of Dhanmondi. This property features modern amenities, 24/7 security, and a spacious living area. Perfect for families looking for comfort and convenience.\n\nThe apartment includes a fully equipped kitchen, air conditioning in all rooms, and high-speed internet connectivity. The building has backup power and water supply.",
      image: "https://via.placeholder.com/600x400",
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      yearBuilt: 2018,
      features: ["24/7 Security", "Backup Generator", "Parking Space", "Elevator", "Air Conditioning", "Water Supply"],
      verified: true,
      verificationDate: "2025-01-15",
      neighborhood: {
        description:
          "Dhanmondi is a vibrant residential area with excellent schools, shopping centers, and restaurants. It's known for its cultural attractions and central location in Dhaka.",
        amenities: ["Dhanmondi Lake", "Rabindra Sarobar", "Shopping Malls", "Restaurants", "Hospitals"],
        safetyRating: 4.2,
        transitRating: 4.5,
        schoolsRating: 4.8,
      },
    },
    {
      id: 2,
      title: "Luxury Villa in Gulshan",
      location: "Gulshan, Dhaka",
      type: "Villa",
      price: "120,000 BDT/month",
      description:
        "Luxurious 5-bedroom villa in Gulshan with a private garden and swimming pool. This exclusive property offers premium living with high-end finishes and spacious rooms. Ideal for diplomats or executives.\n\nThe villa includes a modern kitchen with built-in appliances, a home theater system, and smart home features. The property is secured with CCTV cameras and has 24/7 security personnel.",
      image: "https://via.placeholder.com/600x400",
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      yearBuilt: 2020,
      features: [
        "Swimming Pool",
        "Private Garden",
        "Smart Home System",
        "Home Theater",
        "24/7 Security",
        "Backup Generator",
        "Parking Space",
      ],
      verified: true,
      verificationDate: "2025-01-20",
      neighborhood: {
        description:
          "Gulshan is an upscale residential area and diplomatic zone with luxury amenities, international schools, and high-end shopping centers. It's one of the most prestigious neighborhoods in Dhaka.",
        amenities: [
          "Gulshan Lake",
          "Premium Shopping Malls",
          "International Restaurants",
          "Embassies",
          "Private Clubs",
        ],
        safetyRating: 4.8,
        transitRating: 4.0,
        schoolsRating: 4.9,
      },
    },
    {
      id: 3,
      title: "Commercial Space in Motijheel",
      location: "Motijheel, Dhaka",
      type: "Office",
      price: "80,000 BDT/month",
      description:
        "Prime commercial space available in the business district of Motijheel. This office space is ideal for businesses looking for a central location with excellent connectivity. The space is ready to move in with basic infrastructure in place.\n\nThe office includes a reception area, conference room, and individual cabins. It has high-speed internet connectivity, central air conditioning, and backup power supply.",
      image: "https://via.placeholder.com/600x400",
      bedrooms: 0,
      bathrooms: 2,
      area: 2000,
      yearBuilt: 2015,
      features: ["Central AC", "Backup Generator", "Elevator", "Security System", "Parking Space", "Conference Room"],
      verified: true,
      verificationDate: "2025-01-10",
      neighborhood: {
        description:
          "Motijheel is Dhaka's primary financial district and central business area. It houses many corporate offices, banks, and government institutions, making it ideal for commercial establishments.",
        amenities: ["Bangladesh Bank", "Stock Exchange", "Corporate Offices", "Business Centers", "Transportation Hub"],
        safetyRating: 4.0,
        transitRating: 4.7,
        schoolsRating: 3.5,
      },
    },
    {
      id: 4,
      title: "Family House in Uttara",
      location: "Uttara, Dhaka",
      type: "House",
      price: "45,000 BDT/month",
      description:
        "Spacious family house in Uttara with 4 bedrooms and a beautiful garden. This property is perfect for families looking for a quiet neighborhood with good schools nearby. The house has been recently renovated and is in excellent condition.\n\nThe house includes a modern kitchen, spacious living room, and a separate dining area. It has a rooftop terrace with a beautiful view of the surroundings.",
      image: "https://via.placeholder.com/600x400",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      yearBuilt: 2010,
      features: ["Garden", "Rooftop Terrace", "Backup Generator", "Parking Space", "Security System", "Water Supply"],
      verified: false,
      neighborhood: {
        description:
          "Uttara is a planned residential area in northern Dhaka with wide roads, parks, and modern infrastructure. It's popular among middle to upper-middle-class families for its organized layout and amenities.",
        amenities: ["Sector Parks", "Shopping Centers", "Educational Institutions", "Restaurants", "Sports Facilities"],
        safetyRating: 4.3,
        transitRating: 4.1,
        schoolsRating: 4.4,
      },
    },
    {
      id: 5,
      title: "Studio Apartment in Banani",
      location: "Banani, Dhaka",
      type: "Apartment",
      price: "25,000 BDT/month",
      description:
        "Cozy studio apartment in Banani, perfect for singles or couples. This modern apartment offers a comfortable living space with all necessary amenities. The location is excellent with restaurants, cafes, and shopping centers nearby.\n\nThe apartment includes a kitchenette, a small dining area, and a balcony. It is fully furnished and ready to move in.",
      image: "https://via.placeholder.com/600x400",
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      yearBuilt: 2019,
      features: [
        "Fully Furnished",
        "Air Conditioning",
        "Backup Generator",
        "Elevator",
        "Security System",
        "Water Supply",
      ],
      verified: true,
      verificationDate: "2025-01-05",
      neighborhood: {
        description:
          "Banani is a trendy residential and commercial area known for its vibrant nightlife, cafes, and restaurants. It's popular among young professionals and expats for its modern lifestyle options.",
        amenities: ["Banani Lake", "Cafes & Restaurants", "Shopping Areas", "Fitness Centers", "Entertainment Venues"],
        safetyRating: 4.1,
        transitRating: 4.3,
        schoolsRating: 4.0,
      },
    },
  ]

  // Save to localStorage
  localStorage.setItem("propertyConnectData", JSON.stringify(initialProperties))

  return initialProperties
}

// Function to save properties to localStorage
function saveProperties(properties) {
  localStorage.setItem("propertyConnectData", JSON.stringify(properties))
}

// Function to add a new property
function addProperty(property) {
  const properties = getProperties()

  // Generate a new ID
  const newId = properties.length > 0 ? Math.max(...properties.map((p) => p.id)) + 1 : 1

  // Add the ID to the property
  property.id = newId

  // Add the property to the array
  properties.push(property)

  // Save to localStorage
  saveProperties(properties)

  return newId
}

// Function to get a property by ID
function getPropertyById(id) {
  const properties = getProperties()
  return properties.find((p) => p.id === Number.parseInt(id))
}

// Function to update a property
function updateProperty(property) {
  const properties = getProperties()
  const index = properties.findIndex((p) => p.id === property.id)

  if (index !== -1) {
    properties[index] = property
    saveProperties(properties)
    return true
  }

  return false
}

// Function to delete a property
function deleteProperty(id) {
  const properties = getProperties()
  const newProperties = properties.filter((p) => p.id !== Number.parseInt(id))

  if (newProperties.length < properties.length) {
    saveProperties(newProperties)
    return true
  }

  return false
}

// Initialize the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearElements = document.querySelectorAll("#current-year")
  const currentYear = new Date().getFullYear()

  currentYearElements.forEach((element) => {
    element.textContent = currentYear
  })
})
