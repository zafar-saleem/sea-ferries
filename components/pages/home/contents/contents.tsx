import Image from "next/image";
import {
  StyledList,
  StyledItem,
  StyledHeader,
  StyledContents,
  StyledFlex,
} from "./contents.styled";
import BlueStar from "./assets/blue-star.webp";
import FullStar from "./assets/full-star.webp";
import HalfStar from "./assets/half-star.webp";
import Greece from "./assets/greece.webp";
import More from "./assets/more.webp";
import Seajets from "./assets/seajets.webp";
import Anek from "./assets/anek.webp";
import Italy from "./assets/italy.webp";
import Link from "next/link";

export const Contents = () => {
  return (
    <StyledList>
      <StyledItem>
        <StyledHeader>
          <Image
            src={BlueStar}
            width={339}
            height={49}
            alt="Blue star"
          />
          <div>
            <h4>Blue Star Ferries</h4>
            <div>
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={HalfStar}
              width={23}
              height={21}
              alt="Full star"
            />
            by 1.324 customers
            </div>
          </div>
        </StyledHeader>
        <StyledContents>
          <StyledFlex>
            <div>
              <span>Operates in</span>
              <div>
                <Image
                  src={Greece}
                  width={25}
                  height={14}
                  alt="Full star"
                />
                Greece
              </div>
            </div>
            <div>
              <span><b>Vessels number</b>: 8</span>
              <span><b>Ferry types</b>: 8 normal</span>
            </div>
            <div>
              <span><b>Popular vessels</b>:</span>
              <span className="highlight">
                Blue Star Delos
              </span>,
              <span className="highlight">
                Blue Star Naxos
              </span>
            </div>
          </StyledFlex>
          <p>
          Blue Star Ferries is currently the biggest ferry company in Greece. 
It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. 
Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star...
          <Link href="/">
            More about Blue Star Ferries
            <Image
                src={More}
                width={23}
                height={23}
                alt="more"
              />
          </Link>
          </p>
        </StyledContents>
      </StyledItem>

      <StyledItem>
        <StyledHeader>
          <Image
            src={Seajets}
            width={339}
            height={49}
            alt="Blue star"
          />
          <div>
            <h4>Seajets</h4>
            <div>
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={HalfStar}
              width={23}
              height={21}
              alt="Full star"
            />
            by 2.467 customers
            </div>
          </div>
        </StyledHeader>
        <StyledContents>
          <StyledFlex>
            <div>
              <span>Operates in</span>
              <div>
                <Image
                  src={Greece}
                  width={25}
                  height={14}
                  alt="Full star"
                />
                Greece
              </div>
            </div>
            <div>
              <span><b>Vessels number</b>: 8</span>
              <span><b>Ferry types</b>: 8 normal</span>
            </div>
            <div>
              <span><b>Popular vessels</b>:</span>
              <span className="highlight">
                Blue Star Delos
              </span>,
              <span className="highlight">
                Blue Star Naxos
              </span>
            </div>
          </StyledFlex>
          <p>
          Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. 
The company&apos;s passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.
Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion),
          <Link href="/">
            More about Seajets
            <Image
                src={More}
                width={23}
                height={23}
                alt="more"
              />
          </Link>
          </p>
        </StyledContents>
      </StyledItem>

      <StyledItem>
        <StyledHeader>
          <Image
            src={Anek}
            width={339}
            height={49}
            alt="Anek"
          />
          <div>
            <h4>Anek-Superfast</h4>
            <div>
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={FullStar}
              width={22}
              height={20}
              alt="Full star"
            />
            <Image
              src={HalfStar}
              width={23}
              height={21}
              alt="Full star"
            />
            by 667 customers
            </div>
          </div>
        </StyledHeader>
        <StyledContents>
          <StyledFlex>
            <div>
              <span>Operates in</span>
                <div>
                  <Image
                    src={Greece}
                    width={25}
                    height={14}
                    alt="Full star"
                  /> Greece, <Image
                  src={Italy}
                  width={25}
                  height={14}
                  alt="Italy flag"
                /> Italy
              </div>
            </div>
            <div>
              <span><b>Vessels number</b>: 8</span>
              <span><b>Ferry types</b>: 8 normal</span>
            </div>
            <div>
              <span><b>Popular vessels</b>:</span>
              <span className="highlight">
                Blue Star Delos
              </span>,
              <span className="highlight">
                Blue Star Naxos
              </span>
            </div>
          </StyledFlex>
          <p>
          Blue Star Ferries is currently the biggest ferry company in Greece. 
It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. 
Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star...
          <Link href="/">
            More about Blue Star Ferries
            <Image
                src={More}
                width={23}
                height={23}
                alt="more"
              />
          </Link>
          </p>
        </StyledContents>
      </StyledItem>
    </StyledList>
  )
}