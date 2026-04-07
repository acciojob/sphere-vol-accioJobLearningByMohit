function volume_sphere() {

    // Get radius value
    var radius = document.getElementById("radius").value;

    // Convert to number
    radius = Number(radius);

    // Validate input
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false;
    }

    // Calculate volume
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Set result with 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);

    // Prevent form submission
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;