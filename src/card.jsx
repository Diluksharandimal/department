import React, { useState } from "react";
import "./card.css"
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

function Card(){
    const [cards] = useState ([
        {
        title:'Apllicatns',
        text:`To view you new applicatys details. NAd you can accept new request, delete, and also you can update applicants status` 
        },
    {
        title:'schools',
        text:`To view you new applicatys details. NAd you can accept new request, delete, and also you can update applicants status`
        
    },
    {
        title:'Examination',
        text:`To view you new applicatys details. NAd you can accept new request, delete, and also you can update applicants status`
        
    },
    {
        title:'Licenses',
        text:`To view you new applicatys details. NAd you can accept new request, delete, and also you can update applicants status`
        
    },
])
    return(
        <div>
            <section>
                <div className="containe"  >
                    <h1>Work</h1>
                    <div className="cards">
                        {
                            cards.map((card, i)=>(
                                <div key={i} className="card">
                                  <h3>
                                    {card.title}
                                  </h3>
                                  <p>
                                    {card.text}
                                  </p>
                                  <button className="btn">View Details</button>
                                </div>
                                ))
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card;