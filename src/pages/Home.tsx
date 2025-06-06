import React from "react";
import "./Home.css";
import ExploreContainer from "../components/ExploreContainer";
import { Link } from "react-router-dom";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
} from "@ionic/react";
// import { data } from "./array";

const Home: React.FC = () => {
  // data.map((dataItem) => {
  //   return console.log(
  //     <tr>
  //       <td>{dataItem.name}</td>
  //     </tr>
  //   );
  // });

  return (
    <>
      <IonPage>
        <IonCardContent>
          <table>
            <thead>
              <tr>
                <th> name</th>
                <th> id </th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ayushi</td>
                <td>001</td>
                <td>20</td>
              </tr>

              <tr>
                <td>raj</td>
                <td>002</td>
                <td>21</td>
              </tr>

              <tr>
                <td>dev</td>
                <td>003</td>
                <td>22</td>
              </tr>

              <tr>
                <td>priya</td>
                <td>004</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
          <ExploreContainer />

          <Link to="/js-basics">Go to JS</Link>

          <IonCard style={{ width: "400px" }}>
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>React Learning</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>

           <Link to="/react-learning"> <IonButton>Click here</IonButton></Link>
          </IonCard>
        </IonCardContent>
      </IonPage>
    </>
  );
};

export default Home;
