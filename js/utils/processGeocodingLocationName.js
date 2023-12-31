function processGeocodingLocationName(geocodingResults) {
    // Check common expected results in specified order, if none match, assign locationName a value of null
    const locationName = geocodingResults.city || geocodingResults.town || geocodingResults.country || geocodingResults.postcode || geocodingResults.neighbourhood || geocodingResults.suburb || geocodingResults.office || geocodingResults.municipality || geocodingResults.city_district || geocodingResults.state_district || null;
    
    return locationName
}

export default processGeocodingLocationName;