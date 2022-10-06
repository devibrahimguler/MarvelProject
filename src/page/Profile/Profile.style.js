import { StyleSheet } from "react-native";

import margins from "../../styles/margins";
import borderradiuses from "../../styles/borderradiuses";
import borderwidths from "../../styles/borderwidths";
import paddings from "../../styles/paddings";
import colors from "../../styles/colors";

const base_style= StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: borderradiuses.image,
        margin: margins.image,
        borderWidth: borderwidths.image,
        alignSelf: "center",
    },
    username: {
        fontSize: 20,
        textTransform: "capitalize",
        textAlign: "left",
        marginHorizontal: margins.text,
        marginVertical:5,
        textAlign: "center",
    },
    body_sparator: {
        flex: 1,
        padding: paddings.button
    },
});

export default StyleSheet.create({
    ...base_style,
    inner_container: {
        height: 250,
        justifyContent: "center"
    },
    body_container: {
        marginTop: 20,
        marginStart: 10,
        justifyContent: "center",
    },
    edit_container: {
        paddingTop:80,
        borderBottomWidth : 1,
        paddingBottom: 10,
    },
    back_image: {
        ...base_style.image,
        height: 150,
        position: "absolute",
        width: "90%",
    },
    title: {
        ...base_style.username,
        fontSize: 18,
        marginStart: 10,
        color: colors.text
    },
    sub_title: {
        ...base_style.username,
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 14,
        marginStart: 10,
    },
    sub_name: {
        ...base_style.username,
        textAlign: "left",
        fontSize: 18,
        marginStart: 50,
    },
    url: {
        textAlign: "left",
        fontSize: 15,
        marginStart: 10,
        marginTop: 10,
        color: "blue"
    },

});