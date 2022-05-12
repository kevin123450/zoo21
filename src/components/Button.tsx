import React, { useState } from "react";

export function Button() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(_event: any) {
    setLoading(true);
    console.log(loading);

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, (1000*1000))
    );

    setLoading(false);
    console.log(loading);
  }

  return (
    <div className="App">
      <button type="button" onClick={handleSubmit} disabled={loading}>
        Feed
      </button>
    </div>
  );
    
  
  }