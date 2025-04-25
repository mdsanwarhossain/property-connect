document.addEventListener("DOMContentLoaded", () => {
  // Get the property ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search)
  const propertyId = urlParams.get("id")

  // References to DOM elements
  const propertyLoadingElement = document.getElementById("property-loading")
  const propertyNotFoundElement = document.getElementById("property-not-found")
  const propertyDetailsContainer = document.getElementById("property-details-container")

  // If no property ID is provided, show not found message
  if (!propertyId) {
    showPropertyNotFound()
    return
  }

  // Mock getPropertyById function (replace with your actual implementation)
  function getPropertyById(id) {
    // Replace this with your actual data fetching logic
    const properties = [
      {
        id: 1,
        title: "Luxury Apartment in Downtown",
        type: "Apartment",
        location: "123 Main St, Anytown, USA",
        price: "$2,500/month",
        description: "A beautiful apartment in the heart of downtown with stunning city views.",
        image: "https://via.placeholder.com/800x400",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        yearBuilt: 2015,
        verified: true,
        verificationDate: "2023-10-26",
        features: ["Balcony", "Gym", "Pool", "Parking"],
        neighborhood: {
          description: "A vibrant neighborhood with plenty of restaurants and shops.",
          amenities: ["Restaurant", "Shop", "Park"],
          safetyRating: 4.5,
          transitRating: 4.0,
          schoolsRating: 3.5,
        },
      },
      {
        id: 2,
        title: "Cozy House in the Suburbs",
        type: "House",
        location: "456 Oak Ave, Anytown, USA",
        price: "$350,000",
        description: "A charming house in a quiet suburban neighborhood with a large backyard.",
        image: "https://via.placeholder.com/800x400",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        yearBuilt: 1980,
        verified: false,
        features: ["Garage", "Yard", "Fireplace"],
        neighborhood: {
          description: "A family-friendly neighborhood with excellent schools.",
          amenities: ["School", "Park", "Grocery Store"],
          safetyRating: 4.8,
          transitRating: 3.0,
          schoolsRating: 4.5,
        },
      },
    ]

    return properties.find((property) => property.id === id)
  }

  // Get the property details
  const property = getPropertyById(Number.parseInt(propertyId))

  // If property not found, show not found message
  if (!property) {
    showPropertyNotFound()
    return
  }

  // Populate the property details
  populatePropertyDetails(property)

  // Function to show property not found message
  function showPropertyNotFound() {
    propertyLoadingElement.style.display = "none"
    propertyNotFoundElement.style.display = "block"
  }

  // Function to populate property details
  function populatePropertyDetails(property) {
    // Hide loading and show details container
    propertyLoadingElement.style.display = "none"
    propertyDetailsContainer.style.display = "flex"

    // Set page title
    document.title = `${property.title} - Property Connect`

    // Basic property information
    document.getElementById("property-image").src = property.image || "https://via.placeholder.com/800x400"
    document.getElementById("property-image").alt = property.title
    document.getElementById("property-title").textContent = property.title
    document.getElementById("property-type").textContent = property.type
    document.getElementById("property-location").textContent = property.location
    document.getElementById("property-price").textContent = property.price
    document.getElementById("property-description").textContent = property.description

    // Property specifications
    document.getElementById("property-bedrooms").textContent = property.bedrooms
    document.getElementById("property-bathrooms").textContent = property.bathrooms
    document.getElementById("property-area").textContent = `${property.area} sq.ft`
    document.getElementById("property-year").textContent = property.yearBuilt

    // Verification status
    if (property.verified) {
      document.getElementById("verified-badge").style.display = "flex"
      if (property.verificationDate) {
        document
          .getElementById("verified-badge")
          .setAttribute("title", `Verified on ${new Date(property.verificationDate).toLocaleDateString()}`)
      }
    } else {
      document.getElementById("verification-pending").style.display = "block"
    }

    // Property features
    const featuresContainer = document.getElementById("property-features")
    property.features.forEach((feature) => {
      const li = document.createElement("li")
      li.className = "col-md-6 mb-2"
      li.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-check-circle-fill text-primary"></i>
                    <span>${feature}</span>
                </div>
            `
      featuresContainer.appendChild(li)
    })

    // Neighborhood information
    if (property.neighborhood) {
      // Set neighborhood title
      const locationParts = property.location.split(",")
      document.getElementById("neighborhood-title").textContent = `${locationParts[0]} Neighborhood`

      // Neighborhood description
      document.getElementById("neighborhood-description").textContent = property.neighborhood.description

      // Nearby amenities
      const amenitiesContainer = document.getElementById("neighborhood-amenities")
      property.neighborhood.amenities.forEach((amenity) => {
        const span = document.createElement("span")
        span.className = "badge bg-light text-primary px-3 py-2"
        span.textContent = amenity
        amenitiesContainer.appendChild(span)
      })

      // Ratings
      const safetyRating = property.neighborhood.safetyRating
      const transitRating = property.neighborhood.transitRating
      const schoolsRating = property.neighborhood.schoolsRating

      document.getElementById("safety-rating").textContent = safetyRating.toFixed(1)
      document.getElementById("transit-rating").textContent = transitRating.toFixed(1)
      document.getElementById("schools-rating").textContent = schoolsRating.toFixed(1)

      document.getElementById("safety-progress").style.width = `${safetyRating * 20}%`
      document.getElementById("transit-progress").style.width = `${transitRating * 20}%`
      document.getElementById("schools-progress").style.width = `${schoolsRating * 20}%`
    }
  }
})
