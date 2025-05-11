// Property Detail Page JavaScript

// Get property ID from URL parameter
function getPropertyIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Property data - in a real application, this would come from a database
const properties = [
    {
        id: 1,
        title: "200 Rideau Terrace, Unit 1507",
        address: "ROCKCLIFFE PARK, OTTAWA, ON K1M 0Z3",
        description: "This magnificent penthouse offers unparalleled luxury living with panoramic views of the Ottawa River. Featuring 10 bedrooms, 8 bathrooms, and over 12,800 square feet of living space, this residence represents the pinnacle of urban sophistication. The property includes a private elevator, home theater, wine cellar, and a rooftop terrace with an infinity pool. Custom finishes throughout include imported marble, handcrafted woodwork, and state-of-the-art smart home technology.",
        price: "$35,000,000",
        beds: 10,
        baths: 8,
        sqft: "12,809",
        image: "property1.jpg",
        status: "FOR SALE",
        type: "Penthouse",
        location: "rockcliffe",
        features: [
            "Private Elevator",
            "Home Theater",
            "Wine Cellar",
            "Rooftop Terrace",
            "Infinity Pool",
            "Smart Home Technology",
            "Panoramic Views",
            "Gourmet Kitchen",
            "Marble Finishes",
            "24/7 Security"
        ],
        coordinates: { lat: 45.4473, lng: -75.6755 } // Approximate coordinates for Rockcliffe Park
    },
    {
        id: 2,
        title: "12 Sussex Drive",
        address: "ROCKCLIFFE PARK, OTTAWA, ON K1M 1M2",
        description: "This prestigious waterfront estate offers the perfect blend of historic charm and modern luxury. With 4 bedrooms, 5 bathrooms, and over 3,300 square feet of meticulously designed living space, this property provides an exceptional living experience. The home features a private garden, direct water access, and stunning architectural details throughout. Enjoy the tranquility of Rockcliffe Park while being just minutes from downtown Ottawa.",
        price: "$19,995,000",
        beds: 4,
        baths: 5,
        sqft: "3,383",
        image: "property2.jpg",
        status: "FOR SALE",
        type: "House",
        location: "rockcliffe",
        features: [
            "Waterfront Property",
            "Private Garden",
            "Historic Architecture",
            "Modern Renovations",
            "Gourmet Kitchen",
            "Home Office",
            "Wine Cellar",
            "Hardwood Floors",
            "Fireplace",
            "Security System"
        ],
        coordinates: { lat: 45.4445, lng: -75.6936 } // Approximate coordinates for Sussex Drive area
    },
    {
        id: 3,
        title: "255 Richmond Road, Penthouse",
        address: "WESTBORO, OTTAWA, ON K1Z 6X3",
        description: "Experience luxury living in this stunning Westboro penthouse with breathtaking views of Gatineau Park. This 3-bedroom, 4.5-bathroom residence spans over 4,000 square feet and features floor-to-ceiling windows, custom Italian cabinetry, and premium finishes throughout. The open concept living space flows seamlessly to a private terrace perfect for entertaining. Building amenities include concierge service, fitness center, and guest suites.",
        price: "$28,500,000",
        beds: 3,
        baths: 4.5,
        sqft: "4,019",
        image: "property3.jpg",
        status: "FOR SALE",
        type: "Penthouse",
        location: "westboro",
        features: [
            "Floor-to-Ceiling Windows",
            "Private Terrace",
            "Italian Cabinetry",
            "Concierge Service",
            "Fitness Center",
            "Guest Suites",
            "Park Views",
            "Smart Home Features",
            "Heated Floors",
            "Designer Lighting"
        ],
        coordinates: { lat: 45.3925, lng: -75.7568 } // Approximate coordinates for Westboro
    },
    {
        id: 4,
        title: "90 George Street, Suite 2201",
        address: "BYWARD MARKET, OTTAWA, ON K1N 0A8",
        description: "This prestigious residence in Ottawa's historic ByWard Market offers unparalleled luxury and convenience. With 4 bedrooms, 5.5 bathrooms, and over 5,200 square feet of living space, this property combines historic charm with modern amenities. Features include a gourmet kitchen with top-of-the-line appliances, a private library, home theater, and multiple terraces with panoramic views of Parliament Hill and the Ottawa River.",
        price: "$42,750,000",
        beds: 4,
        baths: 5.5,
        sqft: "5,211",
        image: "property4.jpg",
        status: "FOR SALE",
        type: "Apartment",
        location: "ottawa",
        features: [
            "Historic Building",
            "Gourmet Kitchen",
            "Private Library",
            "Home Theater",
            "Multiple Terraces",
            "Parliament Hill Views",
            "Concierge Service",
            "Valet Parking",
            "Wine Cellar",
            "Fitness Center"
        ],
        coordinates: { lat: 45.4284, lng: -75.6919 } // Approximate coordinates for ByWard Market
    },
    {
        id: 5,
        title: "118 First Avenue",
        address: "THE GLEBE, OTTAWA, ON K1S 2G4",
        description: "This historic townhouse in Ottawa's coveted Glebe neighborhood offers a perfect blend of character and modern comfort. The 3-bedroom, 2.5-bathroom home features over 2,700 square feet of thoughtfully designed living space with original hardwood floors, crown moldings, and a wood-burning fireplace. Recent updates include a chef's kitchen with premium appliances, spa-like bathrooms, and a landscaped backyard oasis with a stone patio.",
        price: "$8,995,000",
        beds: 3,
        baths: 2.5,
        sqft: "2,706",
        image: "property5.jpg",
        status: "FOR SALE",
        type: "House",
        location: "glebe",
        features: [
            "Historic Townhouse",
            "Original Hardwood Floors",
            "Crown Moldings",
            "Wood-Burning Fireplace",
            "Chef's Kitchen",
            "Premium Appliances",
            "Spa Bathrooms",
            "Landscaped Backyard",
            "Stone Patio",
            "Prime Location"
        ],
        coordinates: { lat: 45.4018, lng: -75.6879 } // Approximate coordinates for The Glebe
    },
    {
        id: 6,
        title: "1 Island Park Drive",
        address: "ISLAND PARK, OTTAWA, ON K1Y 0A7",
        description: "This extraordinary riverside estate offers unparalleled luxury and privacy. With 8 bedrooms, 10 bathrooms, and over 11,600 square feet of living space, this property is perfect for those who demand the very best. The home features a grand entrance with a sweeping staircase, formal living and dining rooms, a gourmet kitchen, home theater, indoor pool, and a private dock. The meticulously landscaped grounds include gardens, a tennis court, and direct access to the Ottawa River.",
        price: "$52,500,000",
        beds: 8,
        baths: 10,
        sqft: "11,665",
        image: "property6.jpg",
        status: "FOR SALE",
        type: "Villa",
        location: "ottawa",
        features: [
            "Riverside Estate",
            "Private Dock",
            "Indoor Pool",
            "Tennis Court",
            "Home Theater",
            "Gourmet Kitchen",
            "Formal Dining Room",
            "Landscaped Gardens",
            "Smart Home Technology",
            "Security System"
        ],
        coordinates: { lat: 45.3857, lng: -75.7609 } // Approximate coordinates for Island Park area
    }
];

