import React from "react";
import {Document, Page, Text, Canvas, StyleSheet} from "@react-pdf/renderer";
import {waiverText, signText} from "../../static/waiver-text";

const styles = StyleSheet.create({
    text: {
        margin: "2% 10% 2% 10%",
        fontSize: 12,
        textAlign: "justify"
    },
    title: {
        margin: "2% 10% 0 10%",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    },
    subtitle: {
        margin: "2% 10% 0 10%",
        fontSize: 14,
        textAlign: "center"
    },
    body: {
        paddingTop: 35,
        paddingBottom: 50
    },
    canvas: {
        width:"500px", 
        height:"200px", 
        border:"2px solid red",
        textAlign: "center"
    }
});
const text = (Object.keys(waiverText).map( (value, key) => {
    return (
        <Text value={value} key={key} style={styles.text}>{`${waiverText[value]}`} </Text>
    )
}));

const WaiverPDF = () => {
    return(
        <Document>                            
            <Page size="A4" style={styles.body}>
                <Text style={styles.title}>Lotus Climbing Gyms</Text>
                <Text style={styles.title}>Visitor Agreement</Text>
                <Text style={styles.subtitle}>(Including assumption of risks and agreements of release and indemnity)</Text>
                <Text style={styles.subtitle}>PLEASE READ CAREFULLY BEFORE SIGNING</Text>
                <Text style={styles.subtitle}>THIS DOCUMENT MUST BE SIGNED BY AN ADULT OF AT LEAST 18 YEARS OF AGE</Text>
                {text}
            </Page>
            <Page size="A4" style={styles.body}>
                <Text style={styles.text}>
                    {signText["s1"]}
                </Text>
                <Text style={styles.title}>
                    {signText["s2"]}
                </Text>
                <Text style={styles.text}>
                    {signText["s3"]}
                </Text>
                <Canvas style={styles.canvas}/>
            </Page>
        </Document>
    );
}


export default WaiverPDF;