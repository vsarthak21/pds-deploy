import React from 'react';

const ApprovalCard = (props)=>{
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>    
        </div>
    );

};

export default ApprovalCard;