function makeDescription () {
  var yrs = new Date(new Date() - new Date('11/10/1999')).getFullYear() - 1970;
  return `Welcome to my portolfio. I am a ${yrs} year old student at the University of Wisconsin-Madison. I enjoy building interesting projects and learning about topics previously unknown. This site highlights some of my favorite works, enjoy!`;
}

export default  {
  preTitle: 'HELLO, MY NAME IS...',
  title: 'JOE HOLT',
  description: makeDescription()
}
