async function isWinner(country) {
  try {
    const winnerData = await db.getWinner(country);

    if (!winnerData) {
      return `${country} never was a winner`;
      }
    
    if (winnerData.continent !== "Europe") {
      return `${winnerData.name} is not what we are looking for because of the continent`;
    }

    const results = await db.getResults(winnerData.id);

    if (results.length < 3) {
      return `${country} is not what we are looking for because of the number of times it was champion`;
    }

    const years = results.map((result) => result.year).join(", ");
    const scores = results.map((result) => result.score).join(", ");

    return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
  } catch (error) {
    // Handle potential errors from db.getWinner or db.getResults
    console.error(`Error getting winner info for ${country}`, error);
    return `${country} never was a winner`;
  }
}
