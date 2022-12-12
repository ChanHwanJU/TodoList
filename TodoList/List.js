//리스트 출력
import { ScrollView, Text } from "react-native";
import Styles from "../Styles";
import Listitem from "./Listitem";

const List = ({plans, Remove, Toggle}) => {
    return (
        <ScrollView contentContainerStyle = {Styles.listView}>
            {plans.map(plan => (
                <Listitem key = {plan.id} {...plan} Remove = {Remove} Toggle = {Toggle}/>
            ))}
        </ScrollView>
    )
}

export default List;