const bcrypt = require("bcryptjs");
require("dotenv");

const hashedPassword = bcrypt.hashSync(process.env.USER_PASSWORD);
module.exports = [
  {
    id: 1,
    full_name: "Ashley Francis-Roy",
    email: "louisohara20@gmail.com",
    password: hashedPassword,
    profile: "http://localhost:8080/images/about.jpeg",
    bio: "Documentary filmmaker Ashley Francis-Roy makes distinctive, warm and authentic films. His work is emotionally engaging, intimate, and full of joy and humanity. As a filmmaker, he’s driven by the people he meets and collaborates with, and it’s these amazing characters - their worlds and their stories - that spark his passion for documentary.",
    description:
      "Originally from Leeds - Ashley is committed to exploring underrepresented voices and wants to make films that make you laugh and cry. He strives to craft emotional narratives with intimacy, atmosphere and powerful creative visuals. For his moving and humane debut The Real Eastenders, Ashley has been awarded the Debut Director Award by the TV Foundation's New Voice Awards. His second powerful and captivating film, Damilola: The Boy Next Door won Best History Documentary at the RTS programme awards, and Best Presenter at the Grierson Trust awards. In 2021, he was nominated by BAFTA for the Emerging Talent: Factual award. Ashley was selected for BAFTA Breakthrough UK 2021. Supported by Netflix, Breakthrough identifies and champions must-watch creatives from film, games and television. Ashley also produced the RTS, and Grierson award winning series Hometown: A Killing for BBC Three. His 3 part series The Greatest Show Never Made was just released on Prime Video. He is also currently directing a ground-breaking series about policing for Channel 4.",
    resume: "http://localhost:8080/files/resume.pdf",
    representation:
      "Ashley is represented by Missing Link Films for commercials and branded content.",
  },
];
