import React from 'react';
import { TopBarContainer, TopBarSubtitle, TopBarTitle } from './styles';


const TopBar: React.FC = () => {
    return (
        <TopBarContainer>
            <TopBarTitle>buildbox</TopBarTitle>
            <TopBarSubtitle>WEB CHALLENGE</TopBarSubtitle>
        </TopBarContainer>
    )
}

export default TopBar;