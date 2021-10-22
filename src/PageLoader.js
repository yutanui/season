import React from "react";


const PageLoader = (props) => {

    return (<div>
    <div class="ui active inverted dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
    <p></p>
  </div>);
}

//default props
PageLoader.defaultProps = {
    message : 'Loading, Please wait...'
}

export default PageLoader;


