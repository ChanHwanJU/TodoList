import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View, ScrollView } from "react-native";
import Styles from "./Styles";
import Insert from "./component/Insert";
import List from "./component/List";

export default function App() {
    const [plans, setPlans] = useState([]);

    const addList = text => {
        setPlans([...plans, {id: Math.random().toString(), textValue: text, checked: false},  //리스트 추가 함수
        ]);
    }

    const Remove = id => e => {              
        setPlans(plans.filter(plan => plan.id !== id))  //리스트 삭제 함수
    }

    const Toggle = id => e => {     //아이템의 id를 받아와서 해당 하는 checked의 값을 반대로 역전시킴
        setPlans(
            plans.map(plan =>
                plan.id === id ? {...plan, checked: !plan.checked} : plan,
            ),
        )
    }


    return(
        <SafeAreaView style = {Styles.mainView}>
            <Text style = {Styles.apptitle}>To Do List</Text>
            <View style = {Styles.listbackground}>
                <Insert onAddList = {addList}/>
                <List plans = {plans} Remove = {Remove} Toggle = {Toggle}/>
            </View>
        </SafeAreaView>
    )
}