import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    indicator: {
        fontSize: 30,
        color: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : '80%'
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 15,
        resizeMode : 'cover'
    },
    infoContainer: {
        // flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    producer: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    cost: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 4,
        width: 100,
        marginTop: 10
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
    },
});
 
