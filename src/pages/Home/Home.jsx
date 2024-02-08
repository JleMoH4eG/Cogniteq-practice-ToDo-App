import Card from "../../components/Card/Card";
import classes from "./Home.module.scss";
import cardsDataJson from "./../../cardsData.json";

function Home() {
  return (
    <section className={classes.home}>
      <ul className={classes.cardsContainer}>
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
        <Card
          taskName={cardsDataJson[0].name}
          taskContent={cardsDataJson[0].content}
          taskDate={cardsDataJson[0].date}
        />
      </ul>
    </section>
  );
}

export default Home;
