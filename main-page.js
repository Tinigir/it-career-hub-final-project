import { events } from './constants/events-cards-data.js';
import { upcommingEvents, fillUpcoomingEvents } from './constants/uncomming-events-cards-data.js';
import {friendshipCardsData} from './constants/friendship-cards-data.js';

fillUpcoomingEvents('cards-event-list', events);
fillUpcoomingEvents('cards-upcomming-event-list', upcommingEvents);
const joinMeetingLink = document.getElementById('joinMeetingLink');
const searchLocationForm = document.getElementById('search-location-form');
const searchLocationInput = document.getElementById('search-location-input');

searchLocationInput.addEventListener('input', (event) =>{
	updateJoinMeetingLink();
});

searchLocationForm.addEventListener('submit', (event) =>{
	event.preventDefault();
	event.stopPropagation();
	updateJoinMeetingLink();
	joinMeetingLink.click();
});

function updateJoinMeetingLink(){
	joinMeetingLink.href=`search-events-page/search-events-page.html?location=${searchLocationInput.value}`;
}





