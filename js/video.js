var video = document.querySelector("#player1");

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
})

// Function to update the volume information
function updateVolumeDisplay() {
	document.querySelector("#volume").innerHTML = `${(video.volume * 100).toFixed(0)}%`;
}

// Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeDisplay();
})

// Pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video. ");
	video.pause();
})

// Speed up video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up. ");
	video.playbackRate = video.playbackRate/ 0.9;

	// Log the new speed to the console
	console.log("The New Speed is " + video.playbackRate);
})

// Slow the current video speed by 10% each time
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down. ");
	video.playbackRate = video.playbackRate * 0.9;

	// Log the new speed to the console
	console.log("The New Speed is " + video.playbackRate);
})

// Skip ahead: Advance the current video by 10 seconds.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	console.log("Current Video Location " + video.currentTime);

	// If the video length has been exceeded go back to the start of the video.
 	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
  	console.log("Video current time is " + video.currentTime);
 	}
})

// Mute/unmute the video.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		console.log("Mute");
		// Update Button Text
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		console.log("Unmute");
		// Update Button Text
		document.querySelector("#mute").innerHTML = "Mute";
	}	
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = slider.value / 100
	console.log(`Change Volume to ${video.volume * 100}%`)
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change Style")
	video.classList.add("oldSchool")
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change Back")
	video.classList.remove("oldSchool")
});

