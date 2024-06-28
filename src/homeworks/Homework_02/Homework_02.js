import "./styles.css";
import homerImage from "./img/Homer_Simpson_2006.png";

function Homework_02() {
  return (
    <div className="homer_card">
      <div className="article">
        <p>
          <b>Homer Jay Simpson</b> is the protagonist of the American animated
          sitcom The Simpsons. He is voiced by Dan Castellaneta and first
          appeared, along with the rest of the Simpsons, in The Tracey Ullman
          Show short "Good Night" on April 19, 1987. Homer was created by the
          cartoonist Matt Groening while he was waiting in the lobby of producer
          James L. Brooks's office. Groening had been called to pitch a series
          of shorts based on his comic strip Life in Hell but instead created a
          new set of characters. He named the character after his father, Homer
          Groening. After appearing for three seasons on The Tracey Ullman Show,
          the Simpsons received their own series on Fox, which debuted on
          December 17, 1989.
        </p>
        <p>
          Homer is the patriarch of the Simpson family. He and his wife Marge
          have three children: Bart, Lisa and Maggie. As the family's provider,
          he works at the Springfield Nuclear Power Plant as a safety inspector.
          Homer embodies many American working class stereotypes: he is obese,
          balding, immature, outspoken, aggressive, lazy, ignorant,
          unprofessional, and fond of beer, junk food, and television. However,
          he is fundamentally a good man and is staunchly protective of his
          family, especially when they need him the most. Despite the suburban
          blue-collar routine of his life, he has had several remarkable
          experiences, including going to space, climbing the tallest mountain
          in Springfield by himself, fighting former President George H. W.
          Bush, and winning a Grammy Award as a member of a barbershop quartet.
        </p>
        <p>
          In the shorts and earlier episodes, Castellaneta voiced Homer with a
          loose impression of Walter Matthau; however, during the second and
          third seasons of the half-hour show, Homer's voice evolved to become
          more robust, to allow the expression of a fuller range of emotions. He
          has appeared in other media relating to The Simpsons—including video
          games, The Simpsons Movie, The Simpsons Ride, commercials, and comic
          books—and inspired an entire line of merchandise. His signature
          catchphrase, the annoyed grunt "D'oh!", has been included in The New
          Oxford Dictionary of English since 1998 and the Oxford English
          Dictionary since 2001.
        </p>
        <p>
          Homer is one of the most influential characters in the history of
          television and is widely considered an American cultural icon. The
          British newspaper The Sunday Times described him as "the greatest
          comic creation of modern time". He was named the greatest character of
          the last 20 years in 2010 by Entertainment Weekly and the
          second-greatest cartoon character by TV Guide (behind Bugs Bunny), and
          was voted the greatest television character of all time by Channel 4
          viewers. Castellaneta has won four Primetime Emmy Awards for
          Outstanding Voice-Over Performance and a special-achievement Annie
          Award. In 2000, Homer and his family were awarded a star on the
          Hollywood Walk of Fame.
        </p>
      </div>
      <div className="infobox">
        <h3>Homer Simpson</h3>
        <h5>The Simpson characerer</h5>
        <img className="infobox-image" src={homerImage} />

        <table>
          <tr>
            <th className="infobox-label">First appearance</th>
            <td className="infobox-data">
              "Good Night" The Tracey Ullman Show
            </td>
          </tr>
          <tr>
            <th className="infobox-label">Created by</th>
            <td className="infobox-data">Matt Groening</td>
          </tr>
          <tr>
            <th className="infobox-label">Designed by</th>
            <td className="infobox-data"> Matt Groening</td>
          </tr>
          <tr>
            <th className="infobox-label">Voiced by</th>
            <td className="infobox-data"> Dan Castellaneta</td>
          </tr>
          <tr>
            <th className="infobox-label">Full name</th>
            <td className="infobox-data"> Homer Jay Simpson</td>
          </tr>
          <tr>
            <th className="infobox-label">Occupation</th>
            <td className="infobox-data">Safety inspector</td>
          </tr>
          <tr>
            <th className="infobox-label">Affiliation</th>
            <td className="infobox-data">Springfield Nuclear Power Plant</td>
          </tr>
          <tr>
            <th className="infobox-label">Family</th>
            <td className="infobox-data">
              <ul>
                <li>Abraham Simpson (father)</li>
                <li>Mona Simpson (mother)</li>
                <li>Herbert Powell (half-brother)</li>
                <li>Abbey (half-sister)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="infobox-label">Spouse</th>
            <td className="infobox-data"> Marge Bouvier</td>
          </tr>
          <tr>
            <th className="infobox-label">Children</th>
            <td className="infobox-data">
              <ul>
                <li>Bart Simpson (son) </li>
                <li>Lisa Simpson (daughter) </li>
                <li>Maggie Simpson (daughter)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="infobox-label">Relatives</th>
            <td className="infobox-data">
              <ul>
                <li>Orville Simpson (grandfather)</li>
                <li>Yuma Simpson (grandmother)</li>
                <li> Cyrus Simpson (uncle)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="infobox-label">Home</th>
            <td className="infobox-data">
              742 Evergreen Terrace, Springfield, United States
            </td>
          </tr>
          <tr>
            <th className="infobox-label">Nationality</th>
            <td className="infobox-data">American</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Homework_02;
