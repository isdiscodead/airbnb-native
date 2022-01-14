import React from "react";
import styled from "styled-components/native";

// 기기의 크기를 알 수 X -> Dimensions
import { TouchableOpacity, Dimensions } from "react-native";
import PropTypes from "prop-types"
import colors from "../../colors";


const { width } = Dimensions.get("screen");

const Button = styled.View`
    border: 1px solid ${props => (props.accent ? "transparent" : colors.black)}
    padding: 15px 5px;
    align-items: center;
    border-radius: 10px;
    width: $(width / 2)px;
    background-color: ${props => (props.accent ? colors.red : "transparent")}
`;

const Text = styled.Text`
    color: ${props => (props.accent ? "white" : colors.black)}
`;

const Btn = ({ onPress, text, accent = false }) => (
    <TouchableOpacity onPress={onPress} >
        <Button accent={accent}>
            <Text accent={accent}>{text}</Text>
        </Button>
    </TouchableOpacity>
);

Btn.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    accent: PropTypes.bool
};

export default Btn;
