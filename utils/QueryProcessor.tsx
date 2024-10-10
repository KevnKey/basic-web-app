export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "kevincao"
    );
  }
  
  if (query.includes("Which of the following numbers is the largest:")) {
    return (
      "kevincao"
    );
  }

  
  const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (addMatch){
    const x = parseInt(addMatch[1]);
    const y = parseInt(addMatch[2]);
    return (x*y).toString();
  }
  
  const addMatch2 = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch2){
    const x = parseInt(addMatch2[1]);
    const y = parseInt(addMatch2[2]);
    return (x+y).toString();
  }
  
  
  
  const addMatch3 = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  
  if (addMatch3){
    
    const a = parseInt(addMatch3[1]);
    const b = parseInt(addMatch3[2]);
    const c = parseInt(addMatch3[3]);
    const d = parseInt(addMatch3[4]);
    const e = parseInt(addMatch3[5]);
  }
  
  const addMatch4 = query.match(/What is (\d+) minus (\d+)/);
  if (addMatch4){
    const x = parseInt(addMatch4[1]);
    const y = parseInt(addMatch4[2]);
    return (x-y).toString();
  }
  
  const addMatch5 = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if (addMatch5){
    const x = parseInt(addMatch5[1]);
    const y = parseInt(addMatch5[2]);
    const z = parseInt(addMatch5[2]);
    return (x+y+z).toString();
  }
  
  const addMatch6 = query.match(/What is (\d+) to the power of (\d+)/);
  if (addMatch6){
    const x = parseInt(addMatch6[1]);
    const y = parseInt(addMatch6[2]);
    return (x ** y).toString();
  }

  return "";
}
