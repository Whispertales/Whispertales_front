
import { pdf, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

const PdfTest = () => {
    const generatePDF = async () => {
        const blob = await pdf(<MyDocument />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'example.pdf';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <h1>React PDF Example</h1>
            <button onClick={generatePDF}>Generate and Download PDF</button>
        </div>
    );
};

export default PdfTest;
