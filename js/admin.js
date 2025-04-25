document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const propertyForm = document.getElementById("property-form")
  const propertyVerified = document.getElementById("property-verified")
  const verificationDateContainer = document.getElementById("verification-date-container")
  const verificationDate = document.getElementById("verification-date")

  // Set current date as verification date when verified is checked
  propertyVerified.addEventListener("change", function () {
    if (this.checked) {
      const today = new Date().toISOString().split("T")[0]
      verificationDate.textContent = today
      verificationDateContainer.style.display = "block"
    } else {
      verificationDateContainer.style.display = "none"
    }
  })

  // Assume addProperty is defined elsewhere, e.g., in a separate module
  // For demonstration purposes, let's define a simple addProperty function here
  // In a real application, you would likely import it from another file
  function addProperty(property) {
    // Simulate adding the property to a database or storage
    console.log("Adding property:", property)
    // Generate a unique ID for the property (e.g., using a timestamp)
    const newPropertyId = Date.now()
    return newPropertyId
  }

  // Form submission handler
  propertyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    // Create property object from form data
    const property = {
      title: document.getElementById("property-title").value,
      location: document.getElementById("property-location").value,
      type: document.getElementById("property-type").value,
      price: document.getElementById("property-price").value,
      bedrooms: Number.parseInt(document.getElementById("property-bedrooms").value),
      bathrooms: Number.parseInt(document.getElementById("property-bathrooms").value),
      area: Number.parseInt(document.getElementById("property-area").value),
      yearBuilt: Number.parseInt(document.getElementById("property-year").value),
      image: document.getElementById("property-image").value,
      description: document.getElementById("property-description").value,
      features: document
        .getElementById("property-features")
        .value.split(",")
        .map((f) => f.trim()),
      verified: document.getElementById("property-verified").checked,
      verificationDate: document.getElementById("property-verified").checked
        ? new Date().toISOString().split("T")[0]
        : undefined,
      neighborhood: {
        description: document.getElementById("neighborhood-description").value,
        amenities: document
          .getElementById("neighborhood-amenities")
          .value.split(",")
          .map((a) => a.trim()),
        safetyRating: Number.parseFloat(document.getElementById("safety-rating").value),
        transitRating: Number.parseFloat(document.getElementById("transit-rating").value),
        schoolsRating: Number.parseFloat(document.getElementById("schools-rating").value),
      },
    }

    // Add property to storage
    const newPropertyId = addProperty(property)

    // Show success message and redirect
    alert("Property added successfully!")
    window.location.href = `property-details.html?id=${newPropertyId}`
  })

  // Form validation function
  function validateForm() {
    let isValid = true

    // Required fields
    const requiredFields = [
      "property-title",
      "property-location",
      "property-price",
      "property-description",
      "neighborhood-description",
    ]

    // Remove existing validation classes
    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId)
      field.classList.remove("is-invalid")
    })

    // Check each required field
    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId)
      if (!field.value.trim()) {
        field.classList.add("is-invalid")
        isValid = false
      }
    })

    return isValid
  }
})
