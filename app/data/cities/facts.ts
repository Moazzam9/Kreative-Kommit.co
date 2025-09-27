// City facts for use in templates and SEO
export interface CityFact {
  slug: string; // matches city slug
  name: string;
  facts: string[];
}

export const cityFacts: CityFact[] = [
  {
    slug: "manchester",
    name: "Manchester",
    facts: [
      "Manchester is a tech and media powerhouse, home to the BBC and a thriving startup scene.",
      "The city is famous for Old Trafford, Manchester United, and its rich industrial history.",
      "Manchester hosts major events like the International Festival and Manchester Pride, attracting global visitors.",
      "Top universities and excellent transport links make Manchester a hub for talent and business growth.",
      "Alan Turing and Emmeline Pankhurst are among Manchester’s world-changing residents.",
      "Manchester digital agencies are known for award-winning web design and SEO campaigns.",
      "Local businesses in Manchester benefit from targeted online marketing and e-commerce solutions.",
      "Manchester’s tech sector is one of the fastest-growing in the UK, supporting startups and scaleups.",
      "Web development in Manchester is driven by innovation and collaboration with local universities."
    ]
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    facts: [
      "Liverpool is a cultural icon, known worldwide as the birthplace of the Beatles.",
      "Royal Albert Dock and Liverpool FC are landmarks that draw millions of visitors each year.",
      "The city’s economy thrives on tourism, shipping, and creative industries.",
      "Liverpool’s universities and transport links support a vibrant student and business community.",
      "Famous residents include Paul McCartney and John Lennon.",
      "Liverpool web design agencies help local businesses stand out online with creative branding.",
      "SEO services in Liverpool are tailored for tourism, hospitality, and retail sectors.",
      "Liverpool’s digital sector is expanding, with new startups and tech events every year.",
      "E-commerce and online marketing are key growth areas for Liverpool SMEs."
    ]
  },
  {
    slug: "chester",
    name: "Chester",
    facts: [
      "Chester is renowned for its historic city walls and Roman heritage.",
      "Chester Zoo is one of the UK’s top attractions, drawing families and tourists year-round.",
      "The city’s economy is powered by tourism, retail, and education.",
      "Chester hosts popular events like the Chester Races and Literature Festival.",
      "Daniel Craig is among Chester’s notable residents."
    ,"Chester businesses benefit from local SEO and reputation management to attract visitors."
    ,"Web development in Chester supports tourism and hospitality industries with custom solutions."
    ,"Digital marketing in Chester is focused on small businesses and local events."
    ,"Chester’s creative sector is growing, with new agencies and freelancers supporting local brands."
    ]
  },
  // Add more cities as needed
  {
    slug: "london",
    name: "London",
    facts: [
      "London is the UK’s capital and a global leader in finance, technology, and culture.",
      "Landmarks like the Tower of London, Buckingham Palace, and the London Eye attract millions of visitors every year.",
      "London’s diverse economy supports startups, creative industries, and world-class businesses.",
      "The city is home to top universities, including UCL, Imperial College, and King’s College London.",
      "London’s transport network is one of the most advanced in the world, with the Underground, buses, and international airports.",
      "Famous residents include Charles Dickens, David Beckham, and Queen Elizabeth II.",
      "London web agencies deliver cutting-edge design and SEO for global brands and local startups.",
      "E-commerce and fintech are booming sectors in London’s digital economy.",
      "London’s marketing agencies are leaders in content strategy and social media innovation.",
      "Local SEO in London is essential for businesses to compete in a crowded marketplace."
    ]
  },
];
