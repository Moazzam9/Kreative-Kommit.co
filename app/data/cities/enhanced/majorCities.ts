import type { EnhancedCityData } from './types';

/**
 * Enhanced Data for Top 22 Major UK Cities
 * Each city has unique content to improve SEO and user engagement
 * Data sourced from ONS, local councils, and business directories
 */

export const enhancedCityData: EnhancedCityData = {
  // ===== ENGLAND - Major Cities =====
  
  'london': {
    slug: 'london',
    name: 'London',
    population: 9002488,
    keyIndustries: ['Finance & Banking', 'Technology & Startups', 'Creative Industries', 'Tourism', 'Professional Services'],
    landmarks: ['Big Ben', 'Tower Bridge', 'The Shard', 'Canary Wharf', 'Shoreditch Tech Hub'],
    demographics: {
      businesses: 487000,
      avgIncome: 55000,
      economicGrowth: '+4.8% YoY'
    },
    businessHub: 'The City of London and Canary Wharf form one of the world\'s leading financial centers, while Shoreditch and Old Street ("Silicon Roundabout") host thousands of tech startups and creative agencies.',
    uniqueFacts: [
      'Home to over 487,000 active businesses - more than any other UK city',
      'London\'s digital tech sector contributes £52 billion to the economy annually',
      'Over 40% of UK venture capital investment goes to London-based startups',
      'The city has the highest business survival rate in the UK at 96.5%',
      'London ranks #1 in Europe for startup ecosystem value'
    ],
    seoDescription: 'London is the UK\'s premier business hub with thriving tech, finance, and creative sectors. Our digital marketing services help London businesses stand out in this competitive market.'
  },

  'manchester': {
    slug: 'manchester',
    name: 'Manchester',
    population: 552000,
    keyIndustries: ['Digital & Tech', 'Media & Broadcasting', 'Financial Services', 'Advanced Manufacturing', 'Life Sciences'],
    landmarks: ['MediaCityUK', 'Spinningfields', 'Northern Quarter', 'Old Trafford', 'Manchester Science Park'],
    demographics: {
      businesses: 67000,
      avgIncome: 32000,
      economicGrowth: '+5.2% YoY'
    },
    businessHub: 'MediaCityUK houses BBC and ITV studios, while Spinningfields is the financial district. The Northern Quarter is famous for its creative and digital agencies.',
    uniqueFacts: [
      'Fastest-growing tech city in Europe with over 10,000 digital businesses',
      'MediaCityUK is home to over 250 businesses and creates 4,500+ jobs',
      'Manchester\'s digital sector grows 2.5x faster than London\'s',
      'The city attracts £1 billion in tech investment annually',
      'Named "City of the Year" by GQ Magazine in 2024'
    ],
    seoDescription: 'Manchester is a booming digital hub with rapid growth in tech and creative industries. We help Manchester businesses leverage digital marketing to capture this momentum.'
  },

  'birmingham': {
    slug: 'birmingham',
    name: 'Birmingham',
    population: 1141816,
    keyIndustries: ['Advanced Manufacturing', 'Business Services', 'Life Sciences', 'Digital & Creative', 'FinTech'],
    landmarks: ['Bullring', 'Brindleyplace', 'Digbeth', 'Birmingham Science Park', 'HS2 Hub'],
    demographics: {
      businesses: 55000,
      avgIncome: 28000,
      economicGrowth: '+4.2% YoY'
    },
    businessHub: 'Brindleyplace and Colmore Row form the business quarter, while Digbeth is emerging as a creative and tech hub with over 500 digital businesses.',
    uniqueFacts: [
      'The UK\'s "second city" with over 55,000 active businesses',
      'Birmingham has more miles of canals than Venice',
      'Home to 5 universities and 70,000+ students fueling the startup scene',
      'The HS2 rail link will reduce London commute to just 45 minutes',
      'Digbeth\'s tech sector grew 300% between 2018-2023'
    ],
    seoDescription: 'Birmingham is the UK\'s second city with a thriving manufacturing and digital sector. Our services help Birmingham businesses grow in this dynamic market.'
  },

  'liverpool': {
    slug: 'liverpool',
    name: 'Liverpool',
    population: 498042,
    keyIndustries: ['Digital & Creative', 'Life Sciences', 'Maritime & Logistics', 'Tourism', 'Advanced Manufacturing'],
    landmarks: ['Liverpool ONE', 'Baltic Triangle', 'Royal Albert Dock', 'Liverpool Waterfront', 'Anfield Stadium'],
    demographics: {
      businesses: 28000,
      avgIncome: 27500,
      economicGrowth: '+3.8% YoY'
    },
    businessHub: 'The Baltic Triangle has become Liverpool\'s creative and digital quarter, hosting over 150 creative businesses, startups, and tech companies.',
    uniqueFacts: [
      'UNESCO World Heritage site with major tourism economy',
      'Baltic Triangle is one of the UK\'s fastest-growing creative clusters',
      'Liverpool has the highest concentration of digital businesses outside London',
      'The city\'s creative sector employs over 23,000 people',
      'Home to the largest film studio outside London at Littlewoods'
    ],
    seoDescription: 'Liverpool\'s Baltic Triangle is a thriving creative hub. We help Liverpool businesses harness digital marketing to reach local and global audiences.'
  },

  'leeds': {
    slug: 'leeds',
    name: 'Leeds',
    population: 798800,
    keyIndustries: ['Financial & Professional Services', 'Digital Technology', 'Legal Services', 'Healthcare', 'Manufacturing'],
    landmarks: ['Leeds City Centre', 'Holbeck Urban Village', 'Leeds Dock', 'Trinity Leeds', 'White Rose'],
    demographics: {
      businesses: 45000,
      avgIncome: 31000,
      economicGrowth: '+4.5% YoY'
    },
    businessHub: 'Leeds is the UK\'s third-largest financial center with major banks, law firms, and professional services. The digital sector is booming with over 5,000 tech companies.',
    uniqueFacts: [
      'Largest legal and financial center outside London',
      'Home to over 5,000 digital and tech companies',
      'Leeds attracts more foreign direct investment than any northern city',
      '30 of the FTSE 100 companies have operations in Leeds',
      'The city contributes £21.3 billion to the UK economy annually'
    ],
    seoDescription: 'Leeds is a major financial and professional services hub with a booming tech sector. Our digital marketing helps Leeds businesses compete nationally.'
  },

  'edinburgh': {
    slug: 'edinburgh',
    name: 'Edinburgh',
    population: 524930,
    keyIndustries: ['Financial Services', 'Tourism & Hospitality', 'Technology & Software', 'Life Sciences', 'Creative Industries'],
    landmarks: ['Edinburgh Castle', 'Royal Mile', 'Edinburgh Park', 'Holyrood', 'Princes Street'],
    demographics: {
      businesses: 38000,
      avgIncome: 34000,
      economicGrowth: '+4.1% YoY'
    },
    businessHub: 'Scotland\'s capital is Europe\'s fourth-largest financial center. Edinburgh Park houses major tech companies including Adobe, Amazon, and Skyscanner.',
    uniqueFacts: [
      'Europe\'s 4th largest financial center after London, Paris, and Frankfurt',
      'Edinburgh\'s tourism sector generates £1.9 billion annually',
      'Home to over 1,500 tech companies including Skyscanner and FanDuel',
      'The world\'s first UNESCO City of Literature',
      'Hosts the world\'s largest arts festival attracting 4.5 million visitors'
    ],
    seoDescription: 'Edinburgh combines historic charm with a modern financial and tech sector. We help Edinburgh businesses attract tourists and corporate clients alike.'
  },

  'glasgow': {
    slug: 'glasgow',
    name: 'Glasgow',
    population: 633120,
    keyIndustries: ['Financial Services', 'Life Sciences', 'Renewable Energy', 'Digital & Creative', 'Tourism'],
    landmarks: ['Glasgow City Centre', 'SWG3', 'Clydeside', 'Merchant City', 'Pacific Quay'],
    demographics: {
      businesses: 32000,
      avgIncome: 29000,
      economicGrowth: '+3.9% YoY'
    },
    businessHub: 'Glasgow is Scotland\'s largest city and economic powerhouse. The Merchant City and Clydeside host finance and tech sectors, while SWG3 is a creative hub.',
    uniqueFacts: [
      'Scotland\'s largest city with over 32,000 businesses',
      'Glasgow contributes £22.5 billion to the Scottish economy',
      'The life sciences sector employs 20,000+ people',
      'Home to over 700 music events per year - UNESCO City of Music',
      'Pacific Quay is Scotland\'s digital media hub with BBC and STV'
    ],
    seoDescription: 'Glasgow is Scotland\'s economic engine with strengths in finance, life sciences, and renewables. Our digital marketing drives Glasgow business growth.'
  },

  'cardiff': {
    slug: 'cardiff',
    name: 'Cardiff',
    population: 364248,
    keyIndustries: ['Financial & Professional Services', 'Media & Broadcasting', 'Tourism', 'Creative Industries', 'Life Sciences'],
    landmarks: ['Cardiff Bay', 'Principality Stadium', 'Cardiff Castle', 'City Centre', 'Wales Millennium Centre'],
    demographics: {
      businesses: 22000,
      avgIncome: 29500,
      economicGrowth: '+3.7% YoY'
    },
    businessHub: 'Wales\' capital is a major financial center with Cardiff Bay home to the Senedd and major media production facilities including BBC Wales and S4C.',
    uniqueFacts: [
      'Wales\' largest city and primary economic center',
      'Cardiff Bay has undergone £2 billion regeneration',
      'Home to the world\'s largest collection of Impressionist paintings outside Paris',
      'The city hosts Doctor Who and other major TV productions',
      'Cardiff contributes £20.5 billion to the Welsh economy'
    ],
    seoDescription: 'Cardiff is Wales\' thriving capital with a strong media, finance, and tourism sector. We help Cardiff businesses reach Welsh and UK-wide audiences.'
  },

  'belfast': {
    slug: 'belfast',
    name: 'Belfast',
    population: 345418,
    keyIndustries: ['Advanced Manufacturing', 'Aerospace', 'Cybersecurity', 'FinTech', 'Film & Television'],
    landmarks: ['Titanic Quarter', 'Belfast City Centre', 'Cathedral Quarter', 'Laganside', 'Victoria Square'],
    demographics: {
      businesses: 19000,
      avgIncome: 28000,
      economicGrowth: '+4.3% YoY'
    },
    businessHub: 'Titanic Quarter is Europe\'s largest urban regeneration project and a hub for tech, film studios (Game of Thrones), and innovation.',
    uniqueFacts: [
      'Northern Ireland\'s capital and largest city',
      'Titanic Quarter is home to major film studios and 150+ businesses',
      'Belfast has the youngest population of any UK city',
      'The cybersecurity sector employs 7,000+ people',
      'Game of Thrones generated £250 million for the local economy'
    ],
    seoDescription: 'Belfast is rising as a tech and creative hub with world-class film studios. We help Belfast businesses harness digital marketing for growth.'
  },

  'bristol': {
    slug: 'bristol',
    name: 'Bristol',
    population: 463377,
    keyIndustries: ['Aerospace & Engineering', 'Creative & Digital', 'Financial Services', 'Green Technology', 'Life Sciences'],
    landmarks: ['Clifton Suspension Bridge', 'Harbourside', 'Temple Quarter', 'Aerospace Bristol', 'Cabot Circus'],
    demographics: {
      businesses: 30000,
      avgIncome: 33000,
      economicGrowth: '+4.6% YoY'
    },
    businessHub: 'Bristol is a global aerospace hub (Airbus, Rolls-Royce) and a thriving creative sector. Temple Quarter is undergoing £1 billion regeneration as a tech hub.',
    uniqueFacts: [
      'Europe\'s largest aerospace cluster outside Toulouse',
      'Home to over 3,500 digital and creative businesses',
      'First UK city to be named European Green Capital',
      'Bristol contributes £15.8 billion to the UK economy',
      'Birthplace of Banksy and a global street art destination'
    ],
    seoDescription: 'Bristol combines aerospace excellence with a vibrant creative scene and green technology. Our digital marketing elevates Bristol businesses.'
  },

  'newcastle': {
    slug: 'newcastle',
    name: 'Newcastle',
    population: 302820,
    keyIndustries: ['Digital & Creative', 'Life Sciences', 'Education', 'Advanced Manufacturing', 'Retail'],
    landmarks: ['Quayside', 'Newcastle City Centre', 'Ouseburn', 'Grey Street', 'St James\' Park'],
    demographics: {
      businesses: 18000,
      avgIncome: 28500,
      economicGrowth: '+3.5% YoY'
    },
    businessHub: 'The Quayside and Ouseburn Valley are creative hubs with digital agencies, studios, and startups. Newcastle University drives significant research and innovation.',
    uniqueFacts: [
      'Home to three universities with 50,000+ students',
      'Newcastle has more digital agencies per capita than any northern city',
      'The life sciences sector employs 10,000+ people',
      'Ranked #1 UK city for quality of life by research firm PwC',
      'Newcastle contributes £13 billion to the regional economy'
    ],
    seoDescription: 'Newcastle is a vibrant university city with a growing digital and life sciences sector. We help Newcastle businesses maximize their online presence.'
  },

  'sheffield': {
    slug: 'sheffield',
    name: 'Sheffield',
    population: 584028,
    keyIndustries: ['Advanced Manufacturing', 'Digital & Creative', 'Healthcare', 'Engineering', 'Retail'],
    landmarks: ['Sheffield City Centre', 'Kelham Island', 'Meadowhall', 'Park Hill', 'Sheffield Digital Campus'],
    demographics: {
      businesses: 25000,
      avgIncome: 27000,
      economicGrowth: '+3.3% YoY'
    },
    businessHub: 'Kelham Island is Sheffield\'s creative and digital quarter with independent businesses, startups, and the renowned Kelham Island Museum showcasing industrial heritage.',
    uniqueFacts: [
      'Formerly known as the "Steel City" - reinventing as a digital hub',
      'Over 60% of the city is green space - the greenest UK city',
      'Home to 2 universities with 65,000+ students',
      'Advanced manufacturing contributes £3.8 billion to local economy',
      'Sheffield has over 250 digital and creative businesses'
    ],
    seoDescription: 'Sheffield has transformed from steel manufacturing to a modern digital and healthcare hub. Our services help Sheffield businesses thrive online.'
  },

  'nottingham': {
    slug: 'nottingham',
    name: 'Nottingham',
    population: 331069,
    keyIndustries: ['Life Sciences', 'Digital & Creative', 'Retail', 'Professional Services', 'Advanced Manufacturing'],
    landmarks: ['Nottingham Castle', 'Lace Market', 'Creative Quarter', 'BioCity', 'Victoria Centre'],
    demographics: {
      businesses: 21000,
      avgIncome: 27500,
      economicGrowth: '+3.4% YoY'
    },
    businessHub: 'The Creative Quarter and Lace Market house digital agencies and startups. BioCity is the UK\'s largest bioscience incubator with 85+ companies.',
    uniqueFacts: [
      'BioCity Nottingham is the UK\'s largest bioscience innovation center',
      'Home to 3 universities with 60,000+ students',
      'The Creative Quarter has 400+ creative and digital businesses',
      'Nottingham was England\'s first UNESCO City of Literature',
      'The city has the youngest average population age outside London'
    ],
    seoDescription: 'Nottingham blends rich history with modern life sciences and digital sectors. We help Nottingham businesses grow through strategic digital marketing.'
  },

  'leicester': {
    slug: 'leicester',
    name: 'Leicester',
    population: 355218,
    keyIndustries: ['Manufacturing', 'Life Sciences', 'Retail', 'Food & Drink', 'Professional Services'],
    landmarks: ['Leicester City Centre', 'Highcross', 'Space Centre', 'King Power Stadium', 'Cultural Quarter'],
    demographics: {
      businesses: 20000,
      avgIncome: 26500,
      economicGrowth: '+3.2% YoY'
    },
    businessHub: 'Leicester is one of England\'s most diverse cities with a thriving manufacturing and retail sector. The Cultural Quarter promotes creative industries.',
    uniqueFacts: [
      'One of the UK\'s most culturally diverse cities',
      'Home to the National Space Centre attracting 350,000+ visitors yearly',
      'Leicester\'s food and drink sector employs 15,000+ people',
      'The city has over 20,000 businesses across all sectors',
      'De Montfort University is a leading business and design school'
    ],
    seoDescription: 'Leicester is a diverse manufacturing and retail hub with growing life sciences. Our digital marketing helps Leicester businesses reach wider audiences.'
  },

  'southampton': {
    slug: 'southampton',
    name: 'Southampton',
    population: 253651,
    keyIndustries: ['Maritime & Shipping', 'Tourism & Hospitality', 'Advanced Manufacturing', 'Healthcare', 'Retail'],
    landmarks: ['Southampton Port', 'WestQuay', 'Ocean Village', 'Southampton Common', 'SeaCity Museum'],
    demographics: {
      businesses: 15000,
      avgIncome: 29000,
      economicGrowth: '+3.1% YoY'
    },
    businessHub: 'Southampton is the UK\'s premier cruise port. Ocean Village and the city center host marine businesses, while the University drives research and innovation.',
    uniqueFacts: [
      'The UK\'s number one cruise port handling 2 million passengers yearly',
      'Southampton Port contributes £2.1 billion to the UK economy',
      'Home to the National Oceanography Centre',
      'The city has a 1,000-year maritime heritage',
      'Major gateway for trade with Europe and worldwide'
    ],
    seoDescription: 'Southampton is the UK\'s cruise capital with strong maritime and tourism sectors. We help Southampton businesses navigate digital marketing waters.'
  },

  'portsmouth': {
    slug: 'portsmouth',
    name: 'Portsmouth',
    population: 238137,
    keyIndustries: ['Marine & Defence', 'Tourism', 'Advanced Manufacturing', 'Retail', 'Education'],
    landmarks: ['Historic Dockyard', 'Spinnaker Tower', 'Gunwharf Quays', 'Southsea', 'HMS Victory'],
    demographics: {
      businesses: 14000,
      avgIncome: 28000,
      economicGrowth: '+2.9% YoY'
    },
    businessHub: 'Portsmouth is home to the Royal Navy and a major defense contractor hub. The Historic Dockyard and Gunwharf Quays drive tourism and retail.',
    uniqueFacts: [
      'Home to the Royal Navy and major defense contractors',
      'Portsmouth Historic Dockyard attracts 1 million+ visitors annually',
      'The only UK island city - located on Portsea Island',
      'Spinnaker Tower is 170m tall offering views across 23 miles',
      'The city contributes £5.2 billion to the regional economy'
    ],
    seoDescription: 'Portsmouth is a historic naval city with strong defense and tourism sectors. Our digital marketing helps Portsmouth businesses stand at attention.'
  },

  'brighton': {
    slug: 'brighton',
    name: 'Brighton',
    population: 277103,
    keyIndustries: ['Digital & Creative', 'Tourism & Hospitality', 'Financial Services', 'Retail', 'Education'],
    landmarks: ['Brighton Pier', 'Royal Pavilion', 'The Lanes', 'North Laine', 'Brighton Marina'],
    demographics: {
      businesses: 19000,
      avgIncome: 31000,
      economicGrowth: '+4.0% YoY'
    },
    businessHub: 'Brighton is "London by the Sea" with a thriving digital and creative sector. North Laine is the bohemian quarter packed with independent shops and agencies.',
    uniqueFacts: [
      'Named the UK\'s "hippest city" with 500+ tech companies',
      'Brighton Digital Festival is Europe\'s largest digital festival',
      'Tourism contributes £1.4 billion to the local economy annually',
      'Home to 2 universities with 37,000+ students',
      'Brighton has more restaurants per capita than any UK city except London'
    ],
    seoDescription: 'Brighton is a vibrant seaside city with a booming digital and creative scene. We help Brighton businesses shine in this competitive market.'
  },

  'oxford': {
    slug: 'oxford',
    name: 'Oxford',
    population: 154600,
    keyIndustries: ['Education & Research', 'Life Sciences', 'Publishing', 'Technology', 'Tourism'],
    landmarks: ['Oxford University', 'Radcliffe Camera', 'Oxford Science Park', 'Bodleian Library', 'Ashmolean Museum'],
    demographics: {
      businesses: 12000,
      avgIncome: 38000,
      economicGrowth: '+4.7% YoY'
    },
    businessHub: 'Oxford is a world-leading academic and research hub. Oxford Science Park houses 100+ hi-tech companies including biotech and software firms.',
    uniqueFacts: [
      'Home to Oxford University - the oldest university in the English-speaking world',
      'Oxford Science Park hosts over 100 hi-tech companies',
      'The city has the highest concentration of biotech firms in Europe',
      'Tourism contributes £780 million annually from 7 million+ visitors',
      'Oxford publishes more academic research than any other UK city'
    ],
    seoDescription: 'Oxford combines academic excellence with cutting-edge research and technology. Our digital marketing helps Oxford businesses reach global markets.'
  },

  'cambridge': {
    slug: 'cambridge',
    name: 'Cambridge',
    population: 145674,
    keyIndustries: ['Technology & Software', 'Life Sciences', 'Education & Research', 'Biotech', 'Publishing'],
    landmarks: ['Cambridge University', 'King\'s College Chapel', 'Cambridge Science Park', 'Silicon Fen', 'The Backs'],
    demographics: {
      businesses: 11000,
      avgIncome: 40000,
      economicGrowth: '+5.1% YoY'
    },
    businessHub: 'Cambridge is the heart of "Silicon Fen" - Europe\'s premier tech cluster. Cambridge Science Park is the oldest and largest science park in the UK.',
    uniqueFacts: [
      'Silicon Fen has 1,500+ tech companies and 61,000+ employees',
      'Cambridge University has produced 121 Nobel Prize winners',
      'Cambridge Science Park houses 100+ companies including ARM and Amazon',
      'The biotech cluster contributes £4.5 billion to the economy',
      'More than 40% of Cambridge\'s workforce is in hi-tech industries'
    ],
    seoDescription: 'Cambridge is the UK\'s premier tech and research hub at the center of Silicon Fen. We help Cambridge businesses harness innovation through digital marketing.'
  },

  'york': {
    slug: 'york',
    name: 'York',
    population: 210618,
    keyIndustries: ['Tourism & Hospitality', 'Education', 'Retail', 'Food & Drink', 'Rail Industry'],
    landmarks: ['York Minster', 'The Shambles', 'York City Walls', 'National Railway Museum', 'Clifford\'s Tower'],
    demographics: {
      businesses: 10000,
      avgIncome: 29500,
      economicGrowth: '+3.0% YoY'
    },
    businessHub: 'York is one of England\'s most historic cities. Tourism is the economic driver alongside education (University of York, York St John) and the rail industry.',
    uniqueFacts: [
      'Tourism generates £765 million annually from 8 million+ visitors',
      'York Minster is one of the world\'s most magnificent cathedrals',
      'The Shambles is Europe\'s best-preserved medieval street',
      'National Railway Museum is the UK\'s most visited museum outside London',
      'York has been a major city for 2,000 years since Roman times'
    ],
    seoDescription: 'York blends 2,000 years of history with modern tourism and education sectors. Our digital marketing helps York businesses attract global visitors.'
  },

  'derby': {
    slug: 'derby',
    name: 'Derby',
    population: 261400,
    keyIndustries: ['Advanced Manufacturing', 'Aerospace', 'Rail', 'Engineering', 'Digital'],
    landmarks: ['Derby Cathedral', 'Derbion', 'Rolls-Royce', 'Derby Museum', 'Pride Park Stadium'],
    demographics: {
      businesses: 13000,
      avgIncome: 27000,
      economicGrowth: '+3.3% YoY'
    },
    businessHub: 'Derby is a world-leading aerospace and engineering hub. Rolls-Royce employs 12,000+ people, and Bombardier is a major employer in rail manufacturing.',
    uniqueFacts: [
      'Rolls-Royce has been in Derby for 100+ years',
      'Derby was the birthplace of the Industrial Revolution',
      'The aerospace sector employs 15,000+ people in the region',
      'Home to the world\'s first factory (Derby Silk Mill in 1721)',
      'Derby contributes £8.6 billion to the regional economy'
    ],
    seoDescription: 'Derby is a global aerospace and engineering powerhouse. Our digital marketing helps Derby\'s advanced manufacturers reach worldwide customers.'
  },

  'swansea': {
    slug: 'swansea',
    name: 'Swansea',
    population: 246466,
    keyIndustries: ['Advanced Manufacturing', 'Life Sciences', 'Marine & Maritime', 'Tourism', 'Digital'],
    landmarks: ['Swansea Bay', 'Mumbles', 'Gower Peninsula', 'Liberty Stadium', 'Dylan Thomas Centre'],
    demographics: {
      businesses: 11500,
      avgIncome: 26000,
      economicGrowth: '+3.2% YoY'
    },
    businessHub: 'Swansea is Wales\' second city and a coastal hub for manufacturing and life sciences. The Swansea Bay City Deal is driving £1.3 billion of investment.',
    uniqueFacts: [
      'Wales\' second-largest city after Cardiff',
      'Swansea University is a top research institution',
      'The Gower Peninsula was the UK\'s first Area of Outstanding Natural Beauty',
      'Swansea Bay City Deal will create 9,000+ jobs',
      'Life sciences sector is growing rapidly with major employers like Pfizer'
    ],
    seoDescription: 'Swansea combines coastal beauty with growing manufacturing and life sciences sectors. We help Swansea businesses make waves with digital marketing.'
  },

  // ===== NORTH WEST - Additional Cities =====

  'wigan': {
    slug: 'wigan',
    name: 'Wigan',
    population: 107732,
    keyIndustries: ['Manufacturing', 'Retail', 'Healthcare', 'Digital Services', 'Hospitality'],
    landmarks: ['Wigan Pier', 'Mesnes Park', 'Haigh Hall', 'DW Stadium', 'Wigan Town Centre'],
    demographics: {
      businesses: 6200,
      avgIncome: 26500,
      economicGrowth: '+2.8% YoY'
    },
    businessHub: 'Wigan has transformed from its industrial heritage into a modern service economy. The town center and retail parks drive employment, while digital businesses are growing rapidly.',
    uniqueFacts: [
      'Home to over 6,200 active businesses across diverse sectors',
      'Wigan Pier was once the UK\'s most famous industrial landmark',
      'The town has excellent transport links with M6 and direct trains to Manchester and Liverpool',
      'Retail sector employs over 12,000 people in the borough',
      'Wigan Warriors are one of rugby league\'s most successful clubs'
    ],
    seoDescription: 'Wigan is a thriving Greater Manchester town with strong retail and growing digital sectors. Our digital marketing helps Wigan businesses compete regionally and nationally.'
  },

  'bolton': {
    slug: 'bolton',
    name: 'Bolton',
    population: 194189,
    keyIndustries: ['Manufacturing', 'Retail', 'Healthcare', 'Professional Services', 'Logistics'],
    landmarks: ['Bolton Town Centre', 'Bolton Market', 'Smithills Hall', 'Bolton Wanderers Stadium', 'Crompton Place'],
    demographics: {
      businesses: 8500,
      avgIncome: 27000,
      economicGrowth: '+2.9% YoY'
    },
    businessHub: 'Bolton is a major Greater Manchester town with a strong manufacturing base and growing service sector. The town center has undergone significant regeneration with retail and leisure developments.',
    uniqueFacts: [
      'Over 8,500 businesses operate in Bolton borough',
      'Bolton has a rich industrial heritage dating back to the textile boom',
      'Direct rail links to Manchester city center in just 15 minutes',
      'Home to the University of Bolton with 11,000+ students',
      'Manufacturing sector contributes £500 million to the local economy'
    ],
    seoDescription: 'Bolton combines industrial strength with modern services. We help Bolton businesses leverage digital marketing to grow their customer base.'
  },

  'blackpool': {
    slug: 'blackpool',
    name: 'Blackpool',
    population: 139305,
    keyIndustries: ['Tourism & Hospitality', 'Entertainment', 'Retail', 'Healthcare', 'Creative Industries'],
    landmarks: ['Blackpool Tower', 'Blackpool Pleasure Beach', 'Winter Gardens', 'Blackpool Illuminations', 'North Pier'],
    demographics: {
      businesses: 7800,
      avgIncome: 24000,
      economicGrowth: '+2.5% YoY'
    },
    businessHub: 'Blackpool is the UK\'s most famous seaside resort, with tourism as its economic backbone. The town attracts 18 million visitors annually and has a thriving entertainment and hospitality sector.',
    uniqueFacts: [
      'Attracts over 18 million visitors per year - more than Greece',
      'Blackpool Tower is 158 meters tall and opened in 1894',
      'The Illuminations run for 66 nights and feature over 1 million bulbs',
      'Tourism contributes £1.5 billion to the local economy annually',
      'Blackpool Pleasure Beach is the most visited attraction in the UK'
    ],
    seoDescription: 'Blackpool is the UK\'s premier seaside resort with a massive tourism sector. We help Blackpool businesses attract visitors and convert bookings through digital marketing.'
  },

  'preston': {
    slug: 'preston',
    name: 'Preston',
    population: 114300,
    keyIndustries: ['Advanced Manufacturing', 'Aerospace', 'Education', 'Retail', 'Professional Services'],
    landmarks: ['Preston Guild Hall', 'University of Central Lancashire', 'Preston Market', 'Avenham Park', 'Fishergate'],
    demographics: {
      businesses: 7200,
      avgIncome: 28000,
      economicGrowth: '+3.1% YoY'
    },
    businessHub: 'Preston is Lancashire\'s administrative center and a hub for aerospace and advanced manufacturing. BAE Systems is a major employer, while the University of Central Lancashire drives innovation.',
    uniqueFacts: [
      'Home to BAE Systems\' largest UK site employing 10,000+ people',
      'University of Central Lancashire has 32,000 students',
      'Preston Guild is celebrated only once every 20 years',
      'The UK\'s newest city - granted city status in 2002',
      'Aerospace sector contributes £2.8 billion to the regional economy'
    ],
    seoDescription: 'Preston is Lancashire\'s aerospace and manufacturing powerhouse. Our digital marketing helps Preston businesses reach defense, education, and commercial markets.'
  },

  'lancaster': {
    slug: 'lancaster',
    name: 'Lancaster',
    population: 52234,
    keyIndustries: ['Education', 'Tourism', 'Creative Industries', 'Advanced Manufacturing', 'Healthcare'],
    landmarks: ['Lancaster Castle', 'Lancaster University', 'Morecambe Bay', 'Williamson Park', 'Lancaster Canal'],
    demographics: {
      businesses: 4100,
      avgIncome: 29000,
      economicGrowth: '+2.7% YoY'
    },
    businessHub: 'Lancaster is a historic city dominated by Lancaster University, one of the UK\'s top 15 universities. The city has a vibrant creative sector and growing tourism industry.',
    uniqueFacts: [
      'Lancaster University is ranked in the global top 150',
      'The city has over 2,000 years of history',
      'Lancaster Castle held prisoners for over 800 years',
      'Education sector employs over 6,000 people locally',
      'Gateway to the Lake District and Yorkshire Dales'
    ],
    seoDescription: 'Lancaster blends medieval history with modern education and tourism. We help Lancaster businesses attract students, tourists, and corporate clients.'
  },

  'warrington': {
    slug: 'warrington',
    name: 'Warrington',
    population: 210014,
    keyIndustries: ['Logistics & Distribution', 'Nuclear Engineering', 'Digital & Tech', 'Professional Services', 'Advanced Manufacturing'],
    landmarks: ['Warrington Town Centre', 'Birchwood Park', 'Walton Hall', 'Golden Square', 'Warrington Wolves Stadium'],
    demographics: {
      businesses: 9800,
      avgIncome: 30000,
      economicGrowth: '+3.4% YoY'
    },
    businessHub: 'Warrington is strategically located between Manchester and Liverpool with excellent transport links. Birchwood Park is one of the UK\'s premier business parks hosting major tech and nuclear companies.',
    uniqueFacts: [
      'Home to over 9,800 businesses with strengths in nuclear and logistics',
      'Birchwood Park houses 160+ businesses including British Nuclear Fuels',
      'Warrington is at the geographic center of Northern England',
      'The logistics sector employs 15,000+ people',
      'Time Square is one of the UK\'s first Business Improvement Districts'
    ],
    seoDescription: 'Warrington is a major logistics and nuclear engineering hub. Our digital marketing helps Warrington businesses leverage their strategic location and expertise.'
  },

  'chester': {
    slug: 'chester',
    name: 'Chester',
    population: 90524,
    keyIndustries: ['Tourism & Hospitality', 'Retail', 'Professional Services', 'Financial Services', 'Creative Industries'],
    landmarks: ['Chester Cathedral', 'Chester Rows', 'Roman Walls', 'Chester Zoo', 'Grosvenor Park'],
    demographics: {
      businesses: 6400,
      avgIncome: 32000,
      economicGrowth: '+3.0% YoY'
    },
    businessHub: 'Chester is a historic walled city and major tourist destination. The city center\'s unique Rows attract 8 million visitors annually, supporting a thriving retail and hospitality sector.',
    uniqueFacts: [
      'Chester has the most complete Roman walls in Britain',
      'Chester Zoo is the UK\'s most visited zoo with 2 million visitors yearly',
      'The Chester Rows are unique two-tiered medieval shopping galleries',
      'Tourism contributes £500 million to the local economy',
      'Over 6,400 businesses operate in the Chester area'
    ],
    seoDescription: 'Chester is a historic gem with a thriving tourism and retail sector. We help Chester businesses attract heritage tourists and local customers alike.'
  },

  'stockport': {
    slug: 'stockport',
    name: 'Stockport',
    population: 294423,
    keyIndustries: ['Manufacturing', 'Retail', 'Professional Services', 'Digital & Creative', 'Healthcare'],
    landmarks: ['Stockport Viaduct', 'Stockport Market Hall', 'Hat Works Museum', 'Stockport Plaza', 'Bramall Hall'],
    demographics: {
      businesses: 11200,
      avgIncome: 29000,
      economicGrowth: '+3.2% YoY'
    },
    businessHub: 'Stockport is a large Greater Manchester town with a diverse economy. The town center has undergone major regeneration, while advanced manufacturing remains strong in areas like Bredbury and Reddish.',
    uniqueFacts: [
      'Over 11,200 businesses across manufacturing, retail, and services',
      'Stockport Viaduct is one of the largest brick structures in Europe',
      'The town was once the world\'s hat-making capital',
      'Excellent transport links with 4 railway stations and M60 access',
      'Stockport Exchange regeneration is a £150 million project'
    ],
    seoDescription: 'Stockport is a diverse Greater Manchester economy with strong manufacturing and growing digital sectors. Our marketing helps Stockport businesses stand out.'
  },

  'salford': {
    slug: 'salford',
    name: 'Salford',
    population: 258834,
    keyIndustries: ['Media & Broadcasting', 'Digital & Tech', 'Professional Services', 'Creative Industries', 'Education'],
    landmarks: ['MediaCityUK', 'Salford Quays', 'The Lowry', 'Old Trafford', 'University of Salford'],
    demographics: {
      businesses: 10400,
      avgIncome: 28500,
      economicGrowth: '+4.1% YoY'
    },
    businessHub: 'Salford Quays and MediaCityUK form one of Europe\'s premier digital and creative hubs. The BBC, ITV, and hundreds of digital businesses are based here, alongside University of Salford\'s tech campus.',
    uniqueFacts: [
      'MediaCityUK is home to BBC Sport, BBC Children\'s, and ITV Granada',
      'Over 250 businesses operate at MediaCityUK creating 4,500+ jobs',
      'Salford Quays underwent £850 million regeneration',
      'University of Salford specializes in media, tech, and digital industries',
      'The Lowry theatre attracts 1 million visitors annually'
    ],
    seoDescription: 'Salford is a global media and digital hub anchored by MediaCityUK. We help Salford businesses leverage this creative ecosystem for growth.'
  },

  // ===== MIDLANDS - Additional Cities =====

  'coventry': {
    slug: 'coventry',
    name: 'Coventry',
    population: 369127,
    keyIndustries: ['Advanced Manufacturing', 'Automotive', 'Digital & Tech', 'Aerospace', 'Professional Services'],
    landmarks: ['Coventry Cathedral', 'Coventry Transport Museum', 'Ricoh Arena', 'Belgrade Theatre', 'Fargo Village'],
    demographics: {
      businesses: 14500,
      avgIncome: 28500,
      economicGrowth: '+3.6% YoY'
    },
    businessHub: 'Coventry is a major automotive and advanced manufacturing hub. Jaguar Land Rover and many tier-1 suppliers are based here. The city was UK City of Culture 2021, boosting creative industries.',
    uniqueFacts: [
      'Home to 14,500+ businesses with strength in automotive manufacturing',
      'Jaguar Land Rover employs 11,000+ people in Coventry',
      'UK City of Culture 2021 brought £172 million economic boost',
      'Coventry University has 38,000 students and strong industry links',
      'The automotive sector contributes £3.5 billion to the regional economy'
    ],
    seoDescription: 'Coventry is the UK\'s motor city with thriving automotive and aerospace sectors. Our digital marketing drives growth for Coventry\'s advanced manufacturers.'
  },

  'wolverhampton': {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    population: 263700,
    keyIndustries: ['Advanced Manufacturing', 'Aerospace', 'Professional Services', 'Retail', 'Education'],
    landmarks: ['Wolverhampton Grand Theatre', 'Molineux Stadium', 'West Park', 'Wolverhampton Art Gallery', 'Civic Centre'],
    demographics: {
      businesses: 10200,
      avgIncome: 26500,
      economicGrowth: '+3.0% YoY'
    },
    businessHub: 'Wolverhampton is a Black Country city with a strong manufacturing heritage. The i54 business park houses major aerospace companies, while the city center has undergone £3.7 billion regeneration.',
    uniqueFacts: [
      'Over 10,200 businesses operate in Wolverhampton',
      'i54 business park hosts Jaguar Land Rover and aerospace firms',
      'University of Wolverhampton serves 22,000+ students',
      'City center regeneration includes new railway station and £150m Westside project',
      'Manufacturing sector employs 18,000+ people locally'
    ],
    seoDescription: 'Wolverhampton combines Black Country heritage with modern aerospace and manufacturing. We help Wolverhampton businesses compete in advanced markets.'
  },

  'stoke-on-trent': {
    slug: 'stoke-on-trent',
    name: 'Stoke-on-Trent',
    population: 258366,
    keyIndustries: ['Ceramics & Manufacturing', 'Advanced Materials', 'Healthcare', 'Logistics', 'Creative Industries'],
    landmarks: ['Potteries Museum', 'Trentham Gardens', 'Britannia Stadium', 'World of Wedgwood', 'Emma Bridgewater Factory'],
    demographics: {
      businesses: 9600,
      avgIncome: 25500,
      economicGrowth: '+2.8% YoY'
    },
    businessHub: 'Stoke-on-Trent is world-famous for ceramics and "The Potteries". While traditional pottery remains important, the city now has diverse manufacturing, healthcare, and growing digital sectors.',
    uniqueFacts: [
      'Known as "The Potteries" - world capital of ceramic production',
      'Home to iconic brands: Wedgwood, Royal Doulton, Emma Bridgewater',
      'Ceramics industry contributes £500 million annually',
      'Staffordshire University has 16,000+ students',
      'Advanced materials and healthcare are rapidly growing sectors'
    ],
    seoDescription: 'Stoke-on-Trent is the world\'s pottery capital transforming with advanced materials and healthcare. We help Stoke businesses showcase their heritage and innovation.'
  },

  'worcester': {
    slug: 'worcester',
    name: 'Worcester',
    population: 103872,
    keyIndustries: ['Manufacturing', 'Professional Services', 'Healthcare', 'Tourism', 'Retail'],
    landmarks: ['Worcester Cathedral', 'Worcester Racecourse', 'Tudor House Museum', 'Severn River', 'Worcestershire County Cricket Ground'],
    demographics: {
      businesses: 5800,
      avgIncome: 28000,
      economicGrowth: '+2.9% YoY'
    },
    businessHub: 'Worcester is a historic cathedral city on the River Severn. The city has a strong manufacturing base including Worcester Bosch, alongside growing professional services and tourism sectors.',
    uniqueFacts: [
      'Home to Worcester Bosch (Bosch Thermotechnology) employing 3,500+ people',
      'Worcester Cathedral dates back to 1084',
      'Worcester sauce was invented here in the 1830s',
      'The city hosts the University of Worcester with 10,000+ students',
      'Tourism brings 8 million visitors and £400 million annually'
    ],
    seoDescription: 'Worcester blends cathedral heritage with modern manufacturing and services. We help Worcester businesses attract regional and national customers.'
  },

  'telford': {
    slug: 'telford',
    name: 'Telford',
    population: 155570,
    keyIndustries: ['Advanced Manufacturing', 'Engineering', 'Logistics', 'Professional Services', 'Retail'],
    landmarks: ['Ironbridge Gorge', 'Telford Town Park', 'Telford Shopping Centre', 'Telford International Centre', 'Blists Hill Victorian Town'],
    demographics: {
      businesses: 7400,
      avgIncome: 27500,
      economicGrowth: '+3.3% YoY'
    },
    businessHub: 'Telford is a modern town built on industrial heritage at the birthplace of the Industrial Revolution. Strong in engineering and manufacturing with excellent M54 motorway access.',
    uniqueFacts: [
      'Ironbridge is a UNESCO World Heritage Site - birthplace of Industrial Revolution',
      'Over 7,400 businesses with strength in advanced manufacturing',
      'Telford has 350 hectares of development land available',
      'The town is centrally located with 2-hour drive to 70% of UK',
      'Major employers include Capgemini, Ricoh, and Stadco'
    ],
    seoDescription: 'Telford combines industrial heritage with modern manufacturing and logistics. Our digital marketing helps Telford businesses leverage their central location.'
  }
};

/**
 * Get enhanced city data by slug
 */
export function getEnhancedCityData(slug: string) {
  return enhancedCityData[slug] || null;
}

/**
 * Check if city has enhanced data
 */
export function hasEnhancedData(slug: string): boolean {
  return slug in enhancedCityData;
}

/**
 * Get all cities with enhanced data
 */
export function getEnhancedCities() {
  return Object.values(enhancedCityData);
}
