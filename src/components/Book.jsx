import React, { useState } from 'react'
import './book.css'
import data from '../data'

const Book = () => {

  const [filter, setFilter] = useState('')

  const searchText = (event)=>{
      setFilter(event.target.value)
  }
    //console.log(filter)
    const dataSearch = data.bookInfo.filter((item)=>{
     return Object.keys(item).some(key=>
         item[key].toString().toLowerCase()
         .includes(filter.toString().toLowerCase())
      );
    })
  return (
    <div className="container py-2">
       <div className="row justify-content-center">
         
        <div className="col-md-12 mb-3">
           <div className="col-md-4 mx-auto text-center">
            <h5>Search</h5>
            <input 
            type="text"
            className ="form-control"
            value={filter}
            onChange={searchText.bind(this)}
            />
         
           </div>
        </div>

     {dataSearch.map((item)=>{
        return (
            <div className=" col-lg-2 col-md-3 col-sm-4 mb-3 con" key={item.id}>
            <div className="card p-0 overflow-hidden mx-auto h-100 shadow" >
                <img src={item.img} alt="img" className="image-fluid img pt-1" />
                <div className="card-body">
                 <h6>Type: <span className="text-info">{item.type}</span>  </h6>
                 <h6>Author: <span className="auth">{item.author}</span></h6>
                 <p>Publication: <span className="text-success">{item.publication}</span>  </p>
                 <p>Pages: <i>{item.pages}</i></p>
                </div>
            </div>
        </div>
        )
     })}

       </div>

    </div>
  )
}

export default Book