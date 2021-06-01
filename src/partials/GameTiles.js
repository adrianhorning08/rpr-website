import React from "react";

function GameTiles() {
  const games = [
    {
      name: "Lifesize Jenga",
      img: "jenga.jpg",
      price: 10,
    },
    {
      name: "Tug of War",
      img: "tug_of_war.png",
      price: 10,
    },
    {
      name: "Bounce House",
      img: "bounce_house.jpeg",
      price: 150,
    },
    {
      name: "Dunk Tank",
      img: "dunk_tank.jpeg",
      price: 100,
    },
    {
      name: "Mechanical Bull",
      img: "mechanical_bull.jpg",
      isComingSoon: true,
    },
    {
      name: "Cornhole",
      img: "cornhole.png",
      price: 5,
    },
    {
      name: "Bumper Ball",
      img: "bumper_ball.jpg",
      price: 15,
      singleItem: "ball",
    },
    {
      name: "Paddle Board",
      img: "paddle_board.jpg",
      price: 10,
    },
    {
      name: "Pickleball",
      img: "pickleball.jpeg",
      price: 5,
    },
    {
      name: "Projector Screen",
      img: "projector_screen.jpeg",
      price: 10,
    },
    {
      name: "Projector",
      img: "projector.png",
      price: 10,
    },
    {
      name: "Ring Toss",
      img: "ring_toss.png",
      price: 5,
    },
    {
      name: "Potato Sack",
      img: "potato_sack.jpeg",
      price: 5,
      singleItem: "Potato Sack",
    },
    {
      name: "Softball",
      price: 20,
      img: "softball.jpeg",
    },
    {
      name: "Kan Jam",
      img: "kan_jam.jpg",
      price: 10,
    },
    {
      name: "Flag Football",
      img: "flag_football.jpg",
      price: 10,
    },
    {
      name: "Horseshoes",
      img: "horseshoes.jpeg",
      price: 5,
    },
    {
      name: "Laser Tag",
      img: "laser_tag.jpeg",
      price: 5,
      singleItem: "Gun",
    },
    {
      name: "Four Legged Race",
      img: "four_legged_race.jpeg",
      price: 5,
    },
    {
      name: "Disc Golf Discs",
      img: "discs.jpeg",
      price: 5,
    },
    {
      name: "Dodgeball",
      img: "dodgeball.jpeg",
      price: 5,
    },
    {
      name: "Lifesize Connect 4",
      img: "connect_four.jpeg",
      price: 15,
    },
    {
      name: "Basketball Connect 4",
      img: "bball_connect_four.jpeg",
      price: 50,
    },
    {
      name: "Bocce Ball",
      img: "bocce_ball.jpg",
      price: 5,
    },
    {
      name: "Squirt Gun",
      img: "squirt_gun.jpg",
      price: 5,
      singleItem: "Gun",
    },
  ];
  return (
    <section id="rentals" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Check out what we have</h2>
            <p className="text-xl text-gray-600">
              Rent any of these items. Give us suggestions for additional things
              you want to rent.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {games.map((game) => (
              <div className="container relative flex flex-col items-center bg-white rounded shadow-xl">
                <img
                  style={{ objectFit: "cover", height: "15rem" }}
                  className="image mx-auto rounded"
                  src={require(`../images/${game?.img}`).default}
                  width="768"
                  height="432"
                  alt="game-img"
                />
                {/* <div class="overlay">
                  <div className="text">{game?.name}</div>
                </div> */}
                <div className="flex justify-between items-center w-full py-3 px-4">
                  <div className="product-info">
                    <h4 className="font-bold">{game?.name}</h4>
                    {game?.isComingSoon ? (
                      <p>Coming soon!</p>
                    ) : (
                      <p>
                        ${game?.price}
                        {game?.singleItem && `/${game?.singleItem}`}/day
                      </p>
                    )}
                  </div>
                  <a
                    className="relative w-auto block text-sm font-semibold bg-purple-500 hover:bg-purple-600 rounded text-white px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    href={`sms://+13303541427?&body=I%20want%20to%20rent%20${game?.name}!`}
                  >
                    Rent
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameTiles;
