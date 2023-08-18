import React, { useState } from "react";
import "./TweetCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
   faLayerGroup,
   faRetweet,
   faAlignRight,
   faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { builtinModules } from "module";

library.add(
   faComment,
   faHeart,
   faLayerGroup,
   faRetweet,
   faAlignRight,
   faArrowUpFromBracket
);

interface TweetCardProps {
   name: string;
   username: string;
   content: string;
   timestamp: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
   name,
   username,
   content,
   timestamp,
}) => {
   const [contador, setContador] = useState(0);
   function ComentContador() {
      setContador(contador + 1);
   }

   const [sum, setSum] = useState(0);
   function stackContador() {
      setSum(sum + 1);
   }

   const [mas, setMas] = useState(0);
   function resertContador() {
      setMas(mas + 1);
   }

   const [otromas, setOtroMas] = useState(0);
   function headtContador() {
      setOtroMas(otromas + 1);
   }

   const [sumEst, setSumEst] = useState(0);
   function barContador() {
      setSumEst(sumEst + 1);
   }

   return (
      <div className="tweet-card">
         <div className="avatar"></div>
         <div className="tweet-content">
            <div className="tweet-header">
               <span className="username">{name}</span>
               <span className="timestamp">{username}</span>
               <span className="timestamp">{timestamp}</span>
            </div>
            <div className="tweet-text">{content}</div>
            <div className="actions">
               <div className="acountActions">
                  <FontAwesomeIcon icon={faComment} onClick={ComentContador} />
                  {contador}
               </div>
               <div className="acountActions">
                  <FontAwesomeIcon
                     icon={faLayerGroup}
                     onClick={stackContador}
                  />
                  {sum}
               </div>
               <div className="acountActions">
                  <FontAwesomeIcon icon={faRetweet} onClick={resertContador} />
                  {mas}
               </div>
               <div className="acountActions">
                  <FontAwesomeIcon icon={faHeart} onClick={headtContador} />
                  {otromas}
               </div>
               <div className="acountActions">
                  <FontAwesomeIcon
                     icon={faAlignRight}
                     rotation={90}
                     onClick={barContador}
                  />
                  {sumEst}
               </div>
               <div>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TweetCard;
