import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from './theme/useTheme';
import { getFromLocalStorage } from './utils/storage';
import Dialog from './theme/Dialog';
import CreateThemeContent from './theme/CreateThemeContent'
import PropTypes from 'prop-types';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
`;

const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

const ThemeSelector = (props) => {
    const themesFromStore = getFromLocalStorage('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [newTheme, setNewTheme] = useState();
    const { setMode } = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setSelectedTheme(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        newTheme &&
            updateThemeCard(newTheme);
    }, [newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = { ...data, [key]: theme[key] };
        setData(updated);
    }

    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    const createTheme = newTheme => {
        console.log(newTheme);
        setShowDialog(false);
        setNewTheme(newTheme);
    }

    const ThemeCard = props => {
        return (
            <Wrapper style={{
                backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
                color: `${data[_.camelCase(props.theme.name)].colors.text}`,
                fontFamily: `${data[_.camelCase(props.theme.name)].font}`
            }}>
                <span>Click on the button to set this theme</span>
                <ThemedButton onClick={() => themeSwitcher(props.theme)}
                    style={{
                        backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`,
                        color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                        fontFamily: `${data[_.camelCase(props.theme.name)].font}`
                    }}>
                    {props.theme.name}
                </ThemedButton>
            </Wrapper>
        )
    }

    ThemeCard.propTypes = {
        theme: PropTypes.object.isRequired
    }

    return (
        <div>
            <button className="btn" onClick={manageDialog}>Create a Theme</button>
            <Dialog
                header="Create a Theme"
                body={<CreateThemeContent create={createTheme} />}
                open={showDialog}
                callback={manageDialog} />
            <Header>Select a Theme from below</Header>
            <Container>
                {
                    themes.length > 0 &&
                    themes.map(theme => (
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
                }
            </Container>
        </div>
    )
}

ThemeSelector.propTypes = {
    setSelectedTheme: PropTypes.func.isRequired
}

export default ThemeSelector;