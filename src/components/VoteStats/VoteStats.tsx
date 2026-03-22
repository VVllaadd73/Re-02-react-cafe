// src/components/VoteStats/VoteStats.tsx

import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

export default function VoteStats({ votes }: { votes: Votes }) {
   const totalVotes = votes.good + votes.neutral + votes.bad;
   const positivePercentage = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;
   return (
      <div className={css.container}>
         {totalVotes === 0 ? (
            <p className={css.stat}>No feedback yet</p>
         ) : (
            <>
               <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
               <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
               <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
               <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
               <p className={css.stat}>Positive: <strong>{positivePercentage}%</strong></p>
            </>
         )}
      </div>
   );
};