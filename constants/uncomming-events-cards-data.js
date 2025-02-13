export const upcommingEvents = [
	{
		image: "IMG/online-event-1-Amazing-On-Demand.png",
		imgAlt:"Event Image",
		title: "Day Trading Idea and Strategy",
		category: "Business",
		imageSrc:"IMG/icon-calendar.svg",
		imageAlt:"calendar",
		date: "Thu, Mar 14 · 6:00 PM PDT",
		imgCheck: "IMG/icon-check.svg",
		imgCheckAlt: "check",
		attendees: 3,
		imgTicket: "IMG/icon-ticket.svg",
		imgTicketAlt: "ticket",
		price: "Free"
	},
	{
		image: "IMG/online-event-2-Vision-Pro-Developers.png",
		imgAlt:"Event Image",
		title: "Day Trading Idea and Strategy",
		category: "Technology",
		imageSrc:"IMG/icon-calendar.svg",
		imageAlt:"calendar",
		date: "Wed, Mar 13 · 7:00 PM PDT",
		imgCheck: "IMG/icon-check.svg",
		imgCheckAlt: "check",
		attendees: 51,
		imgTicket: "IMG/icon-ticket.svg",
		imgTicketAlt: "ticket",
		price: "Free"
	},
	{
		image: "IMG/online-event-3-Introduction-to-Power-BI.png",
		imgAlt:"Event Image",
		title: "Day Trading Idea and Strategy",
		category: "Hobbies and Passions",
		imageSrc:"IMG/icon-calendar.svg",
		imageAlt:"calendar",
		date: "Wed, Mar 13 · 6:00 PM PDT",
		imgCheck: "IMG/icon-check.svg",
		imgCheckAlt: "check",
		attendees: 16,
		imgTicket: "IMG/icon-ticket.svg",
		imgTicketAlt: "ticket",
		price: "Free"
	},
	{
		image: "IMG/online-event-4-Significant-Musical.png",
		imgAlt:"Event Image",
		title: "Day Trading Idea and Strategy",
		category: "Technology",
		imageSrc:"IMG/icon-calendar.svg",
		imageAlt:"calendar",
		date: "Thu, Mar 14 · 5:30 PM PDT",
		imgCheck: "IMG/icon-check.svg",
		imgCheckAlt: "check",
		attendees: 33,
		imgTicket: "IMG/icon-ticket.svg",
		imgTicketAlt: "ticket",
		price: "Free"
	},
];

// fillUpcoomingEvents('cards-upcomming-event-list', upcommingEvents);

export function fillUpcoomingEvents(wrapperID, cardsData){
	
	
	function getUpcommingEventsCard(cardData) {
		return `
			<img src="${cardData.image }" alt="${cardData.imgAlt }">
			<p class="event-title">${ cardData.title }</p>
			<p class="event-category">${ cardData.category }</p>
				
			<div class="event-info-element">
				<i class="icon ic-calendar ic-color-gray"></i>
				<p class="event-date">${cardData.date}</p>
			</div>
		
			<div class="event-info-element" >
				<i class="icon ic-check ic-color-gray"></i>
				<p>${cardData.attendees} going</p>
			</div>
		
			<div class="event-info-element">
				<i class="icon ic-ticket ic-color-gray"></i>
				<p>${cardData.price}</p>
			</div>
			
			`;
	};
	
	
	const myCardsList = document.getElementById(wrapperID);
	
	cardsData.forEach((cardData)=>{
		const card = document.createElement('div');
		card.classList.add("event");
		card.innerHTML = getUpcommingEventsCard(cardData);
		myCardsList.appendChild(card);
	});
	
}