// Load property details
function loadPropertyDetails() {
    const propertyId = getPropertyIdFromUrl();
    if (!propertyId) {
        window.location.href = 'properties.html'; // Redirect if no ID is provided
        return;
    }
    
    // Find the property with the matching ID
    const property = properties.find(p => p.id === parseInt(propertyId));
    if (!property) {
        window.location.href = 'properties.html'; // Redirect if property not found
        return;
    }
    
    // Update the page with property details
    document.title = `${property.title} | Sanchez Realty`;
    document.getElementById('property-hero').style.backgroundImage = `url('images/${property.image}')`;
    document.getElementById('property-status').textContent = property.status;
    document.getElementById('property-title').textContent = property.title;
    document.getElementById('property-price').textContent = property.price;
    document.getElementById('property-address').textContent = property.address;
    document.getElementById('property-beds').textContent = property.beds;
    document.getElementById('property-baths').textContent = property.baths;
    document.getElementById('property-size').textContent = property.sqft;
    document.getElementById('property-description').textContent = property.description;
    
    // Add property features
    const featuresContainer = document.getElementById('property-features');
    featuresContainer.innerHTML = '';
    property.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        featureItem.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        featuresContainer.appendChild(featureItem);
    });
    
    // Load similar properties (properties in the same location except the current one)
    loadSimilarProperties(property);
    
    // Initialize the map
    initMap(property);
}

// Load similar properties
function loadSimilarProperties(currentProperty) {
    const similarContainer = document.getElementById('similar-properties');
    similarContainer.innerHTML = '';
    
    // First try to find properties in the same location, excluding the current one
    let similarProperties = properties.filter(p => 
        p.location === currentProperty.location && p.id !== currentProperty.id
    );
    
    // If we don't have at least 3 properties, add properties from other locations
    if (similarProperties.length < 3) {
        const otherProperties = properties.filter(p => 
            p.location !== currentProperty.location && p.id !== currentProperty.id
        );
        similarProperties = [...similarProperties, ...otherProperties];
    }
    
    // Limit to 3 similar properties
    const limitedProperties = similarProperties.slice(0, 3);
    
    // Add similar properties to the container
    limitedProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'listing-item';
        propertyCard.innerHTML = `
            <div class="listing-image" style="background-image: url('images/${property.image}');">
                <div class="listing-tag">${property.status}</div>
            </div>
            <div class="listing-details">
                <h3>${property.title}</h3>
                <p>${property.address}</p>
                <p class="price">${property.price}</p>
                <div class="listing-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} Beds</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} Baths</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-vector-square"></i>
                        <span>${property.sqft} sq.ft</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to navigate to the property detail page
        propertyCard.addEventListener('click', () => {
            window.location.href = `property-detail.html?id=${property.id}`;
        });
        
        similarContainer.appendChild(propertyCard);
    });
    
    // If no similar properties found, hide the section
    if (limitedProperties.length === 0) {
        document.querySelector('.similar-properties').style.display = 'none';
    }
}

// Initialize Google Map
function initMap(property) {
    // Check if Google Maps API is loaded
    if (typeof google === 'undefined') {
        // Display a message if API key is not set
        const mapContainer = document.getElementById('property-map');
        mapContainer.innerHTML = `
            <div style="height: 100%; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;">
                <p>To display the property location map, please add your Google Maps API key in the HTML file.</p>
            </div>
        `;
        return;
    }
    
    // Create the map
    const map = new google.maps.Map(document.getElementById('property-map'), {
        center: property.coordinates,
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "2.00"}]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#9c9c9c"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#eeeeee"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#7b7b7b"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#c8d7d4"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#070707"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
            }
        ]
    });
    
    // Add a marker for the property
    const marker = new google.maps.Marker({
        position: property.coordinates,
        map: map,
        title: property.title
    });
    
    // Add an info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 5px 0; font-family: 'Montserrat', sans-serif;">${property.title}</h3>
                <p style="margin: 0; font-family: 'Montserrat', sans-serif;">${property.price}</p>
            </div>
        `
    });
    
    // Open info window when marker is clicked
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
    
    // Open info window by default
    infoWindow.open(map, marker);
}

// Load property details when the page loads
document.addEventListener('DOMContentLoaded', loadPropertyDetails);