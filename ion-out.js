function ionOut(str) {
  const pattern = /\b\w*tion\b/g;
  const matches = str.match(pattern) || [];

  return matches.map((match) => match.replace("ion", ""));
}
