import HomeIcon from '../assets/img/projectcard/home-icon.svg';
import '../assets/style/projectcard.css'

function ProjectCard({ title, type, desc, price, repayment, img }) {
    return (
      <div className="projectcard shadow">
        {/* Image */}
        <div className="row">
          <div className="col-12">
            <img className="img-fluid" src={img} />
          </div>
        </div>
        {/* Title */}
        <div className="row mt-3">
          <div className="col-12 px-2 ">
            <p className="projectcard-title mb-0">{title}</p>
          </div>
        </div>
        {/* Type */}
        <div className="row p-2 border-bottom projectcard-type">
          <div className="col-12">
            <span><HomeIcon className="card-icon" /></span>
            <span className="p-2">{type}</span>
          </div>
        </div>
        {/* Description */}
        <div className="row p-2 projectcard-desc border-bottom">
          <div className="col-12">
            <p className="mb-0">{desc}</p>
          </div>
        </div>
        <div className="row border-bottom">
          {/* Price */}
          <div className="col-md-6 col-sm-6 border-end p-2 w-50">
            <p className="mb-0 amount-title" >Price from</p>
            <p className="mb-0 amount">{price}</p>
          </div>
          {/* Replacement */}
          <div className="col-md-6 col-sm-6 p-2 w-50">
            <p className="mb-0 amount-title">Monthly Repayment from</p>
            <p className="mb-0 amount">{repayment}</p>
          </div>
        </div>
        <div className="row mb-3 projectcard-split project-card-btn">
          <div className="col-md-6 col-sm-6 px-1 py-1 text-center">
            {/* Feature Button */}
            <button className="btn w-100 secondary-btn"
              onClick={() => document.getElementById('feature').scrollIntoView()}>
              <span>
                <HomeIcon className="btn-icon card-icon w-15 h-15"/>
              </span>
              &nbsp; Features
            </button>
          </div>
          <div className="col-md-6 col-sm-6 px-1 py-1 text-center">
            {/* Register Button */}
            <button className="btn w-100 primary-btn"
            onClick={() => document.getElementById('register').scrollIntoView()}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;