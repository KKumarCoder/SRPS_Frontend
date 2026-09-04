import { useState } from "react";

export default function ScoutImage({ candidates, onUnavailable, onLoad, ...props }) {
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((value) => value + 1);
    } else {
      onUnavailable?.();
    }
  };

  return (
    <img
      {...props}
      src={candidates[candidateIndex]}
      onError={handleError}
      onLoad={onLoad}
    />
  );
}
