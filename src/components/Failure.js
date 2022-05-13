import { FiAlertTriangle } from 'react-icons/fi';
const Payment_Failure = ()=>{
    return(
<div className="container">
  <div className="row">
    <div className="col-md-6 mx-auto mt-5">
      <div className="payment">
        <div className="payment_header">
          <div className="check">
          <FiAlertTriangle  size={35} style={{color:"red"}} />
          </div>
        </div>
        <div className="content121">
          <h1>Opps !</h1>
          <p>Your transaction failed, please try again or contact site support.</p>
          <a href="http://isbmuniversity.edu.in/">Go to Homepage</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Payment_Failure;