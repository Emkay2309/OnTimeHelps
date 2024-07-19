import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        flex:1

    },
    cartDetailContainer: {
        backgroundColor: 'lightgrey',
        padding: 20,
        borderRadius: 30,
        // position: 'absolute',
        // bottom: 20,
        // left: 0,
        // right: 0,
        // zIndex: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 2
    },
    titleText: {
        fontSize: 40,
        color: 'black'
    },
    cartList: {

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
        marginTop: '80%'
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 15,
        resizeMode: 'cover'
    },
    infoContainer: {
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
    btnsCon: {
        display: 'flex',
        flexDirection: 'row'
    },
    quantity: {
        fontSize: 30,
        marginTop: 6,
        marginRight: 30,
        marginLeft: 30
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 4,
        width: 50,
        marginTop: 10,
    },
    removeItem: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 180,
        marginTop: 10,
    },
    btnText: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20,
        
    },
})