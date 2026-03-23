// src/components/App/App.tsx

import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { Votes } from "../../types/votes";
import { useState } from "react";

export default function App() {

   const [votes, setVotesState] = useState<Votes>({good: 0, neutral: 0, bad: 0});

   const handleVotes = (key: keyof Votes) => {
      setVotesState(prevVotes => ({
         ...prevVotes,
         [key]: prevVotes[key] + 1
      }));
   };

   const resetVotes = () => {
      setVotesState({ good: 0, neutral: 0, bad: 0 });
   };

   return (
      <div className={css.app}>
         <CafeInfo />
         <VoteOptions votes={votes} onVotes={handleVotes} resetVotes={resetVotes} />
         <VoteStats votes={votes} />
      </div>
   );
};
