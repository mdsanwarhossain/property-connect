document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const propertiesContainer = document.getElementById("properties-container")
  const locationFilter = document.getElementById("location-filter")
  const typeFilter = document.getElementById("type-filter")
  const priceFilter = document.getElementById("price-filter")
  const priceDisplay = document.getElementById("price-display")
  const verifiedFilter = document.getElementById("verified-filter")
  const applyFiltersBtn = document.getElementById("apply-filters")
  const resetFiltersBtn = document.getElementById("reset-filters")
  const verifiedToggle = document.getElementById("verified-toggle")

  // Initialize price display
  priceDisplay.textContent = formatPrice(priceFilter.value)

  // Update price display when slider is moved
  priceFilter.addEventListener("input", function () {
    priceDisplay.textContent = formatPrice(this.value)
  })

  // Filter settings
  let filters = {
    location: "",
    type: "",
    price: 100000,
    verified: false,
  }

  // Load properties
  loadProperties()

  // Event listeners
  applyFiltersBtn.addEventListener("click", applyFilters)
  resetFiltersBtn.addEventListener("click", resetFilters)
  verifiedToggle.addEventListener("click", toggleVerifiedOnly)

  // Apply filters function
  function applyFilters() {
    filters.location = locationFilter.value
    filters.type = typeFilter.value
    filters.price = Number.parseInt(priceFilter.value)
    filters.verified = verifiedFilter.checked

    loadProperties()
  }

  // Reset filters function
  function resetFilters() {
    locationFilter.value = ""
    typeFilter.value = ""
    priceFilter.value = 100000
    priceDisplay.textContent = formatPrice(100000)
    verifiedFilter.checked = false

    filters = {
      location: "",
      type: "",
      price: 100000,
      verified: false,
    }

    loadProperties()
  }

  // Toggle verified only properties
  function toggleVerifiedOnly() {
    verifiedFilter.checked = !verifiedFilter.checked
    applyFilters()
  }

  // Load properties function
  function loadProperties() {
    // Clear the container first
    propertiesContainer.innerHTML = ""

    // Get properties from localStorage
    // Mock getProperties function for demonstration
    function getProperties() {
      try {
        const properties = JSON.parse(localStorage.getItem("properties")) || []
        return properties
      } catch (error) {
        console.error("Error getting properties from localStorage:", error)
        return []
      }
    }
    const properties = getProperties()

    // Filter properties
    const filteredProperties = properties.filter((property) => {
      const locationMatch =
        !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())
      const typeMatch = !filters.type || property.type === filters.type
      const price = Number.parseInt(property.price.replace(/[^0-9]/g, ""))
      const priceMatch = price <= filters.price
      const verifiedMatch = !filters.verified || property.verified === filters.verified

      return locationMatch && typeMatch && priceMatch && verifiedMatch
    })

    // Show no results message if no properties match
    if (filteredProperties.length === 0) {
      propertiesContainer.innerHTML = `
                <div class="col-12 text-center py-5 bg-light rounded">
                    <p class="text-muted">No properties match your filters. Try adjusting your search criteria.</p>
                </div>
            `
      return
    }

    // Render each property
    filteredProperties.forEach((property) => {
      renderPropertyCard(property)
    })
  }

  // Render property card function
  function renderPropertyCard(property) {
    const template = document.getElementById("property-card-template")
    const clone = document.importNode(template.content, true)

    // Set property data in the card
    const propertyCard = clone.querySelector(".property-card")
    propertyCard.setAttribute("data-id", property.id)

    const image = clone.querySelector(".property-image")
    image.src = property.image || "https://via.placeholder.com/600x400"
    image.alt = property.title

    const type = clone.querySelector(".property-type")
    type.textContent = property.type

    const title = clone.querySelector(".property-title")
    title.textContent = property.title

    const verifiedBadge = clone.querySelector(".verified-badge")
    if (property.verified) {
      verifiedBadge.style.display = "inline-flex"
    }

    const location = clone.querySelector(".property-location")
    location.textContent = property.location

    const details = clone.querySelector(".property-details")
    details.textContent = `${property.bedrooms} Bed • ${property.bathrooms} Bath`

    const price = clone.querySelector(".property-price")
    price.textContent = property.price

    // Add click event to navigate to property details
    propertyCard.addEventListener("click", () => {
      window.location.href = `property-details.html?id=${property.id}`
    })

    // Append to the container
    propertiesContainer.appendChild(clone)
  }

  // Format price function
  function formatPrice(value) {
    return Number.parseInt(value).toLocaleString() + " BDT"
  }
})
