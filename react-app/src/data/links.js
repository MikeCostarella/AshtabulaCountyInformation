// Ashtabula County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-11

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

export const AUDITOR_VENDOR = "Tyler Technologies (iasWorld)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Ashtabula County (Official Site)", category: "Government", subcategory: "County", url: "https://www.ashtabulacounty.us/", description: "Official Ashtabula County government website — departments, services, and news." },
  { name: "County Government Hub", category: "Government", subcategory: "County", url: "https://www.ashtabulacounty.us/27/Government", description: "Overview of county government structure and offices." },
  { name: "Board of Commissioners", category: "Government", subcategory: "County", url: "https://www.ashtabulacounty.us/220/Commissioners", description: "The county's three-member Board of Commissioners." },
  { name: "County Departments", category: "Government", subcategory: "County", url: "https://www.ashtabulacounty.us/135/Departments", description: "Directory of all county departments and services." },
  { name: "Elected Officials", category: "Government", subcategory: "County", url: "https://www.ashtabulacounty.us/174/Elected-Officials", description: "Contact information for the county's elected officials." },
  { name: "Ashtabula County Courts", category: "Government", subcategory: "Courts", url: "https://courts.ashtabulacounty.gov/", description: "Court case management and public access records." },
  { name: "Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/ashtabula/", description: "Voter registration, ballots, and election information." },
  { name: "County Auditor", category: "Government", subcategory: "County", url: "https://auditor.ashtabulacounty.gov/dnn", description: "Property values, tax records, and county finances." },
  { name: "City of Ashtabula", category: "Government", subcategory: "Municipal", url: "https://www.cityofashtabula.com/", description: "Official site of the City of Ashtabula — bills, permits, council." },
  { name: "City of Conneaut", category: "Government", subcategory: "Municipal", url: "https://conneautohio.gov/", description: "Official site of the City of Conneaut, Ohio's northernmost city." },
  { name: "City of Geneva", category: "Government", subcategory: "Municipal", url: "https://genevaohio.gov/", description: "Official site of the City of Geneva." },
  { name: "Village of Geneva-on-the-Lake", category: "Government", subcategory: "Municipal", url: "https://genevaonthelakeoh.gov/", description: "Official site of Ohio's first summer resort village." },
  { name: "Ashtabula Township", category: "Government", subcategory: "Township", url: "https://ashtabulatownship.com/", description: "Official Ashtabula Township site." },
  { name: "Geneva Township", category: "Government", subcategory: "Township", url: "https://genevatownshipohio.gov/", description: "Official Geneva Township site." },
  { name: "Townships Directory", category: "Government", subcategory: "Township", url: "https://www.ashtabulacounty.us/638/Townships", description: "Links to all 27 township websites and officials." },
  { name: "Villages Directory", category: "Government", subcategory: "Municipal", url: "https://www.ashtabulacounty.us/637/Villages", description: "Links to all 7 village websites." },

  // ---------- Education ----------
  { name: "County Schools Directory", category: "Education", subcategory: "K-12", url: "https://www.ashtabulacounty.us/320/Schools", description: "County directory of public school districts." },
  { name: "Ashtabula Area City Schools", category: "Education", subcategory: "K-12", url: "https://www.aacs.net/", description: "The county's largest school district." },
  { name: "Ashtabula County District Library", category: "Education", subcategory: "Library", url: "https://www.acdl.info/", description: "Main county library system — catalog, hours, resources." },
  { name: "Henderson Memorial Public Library", category: "Education", subcategory: "Library", url: "https://hmpl.info/", description: "Public library serving Jefferson and the surrounding area." },
  { name: "Conneaut Public Library", category: "Education", subcategory: "Library", url: "http://www.conneaut.lib.oh.us/", description: "Public library serving Conneaut." },
  { name: "Libraries Directory", category: "Education", subcategory: "Library", url: "https://www.ashtabulacounty.us/400/Libraries", description: "County directory of all public libraries." },

  // ---------- Health ----------
  { name: "Ashtabula Regional Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.armchealth.org/", description: "The county's full-service hospital (Cleveland Clinic affiliate)." },
  { name: "UH Conneaut Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.uhhospitals.org/locations/uh-conneaut-medical-center", description: "University Hospitals critical access hospital in Conneaut." },
  { name: "UH Ashtabula County Locations", category: "Health", subcategory: "Hospital", url: "https://www.uhhospitals.org/locations/uh-ashtabula-county-locations", description: "University Hospitals' Geneva, Conneaut, and Ashtabula facilities." },

  // ---------- Business & Economy ----------
  { name: "Greater Ashtabula Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.ashtabulachamber.net/", description: "Business advocacy and member directory for the county." },
  { name: "Geneva Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.genevachamber.org/", description: "Chamber of commerce serving the Geneva area." },
  { name: "Jefferson Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://jeffersonchamber.com/", description: "Chamber of commerce serving Jefferson." },
  { name: "Chambers of Commerce Directory", category: "Business & Economy", subcategory: "Chamber", url: "https://www.ashtabulacounty.us/591/Chambers-of-Commerce", description: "County directory of all local chambers." },

  // ---------- Community & Social ----------
  { name: "United Way of Ashtabula County", category: "Community & Social", subcategory: "Nonprofit", url: "https://unitedwayashtabula.org/", description: "Funds and coordinates local charities and partner agencies." },
  { name: "Ashtabula County Community Action Agency", category: "Community & Social", subcategory: "Nonprofit", url: "https://accaa.org/", description: "Anti-poverty and self-sufficiency programs and services." },
  { name: "211 Ashtabula County", category: "Community & Social", subcategory: "Assistance", url: "https://www.211ashtabula.org/", description: "Local resource assistance — food, utilities, rent, and more." },
  { name: "Library Community Resources", category: "Community & Social", subcategory: "Assistance", url: "https://www.acdl.info/community-resources", description: "Curated list of community support resources." },

  // ---------- Recreation & Tourism ----------
  { name: "Ashtabula County Metroparks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.ashtabulametroparks.com/", description: "14 parks and 75+ miles of trails, including covered bridge parks." },
  { name: "Visit Ashtabula County Wine Country", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitashtabulacounty.com/", description: "Official tourism guide — wineries, lodging, and attractions." },
  { name: "Convention & Visitors Bureau", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.ashtabulacounty.us/299/Ashtabula-County-Convention-Visitors-Bur", description: "County travel and tourism office." },
  { name: "Geneva Township Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://genevatownshippark.org/", description: "Lake Erie township park in Geneva." },
  { name: "Parks & Natural Areas Directory", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.ashtabulacounty.us/643/Parks-and-Natural-Areas", description: "County directory of parks and natural areas." },

  // ---------- News & Media ----------
  { name: "The Star Beacon", category: "News & Media", subcategory: "Newspaper", url: "https://www.starbeacon.com/", description: "The county's daily newspaper — local news, sports, and events." },
  { name: "Newspapers Directory", category: "News & Media", subcategory: "Newspaper", url: "https://www.ashtabulacounty.us/QuickLinks.aspx?CID=105", description: "County directory of local newspapers." },
];
