// Conversion factors for meters, kilometers, inches, and centimeters
const conversionFactors = {
    meters: 1,
    kilometers: 1000,
    inches: 0.0254,
    centimeters: 0.01,
};

function convertValue(value, fromUnit, toUnit) {
    if (!value) return 0; // If there's no input value, return 0

    // Convert the input value to meters
    const valueInMeters = value * conversionFactors[fromUnit];
    
    // Convert the value in meters to the target unit
    return valueInMeters / conversionFactors[toUnit];
}

function updateConversion() {
    // Get the value from the input field and dropdowns
    const valueFrom = parseFloat(document.getElementById('valueFrom').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    
    // Perform the conversion
    const result = convertValue(valueFrom, unitFrom, unitTo);
    
    // Update the result dynamically
    document.getElementById('result').textContent = result.toFixed(4); // Display 4 decimal places
}

// Event listener for dynamic updates as the user types
document.getElementById('valueFrom').addEventListener('input', updateConversion);
document.getElementById('unitFrom').addEventListener('change', updateConversion);
document.getElementById('unitTo').addEventListener('change', updateConversion);

// Initial conversion when the page loads
updateConversion();
