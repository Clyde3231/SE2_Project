import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className="cardsarticle">
      <h1>LATEST HEALTH ARTICLES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/article1.jpg"
              text="Coronavirus disease (COVID-19) pandemic"
              label="Medicine"
              external={true}
              path="https://www.who.int/europe/emergencies/situations/covid-19"
            />
  
            <CardItem
              src="images/article2.jpg"
              text="What is Modern Medicine?"
              label="Medicine"
              external={true}
              path="https://www.medicalnewstoday.com/articles/323538?fbclid=IwAR01LhmYwYZdUywJ4f7yVv8uG84HlIYCeWdqLpo8HMd3hPjb47-URQ3cW8c#infectious-diseases"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/oste.jpg"
              text="Symptoms and signs of Osteoporosis"
              label="Disease"
              external={true}
              target="_blank"
              path="https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925"
            />
            <CardItem
              src="images/breast.jpg"
              text="Early Indicators and Symptoms of Breast Cancer: Preventative Measures "
              label="Disease"
              external={true}
              target="_blank"
              path="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
            />
            <CardItem
              src="images/PREGNANCY.jpg"
              text="Promoting Optimal Health and Wellness during Pregnancy: A Comprehensive Guide to Supporting a Healthy Pregnancy Journey"
              label="Health"
              external={true}
              path="https://www.who.int/activities/promoting-healthy-pregnancy"
            />
            <CardItem
              src="images/heat.jpg"
              text="Mitigating the Risk of Heat-Related Illness: Recognizing Symptoms, Preventive Measures, and Treatment Options"
              label="Health"
              external={true}
              path="https://www.mayoclinic.org/diseases-conditions/heat-stroke/symptoms-causes/syc-20353581"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;