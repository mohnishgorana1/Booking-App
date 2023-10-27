import { useLocation } from "react-router-dom"
import { Header, Navbar, SearchItem } from "../../components"
import './List.css'
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"

function List() {

  const location = useLocation()  // grab info from header of home page of search functionality
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          {/* LIST SEARCH BOX   */}
          <div className="listSearch">

            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination || ""}/>
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {
                  `
                    ${format(date[0].startDate, "dd/MM/yyyy")} 
                    to 
                    ${format(date[0].endDate, 'dd/MM/yyyy')}
                  `
                }
              </span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection] )}
                minDate={new Date()}
                ranges={date}
              />}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
            </div>

            <button>Search</button>
          </div>

          
          {/* SEARCH RESULT */}
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />

          </div>
        </div>
      </div>

    </div>
  )
}

export default List