function volume_sphere() {

    // Get radius value
    var radius = document.getElementById("radius").value;

    // Convert to number
    radius = Number(radius);

    // Calculate volume
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Set result
    document.getElementById("volume").value = volume.toFixed(2);

    // Prevent form submission
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;