inlets = 1;
outlets = 1;

var twoPi = 6.283185307179586;
var maxSpeakers = 8;
var numSpeakers = 4;
var invNS = 0.25;
var gains = [];
var speakerAngles = [];

for(i = 0; i < numSpeakers; i++){
		speakerAngles[i] = i * twoPi / numSpeakers;
}

function setNumSpeakers(num){
	if(numSpeakers <= maxSpeakers) numSpeakers = num;
	else numSpeakers = maxSpeakers;
	invNS = 1 / numSpeakers;
	speakerAngles = [];
	for(i = 0; i < maxSpeakers; i++){
		if(i < numSpeakers)	speakerAngles[i] = i * twoPi / numSpeakers;
		gains[i] = 0;
	}
}

function setAzimuth(angle){
	angle = angle * twoPi;
	for(i = 0; i < maxSpeakers; i++){
		if(i < speakerAngles.length){
			gains[i] = invNS * (1 - Math.cos(angle - speakerAngles[i]));
		} else {
			gains[i] = 0;
		}
	}		
	outlet(0, gains);
	}
		