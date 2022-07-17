import React from "react";
import PersonDetails from "../components/personDetails";

const testData = {
  adult: false,
  also_known_as: [
    "Ana Celia de Armas",
    "Ana Celia de Armas Caso",
    "아나 디 아르마스",
    "Ана де Армас",
    "Άνα ντε Άρμας",
    "安娜·德·阿玛斯",
    "アナ・デ・アルマス",
  ],
  biography:
    "Ana de Armas was born in Cuba on April 30, 1988. At the age of 14, she began her studies at the National Theatre School of Havana, where she graduated after 4 years. She made her film debut with Una rosa de Francia (2006), which was directed by Manuel Gutiérrez Aragón. In 2006 she moved to Spain where she continued her film career, and started doing television. She currently lives between Madrid and Barcelona. Ana is known for her roles in Blade Runner 2049 (2017), Knives Out (2019), and No Time to Die (2021).",
  birthday: "1988-04-30",
  deathday: null,
  gender: 1,
  homepage: null,
  id: 224513,
  imdb_id: "nm1869101",
  known_for_department: "Acting",
  name: "Ana de Armas",
  place_of_birth: "Santa Cruz del Norte, Cuba",
  popularity: 274.495,
  profile_path: "/14uxt0jH28J9zn4vNQNTae3Bmr7.jpg",
};

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
};

export const Basic = () => <PersonDetails person={testData} />;
Basic.storyName = "Default";