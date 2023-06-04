import React from 'react'

export const Card = () => {
    return (
      <div>
      <div className="card m-3" style={{"width":"18rem"}} >
                <img src="https://media.istockphoto.com/id/178600487/photo/paneer-tikka-kebab.jpg?s=2048x2048&w=is&k=20&c=7y1JvS5-2NI3pifb_mVKN2gbXcSXLU7gdf60Qh0qvtY=" className="card-img-top" alt="..."style={{"width":"auto","height":"150px"}}/>
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <div className='container w-100'>
                        <select className='m-2 bg-danger'>
                            {
                                Array.from(Array(10), (e,i) => {
                                    return(<option key={i+1} value={i+1}>{i+1}</option>)
                                })
                            }
                        </select>
                        <select className='m-2 bg-danger'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>Total Price</div>
                    </div>
              </div>
            </div>
        </div>
  )
}
