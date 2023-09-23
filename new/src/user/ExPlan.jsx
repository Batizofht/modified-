import React from 'react'
import Allrooms from './more/Allrooms'
import Allroomsolevel from './more/Allroomsolevel'
import DocumentViewer from './Lete'

const ExPlan = () => {
  return (
    <div>
       <div className="teachers">
  <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
      >
        Sitting Plan
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
      >
        Supervise
      </button>
    </li>
    <li className="nav-item" role="presentation">
      {/* <button
        className="nav-link"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact-tab-pane"
        type="button"
        role="tab"
        aria-controls="contact-tab-pane"
        aria-selected="false"
      >
        Where Am I
      </button> */}
    </li>

    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact-tab-pane"
        type="button"
        role="tab"
        aria-controls="contact-tab-pane"
        aria-selected="false"
      >
        Exam news
      </button>
    </li>
  
  </ul>
</div>

       
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

   <Allrooms />
   <Allroomsolevel />

  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <center>
      <h5>
                YOUR CLASSES THAT YOU WILL SUPERVISE WILL BE SHOWN HERE.
      </h5>

    </center>
    <center>
    <DocumentViewer />
    </center>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

    <center>This feature will be seen in new year of 2023-2024</center>
  </div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
  <center>This feature will be seen in new year of 2023-2024</center>
  </div>
</div>
    </div>
  )
}

export default ExPlan