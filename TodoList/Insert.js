// 할일 추가하기
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import Styles from "../Styles";
import { useState } from "react";

const Insert = ({onAddList}) => {
    const [ListItem, setListItem] = useState('');

    const changeText = (event) => { 
        setListItem(event)
    }

    const _addList = () => {
        onAddList(ListItem)
        setListItem('')
    }

    return(
        <View style = {Styles.insertView}>
            <TextInput
              style = {Styles.input}
              placeholder = "Add List!"
              placeholderTextColor={'#c0c0c0'}
              onChangeText = {changeText}
              value = {ListItem}
              autoCorrect = {false}
            />
            <TouchableOpacity style = {Styles.buttonView} onPress = {_addList}>
                <Text>ADD</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default Insert;