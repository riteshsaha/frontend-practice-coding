document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    
    // Clear previous results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Simulate search results
    const hotels = [
        { name: 'Hotel Sunshine', location: 'New York', price: 120, rating: 4.5, image: 'images/hotel-1.jpg' },
        { name: 'Hotel Comfort', location: 'New York', price: 150, rating: 4.0, image: 'images/hotel-2.jpg' },
        { name: 'Hotel Luxury', location: 'New York', price: 200, rating: 5.0, image: 'images/hotel-3.jpg' }
    ];

    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());

    if (filteredHotels.length > 0) {
        filteredHotels.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.className = 'hotel-card';

            hotelDiv.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <p>Location: ${hotel.location}</p>
                    <p>Price: $${hotel.price} per night</p>
                    <p>Rating: ${hotel.rating}</p>
                    <button class="book-button">Book Now</button>
                </div>
            `;

            hotelDiv.querySelector('.book-button').addEventListener('click', () => {
                alert(`You have booked ${hotel.name}!`);
            });

            resultsDiv.appendChild(hotelDiv);
        });
    } else {
        resultsDiv.textContent = 'No hotels found for the specified location.';
    }
});

document.getElementById('filterButton').addEventListener('click', function() {
    const maxPrice = document.getElementById('priceFilter').value;
    const minRating = document.getElementById('ratingFilter').value;
    const resultsDiv = document.getElementById('results');
    const hotels = Array.from(resultsDiv.getElementsByClassName('hotel-card'));

    hotels.forEach(hotel => {
        const price = parseInt(hotel.querySelector('.hotel-info p:nth-child(3)').textContent.replace('Price: $', '').replace(' per night', ''));
        const rating = parseFloat(hotel.querySelector('.hotel-info p:nth-child(4)').textContent.replace('Rating: ', ''));

        if ((maxPrice && price > maxPrice) || (minRating && rating < minRating)) {
            hotel.style.display = 'none';
        } else {
            hotel.style.display = 'block';
        }
    });
});
