//리스트 아이템 기능/동작
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "../Styles";
import Check from "../assets/Check.png";
import Delete from "../assets/Delete.png";

const Listitem = ({textValue, id, checked, Remove, Toggle}) => {
    return(
        <View style = {Styles.itemView}>
            <TouchableOpacity onPress = {Toggle(id)}>
                {checked ? (
                    <Image style = {Styles.completeCircle} source = {Check}/>
                ) : (<View style = {Styles.circle}/>)}
                
            </TouchableOpacity>
            <Text style = {[Styles.itemText, 
                checked ? Styles.completeText : Styles.uncompleteText,]}>{textValue}</Text>
            <TouchableOpacity style = {Styles.listButton} onPress = {Remove(id)}>
                <Image style = {Styles.delIcon} source = {Delete}/>
            </TouchableOpacity>
        </View>
    )
}

export default Listitem;