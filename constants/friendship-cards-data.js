export const friendshipCardsData = [
    {
    imgPath: 'IMG/brunch-image.png',
    imgAlt: 'I Used Meetup to Make Friends at Brunch',
    header: 'I Used Meetup to Make Friends at Brunch',
    description: 'New Jersey-based writer and college student Brianna Stryker wanted to meet friends in her hometown. Learn how she used Meetup to make connections by joining a Girls Night Out Meetup group.',
}, 
{
    imgPath: 'IMG/connections-image.png',
    imgAlt: 'How to Turn Casual Connections into Close Friendships',
    header: 'How to Turn Casual Connections into Close Friendships',
    description: 'It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.',
},
{
    imgPath: 'IMG/friends-image.png',
    imgAlt: 'Do You Have the "Right" Number of Friends?',
    header: 'Do You Have the “Right” Number of Friends?',
    description: 'Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.',
},];

// Заполнение карточек friendships 


function getFriendshipCard(cardData) {
    return `
        <img src="${ cardData.imgPath }" alt="${ cardData.imgAlt }">
        <h3>${ cardData.header }</h3>
        <p>${ cardData.description }</p>
        <a href="#">Read more</a>
        `;
}



const myCardsList = document.getElementById('my-card-list');

friendshipCardsData.forEach((cardData)=>{
	const card = document.createElement('div');
	card.classList.add("friendship-card");
	card.innerHTML = getFriendshipCard(cardData);
	myCardsList.appendChild(card);
});