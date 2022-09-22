// Randomly generate a fake allTables JSON file

const fs = require("fs");
const numGuards = Math.floor(Math.random() * 10) + 17; // 16 - 26 (exclusive)

let fakeTables = [];
for (i = 1; i < numGuards; i++) {
  const capacitynumbers = Math.floor(Math.random() * 6) + 2; // 2-8 (exclusive)
  const name = `Table ${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const types = ["Guard", "Maintainer", "Caretaker"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  const times = ["Any Shift","Morning","Afternoon","Evening","Stay"][Math.floor(Math.random() * 5)]; // 0-3 (exclusive)
  const state = ["Any State","Delhi", "Maharashtra", "West Bengal","Bihar","Haryana","Karnataka","Gujarat","Tamil Nadu","Andhra Pradesh","Rajasthan","Uttar Pradesh"][Math.floor(Math.random() * 12)]; // 0-3 (exclusive)
  const city = ["Any City","Agra","Ahmadnagar","Ahmedabad","Ajme","Akola","Aligarh","Alipurduar","Allahabad","Alwar","Amaravati","Ambala","Asansol","Aurangabad","Bakshpur","Bamanpuri","Barddhaman","Bareilly","Belgaum","Bellary","Bengaluru","Bharatpur","Bharauri","Bhatpara","Bhavnagar","Bhilwara","Bhiwandi","Bhiwani","Bhuj","Bhusaval","Bidar","Bijapur","Bikaner","Budaun","Bulandshahr","Chanda","Chennai","Chikka Mandya","Chirala","Coimbatore","Cuddalore","Davangere","Delhi","Dindigul","Faridabad","Firozabad","Fyzabad","Ghandinagar","Ghaziabad","Gopalpur","Gulbarga","Guntur","Gurugram","Haldia","Haora","Hapur","Hata","Hindupur","Hisar","Hospet","Hubli","Jaipur","Jhansi","Jodhpur","Kagaznagar","Kakinada","Kalyan","Karnal","Karur","Khanapur","Kolar","Kolhapur","Kolkata","Kota","Krishnanagar","Krishnapuram","Kumbakonam","Kurnool","Latur","Lucknow","Machilipatnam","Madurai","Malegaon Camp","Mangalore","Mathura","Meerut","Mirzapur","Moradabad","Mumbai","Muzaffarnagar","Mysore","Nagercoil","Nanded","Nandyal","Nasik","Navsari","Nellore","Ongole","Pali","Panchkula","Panipat","Parbhani","Pilibhit","Porbandar","Proddatur","Pune","Raichur","Rajahmundry","Rajapalaiyam","Rajkot","Rampura","Rohtak","Saharanpur","Saidapur","Salem","Sangli","Shahbazpur","Shiliguri","Shimoga","Sikar","Sirsa","Sonipat","Surat","Thanjavur","Tharati Etawah","Tiruchchirappalli","Tirunelveli","Tirupati","Tiruvannamalai","Tonk","Tuticorin","Udaipur","Vadodara","Valparai","Varanasi","Vellore","Vishakhapatnam","Vizianagaram"][Math.floor(Math.random() * 138)]; // 0-3 (exclusive)
  const language1 = ["Any Language 1","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"][Math.floor(Math.random() * 20)]; // 0-3 (exclusive)
  const language2 = ["Any Language 2","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"][Math.floor(Math.random() * 20)]; // 0-3 (exclusive)
  const language3 = ["Any Language 3","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"][Math.floor(Math.random() * 20)]; // 0-3 (exclusive)
  



  //"Agra","Ahmadnagar","Ahmedabad","Ajme","Akola","Aligarh","Alipurduar","Allahabad","Alwar","Amaravati","Ambala","Asansol","Aurangabad","Bakshpur","Bamanpuri","Barddhaman","Bareilly","Belgaum","Bellary","Bengaluru",'Bharatpur","Bharauri","Bhatpara","Bhavnagar","Bhilwara","Bhiwandi","Bhiwani","Bhuj","Bhusaval","Bidar","Bijapur","Bikaner","Budaun","Bulandshahr","Chanda","Chennai","Chikka Mandya","Chirala","Coimbatore","Cuddalore","Davangere","Delhi","Dindigul","Faridabad","Firozabad","Fyzabad","Ghandinagar","Ghaziabad","Gopalpur","Gulbarga","Guntur","Gurugram","Haldia","Haora","Hapur","Hata","Hindupur","Hisar","Hospet","Hubli","Jaipur","Jhansi","Jodhpur","Kagaznagar","Kakinada","Kalyan","Karnal","Karur","Khanapur","Kolar","Kolhapur","Kolkata","Kota","Krishnanagar","Krishnapuram","Kumbakonam","Kurnool","Latur","Lucknow","Machilipatnam","Madurai","Malegaon Camp","Mangalore","Mathura","Meerut","Mirzapur","Moradabad","Mumbai","Muzaffarnagar","Mysore","Nagercoil","Nanded","Nandyal","Nasik","Navsari","Nellore","Ongole","Pali","Panchkula","Panipat","Parbhani","Pilibhit","Porbandar","Proddatur","Pune","Raichur","Rajahmundry","Rajapalaiyam","Rajkot","Rampura","Rohtak","Saharanpur","Saidapur","Salem","Sangli","Shahbazpur","Shiliguri","Shimoga","Sikar","Sirsa","Sonipat","Surat","Thanjavur","Tharati Etawah","Tiruchchirappalli","Tirunelveli","Tirupati",Tiruvannamalai,Tonk,Tuticorin,Udaipur,Vadodara,"Valparai","Varanasi","Vellore","Vishakhapatnam","Vizianagaram"						

  
  
  fakeTables.push({
    name: name,
    capacity: capacitynumbers,
    // isAvailable: availability,
    isAvailable: true,
    times: times,
    types: types,
    state: state,
    city: city,
    language1: language1,
    language2: language2,
    language3: language3
  });
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);


