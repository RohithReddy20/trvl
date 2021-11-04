import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>My Favourite Pics!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/n1.jpg"
              text="I got to do a plenty of stuff this week with my friends while they are in town, which has been awesome and helped take my mind off of it.
              I was able to see my friends and go to the park in the middle of the week, too.
              I have been getting better at my walks / runs every day.
              I have been out in the fields and the city a few times now, and I plan on heading out again."
              label="NightOut"
              path="/about-me"
            />
            <CardItem
              src="../images/n2.jpg"
              text="My mom is my best friend and she means the world to me.

              I am so very grateful for her!
              
              She has sacrificed a lot for me and our family over the years and I really don't know what I'd do without her.
              
              She is always there for me, giving her undivided attention to me and no one else."
              label="MyMom"
              path="/about-me"
            />
            <CardItem
              src="../images/n4.jpg"
              text="Once we went on a tour of the old fort
              with my friends from university .
             We stayed at my friends house in their pool and ate breakfast every morning at her pool bar.
             After the tour, we all hiked up into the fort.But on the way up, our friend — the cute one, the one who looked a lot like Matthew McConaughey — said:“We can take the stairwell back so we don’t have to climb all the way up,” she said.“
             "
              label="Tour"
              path="/about-me"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/n7.jpg"
              text="self love is all about; to be proud of yourself, your achievements and your good deeds.
              
              If the above 3 steps are followed to the fullest, it will lead you to finding the true love of your life.
              
              You will find your soulmate and eventually get married.
              
              It is also important to make sure that you only choose your partner for your own happiness.
              "
              label="Self Love"
              path="/about-me"
            />
            <CardItem
              src="../images/n6.jpg"
              text="Be happy in your life .

              Be the soul that I see in the eyes of the Homeless Guy.
              
              Be that person.
              
              Make a positive change in this world, make this world a better place to be.
              
              I'd love to know how you can start making a difference in this world.
              
              There are so many opportunities out there for us to help, we have a choice, and we need to start right now."
              label="Happiness"
              path="/about-me"
            />
            <CardItem
              src="../images/n9.jpg"
              text="ocean view is really beautiful , so that was nice!

              Walked around some more on the pier, then headed back to the hotel.
              
              Had a tequila flight with some hot chocolate and lime, yum!
              
              Our room was a little shady, though.
              
              It was super windy that night so they gave me a ziploc bag to cover our windows with.
              
              I slept pretty well actually, I was so exhausted!
              
              The next day we packed our stuff and checked out.
              "
              label="Adventure"
              path="/about-me"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
//C:\Users\rohit\Desktop\React\React_projects\trvl\src\images\img-9.jpg
export default Cards;
