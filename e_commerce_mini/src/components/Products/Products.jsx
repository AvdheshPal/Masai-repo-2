import '../Products/Products.module.css'
import React, { useState, useEffect } from 'react'

export const Products = () => {
    const [data, setData] = useState()

    async function getData() {
        try {

            let req = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)

            let res = await req.json()

            if (res.data) {
                setData(res.data)
                console.log(res.data);
            }

        } catch (err) {
            alert(err.message);
        }
    }
    useEffect(() => {
        getData()
    }, [])


    return (<>
        <div>
            <h1>Products Page</h1>
            <div  >
                {(data) ? <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(4,23%)','gap':'1%', 'border': '1px solid' }}>{data.map((e, i) => <div style={{ 'border':'1px solid'}}>
                    <div>{e.brand}</div>
                    <div>{e.title}</div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg" alt="image" style={{'width':'200px','height':'200px','border':'1px solid black'}} />
                    <div>{e.category}</div>
                    <strong>{e.price}</strong>
                </div>)}</div> : <h1>Loading...</h1>}
            </div>
        </div>
    </>)
}
