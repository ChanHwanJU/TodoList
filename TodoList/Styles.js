//어플리케이션 스타일링
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mainView : {      // 어플리케이션 배경화면 스타일
        flex: 1,
        backgroundColor: '#3143e8',
    },

    apptitle : {          // 어플리케이션 상단 제목 스타일
        color : '#ffffff',
        fontSize : 36,
        marginTop : 30,
        marginBottom : 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    
    listbackground : {      //리스트 배경화면 스타일
        backgroundColor: '#ffffff',
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20,
    },

    input : {        // 일정 추가란 스타일
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },

    insertView : {    //일정 추가란 배치 스타일 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonView : {          // 일정 추가 버튼 스타일
        marginLeft: 10,
    },

    listView : {     // 리스트 배치 스타일
        alignItems: 'center',
    },

    itemView : {   // 리스트 아이템 배치 스타일
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemText : {           //일정 리스트 글자 스타일
        flex: 5,
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 20,
        width: 100,
    },

    circle: {            //완료 하지 못한 일정 원모양 아이콘
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },

    completeCircle : {  //완료한 체크표시 스타일
        width: 30,
        height: 30,
        marginRight: 20,
        marginLeft: 20,
    },

    completeText : {   //완료한 일정 글자 스타일
        color: '#bbb',
        textDecorationLine: 'line-through',
    },

    uncompleteText : {   //완료하지 못한 일정 글자 스타일
        color: '#29323c',
    },

    delIcon : {   //삭제 아이콘 스타일
        width: 30,
        height: 30,
    },

    listButton : { //리스트 버튼 배치 스타일
        marginVertical: 10,
        marginHorizontal: 10,
    },


});

export default Styles;