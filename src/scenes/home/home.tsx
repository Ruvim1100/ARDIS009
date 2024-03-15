import "./Home.css";
import ActionButton from "@/components/button/ActionButton";

const Home = () => {
  return (
    <section id="главная">
      <div className="main">
        <div className="left">
          <h1>
            Мастерство в
          </h1>
          <h1 className="second-header">
            Каждой детали
          </h1>
          <p >
            Мы готовы к самым разнообразным задачам, будь то замена лампочки или
            полная реконструкция. Всегда точно, всегда надежно, всегда с
            исключительным мастерством
          </p>
          <ActionButton/>
        </div>
        <div className="worker-image">
        </div>
      </div>
    </section>
  );
};

export default Home;
