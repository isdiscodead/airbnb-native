import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types"

const Button = styled.View``;

const Text = styled.Text``;

const Btn = ({ onPress, text, accent = false }) =>
<TouchableOpacity onPress={onPress} >
    <Button accent={accent}>
        <Text accent={accent} text={text}></Text>
    </Button>
</TouchableOpacity>

Btn.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    accent: PropTypes.bool
}

export default Btn;
