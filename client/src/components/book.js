import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button
} from "reactstrap";

import Table from "./table";

export default props => {
  const [totalTables, setTotalTables] = useState([]);

  // User's selections
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null
    },
    date: new Date(),
    times: "Any Shift",
    types: "Any types",
    city:"Any City",
    state:"Any State",
    language1:"Any Language",
    language2:"Any Language",
    language3:"Any Language",
    size: 0
  });

  // User's booking details
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  // List of potential typess
  const [types] = useState(["Any Type","Guard", "Maintainer", "Caretaker"]);
  const [city] = useState(["Any City","Agra","Ahmadnagar","Ahmedabad","Ajme","Akola","Aligarh","Alipurduar","Allahabad","Alwar","Amaravati","Ambala","Asansol","Aurangabad","Bakshpur","Bamanpuri","Barddhaman","Bareilly","Belgaum","Bellary","Bengaluru","Bharatpur","Bharauri","Bhatpara","Bhavnagar","Bhilwara","Bhiwandi","Bhiwani","Bhuj","Bhusaval","Bidar","Bijapur","Bikaner","Budaun","Bulandshahr","Chanda","Chennai","Chikka Mandya","Chirala","Coimbatore","Cuddalore","Davangere","Delhi","Dindigul","Faridabad","Firozabad","Fyzabad","Ghandinagar","Ghaziabad","Gopalpur","Gulbarga","Guntur","Gurugram","Haldia","Haora","Hapur","Hata","Hindupur","Hisar","Hospet","Hubli","Jaipur","Jhansi","Jodhpur","Kagaznagar","Kakinada","Kalyan","Karnal","Karur","Khanapur","Kolar","Kolhapur","Kolkata","Kota","Krishnanagar","Krishnapuram","Kumbakonam","Kurnool","Latur","Lucknow","Machilipatnam","Madurai","Malegaon Camp","Mangalore","Mathura","Meerut","Mirzapur","Moradabad","Mumbai","Muzaffarnagar","Mysore","Nagercoil","Nanded","Nandyal","Nasik","Navsari","Nellore","Ongole","Pali","Panchkula","Panipat","Parbhani","Pilibhit","Porbandar","Proddatur","Pune","Raichur","Rajahmundry","Rajapalaiyam","Rajkot","Rampura","Rohtak","Saharanpur","Saidapur","Salem","Sangli","Shahbazpur","Shiliguri","Shimoga","Sikar","Sirsa","Sonipat","Surat","Thanjavur","Tharati Etawah","Tiruchchirappalli","Tirunelveli","Tirupati","Tiruvannamalai","Tonk","Tuticorin","Udaipur","Vadodara","Valparai","Varanasi","Vellore","Vishakhapatnam","Vizianagaram"]);
  const [state] = useState(["Any State","Delhi", "Maharashtra", "West Bengal","Bihar","Haryana","Karnataka","Gujarat","Tamil Nadu","Andhra Pradesh","Rajasthan","Uttar Pradesh"]);
  const [language1] = useState(["Any Language 1","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"]);
  const [language2] = useState(["Any Language 2","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"]);
  const [language3] = useState(["Any Language 3","Hindi","Telugu","Urdu","English","Punjabi","Gujarati","Hindi(Haryanvi accent)","Kannada","Marathi","Tamil","Telugu","Bengali","Marathi","Sindhi","Maithili","Nepali","Santali","Hindi(Rajasthani)","Hindi(Awadhi,Bhojpuri,Khari Boli)"]);
  const [times] = useState([
    "Any Shift",
    "Morning",
    "Afternoon",
    "Evening",
    "Stay"
  
  ]);
  // Basic reservation "validation"
  const [reservationError, setReservationError] = useState(false);

  const getDate = _ => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
     
    const datetime = new Date(date);
    return datetime;
  };

  const getEmptyTables = _ => {
    let tables = totalTables.filter(table => table.isAvailable);
    return tables.length;
  };

  useEffect(() => {
    // Check availability of tables from DB when a date and time is selected
    if (selection.date) {
      (async _ => {
        let datetime = getDate();
        let res = await fetch("http://localhost:3000/availability", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            date: datetime
          })
        });
        res = await res.json();
        // Filter available tables with types and group size criteria
        let tables = res.tables.filter(
          table =>
            (selection.size > 0 ? table.capacity >= selection.size : true) &&
            (selection.types !== "Any types"
              ? table.types === selection.types
              : true)&&(selection.state !== "Any State"
              ? table.state === selection.state
              : true)&&(selection.city !== "Any City"
              ? table.city === selection.city
              : true)&&(selection.language1 !== "Any Language"
              ? table.language1 === selection.language1
              : true)&&(selection.language2 !== "Any Language"
              ? table.language2 === selection.language2
              : true)&&(selection.language3 !== "Any Language"
              ? table.language3 === selection.language3
              : true)&&(selection.times !== "Any Shift"
              ? table.times === selection.times
              : true)
        );
        setTotalTables(tables);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection.date, selection.types,selection.state,selection.city,selection.language1,selection.language2,selection.language3,selection.times]);

  // Make the reservation if all details are filled out
  const reserve = async _ => {
    if (
      (booking.name.length === 0) |
      (booking.phone.length === 0) |
      (booking.email.length === 0)|(booking.address.length === 0)
    ) {
      console.log("Incomplete Details");
      setReservationError(true);
    } else {
      const datetime = getDate();
      let res = await fetch("http://localhost:3000/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...booking,
          date: datetime,
          table: selection.table.id
        })
      });
      res = await res.text();
      console.log("Reserved: " + res);
      props.setPage(2);
    }
  };

  // Clicking on a table sets the selection state
  const selectTable = (table_name, table_id) => {
    setSelection({
      ...selection,
      table: {
        name: table_name,
        id: table_id
      }
    });
  };

  // Generate party size dropdown
  /*const getSizes = _ => {
    let newSizes = [];

    for (let i = 1; i < 8; i++) {
      newSizes.push(
        <DropdownItem
          key={i}
          className="booking-dropdown-item"
          onClick={e => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              size: i
            };
            setSelection(newSel);
          }}
        >
          {i}
        </DropdownItem>
      );
    }
    return newSizes;
  };*/

  // Generate typess dropdown
  const gettypes = _ => {
    let newtypes = [];
    types.forEach(loc => {
      newtypes.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              types: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newtypes;
  };

   // Generate state dropdown
   const getstate = _ => {
    let newstate = [];
    state.forEach(loc => {
      newstate.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              state: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newstate;
  };

   // Generate city dropdown
   const getcity = _ => {
    let newcity = [];
    city.forEach(loc => {
      newcity.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              city: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newcity;
  };

   // Generate lamguage dropdown
   const getlanguage1 = _ => {
    let newlanguage1 = [];
    language1.forEach(loc => {
      newlanguage1.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              language1: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newlanguage1;
  };


  const getlanguage2 = _ => {
    let newlanguage2 = [];
    language2.forEach(loc => {
      newlanguage2.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              language2: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newlanguage2;
  };

  const getlanguage3 = _ => {
    let newlanguage3 = [];
    language3.forEach(loc => {
      newlanguage3.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              language3: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newlanguage3;
  };

  // Generate typess dropdown
  const getTimes = _ => {
    let newTimes = [];
    times.forEach(times => {
      newTimes.push(
        <DropdownItem
          key={times}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              times: times
            };
            setSelection(newSel);
          }}
        >
          {times}
        </DropdownItem>
      );
    });
    return newTimes;
  };

  // Generating tables from available tables state
  const getTables = _ => {
    console.log("Getting custodians");
    if (getEmptyTables() > 0) {
      let tables = [];
      totalTables.forEach(table => {
        if (table.isAvailable) {
          tables.push(
            <Table
              key={table._id}
              id={table._id}
              capacity={table.capacity}
              name={table.name}
              empty
              selectTable={selectTable}
            />
          );
        } else {
          tables.push(
            <Table
              key={table._id}
              id={table._id}
              capacity={table.capacity}
              name={table.name}
              selectTable={selectTable}
            />
          );
        }
      });
      return tables;
    }
  };

  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            {!selection.table.id ? "Book a P2P Agent" : "Confirm Reservation"}
            <i
              className={
                !selection.table.id
                  ? "fas fa-door-open pizza-slice"
                  : "fas fa-clipboard-check pizza-slice"
              }
            ></i>
          </p>
          <p className="selected-cust">
            {selection.table.id
              ? "You are booking P2P Partner named " + selection.table.name
              : null}
          </p>

          {reservationError ? (
            <p className="reservation-error">
              * Please fill out all of the details.
            </p>
          ) : null}
        </Col>
      </Row>

      {!selection.table.id ? (
        <div id="reservation-stuff">
          <Row noGutters className="text-center align-items-center">
            <Col xs="12" sm="4">
              <input
                type="date"
                required="required"
                className="booking-dropdown"
                value={selection.date.toISOString().split("T")[0]}
                onChange={e => {
                  if (!isNaN(new Date(new Date(e.target.value)))) {
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table
                      },
                      date: new Date(e.target.value)
                    };
                    setSelection(newSel);
                  } else {
                    console.log("Invalid date");
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table
                      },
                      date: new Date()
                    };
                    setSelection(newSel);
                  }
                }}
              ></input>
            </Col>
            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.times}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getTimes()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.types}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {gettypes()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.state}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getstate()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.city}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getcity()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.language1}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getlanguage1()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.language2}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getlanguage2()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="4">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.language3}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getlanguage3()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            {/*(<Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.size === 0
                    ? "Select a Party Size"
                    : selection.size.toString()}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getSizes()}
                </DropdownMenu>
              </UncontrolledDropdown>
                  </Col>*/}
          </Row>
          <Row noGutters className="custs-display">
            <Col>
              {getEmptyTables() > 0 ? (
                <p className="available-custs">{getEmptyTables()} available</p>
              ) : null}

              {selection.date? (
                getEmptyTables() > 0 ? (
                  <div>
                    <div className="cust-key">
                      <span className="empty-cust"></span> &nbsp; Available
                      &nbsp;&nbsp;
                      <span className="full-cust"></span> &nbsp; Unavailable
                      &nbsp;&nbsp;
                    </div>
                    <Row noGutters>{getTables()}</Row>
                  </div>
                ) : (
                  <p className="cust-display-message">No Available custodians</p>
                )
              ) : (
                <p className="cust-display-message">
                  Please select a date and time for your reservation.
                </p>
              )}
            </Col>
          </Row>
        </div>
      ) : (
        <div id="confirm-reservation-stuff">
          <Row
            noGutters
            className="text-center justify-content-center reservation-details-container"
          >
            <Col xs="12" sm="3" className="reservation-details">
              <Input
                type="text"
                bsSize="lg"
                placeholder="Name"
                className="reservation-input"
                value={booking.name}
                onChange={e => {
                  setBooking({
                    ...booking,
                    name: e.target.value
                  });
                }}
              />
            </Col>
            <Col xs="12" sm="3" className="reservation-details">
              <Input
                type="text"
                bsSize="lg"
                placeholder="Phone Number"
                className="reservation-input"
                value={booking.phone}
                onChange={e => {
                  setBooking({
                    ...booking,
                    phone: e.target.value
                  });
                }}
              />
            </Col>

            <Col xs="12" sm="3" className="reservation-details">
              <Input
                type="text"
                bsSize="lg"
                placeholder="Full Address"
                className="reservation-input"
                value={booking.address}
                onChange={e => {
                  setBooking({
                    ...booking,
                    address: e.target.value
                  });
                }}
              />
            </Col>

            <Col xs="12" sm="3" className="reservation-details">
              <Input
                type="text"
                bsSize="lg"
                placeholder="Email"
                className="reservation-input"
                value={booking.email}
                onChange={e => {
                  setBooking({
                    ...booking,
                    email: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
          <Row noGutters className="text-center">
            <Col>
              <Button
                color="none"
                className="book-cust-btn"
                onClick={_ => {
                  reserve();
                }}
              >
                Book Now
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
