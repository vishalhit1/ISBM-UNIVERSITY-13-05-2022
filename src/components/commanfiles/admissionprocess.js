import React from 'react'

const Admissionprocess = () => {
  return (
    <section className="admission_process" style={{marginTop:"30px"}}>
        <div class="container">
            <h4>Admission Process</h4>
            <p>Please find below the detailed steps to be followed as a part of the admission process.</p>
            <div className="row" style={{marginTop:"50px"}}>
                <div className='col-lg-4'>
                    <div className='parasad'>
                        <h3>Step 1 : Complete Application</h3>
                        <p>Fill the Global MBA application form.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='parasad'>
                         <h3>Step 2 : Get shortlisted and receive the offer letter</h3>
                        <p>The candidates will be evaluated based on their profile, i.e. professional experience and academic scores.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='parasad'>
                        <h3>Step 3 : Block your seat and Complete the Payment</h3>
                        <p>Upon receiving the offer letter, block your seat by paying a caution amount and pay the balance fee.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Admissionprocess