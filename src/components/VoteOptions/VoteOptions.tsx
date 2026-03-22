// src/components/VoteOptions/VoteOptions.tsx

import css from "./VoteOptions.module.css";
import type { Votes } from "../../types/votes";

type Props = {
   votes: Votes;
   onVotes: (type: keyof Votes) => void;
   resetVotes: () => void;
};

export default function VoteOptions({ votes, onVotes, resetVotes }: Props) {
   
   const totalVotes = votes.good + votes.neutral + votes.bad;

   return (
      <div className={css.container}>
         <button className={css.button} onClick={() => onVotes("good")}>Good</button>
         <button className={css.button} onClick={() => onVotes("neutral")}>Neutral</button>
         <button className={css.button} onClick={() => onVotes("bad")}>Bad</button>
         {totalVotes > 0 && (
            <button className={`${css.button} ${css.reset}`} onClick={() => resetVotes()}>Reset</button>
         )}
      </div>
   )
};