import { StyleSheet } from 'react-native'


/**
 * Used on siple flex views.
 */
const views = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    buttonView: {
        position:'absolute',
        bottom:0,
        width:'100%'
    }
})

/**
 * Simple button styles.
 */
const button = StyleSheet.create({
    closeColor: {
        backgroundColor: '#767676'
    },
    successColor: {
        backgroundColor: '#21ba45'
    }
})


/**
 * Routes.js styling.
 */
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
        color: '#fff',
    },
    color: {
        color: '#fff'
    }
})

/**
 * NavFooter.js
 */
const navFooter = StyleSheet.create({
    footerTab: {
        backgroundColor: '#1b1c1d'
    },
    button: {
        backgroundColor: '#1b1c1d'
    },
})

/**
 * DefaultHeader.js
 */
const modalHead = StyleSheet.create({
    head: {
        backgroundColor:'#1b1c1d'
    }
})

/**
 * HomeComponent.js
 */
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

/**
 * Note.js
 */
const noteStyle = StyleSheet.create({
    titleStyle: {
        fontSize:21,
    },
    dateStyle: {
        color:'#999999'
    },
    closeButton: {
        backgroundColor:"#db2828",
        paddingRight:4
    },
    createButton: {
        backgroundColor:'#767676',
        marginLeft:-1,
    }
})

/**
 * NoteContainer.js
 */
const noteCont = StyleSheet.create({
    outerView: {
        flex:1,
        backgroundColor:"white"
    },
    endText: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        color:'#999999',
        marginBottom:25,
        marginTop:30,

    }
})

/**
 * ViewNoteModal.js
 */
const noteVwMod = StyleSheet.create({
    contentStyle: {
        fontSize:18,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:50,
    },
    dateStyle: {
        fontSize:12,
        color:'#999999',
        paddingRight:25,
        paddingTop:10,
        paddingBottom:10,
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:24,
        paddingLeft:25,
        paddingBottom:10,
        paddingTop:10,

    },
    borderStyle:{
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
    }
})

/**
 * NewNoteModal.js
 */
const noteNewMod = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "#f5fcff"
    },
    addButtonView: {
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    noteContent: {
        height: 200,
        textAlignVertical: 'top',
    },
    addButton: {
        backgroundColor: "#21ba45"
    },
    addText: {
        fontSize: 20
    }
})

/**
 * EditNoteModal.js
 */
const noteEditMod = StyleSheet.create({
    inputCont: {
        height: 200,
        textAlignVertical: 'top'
    },
    view: {
        flex: 1,
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "#f5fcff"
    }
})




export { views, button,
         navFooter, routes, homeComp, modalHead,
         noteStyle, noteCont, noteVwMod, noteNewMod, noteEditMod}