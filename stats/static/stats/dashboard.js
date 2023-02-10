console.log("Hello world")

const dashboardSlug = document.getElementById("dashboard-slug").textContent.trim()
console.log(dashboardSlug)
const socket  = new WebSocket(`ws://${window.location.host}/ws/${dashboardSlug}/`)
console.log(socket)

socket.onmessage = function(e) {
    console.log('Server:' + e.data);
};

socket.onopen = function(e) {
    socket.send(JSON.stringify({
        'message': 'Hello from client',
        'sender': 'Test sender',
    }));
}