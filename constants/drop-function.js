const filterState = {
  search: "",
  type: "any",
  distance: "any",
  category: "any",
  date: "",
};
// import { upcommingEvents, fillUpcoomingEvents } from 'uncomming-events-cards-data.js';

// fillUpcoomingEvents('cards-upcomming-event-list', upcommingEvents);



function drawFilterElement() {
  const myOptionList = [
    {
      label: "Any type",
      value: "any",
    },
    {
      label: "Offline",
      value: "offline",
    },
    {
      label: "Online",
      value: "online",
    },
  ];

  const myDistansOptionList = [
    {
      label: "Any distance",
      value: "any",
    },
    {
      label: "5km",
      value: "5",
    },
    {
      label: "10km",
      value: "10",
    },
    {
      label: "15km",
      value: "15",
    },
    {
      label: "20km",
      value: "20",
    },
    {
      label: "25km",
      value: "25",
    },
    {
      label: "30km",
      value: "30",
    },
    {
      label: "35km",
      value: "35",
    },
    {
      label: "40km",
      value: "40",
    },
    {
      label: "45km",
      value: "45",
    },
    {
      label: "50km",
      value: "50",
    },
    {
      label: "55km",
      value: "55",
    },
    {
      label: "60km",
      value: "60",
    },
    {
      label: "65km",
      value: "65",
    },
    {
      label: "70km",
      value: "70",
    },
    {
      label: "75km",
      value: "75",
    },
    {
      label: "80km",
      value: "80",
    },
    {
      label: "85km",
      value: "85",
    },
    {
      label: "90km",
      value: "90",
    },
    {
      label: "95km",
      value: "95",
    },
    {
      label: "100km",
      value: "100",
    },
    {
      label: "105km",
      value: "105",
    },
    {
      label: "110km",
      value: "110",
    },
    {
      label: "115km",
      value: "115",
    },
    {
      label: "120km",
      value: "120",
    },
  ];

  const myCategoryOptionList = [
    {
      label: "Any category",
      value: "any",
    },
    {
      label: "Technology",
      value: "Technology",
    },
    {
      label: "Hobbies and Passions",
      value: "Hobbies and Passions",
    },
    {
      label: "Social Activities",
      value: "Social Activities",
    },
    {
      label: "Health and Wellbeing",
      value: "Health and Wellbeing",
    },
  ];

  const datesOptions = [{ label: 'All Dates', value: ''}, ...eventsStore.map((eventData) => ({label:eventData.date.toISOString().split('T')[0], value:eventData.date}))];


  function getSelectOption(optionList, filterKey) {
	const selectLabel = document.createElement('label');
	selectLabel.classList.add('filter-select-wrapper')
    const select = document.createElement("select");
	select.classList.add("filter-select");
    select.addEventListener("change", (event) => {
      filterState[filterKey] = event.target.value;
      applyFilters();
    });

    optionList.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.innerHTML = option.label;
      optionElement.value = option.value;
      select.appendChild(optionElement);
    });
	selectLabel.appendChild(select);
    return selectLabel;
  }

  const filterContainer = document.getElementById("filter-container");
  filterContainer.appendChild(getSelectOption(myOptionList, "type"));
  filterContainer.appendChild(getSelectOption(myDistansOptionList, "distance"));
  filterContainer.appendChild(getSelectOption(myCategoryOptionList, "category"));
  filterContainer.appendChild(getSelectOption(datesOptions, "date"));
}
function applyFilters() {
  const filteredEvents = eventsStore
    .filter((eventData) => filterState.category == "any" || eventData.category == filterState.category)
    .filter((eventData) => filterState.distance == "any" || eventData.distance == filterState.distance)
    .filter((eventData) => filterState.type == "any" || eventData.type == filterState.type)
	.filter((eventData) => !filterState.date || eventData.date == filterState.date);

  drowCards(filteredEvents);
}

function getCardsEvent(cardData){
	const formatedDate = formatDate(cardData.date)
	return `
		<img src="${cardData.image}" alt="" />
		<div class="event-info">
			<p class = "event-date">${formatedDate}<p>
			<h3 class = "event-title">${cardData.title}</h3>
			<p class = "event-text-categoty">${cardData.category} (${cardData.distance} km)</p>
		</div>
	`

}

function drowCards(cardsData) {
	const cardsEventFilter = document.getElementById('cards-event-filter');
	cardsEventFilter.innerHTML = '';

	cardsData.forEach((cardData) => {
		const card = document.createElement('div');
		card.classList.add("event-card");
		card.innerHTML = getCardsEvent(cardData);
		cardsEventFilter.appendChild(card);
	})
}

const eventsStore = [
  {
    title: "INFJ Personality Type- Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations- Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];
drawFilterElement();
applyFilters();

function formatDate(date) {
    const weekDayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
    const isPm = date.getUTCHours() >= 12;
    const hours = date.getUTCHours() - (isPm ? 12 : 0);
    const minutes = date.getMinutes() > 9 ? date.getMinutes().toString() : `0${date.getMinutes()}`;
    const dayPartName = isPm ? 'PM' : 'AM';

    return `${weekDayName}, ${monthName} ${date.getDate()} - ${hours}:${minutes} ${dayPartName} UTC`;
}
