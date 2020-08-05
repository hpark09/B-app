import React from 'react'
const Bstatements = ({bstatements, deleteBstatements}) => {

    const bstatementsList = bstatements.length ? (
        bstatements.map(bstatements =>{
            return(
                <div className="collection item" key={bstatements.id}>
            <span onClick={()=> {deleteBstatements(bstatements.id)}}>
    {bstatements.content}
</span>

                </div>
            )
        })
    ) : (
        <p className="center"> no statements congrats! </p>
    )
    return (
        <div className="bstatements collection">
            {bstatementsList}

        </div>


    )
}
export default Bstatements