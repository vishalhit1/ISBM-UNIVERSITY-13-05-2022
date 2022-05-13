import React from 'react'

const Learnersupport = () => {
  return (
    <section className="UpgradSupport page-section" style={{marginTop:"20px",marginBottom:"40px"}}>
        <div class="container">
            <h5>For queries, feedback & assistance</h5>
            <h1>ISBMU Learner Support</h1>
            <h4>(We are available 24*7)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <h3>For Indian Nationals</h3>
                    <button><a href="tel:+91 9373199999" style={{color:'white'}}><i class="fa fa-phone" aria-hidden="true"></i> +91 9373199999</a></button>
                </div>
                <div className="col-lg-6">
                    <h3>Email Us At</h3>
                    <button><a href="mailto:info@isbmuniversity.edu.in" style={{color:'white'}}><i class="fa fa-envelope" aria-hidden="true"></i> info@isbmuniversity.edu.in</a></button>
                </div>                
            </div>
        </div>
    </section>    

  )
}

export default Learnersupport