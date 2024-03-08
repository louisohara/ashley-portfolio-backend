const bcrypt = require("bcryptjs");
require("dotenv");

const hashedPassword = bcrypt.hashSync(process.env.USER_PASSWORD);
module.exports = [
  {
    id: 1,
    full_name: "Ashley Francis-Roy",
    email: "louisohara20@gmail.com",
    password: hashedPassword,
    image:
      "https://ashley-portfolio-backend-9886eb2ea612.herokuapp.com/images/about.jpeg",
    image2:
      "https://ashley-portfolio-backend-9886eb2ea612.herokuapp.com/images/about2.jpg",
    bio: "Documentary filmmaker Ashley Francis-Roy makes distinctive, warm and authentic films. \nHis work is emotionally engaging, intimate, and full of joy and humanity.",
    description:
      "Originally from Leeds - Ashley is committed to exploring underrepresented voices and wants to make films that make you laugh and cry. As a filmmaker, he’s driven by the people he meets and collaborates with, and it’s these amazing characters - their worlds and their stories - that spark his passion for documentary. He strives to craft emotional narratives with intimacy, atmosphere and powerful creative visuals. \nFor his moving and humane debut The Real Eastenders, Ashley has been awarded the Debut Director Award by the TV Foundation's New Voice Awards. His second powerful and captivating film, Damilola: The Boy Next Door won Best History Documentary at the RTS programme awards, and Best Presenter at the Grierson Trust awards. In 2021, he was nominated by BAFTA for the Emerging Talent: Factual award. Ashley was selected for BAFTA Breakthrough UK 2021. Supported by Netflix, Breakthrough identifies and champions must-watch creatives from film, games and television.",
    resume: "http://localhost:8080/files/resume.pdf",
    representation:
      "Ashley is represented by Missing Link Films for commercials and branded content.",
  },
];
