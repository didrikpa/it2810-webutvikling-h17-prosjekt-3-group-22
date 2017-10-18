import { StyleSheet } from 'react-native'


const routes = StyleSheet.create({
    navBar: {
        backgroundColor:'#1b1c1d',
    },
    title: {
        fontWeight:'500',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
        alignSelf:'center',
        color: 'white',
    },
    color: {
        color: 'white'
    }
})

const navFooter = StyleSheet.create({
    footerTab: {
        backgroundColor: '#1b1c1d'
    },
    button: {
        backgroundColor: '#1b1c1d'
    },
})

const modalHead = StyleSheet.create({
    head: {
        backgroundColor:'#1b1c1d'
    }
})

const homeComp = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    group: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15
    },
    message: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
});


export { navFooter, routes, homeComp, modalHead,  }