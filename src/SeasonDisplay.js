import React from "react";
import './SeasonDisplay.css';

// Config Objects
const seasonConfig = {
    summer : {
        text : 'Let\'s hit the beach',
        iconName : 'sun'
    },

    winter : {
        text : 'Burr, it is chilly',
        iconName : 'snowflake'
    }
}


const getSeason = (lat, month) => {

    if ( month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else
    {
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const currentSeason = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${currentSeason.iconName} icon`} />
           <h1>{currentSeason.text}</h1>
           <i className={`icon-right massive ${currentSeason.iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;