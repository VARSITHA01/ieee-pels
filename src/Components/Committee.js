import React from 'react'
import './committee.css'
import members from './committee_members.json'
import MemberCards from './MemberCards'

function Committee() {
  return (
    <div className='committee'>
      <center><div className="committeetitle">Committee Members</div></center>
      <div className="committeemembers">
      <div className="container membersx">
        <div className="row ">
            {
            members
            && members.map(members => <div className="col-sm-4 colx" ><MemberCards image={members.member_img_link} name={members.member_name} position={members.member_position} /></div>)
            }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Committee